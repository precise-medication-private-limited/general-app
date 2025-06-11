import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Color, FontFamily, Border } from "../../utils/GlobalStyles";

const BreastLocation2 = ({
  onLeftLocationSend = () => { },
  onRightLocationSend = () => { },
  selectedLeftLocations = [],
  selectedRightLocations = [],
  language = "English",
  onLocationsUpdate = () => { },
}) => {
  const [selectedImagesLeft, setSelectedImagesLeft] = useState(
    selectedLeftLocations
  );
  const [selectedImagesRight, setSelectedImagesRight] = useState(
    selectedRightLocations
  );
  const [locations, setLocations] = useState([]);

  // UseEffect to watch both arrays
  useEffect(() => {
    if (selectedImagesLeft.length > 0 || selectedImagesRight.length > 0) {
      setLocations([...selectedImagesLeft, ...selectedImagesRight]);
    }
  }, [selectedImagesLeft, selectedImagesRight]);
  const [selectedTab, setSelectedTab] = useState("left");

  // UseEffect to notify parent of locations updates
  useEffect(() => {
    if (locations.length >= 0) {
      onLocationsUpdate(locations); // Send locations state to parent
    }
  }, [locations]);

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };
  const getSelectedSide = () => {
    const hasLeft = selectedImagesLeft.length > 0;
    const hasRight = selectedImagesRight.length > 0;

    if (hasLeft && hasRight) {
      return "both";
    } else if (hasLeft) {
      return "left";
    } else if (hasRight) {
      return "right";
    }
    return "none"; // In case none are selected
  };

  const handlePressLeft = (image) => {
    setSelectedImagesLeft((prevSelectedImagesLeft) => {
      let updatedLeft;
      if (prevSelectedImagesLeft.includes(image)) {
        // If image exists, remove it
        updatedLeft = prevSelectedImagesLeft.filter((img) => img !== image);
      } else {
        // If image doesn't exist, add it
        updatedLeft = [...prevSelectedImagesLeft, image];
      }

      // Update both selected images and locations
      setLocations([...updatedLeft, ...selectedImagesRight]);

      // Send updated left images to parent
      onLeftLocationSend(updatedLeft);
      return updatedLeft;
    });
  };

  const handlePressRight = (image) => {
    setSelectedImagesRight((prevSelectedImagesRight) => {
      let updatedRight;
      if (prevSelectedImagesRight.includes(image)) {
        // If image exists, remove it
        updatedRight = prevSelectedImagesRight.filter((img) => img !== image);
      } else {
        // If image doesn't exist, add it
        updatedRight = [...prevSelectedImagesRight, image];
      }

      // Update both selected images and locations
      setLocations([...selectedImagesLeft, ...updatedRight]);

      // Send updated right images to parent
      onRightLocationSend(updatedRight);
      return updatedRight;
    });
  };

  const isSelectedLeft = (image) => {
    return selectedImagesLeft.includes(image);
  };

  const isSelectedRight = (image) => {
    return selectedImagesRight.includes(image);
  };
  const handlePressClear = () => {
    setSelectedImagesLeft([]);
    setSelectedImagesRight([]);
    setLocations([]);
    onLeftLocationSend([]);
    onRightLocationSend([]);
  };

  const renderButtons = () => {
    const commonProps = {
      style: styles.touchableButtonUR,
      onPress: () => { },
      imageSrc: null,
      overlayStyle: styles.overlay2Effect,
    };

    const getButtonText = (key) => {
      const translations = {
        Leftupperouter:
          language === "en"
            ? "Upper Outer"
            : language === "bn"
              ? "ওপরে বাইরে"
              : language === "as"
                ? "উপৰি বাহিৰ"
                : "ऊपर बाहर",

        Leftupperinner:
          language === "en"
            ? "Upper Inner"
            : language === "bn"
              ? "ওপরে ভিতরে"
              : language === "as"
                ? "উপৰি ভিতৰ"
                : "ऊपर भीतर",

        Rightupperinner:
          language === "en"
            ? "Upper Inner"
            : language === "bn"
              ? "ওপরে ভিতরে"
              : language === "as"
                ? "উপৰি ভিতৰ"
                : "ऊपर भीतर",

        Rightupperouter:
          language === "en"
            ? "Upper Outer"
            : language === "bn"
              ? "ওপরে বাইরে"
              : language === "as"
                ? "উপৰি বাহিৰ"
                : "ऊपर बाहर",

        Leftlowerouter:
          language === "en"
            ? "Lower Outer"
            : language === "bn"
              ? "নিচে বাইরে"
              : language === "as"
                ? "নিচে বাহিৰ"
                : "नीचे बाहर",

        Leftlowerinner:
          language === "en"
            ? "Lower Inner"
            : language === "bn"
              ? "নিচে ভিতরে"
              : language === "as"
                ? "নিচে ভিতৰ"
                : "नीचे भीतर",

        Rightlowerinner:
          language === "en"
            ? "Lower Inner"
            : language === "bn"
              ? "নিচে ভিতরে"
              : language === "as"
                ? "নিচে ভিতৰ"
                : "नीचे भीतर",

        Rightlowerouter:
          language === "en"
            ? "Lower Outer"
            : language === "bn"
              ? "নিচে বাইরে"
              : language === "as"
                ? "নিচে বাহিৰ"
                : "नीचे बाहर",

        RightNipple:
          language === "en"
            ? "Nipple"
            : language === "bn"
              ? "স্তনবৃন্ত"
              : language === "as"
                ? "স্তনবৃন্ত"
                : "निपल",

        RightAreola:
          language === "en"
            ? "Areola"
            : language === "bn"
              ? "বৃন্তবৃত্ত"
              : language === "as"
                ? "বৃন্তবৃত্ত"
                : "एरियोल",

        LeftNipple:
          language === "en"
            ? "Nipple"
            : language === "bn"
              ? "স্তনবৃন্ত"
              : language === "as"
                ? "স্তনবৃন্ত"
                : "निपल",

        LeftAreola:
          language === "en"
            ? "Areola"
            : language === "bn"
              ? "বৃন্তবৃত্ত"
              : language === "as"
                ? "বৃন্তবৃত্ত"
                : "एरियोल",
      };

      return translations[key];
    };

    return (
      <View style={{ marginTop: "2%" }}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonLeft]}
            onPress={() => handlePressLeft("LeftNipple")}
          >
            {isSelectedLeft("LeftNipple") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>{getButtonText("LeftNipple")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonRight]}
            onPress={() => handlePressRight("RightNipple")}
          >
            {isSelectedRight("RightNipple") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("RightNipple")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonLeft]}
            onPress={() => handlePressLeft("LeftAreola")}
          >
            {isSelectedLeft("LeftAreola") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>{getButtonText("LeftAreola")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonRight]}
            onPress={() => handlePressRight("RightAreola")}
          >
            {isSelectedRight("RightAreola") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("RightAreola")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonLeft]}
            onPress={() => handlePressLeft("Leftupperouter")}
          >
            {isSelectedLeft("Leftupperouter") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("Leftupperouter")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonRight]}
            onPress={() => handlePressRight("Rightupperouter")}
          >
            {isSelectedRight("Rightupperouter") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("Rightupperouter")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonLeft]}
            onPress={() => handlePressLeft("Leftupperinner")}
          >
            {isSelectedLeft("Leftupperinner") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("Leftupperinner")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonRight]}
            onPress={() => handlePressRight("Rightupperinner")}
          >
            {isSelectedRight("Rightupperinner") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("Rightupperinner")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonLeft]}
            onPress={() => handlePressLeft("Leftlowerouter")}
          >
            {isSelectedLeft("Leftlowerouter") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("Leftlowerouter")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonRight]}
            onPress={() => handlePressRight("Rightlowerouter")}
          >
            {isSelectedRight("Rightlowerouter") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("Rightlowerouter")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonLeft]}
            onPress={() => handlePressLeft("Leftlowerinner")}
          >
            {isSelectedLeft("Leftlowerinner") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("Leftlowerinner")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonRight]}
            onPress={() => handlePressRight("Rightlowerinner")}
          >
            {isSelectedRight("Rightlowerinner") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("Rightlowerinner")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.clear}>
          <TouchableOpacity
            style={styles.cleartouch}
            onPress={() => handlePressClear()}
          >
            <Text style={[styles.buttonText, { marginRight: 10 }]}>
              {language === "en"
                ? "Clear All"
                : language === "bn"
                  ? "মুছে দিন"
                  : language === "as"
                    ? "মচি পেলোৱা"
                    : language === "hi"
                      ? "साफ़ करें"
                      : ""}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ paddingTop: "5%" }}>
      {/* Tab navigation for Left and Right */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {/* Left Part */}
        {/* <TouchableWithoutFeedback onPress={() => handleTabPress("left")}> */}
        <View style={[styles.leftPart]}>
          <View style={styles.imageContainer}>
            <TouchableWithoutFeedback
              style={styles.imageTouchable}
              onPress={() => handleTabPress("left")}
            >
              <View style={styles.imageWrapper}>
                <Image
                  style={styles.image2}
                  source={
                    language === "en"
                      ? require("../../assets/Breast JoinedEngNb.png")
                      : language === "bn"
                        ? require("../../assets/Breast JoinedBengNb.png")
                        : language === "as"
                          ? require("../../assets/Breast JoinedAssameseNb.png")
                          : language === "hi"
                            ? require("../../assets/Breast JoinedHindiNb.png")
                            : require("../../assets/Breast JoinedEngNb.png")
                  }
                />
                <Image
                  style={styles.image1}
                  source={require("../../assets/BvCheckL.png")}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity style={[styles.imageTouchable, styles.overlay1]}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../../assets/BRmid.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay1]}
              onPress={() => handlePressLeft("LeftAreola")}
            >
              {isSelectedLeft("LeftAreola") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.imageTouchable, styles.overlay2]}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../../assets/Nipple.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay2]}
              onPress={() => handlePressLeft("LeftNipple")}
            >
              {isSelectedLeft("LeftNipple") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay3]}
              onPress={() => handlePressLeft("Leftupperouter")}
            >
              {isSelectedLeft("Leftupperouter") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay4]}
              onPress={() => handlePressLeft("Leftupperinner")}
            >
              {isSelectedLeft("Leftupperinner") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay5]}
              onPress={() => handlePressLeft("Leftlowerouter")}
            >
              {isSelectedLeft("Leftlowerouter") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay6]}
              onPress={() => handlePressLeft("Leftlowerinner")}
            >
              {isSelectedLeft("Leftlowerinner") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            {/* </View> */}
            {/* </View> */}
            {/* </TouchableWithoutFeedback> */}

            {/* Right Part */}
            {/* <View style={[styles.rightPart]}> */}
            {/* <View style={styles.imageContainer}> */}

            {/* <View style={styles.imageWrapper}> */}
            {/* <Image
                  style={styles.image2}
                  source={
                    language === "en"
                      ? require("../../assets/RightBreastCheck_Eng2.png")
                      : require("../../assets/RightBreastCheck_Beng.png")
                  }
                /> */}
            <Image
              style={styles.image11}
              source={require("../../assets/BvCheckR.png")}
            />
            {/* </View>  */}
            {/* Image touchable areas */}
            <TouchableOpacity style={[styles.imageTouchable, styles.overlay11]}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../../assets/BRmid.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay11]}
              onPress={() => handlePressRight("RightAreola")}
            >
              {isSelectedRight("RightAreola") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.imageTouchable, styles.overlay22]}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../../assets/Nipple.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay22]}
              onPress={() => handlePressRight("RightNipple")}
            >
              {isSelectedRight("RightNipple") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay33]}
              onPress={() => handlePressRight("Rightupperinner")}
            >
              {isSelectedRight("Rightupperinner") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay44]}
              onPress={() => handlePressRight("Rightupperouter")}
            >
              {isSelectedRight("Rightupperouter") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay55]}
              onPress={() => handlePressRight("Rightlowerinner")}
            >
              {isSelectedRight("Rightlowerinner") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageTouchable, styles.overlay66]}
              onPress={() => handlePressRight("Rightlowerouter")}
            >
              {isSelectedRight("Rightlowerouter") && (
                <View style={styles.overlay1Effect} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {renderButtons()}
    </View>
  );
};

export default BreastLocation2;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  //Navigation Tab
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
    // backgroundColor: "#f5f5f5",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 2,
  },
  activeTab: {
    borderBottomWidth: 4,
    borderBottomColor: Color.patientHeaderColor,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  inactiveTab: {
    backgroundColor: "#e0e0e0",
  },
  tabText: {
    fontSize: 16,
    // fontWeight: "600",
  },
  activeTabText: {
    // color: Color.patientHeaderColor,
  },
  inactiveTabText: {
    color: "#666",
  },

  imageContainer: {
    flexShrink: 1,
    width: 380,
    height: 230,
  },
  imageTouchable: {
    width: "100%",
    height: "80%",
    overflow: "hidden",
    position: "absolute",
  },
  overlay1: {
    top: 110.5,
    left: 80,
    borderRadius: 200,
    height: 48,
    width: 46,
    zIndex: 1,
  },
  overlay2: {
    top: 123.5,
    left: 92,
    borderRadius: 200,
    height: 22,
    width: 22,
    zIndex: 2,
  },
  overlay3: {
    top: 54.5,
    left: 29,
    borderTopLeftRadius: 230,
    height: 78.5,
    width: 73.5,
  },
  overlay4: {
    top: 54.5,
    left: 104,
    borderTopRightRadius: 190,
    height: 80,
    width: 86.5,
  },
  overlay5: {
    top: 133.5,
    left: 33.5,
    borderBottomLeftRadius: 80,
    height: 75.5,
    width: 69.5,
  },
  overlay6: {
    top: 133,
    left: 103.5,
    borderBottomRightRadius: 68,
    height: 75,
    width: 87,
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 15,
    borderTopRightRadius: 0,
  },
  image1: {
    marginTop: 31,
    marginLeft: 5,
    width: "54%",
    height: "105.5%",
    resizeMode: "stretch",
    position: "absolute",
    top: -18,
    left: 0,
    zIndex: 2,
    flexShrink: 1,
  },
  image11: {
    marginTop: 31,
    width: "54%",
    height: "105.5%",
    resizeMode: "stretch",
    position: "absolute",
    top: -18,
    left: 177,
    zIndex: 1,
    flexShrink: 1,
  },
  image2: {
    flexShrink: 1,
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  overlay1Effect: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  overlay2Effect: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 2,
  },

  overlay11: {
    position: "absolute",
    top: 110.5,
    left: 253,
    right: 0,
    bottom: 0,
    zIndex: 2,
    borderRadius: 200,
    height: 48,
    width: 46,
    borderColor: "transparent",
    borderWidth: 1,
    overflow: "hidden",
  },
  overlay22: {
    position: "absolute",
    top: 123.5,
    left: 265.5,
    right: 0,
    bottom: 0,
    zIndex: 3,
    borderRadius: 200,
    height: 22,
    width: 22,
    borderColor: "transparent",
    borderWidth: 1,
  },
  overlay33: {
    position: "absolute",
    top: 54.5,
    left: 190,
    right: 0,
    bottom: 0,
    zIndex: 1,
    borderTopLeftRadius: 200,
    height: 80.5,
    width: 86,
    borderColor: "transparent",
    borderWidth: 1,
  },
  overlay44: {
    position: "absolute",
    top: 54.5,
    left: 274,
    right: 0,
    bottom: 0,
    zIndex: 1,
    borderTopRightRadius: 200,
    height: 80.5,
    width: 77,
    borderColor: "transparent",
    borderWidth: 1,
  },
  overlay55: {
    position: "absolute",
    top: 132,
    left: 190,
    right: 0,
    bottom: 0,
    zIndex: 1,
    borderBottomLeftRadius: 68,
    height: 77,
    width: 87,
    borderColor: "transparent",
    borderWidth: 1,
  },
  overlay66: {
    position: "absolute",
    top: 132.5,
    left: 274,
    right: 0,
    bottom: 0,
    zIndex: 1,
    borderBottomRightRadius: 190,
    height: 78.5,
    width: 73,
    borderColor: "transparent",
    borderWidth: 1,
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
    width: "100%",
    alignSelf: "center",
    columnGap: "9%",
  },
  touchableButtonLeft: {
    // backgroundColor: "#f8d0ce",
    // backgroundColor: "#f1a893",
    paddingVertical: 8,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#f1a893",
  },
  touchableButtonRight: {
    // backgroundColor: "#f8d0ce",
    // backgroundColor: "#90c5c0",
    paddingVertical: 8,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#90c5c0",
  },
  buttonText: {
    color: "#333",
    fontSize: 14,
    fontFamily: FontFamily.Montserrat_Regular,
  },
  clear: {
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  cleartouch: {
    width: "50%",
    justifyContent: "center",
    backgroundColor: Color.bcNotification,
    flexDirection: "row",
    paddingVertical: 8,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Color.bcHeader,
  },
});
