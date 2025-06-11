import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { Color, FontFamily } from "../../utils/GlobalStyles";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";
import Feather from "@expo/vector-icons/Feather";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Linking from "expo-linking";
import * as IntentLauncher from "expo-intent-launcher";
import * as FileSystem from "expo-file-system";

const Uploader_Biopsy = ({
  onClose,
  language,
  title = "",
  testDate,
  selectData,
  details,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [date, setDate] = useState(testDate || null);

  const [fileUri, setFileUri] = useState(null);

  const requestPermissions = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission Denied", "Camera access is required.");
      return false;
    }
    return true;
  };

  const handleSelect = () => {
    selectData({
      date,
      fileUri,
    });
  };

  const pickImage = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/*",
        multiple: true,
      });
      if (!result.canceled && result.assets?.length) {
        setFileUri(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const captureImage = async () => {
    if (!(await requestPermissions())) return;
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    if (!result.canceled && result.assets?.length) {
      setFileUri(result.assets[0].uri);
    }
  };

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
        const pdfFile = result.assets[0];

        setFileUri(pdfFile.uri);
      }
    } catch (error) {
      console.error("Error selecting PDF:", error);
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
    }
  };

  const getLocalizedText = (text, language) => {
    const translations = {
      Upload: {
        English: "Upload",
        বাংলা: "আপলোড করুন",
        हिन्दी: "अपलोड करें",
        অসমীয়া: "আপলোড কৰক",
      },
      "Upload from camera": {
        English: "Upload from camera",
        বাংলা: "ক্যামেরা থেকে আপলোড করুন",
        हिन्दी: "कैमरा से अपलोड करें",
        অসমীয়া: "ক্যামেরাৰ পৰা আপলোড কৰক",
      },
      "Upload from gallery": {
        English: "Upload from gallery",
        বাংলা: "গ্যালারি থেকে আপলোড করুন",
        हिन्दी: "गैलरी से अपलोड करें",
        অসমীয়া: "গ্যালাৰীৰ পৰা আপলোড কৰক",
      },
      Submit: {
        English: "Submit",
        বাংলা: "জমা দিন",
        हिन्दी: "जमा करें",
        অসমীয়া: "জমা কৰক",
      },
      "Enter name (Optional)": {
        English: "Enter name (Optional)",
        বাংলা: "নাম দিন (ঐচ্ছিক)",
        हिन्दी: "नाम डालें (वैकल्पिक)",
        অসমীয়া: "নাম দিয়ক (ঐচ্ছিক)",
      },
      "Upload file": {
        English: "Upload file",
        বাংলা: "ফাইল আপলোড করুন",
        हिन्दी: "फाइल अपलोड करें",
        অসমীয়া: "ফাইল আপলোড কৰক",
      },
      Uploaded: {
        English: "Uploaded",
        বাংলা: "আপলোড হওয়া",
        हिन्दी: "अपलोड किया हुआ",
        অসমীয়া: "আপলোড হোৱা",
      },
      Date: {
        English: "Date",
        বাংলা: "তারিখ",
        हिन्दी: "तारीख",
        অসমীয়া: "তাৰিখ",
      },
      "Test Details": {
        English: "Test Details",
        বাংলা: "পরীক্ষার বিবরণ",
        हिन्दी: "परीक्षण विवरण",
        অসমীয়া: "পরীক্ষাৰ বিৱৰণ",
      },
      "Uploaded file": {
        বাংলা: "আপলোড করা ফাইল",
        हिन्दी: "अपलोड की गई फ़ाइल",
        অসমীয়া: "আপল'ড কৰা ফাইল",
        English: "Uploaded file",
      },
      View: {
        বাংলা: "দেখুন",
        हिन्दी: "देखें",
        অসমীয়া: "চাওক",
        English: "View",
      },
    };

    return translations[text]?.[language] || text;
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <Modal
      isVisible={true}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={500}
      animationOutTiming={500}
      useNativeDriver={true}
      style={styles.modal}
      avoidKeyboard={true}
      backdropOpacity={0.5}
    >
      <View style={styles.modalContent}>
        <View style={styles.handle} />

        {/* Date */}
        <View style={styles.modalViewSection}>
          <Text style={styles.modalQuestion}>
            {getLocalizedText("Date", language)}
          </Text>
          <Pressable
            style={{
              flexDirection: "row",
              width: "95%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
              backgroundColor: Color.bcBackground,
              borderRadius: 5,
              borderColor: Color.bcHeader,
              borderWidth: 0.5,
            }}
            onPress={() => setDatePickerVisibility(true)}
          >
            <Text
              style={[styles.modalQuestion, { width: "80%", marginBottom: 0 }]}
            >
              {date || "DD/MM/YYYY"}
            </Text>
            <Feather name="calendar" size={24} color={Color.bcHeader} />
          </Pressable>

          {isDatePickerVisible && (
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              display="spinner"
              mode="date"
              onConfirm={(date) => {
                const formattedDate = formatDate(date);
                setDate(formattedDate);
                setDatePickerVisibility(false);
              }}
              onCancel={() => setDatePickerVisibility(false)}
              value={date ? new Date(date) : new Date()}
              maximumDate={new Date()}
            />
          )}
        </View>

        <View>
          {/* Test Details */}
          <Text
            style={{
              fontSize: 17,
              fontFamily: FontFamily.Inter_Bold,
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            {getLocalizedText("Upload", language)}{" "}
            {getLocalizedText(title, language)}
          </Text>
          <View style={styles.uploadContainer}>
            <TouchableOpacity
              style={styles.uploadIcons}
              onPress={() => {
                captureImage();
              }}
            >
              <FontAwesome name="camera" size={24} color={Color.bcHeader} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.uploadIcons}
              onPress={() => {
                pickImage();
              }}
            >
              <FontAwesome name="photo" size={24} color={Color.bcHeader} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.uploadIcons}
              onPress={() => {
                uploadPDF();
              }}
            >
              <MaterialCommunityIcons
                name="file-document"
                size={24}
                color={Color.bcHeader}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Uploaded Test Details */}
        {fileUri &&
          (() => {
            const reportUrl = fileUri;
            const fileExtension = reportUrl.split(".").pop(); // Extract file extension

            return (
              <>
                <View
                  style={{
                    width: "95%",
                    flexDirection: "row",
                    paddingHorizontal: 10,
                    justifyContent: "space-between",
                    borderColor: Color.bcHeader,
                    borderWidth: 1,
                    padding: 5,
                    borderRadius: 5,
                    alignItems: "center",
                    marginTop: 20,
                    marginHorizontal: "auto",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: FontFamily.Inter_Medium,
                    }}
                  >
                    {getLocalizedText("Uploaded file", language)} (
                    {fileExtension})
                  </Text>

                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 8,
                      backgroundColor: Color.bcHeader,
                    }}
                    onPress={() => {
                      if (
                        [
                          "pdf",
                          "doc",
                          "docx",
                          "xls",
                          "xlsx",
                          "ppt",
                          "pptx",
                          "txt",
                          "csv",
                          "zip",
                          "mpg",
                          "mp4",
                        ].includes(fileExtension)
                      ) {
                        openDocument(fileUri);
                      } else if (
                        [
                          "jpg",
                          "jpeg",
                          "png",
                          "gif",
                          "bmp",
                          "webp",
                          "svg",
                        ].includes(fileExtension)
                      ) {
                        openDocument(fileUri);
                      }
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FontFamily.Inter_Medium,
                        color: Color.bcBackground,
                      }}
                    >
                      {getLocalizedText("View", language)}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            );
          })()}

        <TouchableOpacity
          style={{
            backgroundColor: !date || !fileUri ? "#d3d3d3" : Color.bcHeader,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            marginTop: 20,
            borderRadius: 5,
          }}
          disabled={!date || !fileUri}
          onPress={() => {
            handleSelect();
            onClose();
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.Inter_Medium,
              fontSize: 16,
              color: !date || !fileUri ? "#A9A9A9" : "#000",
            }}
          >
            {getLocalizedText("Submit", language)}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Uploader_Biopsy;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#FFF9FF",
    padding: 10,
    minHeight: 250,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  handle: {
    width: 50,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 2.5,
    alignSelf: "center",
    marginBottom: 10,
  },
  uploadContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginHorizontal: "auto",
  },
  textInput: {
    flex: 1,
    borderRadius: 5,
    height: 40, // Set a minimum height for the input
    numberOfLines: 4, // Limit the number of lines
    textAlignVertical: "top", // Align text to the top
  },
  loadingText: {
    color: Color.bcHighlight,
    marginTop: 10,
    fontSize: 18,
    fontFamily: FontFamily.Inter_Regular,
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: Color.bcBackground,
    flex: 1,
  },
  modalViewSection: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalQuestion: {
    fontSize: 16,
    color: "#333",
    fontFamily: FontFamily.Inter_Regular,
    marginBottom: 8,
  },
  uploadIcons: {
    padding: 8,
    backgroundColor: Color.bcBackground,
    borderRadius: 5,
    borderColor: Color.bcHeader,
    borderWidth: 0.5,
  },
});
