import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontFamily } from "../../utils/GlobalStyles";

const ImageGrid = ({ images = [], onSelect = () => { }, defaultSelected }) => {
  // Initialize state with the default selected image
  const [selectedImage, setSelectedImage] = useState(() => {
    if (defaultSelected) {
      return images.find((item) => item.value === defaultSelected) || null;
    }
    return null;
  });

  useEffect(() => {
    if (defaultSelected) {
      const defaultSelectedImage = images.find(
        (item) => item.value === defaultSelected
      );
      if (defaultSelectedImage) {
        setSelectedImage(defaultSelectedImage);
        onSelect(defaultSelectedImage.value);
      }
    }
  }, [defaultSelected, images, onSelect]);

  const handleSelect = (item) => {
    // Single selection mode
    if (selectedImage && selectedImage.value === item.value) {
      // Deselect if the same item is selected again
      setSelectedImage(null);
      onSelect(null); // Return null on deselect
    } else {
      // Select the new item
      setSelectedImage(item);
      onSelect(item.value);
    }
  };

  const isChecked = (item) => {
    return selectedImage && selectedImage.value === item.value;
  };

  return (
    <View style={styles.container}>
      {images.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.imageContainer,
            isChecked(item) ? styles.selected : null, // Apply selected border
          ]}
          onPress={() => handleSelect(item)}
        >
          {/* Label at the top */}
          <Text
            style={[
              styles.label,
              { color: isChecked(item) ? "#E582AD" : "#333" },
            ]}
          >
            {item.label}
          </Text>

          {/* Image below the label */}
          <Image source={item.path} style={styles.image} />
          <View style={styles.radioButtonContainer}>
            {/* <RadioButton selected={isChecked(item)} /> */}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const RadioButton = ({ selected }) => (
  <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
    {selected && <View style={styles.innerRadioButton} />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    columnGap: 10,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    width: "48%", // Adjust for equal sizing
    padding: 10,
    marginBottom: 15,
    borderWidth: 2, // Default border width
    borderColor: "transparent", // Default border is transparent
    borderRadius: 3, // Optional: add rounded corners
  },
  selected: {
    borderColor: "#E582AD", // Highlight selected container with border
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain", // Ensure the image fits within the frame
  },
  label: {
    fontSize: 14,
    fontFamily: FontFamily.Montserrat_Regular,
    color: "#333",
    marginBottom: 5, // Add some spacing between label and image
  },
  radioButtonContainer: {
    marginTop: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    borderColor: "#E582AD",
  },
  innerRadioButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#E582AD",
  },
});

export default ImageGrid;
