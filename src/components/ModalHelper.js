import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, Platform } from 'react-native';
import Modal from 'react-native-modal';
import { Color, FontFamily } from '../utils/GlobalStyles';

const { width } = Dimensions.get('window');

/**
 * A reusable modal component
 * @param {boolean} isVisible - Whether the modal is visible or not
 * @param {function} onClose - Function to call when closing the modal
 * @param {function} onModalHide - Function to call after the modal is fully hidden (optional)
 * @param {boolean} swipeToClose - Whether the modal can be swiped to close (default: true)
 * @param {string} modalType - Type of modal: 'bottom', 'center', 'full' (default: 'bottom')
 * @param {JSX.Element} children - The content of the modal
 * @param {boolean} showHandle - Whether to show handle at the top of the modal (default: true for bottom modals)
 * @param {boolean} avoidKeyboard - Whether to adjust modal position when keyboard appears (default: true)
 * @param {string} title - Optional title for the modal
 * @param {boolean} showCloseButton - Whether to show a close button (default: false)
 * @param {object} style - Additional styles for the modal container
 */
const ModalHelper = ({
    isVisible,
    onClose,
    onModalHide,
    swipeToClose = true,
    modalType = 'bottom',
    children,
    showHandle = modalType === 'bottom',
    avoidKeyboard = true,
    title,
    showCloseButton = false,
    style,
}) => {
    // Determine modal position based on type
    const getModalStyle = () => {
        switch (modalType) {
            case 'center':
                return styles.centerModal;
            case 'full':
                return styles.fullModal;
            case 'bottom':
            default:
                return styles.bottomModal;
        }
    };

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            onSwipeComplete={swipeToClose ? onClose : null}
            swipeDirection={swipeToClose && modalType === 'bottom' ? 'down' : null}
            propagateSwipe={true}
            avoidKeyboard={avoidKeyboard}
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
            backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
            onModalHide={onModalHide}
            statusBarTranslucent
            style={[getModalStyle(), style]}
        >
            <View style={[styles.modalContent, modalType === 'full' && styles.fullModalContent]}>
                {showHandle && <View style={styles.handle} />}

                {title && (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {showCloseButton && (
                            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>✕</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}

                {children}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    centerModal: {
        justifyContent: 'center',
        margin: 20,
    },
    fullModal: {
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 16,
        maxHeight: '80%',
        width: '100%',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    fullModalContent: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        maxHeight: '100%',
        height: '100%',
    },
    handle: {
        width: 40,
        height: 5,
        backgroundColor: '#E0E0E0',
        borderRadius: 3,
        alignSelf: 'center',
        marginBottom: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    title: {
        fontSize: 18,
        fontFamily: FontFamily["Inter-SemiBold"],
        color: Color.bcHeader,
    },
    closeButton: {
        padding: 5,
    },
    closeButtonText: {
        fontSize: 20,
        color: '#999',
    },
});

export default ModalHelper; 