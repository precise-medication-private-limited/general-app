import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import { Color, FontFamily } from "../../../utils/GlobalStyles";
import { Tooltip } from "@rneui/themed";

const { width } = Dimensions.get("window");

const Add_Details = ({
  tooltipText = "",
  question = "",
  onSelect,
  filled = false,
  language = "English",
}) => {
  const [open, setOpen] = useState(false);
  // Define translations for button label
  const buttonLabels = {
    English: filled ? "Update" : "Add Details",
    বাংলা: filled ? "আপডেট" : "যোগ করুন",
    हिन्दी: filled ? "अपडेट" : "विवरण जोड़ें",
    অসমীয়া: filled ? "আপডেট" : "যোগ কৰক",
};

  const buttonLabel = buttonLabels[language] || buttonLabels["English"]; // Default to English

  const handlePress = () => {
    onSelect("details");
  };

  return (
    <View style={styles.cardContainer}>
      {/* Question Section */}
      <View style={styles.questionContainer}>
        <Text style={styles.question}>
          {question + "  "}
          {tooltipText !== "" && (
            <View style={styles.questionIcon}>
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
                popover={<Text style={{ color: "#FFF" }}>{tooltipText}</Text>}
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
      </View>

      {/* Add/Edit Details Button */}
      <View style={styles.optionsContainer}>
        <Pressable
          onPress={handlePress}
          style={({ pressed }) => [
            styles.radioButtonContainer,
            { backgroundColor: pressed ? Color.bcBackground : Color.bcHeader },
          ]}
        >
          <Text style={styles.radioButtonLabel}>{buttonLabel}</Text>
        </Pressable>
      </View>
    </View>
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
  questionIcon: {},
  question: {
    fontSize: 16,
    fontFamily: FontFamily.Inter_Regular,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "40%",
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: Color.bcHeader,
    width: width * 0.34,
  },
  radioButtonLabel: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: FontFamily.Inter_Regular,
  },
});

export default Add_Details;
