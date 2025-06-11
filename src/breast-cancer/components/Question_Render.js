import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import { Color, FontFamily, FontSize } from '../../../utils/GlobalStyles';

const Question_Render = ({ title, options, onSelect, language, defaultSelected }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Memoize labels to avoid unnecessary re-renders
  const labels = useMemo(() => {
    return language === "English"
      ? options.englabel
      : language === "हिन्दी"
      ? options.hindilabel
      : language === "অসমীয়া"
      ? options.assameseLabel
      : options.benglabel;
  }, [language, options]);

  // Initialize selectedOption with defaultSelected, but only once
  useEffect(() => {
    if (!selectedOption && defaultSelected && labels.includes(defaultSelected)) {
      setSelectedOption(defaultSelected);
      // Notify the parent only on initial load
      const valueIndex = labels.indexOf(defaultSelected);
      onSelect?.(options.value[valueIndex]);
    }
  }, [defaultSelected, labels, options.value, selectedOption]);

  const handlePress = (option, value) => {
    setSelectedOption(option);
    onSelect?.(value); // Notify the parent when the selection changes
  };

  const renderRow = () => {
    const rows = [];
    for (let i = 0; i < labels.length; i += 2) {
      rows.push(
        <View key={i} style={styles.row}>
          <Pressable
            style={[
              styles.optionButton,
              selectedOption === labels[i] && styles.selectedOption,
            ]}
            onPress={() => handlePress(labels[i], options.value[i])}
          >
            <Text style={styles.optiontext}>{labels[i]}</Text>
          </Pressable>
          {labels[i + 1] && (
            <Pressable
              style={[
                styles.optionButton,
                selectedOption === labels[i + 1] && styles.selectedOption,
              ]}
              onPress={() => handlePress(labels[i + 1], options.value[i + 1])}
            >
              <Text style={styles.optiontext}>{labels[i + 1]}</Text>
            </Pressable>
          )}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.main}>
      <Text style={styles.titletext}>{title}</Text>
      {renderRow()}
    </View>
  );
};

export default Question_Render;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: Color.bcHeader,
  },
  titletext: {
    textAlign: "center",
    fontFamily: FontFamily.Inter_Regular,
    fontSize: FontSize.size_all,
    marginBottom: "2%",
    marginTop: "4%",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    paddingVertical: 8,
    width: "40%",
    margin: 5,
    borderWidth: 2,
    borderColor: Color.bcHeader,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: Color.bcHeader, // Highlight color for selected option
    borderColor: Color.bcHeader, // Border color for selected option
    borderWidth: 2,
  },
  optiontext: {
    fontFamily: FontFamily.Inter_Regular,
  },
});
