import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Animated } from "react-native";
import { Color, FontFamily, Border } from "../../utils/GlobalStyles";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const TopDownImageGrid = ({
  images = [],
  onSelect = () => {},
  defaultSelected,
}) => {
  const [selectedImage, setSelectedImage] = useState(() => {
    if (defaultSelected) {
      return images.find((item) => item.value === defaultSelected) || null;
    }
    return null;
  });

  const [animatedValues] = useState(() => 
    images.map(() => new Animated.Value(1))
  );

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

  const handleSelect = (item, index) => {
    Animated.sequence([
      Animated.timing(animatedValues[index], {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    if (selectedImage && selectedImage.value === item.value) {
      setSelectedImage(null);
      onSelect(null);
    } else {
      setSelectedImage(item);
      onSelect(item.value);
    }
  };

  const isSelected = (item) => {
    return selectedImage && selectedImage.value === item.value;
  };

  // Create a grid with 2 columns
  const numColumns = 2;
  
  // Organize the images into rows for the grid
  const organizeIntoGrid = (items) => {
    const grid = [];
    for (let i = 0; i < items.length; i += numColumns) {
      grid.push(items.slice(i, i + numColumns));
    }
    return grid;
  };
  
  const gridRows = organizeIntoGrid(images);
  
  return (
    <View style={styles.container}>
      {gridRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.rowContainer}>
          {row.map((item, colIndex) => {
            const index = rowIndex * numColumns + colIndex;
            return (
              <Animated.View 
                key={colIndex} 
                style={[
                  styles.gridItem,
                  { transform: [{ scale: animatedValues[index] }] }
                ]}
              >
                <TouchableOpacity
                  style={[
                    styles.card,
                    isSelected(item) ? styles.selectedCard : styles.normalCard,
                  ]}
                  onPress={() => handleSelect(item, index)}
                  activeOpacity={0.9}
                >
                  <View style={styles.cardContent}>
                    <View style={styles.textSection}>
                      <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={[
                          styles.cardTitle,
                          isSelected(item) ? styles.selectedText : null,
                        ]}
                      >
                        {item.label}
                      </Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.imageSection}>
                      <Image source={item.path} style={styles.image} />
                      {isSelected(item) && (
                        <View style={styles.checkMarkContainer}>
                          <Icon name="check-circle" size={28} color={Color.bcHighlight} />
                        </View>
                      )}
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.selectionIndicator}>
                      {isSelected(item) ? (
                        <View style={styles.radioSelected}>
                          <View style={styles.radioInner} />
                        </View>
                      ) : (
                        <View style={styles.radioUnselected} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  rowContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
    // borderWidth: 1,
  },
  gridItem: {
    width: '100%', // Slightly less than 50% to allow for spacing between items
    // borderWidth: 1,
    // borderColor: '#E8E8E8',
    marginVertical: 5
  },
  card: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    backgroundColor: Color.colorWhite,
    overflow: 'hidden',
  },
  normalCard: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: Color.bcHighlight,
    backgroundColor: Color.bclight,
  },
  cardContent: {
    flexDirection: 'column',
    padding: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#E8E8E8',
    width: '100%',
    marginVertical: 10,
  },
  imageSection: {
    position: 'relative',
    width: '100%',
    height: 130, // Make the image bigger
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 8,
  },
  textSection: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Medium,
    color: '#333',
    textAlign: 'center',
  },
  selectedText: {
    color: Color.bcHighlight,
    fontFamily: FontFamily.Inter_SemiBold,
  },
  selectionIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D0D0D0',
    backgroundColor: Color.colorWhite,
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Color.bcHighlight,
    backgroundColor: Color.colorWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Color.bcHighlight,
  },
  checkMarkContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
});

export default TopDownImageGrid;