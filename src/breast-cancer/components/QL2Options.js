import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontFamily, Color } from "../../../utils/GlobalStyles";
import { AntDesign } from "@expo/vector-icons"; // For arrow icons

const SCREEN_WIDTH = Dimensions.get("window").width;
const OPTIONS_PER_PAGE = 4; // Show 4 options at a time

const QL2Options = ({
  question,
  options,
  onSelect,
  defaultSelected,
  set = "1",
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelected || null);
  const scrollViewRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const totalPages = Math.ceil(options.length / OPTIONS_PER_PAGE);

  useEffect(() => {
    if (selectedOption !== null && options.length > 0) {
      const selectedIndex = options.findIndex(
        (option) => option.value === selectedOption
      );
      if (selectedIndex !== -1) {
        const pageIndex = Math.floor(selectedIndex / OPTIONS_PER_PAGE);
        setScrollIndex(pageIndex);
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({
            x: pageIndex * SCREEN_WIDTH,
            y: 0,
            animated: true,
          });
        }
      }
    }
  }, [selectedOption, options]);

  useEffect(() => {
    if (defaultSelected !== undefined && defaultSelected !== null) {
      setSelectedOption(defaultSelected);
    } else {
      setSelectedOption(null);
      setScrollIndex(0); // Reset to first page
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
      }
    }
  }, [defaultSelected]);

  const handlePress = (option) => {
    setSelectedOption(option.value);
    onSelect(option.value);

    const selectedIndex = options.findIndex(
      (opt) => opt.value === option.value
    );
    if (selectedIndex !== -1) {
      const pageIndex = Math.floor(selectedIndex / OPTIONS_PER_PAGE);
      setScrollIndex(pageIndex);
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: pageIndex * SCREEN_WIDTH,
          y: 0,
          animated: true,
        });
      }
    }
  };

  const scrollLeft = () => {
    if (scrollIndex > 0 && scrollViewRef.current) {
      const newIndex = scrollIndex - 1;
      scrollViewRef.current.scrollTo({
        x: newIndex * SCREEN_WIDTH,
        y: 0,
        animated: true,
      });
      setScrollIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (scrollIndex < totalPages - 1 && scrollViewRef.current) {
      const newIndex = scrollIndex + 1;
      scrollViewRef.current.scrollTo({
        x: newIndex * SCREEN_WIDTH,
        y: 0,
        animated: true,
      });
      setScrollIndex(newIndex);
    }
  };

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / SCREEN_WIDTH);
    setScrollIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      {(set == 1 || set == 3) && (
        <>
          <Text style={styles.question}>{question}</Text>
          <View style={styles.optionsContainer}>
            {options.map((option, index) => {
              const isLastOdd =
                options.length % 2 !== 0 && index === options.length - 1;
              return (
                <Pressable
                  key={option.id}
                  onPress={() => handlePress(option)}
                  style={[
                    [styles.radioButtonWrapper, { width: "43%" }],
                    set == 3 && isLastOdd && styles.fullWidthOption, // Full width for last odd item in Set 3
                  ]}
                >
                  <View
                    style={[
                      styles.radioButtonContainer,
                      selectedOption === option.value &&
                        styles.selectedContainer,
                    ]}
                  >
                    <Text
                      style={[
                        styles.radioButtonLabel,
                        selectedOption === option.value && styles.selectedLabel,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </>
      )}

      {set == 2 && (
        <>
          <Text style={styles.question}>{question}</Text>
          <View style={styles.scrollContainer}>
            {/* Left Button */}
            <Pressable
              onPress={scrollLeft}
              disabled={scrollIndex === 0}
              style={styles.navButton}
            >
              <AntDesign
                name="left"
                size={20}
                color={scrollIndex === 0 ? "#ccc" : "#333"}
              />
            </Pressable>

            {/* ScrollView with Pages */}
            <ScrollView
              ref={scrollViewRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              style={styles.scrollView}
              onScroll={handleScroll} // Detect scrolling
              scrollEventThrottle={16} // Optimize performance
              snapToInterval={SCREEN_WIDTH}
            >
              {Array.from({ length: totalPages }, (_, pageIndex) => (
                <View key={pageIndex} style={styles.page}>
                  {options
                    .slice(
                      pageIndex * OPTIONS_PER_PAGE,
                      (pageIndex + 1) * OPTIONS_PER_PAGE
                    )
                    .map((option) => (
                      <Pressable
                        key={option.id}
                        onPress={() => handlePress(option)}
                        style={styles.radioButtonWrapper}
                      >
                        <View
                          style={[
                            styles.radioButtonContainer,
                            selectedOption === option.value &&
                              styles.selectedContainer,
                          ]}
                        >
                          <Text
                            style={[
                              styles.radioButtonLabel,
                              selectedOption === option.value &&
                                styles.selectedLabel,
                            ]}
                          >
                            {option.label}
                          </Text>
                        </View>
                      </Pressable>
                    ))}
                </View>
              ))}
            </ScrollView>

            {/* Right Button */}
            <Pressable
              onPress={scrollRight}
              disabled={scrollIndex === totalPages - 1}
              style={styles.navButton}
            >
              <AntDesign
                name="right"
                size={20}
                color={scrollIndex === totalPages - 1 ? "#ccc" : "#333"}
              />
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    marginVertical: 5,
  },
  question: {
    fontSize: 17,
    fontFamily: FontFamily.Inter_Medium,
    color: "#333",
    textAlign: "center",
    marginBottom: 10
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: SCREEN_WIDTH * 0.82,
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  scrollView: {
    width: SCREEN_WIDTH * 0.82,
    overflow: "hidden",
  },
  page: {
    width: SCREEN_WIDTH,
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  navButton: {
    padding: 0,
  },
  radioButtonWrapper: {
    width: "36%", // Default: Two-column layout
    marginHorizontal: "2.5%",
    marginVertical: 5,
  },
  fullWidthOption: {
    width: "90%", // Full width if alone in Set 3
  },
  radioButtonContainer: {
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: Color.bcBackground,
    borderRadius: 5,
    borderColor: Color.bcHeader,
    borderWidth: 0.5,
  },
  selectedContainer: {
    backgroundColor: Color.bcHeader,
    borderWidth: 0,
  },
  radioButtonLabel: {
    fontSize: 16,
    color: "#333",
    fontFamily: FontFamily.Inter_Regular,
  },
  selectedLabel: {
    color: "#fff",
  },
});

export default QL2Options;
