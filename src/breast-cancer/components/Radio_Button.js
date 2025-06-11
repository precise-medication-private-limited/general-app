import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import { Color, FontFamily } from "../../utils/GlobalStyles";
import { Tooltip } from "@rneui/themed";
import { Header, ListItem, Skeleton, Divider, Button, CheckBox } from '@rneui/themed';

const { width } = Dimensions.get("window");

const Radio_Button = ({
  tooltipText = "",
  question = "",
  options,
  onSelect,
  questionNumber = "",
  defaultSelected,
  set = "1",
  disableUnselected = false, // New prop
}) => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (defaultSelected !== undefined && defaultSelected !== null) {
      setSelectedOption(defaultSelected);
    } else {
      setSelectedOption(null); // Ensure nothing is selected when defaultSelected is not provided
    }
  }, [defaultSelected]);

  const handlePress = (option) => {
    if (disableUnselected && selectedOption !== option.value) return; // Do nothing if the option is disabled
    setSelectedOption(option.value);
    onSelect(option.value);
  };

  return (
    <>
      {set === "1" && (
        <View style={styles.cardContainer}>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              {question + "  "}
              {tooltipText !== "" && (
                <Tooltip
                  visible={open}
                  width={"80%"}
                  containerStyle={{
                    marginHorizontal: 10,
                    borderWidth: 1, // Border width
                    borderColor: Color.bcHeader, // Border color
                    borderRadius: 8,
                  }}
                  height={100}
                  backgroundColor={Color.bcHeader}
                  onOpen={() => setOpen(true)}
                  onClose={() => setOpen(false)}
                  popover={
                    <Text style={{ color: "#FFF" }}>{tooltipText}</Text>
                  }
                >
                  <Image
                    source={{
                      uri: "https://img.icons8.com/?size=100&id=6648&format=png&color=FFA6BB",
                    }}
                    style={{ width: 20, height: 20 }}
                  />
                </Tooltip>
              )}
            </Text>
          </View>
          <View style={styles.optionsContainer}>
            {options.map((option) => (
              <Pressable
                key={option.id}
                onPress={() => handlePress(option)}
                style={[
                  styles.radioButtonWrapper,
                  disableUnselected &&
                  selectedOption !== option.value &&
                  styles.disabledOption,
                ]}
                disabled={disableUnselected && selectedOption !== option.value} // Disable unselected options
              >
                {selectedOption === option.value ? (
                  <View
                    style={[
                      styles.radioButtonContainer,
                      styles.selectedContainer,
                    ]}
                  >
                    <Text
                      style={[styles.radioButtonLabel, styles.selectedLabel]}
                    >
                      {option.label}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.radioButtonContainer}>
                    <Text style={styles.radioButtonLabel}>{option.label}</Text>
                  </View>
                )}
              </Pressable>
            ))}
          </View>
        </View>
      )}
      {set === "2" && (
        <View style={{
          flex: 1,
        }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={styles.questionNumber}>
              {questionNumber != "" ? questionNumber + ". " : ""}
            </Text>
            <Text style={styles.question}>{question}</Text>
          </View>

          <View style={styles.optionsContainer2}>
            {options.map((option) => (
              <CheckBox
                iconType="font-awesome"
                checked={selectedOption === option.value}
                onPress={() => handlePress(option)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={Color.bcHeader}
                title={option.label}
                titleProps={{
                  style: styles.checkboxTitle,
                  numberOfLines: 2 // Better for long text
                }}
                disabledTitleStyle={styles.disabledCheckboxTitle}
                disabled={disableUnselected && selectedOption && selectedOption !== option.value}
                containerStyle={styles.checkboxContainer}
                wrapperStyle={styles.checkboxWrapper}
                key={option.id}
              />
            ))}
          </View>
        </View>

      )}
    </>
  );
};

const styles = StyleSheet.create({

  cardContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  questionContainer: {
    width: "57%",
    paddingRight: 10,
    justifyContent: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "40%",
    gap: 10,
  },
  radioButtonWrapper: {
    flex: 1,
    marginHorizontal: 3,
    marginVertical: 0,
  },
  radioButtonWrapper2: {
    borderWidth: 1,
    marginHorizontal: 3,
    marginVertical: 0,
    minWidth: width * 0.28,
    maxWidth: width * 0.32,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    backgroundColor: Color.bcBackground,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: Color.bcHeader,
    width: width / 7,
  },
  selectedContainer: {
    backgroundColor: Color.bcHeader,
  },
  radioButtonLabel: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    fontFamily: FontFamily.Inter_Regular,
  },
  selectedLabel: {
    color: "white",
    fontSize: 16,
  },
  disabledOption: {
    opacity: 0.6, // Visual cue that the option is disabled
  },

  optionsContainer2: {
    flexDirection: 'row',
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
    color: '#333',
  },
  checkboxTitle: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Regular,
    color: "#333",
    marginLeft: 8,
  },
  disabledCheckboxTitle: {
    color: '#aaa', // Faded text color
    opacity: 0.6,
  },
  checkboxContainer: {
    marginTop: 0,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxWrapper: {
    alignItems: 'flex-start',
    paddingVertical: 8,
  },
});

export default Radio_Button;
