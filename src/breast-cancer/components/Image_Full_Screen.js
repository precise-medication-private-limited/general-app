import React from 'react';
import {
  Modal,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const Image_Full_Screen = ({ imageUrl, visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Image source={{ uri: imageUrl }} style={styles.fullscreenImage} />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
          accessibilityLabel="Close image modal"
        >
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullscreenImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 10,
  },
  closeText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Image_Full_Screen;
