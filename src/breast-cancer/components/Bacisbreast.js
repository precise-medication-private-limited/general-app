import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Color, FontFamily } from "../../utils/GlobalStyles";

const Bacisbreast = ({
  selectedLeft,
  selectedRight,
  language = "English",
  onLocationsUpdate = () => { },
}) => {
  const [selectedLeftloc, setSelectedLeftloc] = useState(selectedLeft);
  const [selectedRightloc, setSelectedRightloc] = useState(selectedRight);

  const [activeLayerLeft, setActiveLayerLeft] = useState(() => {
    switch (selectedLeft) {
      case "Increased":
        return "leftincrease";
      case "Decreased":
        return "leftdecrease";
      default:
        return "leftnormal";
    }
  });

  const showChange = (variable, language) => {
    let result;

    switch (variable) {
      case "Normal":
        result =
          language === "bn"
            ? "স্বাভাবিক"
            : language === "as"
              ? "স্বাভাৱিক"
              : language === "hi"
                ? "सामान्य"
                : "Normal";
        break;
      case "Increased":
        result =
          language === "bn"
            ? "বেড়েছে"
            : language === "as"
              ? "বঢ়িছে"
              : language === "hi"
                ? "बढ़ा है"
                : "Increased";
        break;
      case "Decreased":
        result =
          language === "bn"
            ? "কমেছে"
            : language === "as"
              ? "কমিছে"
              : language === "hi"
                ? "घट गया"
                : "Decreased";
        break;
    }

    return result;
  };

  const [activeLayerRight, setActiveLayerRight] = useState(() => {
    switch (selectedRight) {
      case "Increased":
        return "rightincrease";
      case "Decreased":
        return "rightdecrease";
      default:
        return "rightnormal";
    }
  });
  const [sizechangeleft, setsizechangeleft] = useState(() => {
    switch (selectedLeft) {
      case "Increased":
        return "Increased";
      case "Decreased":
        return "Decreased";
      default:
        return "Normal";
    }
  }); // New variable to track Increased or Decreased

  const [sizechangeright, setsizechangeright] = useState(() => {
    switch (selectedRight) {
      case "Increased":
        return "Increased";
      case "Decreased":
        return "Decreased";
      default:
        return "Normal";
    }
  }); // New variable to track Increased or Decreased

  const [locations, setLocations] = useState([]);
  // UseEffect to notify parent of locations updates
  useEffect(() => {
    setLocations([selectedLeftloc, selectedRightloc]);
  }, [selectedLeftloc, selectedRightloc]);

  useEffect(() => {
    onLocationsUpdate(locations);
  }, [locations]);

  const handleLayerChangeleft = (layer) => {
    setActiveLayerLeft(layer);
    let newLeftLoc = layer; // Assuming 'layer' refers to the left location
    setSelectedLeftloc(newLeftLoc);

    // Logic for size change tracking
    if (layer === "leftincrease") setsizechangeleft("Increased");
    else if (layer === "leftdecrease") setsizechangeleft("Decreased");
    else if (layer === "leftnormal") setsizechangeleft("Normal");
    else setsizechangeleft("");
  };

  const handleLayerChangeright = (layer) => {
    setActiveLayerRight(layer);
    let newRightLoc = layer; // Assuming 'layer' refers to the right location
    setSelectedRightloc(newRightLoc);

    if (layer === "rightincrease") setsizechangeright("Increased");
    else if (layer === "rightdecrease") setsizechangeright("Decreased");
    else if (layer === "rightnormal") setsizechangeright("Normal");
    else setsizechangeright("");
  };

  // Function to check if the left layer is selected
  const isSelectedLeft = (layer) => {
    return activeLayerLeft === layer;
  };

  // Function to check if the right layer is selected
  const isSelectedRight = (layer) => {
    return activeLayerRight === layer;
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
        leftdecrease:
          language === "en"
            ? "Decreased"
            : language === "as"
              ? "কমিছে"
              : language === "hi"
                ? "घट गया"
                : "কমেছে",

        leftincrease:
          language === "en"
            ? "Increased"
            : language === "as"
              ? "বঢ়িছে"
              : language === "hi"
                ? "बढ़ा है"
                : "বেড়েছে",

        rightdecrease:
          language === "en"
            ? "Decreased"
            : language === "as"
              ? "কমিছে"
              : language === "hi"
                ? "घट गया"
                : "কমেছে",

        rightincrease:
          language === "en"
            ? "Increased"
            : language === "as"
              ? "বঢ়িছে"
              : language === "hi"
                ? "बढ़ा है"
                : "বেড়েছে",

        leftnormal:
          language === "en"
            ? "Normal"
            : language === "as"
              ? "স্বাভাৱিক"
              : language === "hi"
                ? "सामान्य"
                : "স্বাভাবিক",

        rightnormal:
          language === "en"
            ? "Normal"
            : language === "as"
              ? "স্বাভাৱিক"
              : language === "hi"
                ? "सामान्य"
                : "স্বাভাবিক",
      };

      return translations[key];
    };

    return (
      <View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonLeft]}
            onPress={() => handleLayerChangeleft("leftnormal")}
          >
            {isSelectedLeft("leftnormal") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>{getButtonText("leftnormal")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonRight]}
            onPress={() => handleLayerChangeright("rightnormal")}
          >
            {isSelectedRight("rightnormal") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("rightnormal")}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonLeft]}
            onPress={() => handleLayerChangeleft("leftincrease")}
          >
            {isSelectedLeft("leftincrease") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("leftincrease")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonRight]}
            onPress={() => handleLayerChangeright("rightincrease")}
          >
            {isSelectedRight("rightincrease") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("rightincrease")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonLeft]}
            onPress={() => handleLayerChangeleft("leftdecrease")}
          >
            {isSelectedLeft("leftdecrease") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("leftdecrease")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...commonProps}
            style={[styles.touchableButtonRight]}
            onPress={() => handleLayerChangeright("rightdecrease")}
          >
            {isSelectedRight("rightdecrease") && (
              <View style={styles.overlay2Effect} />
            )}
            <Text style={styles.buttonText}>
              {getButtonText("rightdecrease")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      {/* Display variable value */}
      <View style={styles.lekharview}>
        <Text style={styles.text}>
          {language === "en"
            ? "Left"
            : language === "bn"
              ? "বাম"
              : language === "as"
                ? "বাম"
                : language === "hi"
                  ? "बाएं"
                  : "Left"}
        </Text>
        <Text style={styles.text}>
          {language === "en"
            ? "Right"
            : language === "bn"
              ? "ডান"
              : language === "as"
                ? "ডান"
                : language === "hi"
                  ? "दाएं"
                  : "Right"}
        </Text>
      </View>

      <View style={styles.boroview}>
        <View style={styles.view}>
          {/* Middle Layer */}
          <View
            style={[
              styles.layer,
              activeLayerLeft === "leftnormal" ? { zIndex: 3 } : { zIndex: 2 },
            ]}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Basiccr.png")}
            />
          </View>

          {/* Top Layer */}
          <View
            style={[
              styles.layer,
              activeLayerLeft === "leftdecrease"
                ? { zIndex: 3 }
                : { zIndex: 1 },
            ]}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Basic2cr.png")}
            />
          </View>

          {/* Bottom Layer */}
          <View
            style={[
              styles.layer,
              activeLayerLeft === "leftincrease"
                ? { zIndex: 3 }
                : { zIndex: 1 },
            ]}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Basic3cr.png")}
            />
          </View>

          {/* TouchableOpacity for Bottom Layer */}
          <TouchableOpacity
            style={styles.left1}
            onPress={() => handleLayerChangeleft("leftdecrease")}
          ></TouchableOpacity>

          {/* TouchableOpacity for Middle Layer (Disabled) */}
          <TouchableOpacity
            style={styles.left2}
            onPress={() => handleLayerChangeleft("leftnormal")}
            disabled={false}
          ></TouchableOpacity>

          {/* TouchableOpacity for Top Layer */}
          <TouchableOpacity
            style={styles.left3}
            onPress={() => handleLayerChangeleft("leftincrease")}
          ></TouchableOpacity>
        </View>
        <View style={styles.view}>
          {/* Middle Layer */}
          <View
            style={[
              styles.layer,
              activeLayerRight === "rightnormal"
                ? { zIndex: 3 }
                : { zIndex: 2 },
            ]}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Basicc.png")}
            />
          </View>

          {/* Top Layer */}
          <View
            style={[
              styles.layer,
              activeLayerRight === "rightdecrease"
                ? { zIndex: 3 }
                : { zIndex: 1 },
            ]}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Basic2c.png")}
            />
          </View>

          {/* Bottom Layer */}
          <View
            style={[
              styles.layer,
              activeLayerRight === "rightincrease"
                ? { zIndex: 3 }
                : { zIndex: 1 },
            ]}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Basic3c.png")}
            />
          </View>

          {/* TouchableOpacity for Bottom Layer */}
          <TouchableOpacity
            style={styles.right1}
            onPress={() => handleLayerChangeright("rightincrease")}
          ></TouchableOpacity>

          {/* TouchableOpacity for Middle Layer (Disabled) */}
          <TouchableOpacity
            style={styles.right2}
            onPress={() => handleLayerChangeright("rightnormal")}
            disabled={false}
          ></TouchableOpacity>

          {/* TouchableOpacity for Top Layer */}
          <TouchableOpacity
            style={styles.right3}
            onPress={() => handleLayerChangeright("rightdecrease")}
          ></TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Text style={styles.text2}>{showChange(sizechangeleft, language)}</Text>
        <Text style={styles.text2}>
          {showChange(sizechangeright, language)}
        </Text>
      </View>
      {renderButtons()}
    </View>
  );
};

export default Bacisbreast;

const styles = StyleSheet.create({
  layer: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  view: {
    backgroundColor: "transparent",
    height: "100%",
    width: "50%",
  },
  lekharview: {
    // backgroundColor: "red",
    height: 50,
    width: 350,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  boroview: {
    // backgroundColor: "red",
    height: 200,
    width: 350,
    alignSelf: "center",
    // marginTop: 100,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  left1: {
    backgroundColor: "transparent",
    zIndex: 6,
    width: 50,
    height: 175,
    position: "absolute",
    top: 15,
    bottom: 0,
    right: 28,
    borderTopLeftRadius: 155,
    borderBottomLeftRadius: 148,
  },
  left2: {
    backgroundColor: "transparent",
    zIndex: 5,
    width: 85,
    height: 175,
    position: "absolute",
    top: 15,
    bottom: 0,
    right: 28,
    borderTopLeftRadius: 125,
    borderBottomLeftRadius: 128,
  },

  left3: {
    backgroundColor: "transparent",
    zIndex: 4,
    width: 128,
    height: 167,
    position: "absolute",
    top: 20,
    bottom: 0,
    right: 28,
    borderTopLeftRadius: 255,
    borderBottomLeftRadius: 258,
  },
  right1: {
    backgroundColor: "transparent",
    zIndex: 4,
    width: 128,
    height: 167,
    position: "absolute",
    top: 20,
    bottom: 0,
    left: 28,
    borderTopRightRadius: 255,
    borderBottomRightRadius: 258,
  },
  right2: {
    backgroundColor: "transparent",
    zIndex: 5,
    width: 85,
    height: 175,
    position: "absolute",
    top: 15,
    bottom: 0,
    left: 28,
    borderTopRightRadius: 125,
    borderBottomRightRadius: 128,
  },
  right3: {
    backgroundColor: "transparent",
    zIndex: 6,
    width: 50,
    height: 175,
    position: "absolute",
    top: 15,
    bottom: 0,
    left: 28,
    borderTopRightRadius: 155,
    borderBottomRightRadius: 148,
  },
  text2: {
    fontSize: 20,
    // paddingHorizontal: 50,
    paddingVertical: 10,
    width: "49%",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 50,
    // marginTop: 20,
    paddingVertical: 10,
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 5,
    width: "100%",
    alignSelf: "center",
  },
  touchableButtonLeft: {
    paddingVertical: 10,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#f1a893",
  },
  touchableButtonRight: {
    paddingVertical: 10,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
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
    justifyContent: "center",
    marginVertical: 8,
  },
  cleartouch: {
    width: "45%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: Color.patientNotificationBoxColor,
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 2,
  },
  overlay2Effect: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 2,
  },
});
