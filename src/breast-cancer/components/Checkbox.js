import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Tooltip } from "@rneui/base";
import { Color, FontFamily } from "../../utils/GlobalStyles";
import { CheckBox } from "@rneui/themed";

const Checkbox = ({
  set = 1, // New prop to switch layouts
  tooltipText = "",
  question = "",
  options,
  onSelect,
  defaultSelected = null,
  multiSelect = false,
  deselectable = false,
  logo = false,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    multiSelect ? defaultSelected || [] : defaultSelected
  );

  useEffect(() => {
    if (
      multiSelect &&
      Array.isArray(defaultSelected) &&
      JSON.stringify(defaultSelected) !== JSON.stringify(selectedOption)
    ) {
      setSelectedOption(defaultSelected);
    } else if (!multiSelect && defaultSelected !== selectedOption) {
      setSelectedOption(defaultSelected);
    }
  }, [defaultSelected]);

  const handlePress = (option) => {
    if (multiSelect) {
      const isSelected = selectedOption.includes(option.value);
      const updatedSelection = isSelected
        ? selectedOption.filter((value) => value !== option.value)
        : [...selectedOption, option.value];
      setSelectedOption(updatedSelection);
      onSelect(updatedSelection);
    } else {
      const isCurrentlySelected = selectedOption === option.value;
      const updatedSelection =
        deselectable && isCurrentlySelected ? null : option.value;
      setSelectedOption(updatedSelection);
      onSelect(updatedSelection);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.question}>
        {question + "  "}
        {tooltipText !== "" && (
          <Tooltip
            visible={open}
            width={"80%"}
            containerStyle={{
              marginHorizontal: 10,
              borderWidth: 1,
              borderColor: Color.bcHeader,
              borderRadius: 8,
            }}
            height={100}
            backgroundColor={Color.bcHeader}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            popover={<Text style={{ color: "#FFF" }}>{tooltipText}</Text>}
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

      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <Pressable key={option.id} onPress={() => handlePress(option)}>
            {/* **Set 1 (Existing Layout)** */}
            {(set === 1 || set === "1") && (
              <View
                style={[
                  styles.checkboxWithLabel,
                  (multiSelect
                    ? selectedOption.includes(option.value)
                    : selectedOption === option.value) &&
                  styles.checkboxIconSelected,
                ]}
              >
                <Text style={styles.checkboxLabel}>{option.label}</Text>
              </View>
            )}

            {/* **Set 2 (New Layout from Image)** */}
            {(set === 2 || set === "2") && (
              <CheckBox
                checked={selectedOption.includes(option.value)}
                onPress={() => handlePress(option)}
                checkedColor='#ffa6bb'
                title={option.label}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                containerStyle={styles.checkboxContainerSet2}
                textStyle={styles.checkBoxText}
              />
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

{/* <View
                style={[
                  styles.checkboxContainerSet2,
                  (multiSelect
                    ? selectedOption.includes(option.value)
                    : selectedOption === option.value) &&
                  styles.checkboxSelectedSet2,
                ]}
              >
                <Image
                  source={{
                    uri: (
                      multiSelect
                        ? selectedOption.includes(option.value)
                        : selectedOption === option.value
                    )
                      ? "https://img.icons8.com/ios-filled/50/ffffff/checkmark.png" // Green checkmark
                      : "https://img.icons8.com/ios/50/000000/unchecked-checkbox.png",
                  }}
                  style={styles.checkboxIconSet2}
                />
                <Text style={styles.checkboxLabelSet2}>{option.label}</Text>
              </View> */}

export default Checkbox;

const styles = StyleSheet.create({
  cardContainer: {
    // alignItems: "center",
    width: "100%",
  },

  question: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Regular,
    marginHorizontal: 5,
    color: '#333',
  },
  optionsContainer: {
    marginTop: 10,
    width: "100%",
  },
  checkboxWithLabel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "78%",
    paddingVertical: 8,
    backgroundColor: Color.bcBackground,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Color.bcHeader,
    marginBottom: 5,
    marginHorizontal: "auto",
  },
  checkboxIconSelected: {
    backgroundColor: Color.bcHeader,
  },
  checkboxLabel: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    fontFamily: FontFamily.Inter_Regular,
  },

  // **Set 2 Styles (Based on Given Image)**
  checkboxContainerSet2: {
    marginTop: 0,
    borderRadius: 10,
    borderWidth: 0.1,
    borderColor: Color.bcHeader
  },

  checkboxIconSet2: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  checkboxLabelSet2: {
    fontSize: 16,
    color: "#333",
    fontFamily: FontFamily.Inter_Regular,
  },
  checkBoxText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "normal",
    fontFamily: FontFamily.Inter_Regular,
  },
});
