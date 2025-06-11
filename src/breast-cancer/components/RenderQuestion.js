import React, { useState, useEffect, memo, useCallback, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";
import * as IntentLauncher from "expo-intent-launcher";
import * as FileSystem from "expo-file-system";

import { Color, FontFamily } from "../../utils/GlobalStyles";
import { Tooltip } from "@rneui/themed";
import { CheckBox } from "@rneui/themed";

import apiService from "../../services/api";

const RenderQuestion = memo(({
  tooltipText = "",
  question = "",
  options,
  onSelect = () => { },
  questionNumber = "",
  optionType = "",
  disableUnselected = false, // New prop
  defaultSelected = null,
  placeholder = "Type your answer here",
  keyboardType = "default",
  multiline = true,
  minHeight,
  maxLength,
  numOfLine,
  language = "en",
}) => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultSelected);
  const [textInputValue, setTextInputValue] = useState(defaultSelected || "");
  const [fileUri, setFileUri] = useState(null);
  const [s3FileUrl, setS3FileUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(defaultSelected || "DD/MM/YYYY");

  useEffect(() => {
    if (optionType === "date" && defaultSelected) {
      const parsedDate = unformatDate(defaultSelected);
      if (parsedDate) {
        setSelectedDate(defaultSelected); // Keep string format for display
      }
    }
  }, [defaultSelected, optionType]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  if (optionType === "input") {
    useEffect(() => {
      setTextInputValue(defaultSelected || ""); // Sync with defaultSelected when it changes
    }, [defaultSelected]);
  }

  useEffect(() => {
    if (optionType === "file" && defaultSelected) {
      // Check if the default value is an S3 URL
      if (typeof defaultSelected === 'string' &&
        (defaultSelected.startsWith('http://') || defaultSelected.startsWith('https://'))) {
        setS3FileUrl(defaultSelected);
        setFileUri(null); // Clear local URI if we have an S3 URL
      } else {
        setFileUri(defaultSelected);
        setS3FileUrl(null);
      }
    }
  }, [defaultSelected, optionType]);

  // For Files
  const requestPermissions = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission Denied", "Camera access is required.");
      return false;
    }
    return true;
  };

  // Frontend code example
  const getUploadUrl = async (fileName, fileType, folderName) => {
    try {
      const response = await apiService.uploadFile.getUploadPreSignedURL(fileName, fileType, folderName);
      if (response.status === 200) {
        const data = response.data.data;
        return data.uploadUrl;
      }
    }
    catch (error) {
      console.error("Error getting upload URL:", error);
    }
    return null;
  };

  const deletePreviousFile = async ({ key, folderName }) => {
    try {
      console.log("Deleting previous file:", key, folderName);
      const response = await apiService.uploadFile.deleteFile({ key, folderName });
      if (!response.data.success) {
        console.error("Failed to delete previous file:", response.data.message);
        throw new Error("Failed to delete previous file");
      }
      return response;
    } catch (error) {
      console.error("Error deleting previous file:", error);
    }
    return null; // Updated to return null in case of error
  };

  // Helper function to upload a file to S3
  const uploadToS3 = async (fileUri, fileName, mimeType, folderName = 'reports') => {
    try {
      setUploading(true);
      console.log(mimeType, fileName, fileUri, folderName);

      // Generate a unique file name
      const uniqueFileName = `${Date.now()}_${fileName}`;

      // Get the pre-signed URL
      const uploadUrl = await getUploadUrl(uniqueFileName, mimeType, folderName);
      if (!uploadUrl) {
        throw new Error("Failed to get upload URL");
      }

      // Create a fetch request to upload the file directly to S3
      // Using the fetch API directly with the file URI

      // Use expo-file-system to read the file and upload it directly
      const response = await FileSystem.uploadAsync(uploadUrl, fileUri, {
        httpMethod: 'PUT',
        headers: {
          'Content-Type': mimeType,
        },
        uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
      });

      if (response.status !== 200) {
        console.error("Upload failed with status:", response.status);
        throw new Error("Failed to upload file");
      }

      // Extract the S3 URL from the response
      const s3Url = uploadUrl.split('?')[0]; // Remove query params to get the base URL

      // Delete previous file if needed
      if (s3FileUrl) {
        const key = s3FileUrl.split('/').pop(); // Extract file name from URL
        await deletePreviousFile({ key: `${folderName}/${key}`, folderName });
      }

      return s3Url;
    } catch (error) {
      console.error("Error in uploadToS3:", error);
      Alert.alert("Upload Failed", "Could not upload file to server.");
      return null;
    } finally {
      setUploading(false);
    }
  };

  //for gallery
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        allowsMultipleSelection: false,
      });

      if (!result.canceled && result.assets?.length) {
        const image = result.assets[0];
        setFileUri(image.uri); // Store local URI temporarily for preview

        // Get file info
        const fileInfo = await FileSystem.getInfoAsync(image.uri);
        if (!fileInfo.exists) {
          Alert.alert("Error", "File does not exist");
          return;
        }

        // Extract file name and type
        const fileName = image.uri.split('/').pop();
        const mimeType = 'image/jpeg';

        // Upload to S3
        const s3Url = await uploadToS3(image.uri, fileName, mimeType, 'images');
        if (s3Url) {
          setS3FileUrl(s3Url);
          onSelect(s3Url); // Pass S3 URL to parent component
        }
      }
    } catch (error) {
      console.error("Error picking image:", error);
      Alert.alert("Error", "Failed to select image");
    }
  };

  // For Camera
  const captureImage = async () => {
    if (!(await requestPermissions())) return;

    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        quality: 1,
      });

      if (!result.canceled && result.assets?.length) {
        const image = result.assets[0];
        setFileUri(image.uri); // Store local URI temporarily for preview

        // Extract file name and type
        const fileName = image.uri.split('/').pop();
        const mimeType = image.type || 'image/jpeg';

        // Upload to S3
        const s3Url = await uploadToS3(image.uri, fileName, mimeType, 'camera');
        if (s3Url) {
          setS3FileUrl(s3Url);
          onSelect(s3Url); // Pass S3 URL to parent component
        }
      }
    } catch (error) {
      console.error("Error capturing image:", error);
      Alert.alert("Error", "Failed to capture image");
    }
  };

  //for document
  const uploadPDF = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          "application/pdf", // PDF
          "application/msword", // DOC
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX
          "text/plain", // TXT
          "image/jpeg", // JPG
          "image/png", // PNG
          "image/webp", // WEBP
        ],
      });

      if (!result.canceled && result.assets?.length) {
        const document = result.assets[0];
        setFileUri(document.uri); // Store local URI temporarily for preview

        // Extract file name and type
        const fileName = document.name || document.uri.split('/').pop();
        const mimeType = document.mimeType || getMimeType(document.uri);

        // Upload to S3
        const s3Url = await uploadToS3(document.uri, fileName, mimeType, 'documents');
        if (s3Url) {
          setS3FileUrl(s3Url);
          onSelect(s3Url); // Pass S3 URL to parent component
        }
      }
    } catch (error) {
      console.error("Error selecting document:", error);
      Alert.alert("Error", "Failed to select document");
    }
  };

  // For opening pdf
  const getMimeType = (uri) => {
    const extension = uri.split(".").pop().toLowerCase();
    const mimeTypes = {
      pdf: "application/pdf",
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ppt: "application/vnd.ms-powerpoint",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      txt: "text/plain",
      csv: "text/csv",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      mp4: "video/mp4",
      mp3: "audio/mpeg",
      zip: "application/zip",
    };

    return mimeTypes[extension] || "*/*"; // Default to '*/*' for unknown file types
  };

  const openDocument = async (uri) => {
    try {
      // If it's an S3 URL, try to open it directly
      if (uri.startsWith('http://') || uri.startsWith('https://')) {
        await Linking.openURL(uri);
        return;
      }

      const mimeType = getMimeType(uri);

      if (Platform.OS === "android") {
        // Convert file:// URI to content:// URI
        const contentUri = await FileSystem.getContentUriAsync(uri);

        // Launch the default viewer for the file type
        await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
          data: contentUri,
          type: mimeType,
          flags: 1, // FLAG_GRANT_READ_URI_PERMISSION
        });
      } else if (Platform.OS === "ios") {
        // Open document on iOS
        await Linking.openURL(uri);
      } else {
        console.log("Unsupported platform");
      }
    } catch (error) {
      console.error("Error opening document:", error);
      Alert.alert("Error", "Could not open the document");
    }
  };

  useEffect(() => {
    if (defaultSelected !== undefined && defaultSelected !== null) {
      setSelectedOption(defaultSelected);
    } else {
      // Initialize based on option type
      setSelectedOption(optionType === "checkbox" ? [] : null);
    }
  }, [defaultSelected, optionType]);

  // Ensure these functions handle edge cases properly
  const formatDate = (date) => {
    if (!date) return "DD/MM/YYYY";
    try {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } catch (e) {
      console.warn("Error formatting date:", e);
      return "DD/MM/YYYY";
    }
  };

  const unformatDate = (dateString) => {
    if (!dateString || dateString === "DD/MM/YYYY" || typeof dateString !== "string") return new Date();
    try {
      const parts = dateString.split("/");
      if (parts.length !== 3) return new Date();

      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);

      if (isNaN(day) || isNaN(month) || isNaN(year)) return new Date();

      const date = new Date(year, month, day);
      return date;
    } catch (e) {
      console.warn("Error parsing date:", e);
      return new Date();
    }
  };

  const handlePress = (option) => {
    if (optionType === "checkbox") {
      const currentSelected = Array.isArray(selectedOption)
        ? [...selectedOption]
        : [];
      const index = currentSelected.indexOf(option.value);
      if (index === -1) {
        currentSelected.push(option.value);
      } else {
        currentSelected.splice(index, 1);
      }
      setSelectedOption(currentSelected);
      onSelect(currentSelected);
    } else if (optionType == "date") {
      onSelect(selectedDate);
    } else if (optionType == "file") {
    } else {
      if (disableUnselected && selectedOption === option.value) return;
      const newValue = option.value;
      setSelectedOption(newValue);
      onSelect(newValue);
    }
  };

  const translateWord = (word, language) => {
    const translations = {
      "Uploaded file": {
        en: "Uploaded file",
        bn: "আপলোড কৰা ফাইল",
        hi: "अपलोड किया गया फाइल",
        as: "আপলোড কৰা ফাইল",
      },
      View: {
        en: "View",
        bn: "দেখুন",
        hi: "देखें",
        as: "দেখুন",
      }
    };

    return translations[word]?.[language] || word;
  };

  // Use useCallback for event handlers
  const handleRadioSelect = useCallback((value) => {
    setSelectedOption(value);
    onSelect(value);
  }, [onSelect]);

  const handleInputChange = useCallback((text) => {
    setTextInputValue(text);
    onSelect(text);
  }, [onSelect]);

  // Use useMemo for expensive calculations or JSX rendering
  const renderRadioOptions = useMemo(() => {
    return options?.map((option, index) => (
      <CheckBox
        key={index}
        iconType="font-awesome"
        checked={selectedOption === option.value}
        onPress={() => handleRadioSelect(option.value)}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor={Color.bcHeader}
        title={option.label}
        titleProps={{
          style: styles.checkboxTitle,
          numberOfLines: 2,
        }}
        disabledTitleStyle={styles.disabledCheckboxTitle}
        disabled={
          disableUnselected &&
          selectedOption &&
          selectedOption !== option.value
        }
        containerStyle={styles.checkboxContainer}
        wrapperStyle={styles.checkboxWrapper}
      />
    ));
  }, [options, selectedOption, handleRadioSelect]);

  return (
    <View style={styles.container}>
      {optionType === "radio" ? (
        <View style={styles.cardContainer}>
          <View style={styles.questionContainer}>
            <Text style={[styles.questionNumber]}>
              {questionNumber != "" ? questionNumber + ". " : ""}
            </Text>
            <View style={styles.questionTextContainer}>
              <Text style={[styles.question]}>{question}</Text>
            </View>
          </View>
          <View style={styles.optionsContainerRadio}>
            {renderRadioOptions}
          </View>
        </View>
      ) : optionType === "checkbox" ? (
        <View style={styles.cardContainer}>
          <View style={styles.questionContainer}>
            <Text style={[styles.questionNumber]}>
              {questionNumber != "" ? questionNumber + ". " : ""}
            </Text>
            <View style={styles.questionTextContainer}>
              <Text style={styles.question}>
                {question + "  "}
                {tooltipText !== "" && (
                  <Tooltip
                    width={300}
                    height={120}
                    backgroundColor={Color.bcHeader}
                    pointerColor={Color.bcHeader}
                    withOverlay={true}
                    withPointer={true}
                    popoverStyle={{ padding: 8 }}
                    containerStyle={styles.tooltipContainer}
                    popover={
                      <Text style={styles.tooltipText}>{tooltipText}</Text>
                    }
                  >
                    <Image
                      source={{
                        uri: "https://img.icons8.com/?size=100&id=6648&format=png&color=FFA6BB",
                      }}
                      style={styles.tooltipIcon}
                    />
                  </Tooltip>
                )}
              </Text>
            </View>
          </View>

          <View style={styles.optionsContainer}>
            {options.map((option) => (
              <Pressable key={option.id} onPress={() => handlePress(option)}>
                <CheckBox
                  checked={
                    selectedOption && selectedOption.includes(option.value)
                  }
                  onPress={() => handlePress(option)}
                  checkedColor="#ffa6bb"
                  title={option.label}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  containerStyle={styles.checkboxContainerSet2}
                  textStyle={styles.checkBoxText}
                />
              </Pressable>
            ))}
          </View>
        </View>
      ) : optionType === "custom" ? (
        <View style={styles.cardContainer}>
          <View style={styles.questionContainer}>
            {questionNumber != "" && (
              <Text style={[styles.questionNumber]}>
                {questionNumber != "" ? questionNumber + ". " : ""}
              </Text>
            )}
            <View style={styles.questionTextContainer}>
              <Text style={styles.question}>
                {question + "  "}
                {tooltipText != "" && (
                  <Tooltip
                    visible={open}
                    width={300}
                    height={100}
                    backgroundColor={Color.bcHeader}
                    containerStyle={styles.tooltipContainer}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    popover={
                      <Text style={styles.tooltipText}>{tooltipText}</Text>
                    }
                  >
                    <Image
                      source={{
                        uri: "https://img.icons8.com/?size=100&id=6648&format=png&color=FFA6BB",
                      }}
                      style={styles.tooltipIcon}
                    />
                  </Tooltip>
                )}
              </Text>
            </View>
          </View>
          <View style={styles.optionsContainer}>
            {options.map((option) => (
              <Pressable
                key={option.id}
                onPress={() => handlePress(option)}
                style={[
                  styles.optionButton,
                  selectedOption === option.value && styles.selectedOption,
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedOption === option.value && styles.selectedLabel,
                  ]}
                >
                  {option.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      ) : optionType === "input" ? (
        <View style={styles.inputContainer}>
          {question != "" && (
            <View style={styles.questionContainer}>
              {questionNumber != "" && (
                <Text style={[styles.questionNumber]}>
                  {questionNumber != "" ? questionNumber + ". " : ""}
                </Text>
              )}
              <Text style={styles.question}>
                {question + "  "}
                {tooltipText != "" && (
                  <Tooltip
                    visible={open}
                    width={"80%"}
                    height={100}
                    backgroundColor={Color.bcHeader}
                    containerStyle={styles.tooltipContainer}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    popover={
                      <Text style={styles.tooltipText}>{tooltipText}</Text>
                    }
                  >
                    <Image
                      source={{
                        uri: "https://img.icons8.com/?size=100&id=6648&format=png&color=FFA6BB",
                      }}
                      style={styles.tooltipIcon}
                    />
                  </Tooltip>
                )}
              </Text>
            </View>
          )}

          <TextInput
            style={[styles.input, minHeight ? { minHeight: minHeight } : {}]}
            onChangeText={handleInputChange}
            value={textInputValue}
            placeholder={placeholder}
            placeholderTextColor="#999"
            keyboardType={keyboardType}
            textAlignVertical="top"
            numberOfLines={numOfLine ? numOfLine : multiline ? 4 : 1}
            maxLength={maxLength ? maxLength : undefined}
            multiline={multiline}
            editable={true}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            selectionColor={Color.bcHeader}
          />
        </View>
      ) : optionType === "date" ? (
        <View style={styles.inputContainer}>
          {question !== "" && (
            <View style={styles.questionContainer}>
              {questionNumber !== "" && (
                <Text style={[styles.questionNumber]}>
                  {questionNumber + ". "}
                </Text>
              )}
              <Text style={styles.question}>
                {question + "  "}
                {tooltipText !== "" && (
                  <Tooltip
                    visible={open}
                    width={"80%"}
                    height={100}
                    backgroundColor={Color.bcHeader}
                    containerStyle={styles.tooltipContainer}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    popover={
                      <Text style={styles.tooltipText}>{tooltipText}</Text>
                    }
                  >
                    <Image
                      source={{
                        uri: "https://img.icons8.com/?size=100&id=6648&format=png&color=FFA6BB",
                      }}
                      style={styles.tooltipIcon}
                    />
                  </Tooltip>
                )}
              </Text>
            </View>
          )}

          <Pressable
            style={styles.datePickerButton}
            onPress={() => {
              setDatePickerVisibility(true);
            }}
          >
            <Text style={styles.dateText}>
              {selectedDate}
            </Text>
            <Feather name="calendar" size={24} color={Color.bcHeader} />
          </Pressable>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={(date) => {
              const formattedDate = formatDate(date);
              setSelectedDate(formattedDate);
              onSelect(formattedDate);
              setDatePickerVisibility(false);
            }}
            onCancel={() => {
              setDatePickerVisibility(false);
            }}
            date={unformatDate(selectedDate) || new Date()}
            maximumDate={new Date()}
          // Remove the display="spinner" prop which can cause issues on some devices
          />
        </View>
      ) : optionType === "file" ? (
        <View style={styles.inputContainer}>
          {question != "" && (
            <View style={styles.questionContainer}>
              {questionNumber != "" && (
                <Text style={[styles.questionNumber]}>
                  {questionNumber != "" ? questionNumber + ". " : ""}
                </Text>
              )}
              <Text style={styles.question}>
                {question + "  "}
                {tooltipText != "" && (
                  <Tooltip
                    visible={open}
                    width={"80%"}
                    height={100}
                    backgroundColor={Color.bcHeader}
                    containerStyle={styles.tooltipContainer}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    popover={
                      <Text style={styles.tooltipText}>{tooltipText}</Text>
                    }
                  >
                    <Image
                      source={{
                        uri: "https://img.icons8.com/?size=100&id=6648&format=png&color=FFA6BB",
                      }}
                      style={styles.tooltipIcon}
                    />
                  </Tooltip>
                )}
              </Text>
            </View>
          )}

          <View style={styles.fileUploadWrapper}>
            <View style={styles.uploadContainer}>
              <TouchableOpacity
                style={[styles.uploadIcons, uploading && styles.disabledButton]}
                onPress={() => {
                  if (!uploading) captureImage();
                }}
                disabled={uploading}
              >
                <FontAwesome name="camera" size={24} color={uploading ? "#ccc" : Color.bcHeader} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.uploadIcons, uploading && styles.disabledButton]}
                onPress={() => {
                  if (!uploading) pickImage();
                }}
                disabled={uploading}
              >
                <FontAwesome name="photo" size={24} color={uploading ? "#ccc" : Color.bcHeader} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.uploadIcons, uploading && styles.disabledButton]}
                onPress={() => {
                  if (!uploading) uploadPDF();
                }}
                disabled={uploading}
              >
                <MaterialCommunityIcons
                  name="file-document"
                  size={24}
                  color={uploading ? "#ccc" : Color.bcHeader}
                />
              </TouchableOpacity>
            </View>

            {uploading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={Color.bcHeader} />
                <Text style={styles.loadingText}>Uploading file...</Text>
              </View>
            )}

            <View style={styles.uploadedFileContainer}>
              {(fileUri !== null || s3FileUrl !== null) &&
                (() => {
                  const reportUrl = s3FileUrl || fileUri;
                  const fileExtension = reportUrl?.split(".")?.pop();

                  return (
                    <>
                      <View style={styles.uploadedFileWrapper}>
                        <Text style={styles.uploadedFileText}>
                          {translateWord("Uploaded file", language)} ({fileExtension})
                        </Text>
                        <TouchableOpacity
                          style={styles.viewButton}
                          onPress={() => {
                            openDocument(reportUrl);
                          }}
                        >
                          <Text style={styles.viewButtonText}>
                            {translateWord("View", language)}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  );
                })()}
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
});

// Ensure displayName is set for debugging
RenderQuestion.displayName = 'RenderQuestion';

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  questionContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  questionTextContainer: {
    flex: 1,
    flexShrink: 1
  },
  optionsContainer: {
    marginTop: 10,
    width: "100%",
  },
  optionsContainerRadio: {
    flexDirection: "row",
  },
  tooltipContainer: {
    marginHorizontal: 10,
    borderRadius: 8,
  },
  tooltipBorder: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: Color.bcHeader,
    borderRadius: 8,
  },
  tooltipIcon: {
    width: 20,
    height: 20,
  },
  tooltipText: {
    color: "#FFF"
  },
  optionText: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Regular,
  },
  selectedLabel: {
    color: "white",
    fontSize: 15,
  },
  question: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Regular,
    marginHorizontal: 5,
    marginTop: 10,
  },
  questionNumber: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Medium,
    marginHorizontal: 5,
    marginTop: 10,
    color: "#333",
  },
  checkboxTitle: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Regular,
    color: "#333",
    marginLeft: 8,
  },
  disabledCheckboxTitle: {
    color: "#aaa",
    opacity: 0.6,
  },
  checkboxContainer: {
    marginTop: 0,
    borderRadius: 10,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  checkboxWrapper: {
    alignItems: "flex-start",
    paddingVertical: 8,
  },
  checkboxContainerSet2: {
    marginTop: 0,
    borderRadius: 10,
    borderWidth: 0.1,
    borderColor: Color.bcHeader,
  },
  checkBoxText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "normal",
    fontFamily: FontFamily.Inter_Regular,
  },
  optionButton: {
    padding: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  selectedOption: {
    backgroundColor: Color.bcHeader,
  },
  input: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#E0E0E0',
    fontSize: 14,
    textAlignVertical: "top",
  },
  textInputTitle: {
    marginTop: 10,
    fontFamily: FontFamily.Inter_Regular,
    fontSize: 16,
  },
  inputContainer: {
    width: "100%",
    marginHorizontal: "auto"
  },
  datePickerButton: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: Color.bcBackground,
    borderRadius: 5,
    borderColor: Color.bcHeader,
    borderWidth: 0.5,
  },
  dateText: {
    width: "80%",
    marginBottom: 0,
    fontSize: 15,
    fontFamily: FontFamily.Inter_Regular,
  },
  fileUploadWrapper: {
    flexDirection: "column"
  },
  uploadContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginHorizontal: "auto",
  },
  uploadIcons: {
    padding: 8,
    backgroundColor: Color.bcBackground,
    borderRadius: 5,
    borderColor: Color.bcHeader,
    borderWidth: 0.5,
  },
  uploadedFileContainer: {
    marginTop: "5%"
  },
  uploadedFileWrapper: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  uploadedFileText: {
    fontSize: 16,
    fontFamily: FontFamily.Inter_Medium,
  },
  viewButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: Color.bcHeader,
  },
  viewButtonText: {
    fontFamily: FontFamily.Inter_Medium,
    color: Color.bcBackground,
  },
  loadingContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FontFamily.Inter_Regular,
    color: Color.bcHeader,
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: '#f0f0f0',
  },
});

export default RenderQuestion;
