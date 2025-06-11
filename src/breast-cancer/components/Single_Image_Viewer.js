
import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

/**
 * @deprecated This component is deprecated as of May 2025.
 * Please use Image_Preview_Modal from src/components/Image_Preview_Modal.js instead.
 */

const Single_Image_Viewer = ({ visible, image, onClose }) => {
  const [showButtons, setShowButtons] = useState(true);
  
  useEffect(() => {
    console.warn('Single_Image_Viewer is deprecated. Please use Image_Preview_Modal from src/components/Image_Preview_Modal.js instead.');
  }, []);

  // Zoom states
  const scale = useSharedValue(1);

  // Toggle buttons on tap
  const toggleButtons = () => {
    setShowButtons((prev) => !prev);
  };

  // Pinch-to-Zoom Gesture
  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = Math.max(1, Math.min(event.scale, 3)); // Prevents over-zooming
    })
    .onEnd(() => {
      if (scale.value < 1) {
        scale.value = withSpring(1);
      }
    });

  // Double-Tap to Reset Zoom
  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      scale.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        {/* Tap anywhere to show/hide buttons */}
        <TouchableOpacity
          activeOpacity={1}
          style={styles.fullscreenTouchArea}
          onPress={toggleButtons}
        />

        {/* Close Button */}
        {showButtons && (
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={30} color="#ccc" />
          </TouchableOpacity>
        )}

        {/* Image Display */}
        <View style={styles.imageWrapper}>
          {/* Pinch & Double-Tap Gesture Handling */}
          <GestureDetector
            gesture={Gesture.Simultaneous(pinchGesture, doubleTapGesture)}
          >
            <Animated.View style={styles.imageContainer}>
              {/* Main Image */}
              <Animated.Image
                source={{ uri: image }}
                style={[styles.image, animatedStyle]}
                resizeMode="contain"
              />
            </Animated.View>
          </GestureDetector>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenTouchArea: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
    borderRadius: 10,
    zIndex: 2,
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  imageContainer: {
    width: width,
    height: height * 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Single_Image_Viewer;
