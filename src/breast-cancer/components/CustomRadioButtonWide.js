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

const { width } = Dimensions.get("window");

const CustomRadioButtonWide = ({
  tooltipText = "",
  question = "",
  options,
  questionNumber = "",
  onSelect,
  defaultSelected,
  set = "1",
}) => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (defaultSelected) {
      setSelectedOption(defaultSelected);
    }
  }, [defaultSelected]);

  const handlePress = (option) => {
    setSelectedOption(option.value);
    onSelect(option.value);
  };

  return (
    <>
      {set === "1" && (
        <View style={styles.cardContainer}>
          <Text style={styles.question}>
            {question + "  "}
            {tooltipText != "" && (
              <View style={styles.questionIcon}>
                // Update the tooltip for set === "1"
                <Tooltip
                  width={300}
                  height={120}
                  backgroundColor={Color.bcHeader}
                  pointerColor={Color.bcHeader}
                  withOverlay={true}
                  withPointer={true}
                  popoverStyle={{ padding: 8 }}
                  containerStyle={{
                    marginHorizontal: 10,
                    borderRadius: 8,
                  }}
                  popover={
                    <Text style={{ color: "#FFF", fontFamily: FontFamily.Inter_Regular }}>
                      {tooltipText}
                    </Text>
                  }
                >
                  <Image
                    source={{
                      uri: "https://img.icons8.com/?size=100&id=6648&format=png&color=FFA6BB",
                    }}
                    style={{ width: 20, height: 20 }}
                  />
                </Tooltip>

// And update the tooltip for set === "2"
                <Tooltip
                  width={300}
                  height={120}
                  backgroundColor={Color.bcHeader}
                  pointerColor={Color.bcHeader}
                  withOverlay={true}
                  withPointer={true}
                  popoverStyle={{ padding: 8 }}
                  containerStyle={{
                    marginHorizontal: 10,
                    borderRadius: 8,
                  }}
                  popover={
                    <Text style={{ color: "#FFF", fontFamily: FontFamily.Inter_Regular }}>
                      {tooltipText}
                    </Text>
                  }
                >
                  <Image
                    source={{
                      uri: "https://img.icons8.com/?size=100&id=6648&format=png&color=FFA6BB",
                    }}
                    style={{ width: 20, height: 20 }}
                  />
                </Tooltip>
              </View>
            )}
          </Text>
          <View style={styles.optionsContainer}>
            {options.map((option) => (
              <Pressable
                key={option.id}
                onPress={() => handlePress(option)}
                style={{ flex: 1 }}
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
        <View style={styles.cardContainer}>
          <View style={{
            flexDirection: 'row', marginBottom: 20, alignItems: 'center', marginTop: 10
          }}>
            <Text style={styles.questionNumber}>
              {questionNumber != "" ? questionNumber + ". " : ""}
            </Text>
            <Text style={styles.question}>
              {question + "  "}
              {tooltipText != "" && (
                <Tooltip
                  width={300}
                  height={120}
                  backgroundColor={Color.bcHeader}
                  pointerColor={Color.bcHeader}
                  withOverlay={true}
                  withPointer={true}
                  popoverStyle={{ padding: 8 }}
                  containerStyle={{
                    marginHorizontal: 10,
                    borderRadius: 8,
                  }}
                  popover={
                    <Text style={{ color: "#FFF", fontFamily: FontFamily.Inter_Regular }}>
                      {tooltipText}
                    </Text>
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
          {options.map((option) => (
            <Pressable
              key={option.id}
              onPress={() => handlePress(option)}
              style={[
                styles.optionButton,
                selectedOption === option.value && styles.selectedOption,
              ]}
            >
              <Text style={[
                styles.optionText,
                selectedOption === option.value && styles.selectedLabel
              ]}>{option.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    marginBottom: 10,
  },
  question: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Regular,
    marginHorizontal: 5,
    color: '#333',
    textAlign: 'center',
  },
  questionNumber: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Medium,
    marginHorizontal: 5,
    color: '#333',
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    gap: 14,
  },
  optionButton: {
    padding: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  selectedOption: {
    backgroundColor: Color.bcHeader,
  },
  radioButtonWrapper2: {
    marginVertical: 0,
    minWidth: width * 0.45, // Even wider for the second set
    maxWidth: width * 0.48, // Even wider for the second set
  },
  optionText: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Regular,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6.5,
    backgroundColor: Color.bcBackground,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: Color.bcHeader,
  },
  selectedContainer: {
    backgroundColor: Color.bcHeader,
  },
  radioButtonLabel: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: FontFamily.Inter_Regular,
    flexWrap: "wrap", // Allow text to wrap inside button
    overflow: "hidden", // Prevent text overflow
    textOverflow: "ellipsis", // Add ellipsis if text overflows
    paddingHorizontal: 5, // Prevent text from touching button borders
    width: "100%", // Ensure the text takes full width available
  },
  selectedLabel: {
    color: "white",
    fontSize: 15,
  },
});

export default CustomRadioButtonWide;

/**
 * CustomRadioButtonWide Component
 *
 * A customizable radio button component designed to display a set of options with an optional tooltip on the question.
 * It is flexible enough to be used in different layouts while maintaining consistent styling. The component
 * supports responsiveness and adapts the button sizes and layout according to the available space. It also allows
 * for setting default selected options and notifying the parent component when an option is selected.
 *
 * Features:
 * 1. **Question with Tooltip**:
 *    - Displays a question above the radio buttons with an optional tooltip icon next to it.
 *    - The tooltip provides additional information about the question when the user taps on the info icon.
 *
 * 2. **Radio Button Options**:
 *    - The component receives an array of options with labels and IDs, which are dynamically rendered as radio buttons.
 *    - Each option is clickable and allows the user to select one. Once selected, the option gets highlighted with a different style.
 *
 * 3. **Default Selected Option**:
 *    - The `defaultSelected` prop allows you to specify an option that should be selected by default when the component is loaded.
 *    - If `defaultSelected` is passed, the `onSelect` callback is triggered immediately with the default value.
 *
 * 4. **Responsive Design**:
 *    - The component is designed to be responsive, meaning it adapts its layout to different screen sizes.
 *    - When the available space changes (e.g., when the screen size reduces), the button width adjusts, and the content remains accessible without overflowing.
 *
 * 5. **Customizable Option Layout**:
 *    - The options are laid out in a flex container, allowing the button size to shrink and wrap if there’s limited space.
 *    - Buttons are resized responsively but maintain a consistent height (50px) to ensure a consistent appearance.
 *
 * 6. **Selectable State**:
 *    - When a user selects an option, the selected option gets highlighted with a distinct background color and text color to indicate its selected state.
 *    - This helps improve the user experience by visually confirming their selection.
 *
 * 7. **Question Text Styling**:
 *    - The question text is styled using the `question` style, with an additional `questionCenter` style applied when `set === "2"`, which centers the question text.
 *    - A margin is added below the question text in set 2 to separate it from the options.
 *
 * 8. **Handling Option Selection**:
 *    - The `onSelect` prop is passed a function that is triggered whenever an option is selected. The value of the selected option is passed as an argument.
 *    - This allows the parent component to track the selection and update its state accordingly.
 *
 * Props:
 * - `tooltipText`: Text content for the tooltip. Appears when the user taps the info icon next to the question.
 * - `question`: The main question text that will be displayed above the radio buttons.
 * - `options`: An array of option objects, where each object contains an `id` (unique identifier) and a `label` (the text for the option).
 * - `onSelect`: A callback function that is triggered when an option is selected. It receives the selected option's value.
 * - `defaultSelected`: A default value that will pre-select an option when the component is loaded.
 *
 * Usage Example:
 * ```jsx
 * <CustomRadioButtonWide
 *   tooltipText="This is an info tooltip."
 *   question="Choose your preferred color:"
 *   options={[
 *     { id: 1, label: "Red", value: "red" },
 *     { id: 2, label: "Blue", value: "blue" },
 *     { id: 3, label: "Green", value: "green" },
 *   ]}
 *   onSelect={(selectedValue) => console.log(selectedValue)}
 *   defaultSelected="blue"
 * />
 * ```
 *
 * Notes:
 * - The component dynamically adjusts to different screen sizes using flexbox and responsive width constraints.
 * - The option selection styling includes background color and text color changes to visually indicate the selected option.
 * - The tooltip is hidden until the user taps the info icon, providing additional details on demand.
 *
 * @component
 * @example
 * const options = [
 *   { id: 1, label: "Option 1", value: "option1" },
 *   { id: 2, label: "Option 2", value: "option2" },
 * ];
 *
 * <CustomRadioButtonWide
 *   question="Please select an option"
 *   options={options}
 *   onSelect={(value) => console.log(value)}
 * />
 */
