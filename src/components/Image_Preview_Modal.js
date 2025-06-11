import React, { useState, useEffect, useRef } from "react";
import { View, Image, TouchableOpacity, Text, Modal, StyleSheet, Dimensions, Platform, StatusBar, Animated as RNAnimated } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, runOnJS } from "react-native-reanimated";
import { Color } from "../utils/GlobalStyles";

const { height, width } = Dimensions.get("window");

const Image_Preview_Modal = ({ visible, images, onClose, onDelete, onAdd, hideActions = false }) => {

  console.log("Image_Preview_Modal rendered with images:", images);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const fadeAnim = useRef(new RNAnimated.Value(1)).current;
  const translateY = useSharedValue(0);
  
  // Zoom states
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateMainY = useSharedValue(0);
  // Toggle buttons on tap
  const toggleButtons = () => {
    setShowButtons((prev) => !prev);
    
    // Animate button fade
    RNAnimated.timing(fadeAnim, {
      toValue: showButtons ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Change images
  const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  const handleDeletePress = () => {
    setShowDeleteAlert(true);
  };

  const handleDelete = () => {
    if (images.length > 1) {
      onDelete(currentIndex);
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    } else {
      onDelete(currentIndex); // Delete the last image
      onClose(); // Close the modal if no images left
    }
    setShowDeleteAlert(false);
  };

  const cancelDelete = () => {
    setShowDeleteAlert(false);
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

  // Pan gesture for moving the image when zoomed
  const panGesture = Gesture.Pan()
    .enabled(scale.value > 1)
    .onUpdate((event) => {
      if (scale.value > 1) {
        // Calculate allowed pan boundaries based on zoom level
        const maxX = (scale.value - 1) * width / 2;
        const maxY = (scale.value - 1) * height / 2;
        
        // Restrict panning to boundaries
        translateX.value = Math.min(maxX, Math.max(-maxX, translateX.value + event.changeX));
        translateMainY.value = Math.min(maxY, Math.max(-maxY, translateMainY.value + event.changeY));
      }
    })
    .onEnd(() => {
      // Spring back if over boundaries
      const maxX = (scale.value - 1) * width / 2;
      const maxY = (scale.value - 1) * height / 2;
      
      if (Math.abs(translateX.value) > maxX) {
        translateX.value = withSpring(translateX.value > 0 ? maxX : -maxX);
      }
      
      if (Math.abs(translateMainY.value) > maxY) {
        translateMainY.value = withSpring(translateMainY.value > 0 ? maxY : -maxY);
      }
    });

  // Double-Tap to Reset Zoom
  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      scale.value = withSpring(1);
      translateX.value = withSpring(0);
      translateMainY.value = withSpring(0);
      runOnJS(toggleButtons)();
    });
    
  // Swipe to change images
  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (scale.value <= 1) { // Only allow swiping when not zoomed
        translateY.value = event.translationX;
      }
    })
    .onEnd((event) => {
      if (scale.value <= 1) {
        const threshold = width / 3;
        if (event.translationX < -threshold && images.length > 1) {
          translateY.value = withTiming(-width, { duration: 250 }, () => {
            translateY.value = width;
            runOnJS(nextImage)();
            translateY.value = withTiming(0, { duration: 250 });
          });
        } else if (event.translationX > threshold && images.length > 1) {
          translateY.value = withTiming(width, { duration: 250 }, () => {
            translateY.value = -width;
            runOnJS(prevImage)();
            translateY.value = withTiming(0, { duration: 250 });
          });
        } else {
          translateY.value = withTiming(0);
        }
      }
    });
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: translateX.value },
      { translateY: translateMainY.value }
    ],
  }));
  
  const imageSlideStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateY.value }],
  }));

  useEffect(() => {
    if (visible) {
      setCurrentIndex(0); // Reset to the first image when modal opens
      setImageError(false); // Reset error state when modal opens
    }
  }, [visible]);

  // Add debugging logs for image source
  useEffect(() => {
    if (visible && images && images.length > 0) {
      console.log("Image viewer displaying image:", images[currentIndex]);
    }
  }, [visible, images, currentIndex]);

  return (
    <Modal 
      transparent 
      visible={visible} 
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        {/* Tap anywhere to show/hide buttons */}
        <TouchableOpacity activeOpacity={1} style={styles.fullscreenTouchArea} onPress={toggleButtons} />

        <View style={styles.gradientOverlay} />

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <View style={styles.buttonBackground}>
            <Icon name="close" size={26} color="#fff" />
          </View>
        </TouchableOpacity>

        <View style={styles.imageWrapper}>
          {images.length > 1 && (
            <TouchableOpacity style={[styles.navButton, styles.leftNavButton]} onPress={prevImage}>
              <View style={styles.buttonBackground}>
                <Icon name="chevron-back" size={32} color="#fff" />
              </View>
            </TouchableOpacity>
          )}
          
          <GestureDetector gesture={Gesture.Simultaneous(pinchGesture, panGesture, doubleTapGesture, swipeGesture)}>
            <Animated.View style={[styles.imageContainer, imageSlideStyle]}>
              {images.length > 1 && (
                <RNAnimated.View style={[styles.imageNumberContainer, { opacity: fadeAnim }]}>
                  <Text style={styles.imageNumberText}>{currentIndex + 1} / {images.length}</Text>
                </RNAnimated.View>
              )}

              {/* Main Image */}
              {images && images.length > 0 && (
                <Animated.Image
                  source={{ uri: images[currentIndex] }}
                  style={[styles.image, animatedStyle]}
                  resizeMode="contain"
                  onError={(e) => {
                    console.error("Image failed to load:", e.nativeEvent.error);
                    setImageError(true);
                  }}
                />
              )}
              {imageError && (
                <View style={styles.errorContainer}>
                  <Icon name="alert-circle-outline" size={60} color="#ccc" />
                  <Text style={styles.errorText}>Failed to load image</Text>
                </View>
              )}
            </Animated.View>
          </GestureDetector>

          {images.length > 1 && (
            <TouchableOpacity style={[styles.navButton, styles.rightNavButton]} onPress={nextImage}>
              <View style={styles.buttonBackground}>
                <Icon name="chevron-forward" size={32} color="#fff" />
              </View>
            </TouchableOpacity>
          )}
          </View>

        {/* Bottom Buttons */}
        {!hideActions && (
          <RNAnimated.View style={[styles.bottomButtons, { opacity: fadeAnim }]}>
            <TouchableOpacity style={styles.actionButton} onPress={handleDeletePress}>
              <Icon name="trash" size={30} color="#fff" />
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={onAdd}>
              <Icon name="add" size={30} color="#fff" />
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            {showDeleteAlert && (
              <Modal transparent visible={showDeleteAlert} animationType="fade">
                <View style={styles.alertContainer}>
                  <View style={styles.alertBox}>
                    <Text style={styles.alertTitle}>Delete Image?</Text>
                    <Text style={styles.alertMessage}>Are you sure you want to delete this image?</Text>

                    <View style={styles.alertButtons}>
                      <TouchableOpacity style={[styles.alertButton, styles.deleteButton]} onPress={handleDelete}>
                        <Text style={styles.alertButtonText}>Yes, Delete</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={[styles.alertButton, styles.cancelButton]} onPress={cancelDelete}>
                        <Text style={styles.alertButtonText}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            )}
          </RNAnimated.View>
        )}
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
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1,
  },
  buttonBackground: {
    backgroundColor: "rgba(0,0,0,0.6)",
    // padding: 8,
    borderRadius: 20,
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 3,
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -20 }],
    zIndex: 3,
  },
  leftNavButton: {
    left: 15,
  },
  rightNavButton: {
    right: 15,
  },
  imageContainer: {
    width: width,
    height: height * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  bottomButtons: {
    flexDirection: "row",
    position: "absolute",
    bottom: 40,
    justifyContent: "space-around",
    width: "100%",
    zIndex: 3,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  alertContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  alertBox: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  alertMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "black",
  },
  alertButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  alertButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
  },
  cancelButton: {
    backgroundColor: "#007AFF",
  },
  alertButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageNumberContainer: {
    position: "absolute",
    top: -65,
    left: 16,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  imageNumberText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    alignItems: "center",
  },
  errorText: {
    color: "white",
    marginTop: 10,
  },
});

export default Image_Preview_Modal;
