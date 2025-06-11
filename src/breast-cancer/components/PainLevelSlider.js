import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Color, FontFamily } from "../../utils/GlobalStyles";

const PainLevelSlider = ({ value, onValueChange, language }) => {
  const painLevels = [
    {
      value: 1,
      en: "Minimal",
      bn: "খুব কম",
      hi: "कम",
      as: "অতি কম",
      color: "#66FF33",
    }, // Light Green
    {
      value: 2,
      en: "Less",
      bn: "কম",
      hi: "कम",
      as: "কম",
      color: "#99FF33"
    }, // Light Green
    {
      value: 3,
      en: "Medium",
      bn: "মোটামুটি",
      hi: "मध्यम",
      as: "মধ্যম",
      color: "#FFCC00",
    }, // Yellow-Green
    {
      value: 4,
      en: "High",
      bn: "বেশি",
      hi: "अधिक",
      as: "অধিক",
      color: "#FF9900",
    }, // Orange
    {
      value: 5,
      en: "Intense",
      bn: "অসহ্য ",
      hi: "तीव्र",
      as: "অসহ্য",
      color: "#FF3300",
    }, // Red
  ];

  const handlePress = (level) => {
    onValueChange(level);
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={[styles.track]} />
      <View style={styles.labelsContainer}>
        {painLevels.map((level) => (
          <TouchableWithoutFeedback
            key={level.value}
            onPress={() => handlePress(level.value)}
          >
            <View
              style={[
                styles.label,
                {
                  backgroundColor: level.color,
                  opacity: value >= level.value ? 1 : 0.3,
                },
              ]}
            >
              <Text style={[styles.labelText, { color: "#000" }]}>
                {language === 'en' ? level.en
                  : language === 'bn' ? level.bn
                    : language === 'hi' ? level.hi
                      : language === 'as' ? level.as
                        : level.en
                }
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: 35,
    overflow: "hidden",
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  track: {
    height: 6,
    position: "absolute",
    zIndex: 0,
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
    width: "100%",
    height: "100%",
  },
  label: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  labelText: {
    fontSize: 13,
    color: "#000",
    fontFamily: FontFamily.Inter_Regular,
  },
});

export default PainLevelSlider;
