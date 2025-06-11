import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    Modal,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Color } from '../../utils/GlobalStyles';
import * as OnboardingManager from './OnboardingManager';

const { width, height } = Dimensions.get('window');

const WelcomeOnboarding = ({ visible, onClose }) => {
    const navigation = useNavigation();
    const [currentSlide, setCurrentSlide] = useState(0);
    const flatListRef = useRef(null);

    // Onboarding steps
    const onboardingSlides = [
        {
            id: '1',
            title: 'Welcome to Your Breast Health Journey',
            description: 'This app is designed to help you monitor your breast health and connect with healthcare professionals for early detection and better outcomes.',
            image: require('../assets/My Doctor.png'),
            buttonText: 'Get Started'
        },
        {
            id: '2',
            title: 'Complete Your Health Profile',
            description: 'To provide the best care recommendations, we\'ll guide you through completing important sections of your health profile.',
            image: require('../assets/My Doctor.png'),
            buttonText: 'Next'
        },
        {
            id: '3',
            title: 'Your Information Helps Doctors',
            description: 'Your profile helps doctors assess your breast cancer risk factors and provide personalized recommendations.',
            image: require('../assets/My Doctor.png'),
            buttonText: 'Next'
        },
        {
            id: '4',
            title: 'Your Data is Secure',
            description: 'Your information stays private and you control what to share with your doctors.',
            image: require('../assets/My Doctor.png'),
            buttonText: 'Next'
        },
        {
            id: '5',
            title: 'Start Your Journey',
            description: 'Let\'s complete each section one by one. We\'ll guide you through each step of the process.',
            image: require('../assets/My Doctor.png'),
            buttonText: 'Begin'
        },
    ];

    // Handle next slide
    const handleNext = () => {
        if (currentSlide < onboardingSlides.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: currentSlide + 1,
                animated: true
            });
        } else {
            handleFinish();
        }
    };

    // Handle skip
    const handleSkip = () => {
        handleFinish();
    };

    // Handle finish onboarding
    const handleFinish = async () => {
        try {
            // Mark first launch as completed
            await OnboardingManager.markFirstLaunch();

            // Close the modal
            onClose();

            // // Navigate to the first section to complete
            // const nextSection = await OnboardingManager.getNextIncompleteSection();
            // if (nextSection) {
            //     const screenName = OnboardingManager.getScreenForSection(nextSection);
            //     navigation.navigate(screenName);
            // }
        } catch (error) {
            console.error('Error finishing onboarding:', error);
            onClose();
        }
    };

    // Handle scroll
    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const viewSize = event.nativeEvent.layoutMeasurement;
        const newIndex = Math.round(contentOffset.x / viewSize.width);

        if (newIndex !== currentSlide) {
            setCurrentSlide(newIndex);
        }
    };

    // Render a slide item
    const renderSlideItem = ({ item, index }) => (
        <View style={styles.slide}>
            <Image
                source={item.image}
                style={styles.slideImage}
                resizeMode="contain"
            />

            <Text style={styles.slideTitle}>{item.title}</Text>
            <Text style={styles.slideDescription}>{item.description}</Text>

            <View style={styles.buttonsContainer}>
                {index === onboardingSlides.length - 1 ? (
                    <TouchableOpacity
                        style={styles.finishButton}
                        onPress={handleFinish}
                    >
                        <Text style={styles.finishButtonText}>{item.buttonText}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={handleNext}
                    >
                        <Text style={styles.nextButtonText}>{item.buttonText}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );

    // Render pagination dots
    const renderPaginationDots = () => {
        return (
            <View style={styles.paginationContainer}>
                {onboardingSlides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            currentSlide === index ? styles.paginationDotActive : {}
                        ]}
                    />
                ))}
            </View>
        );
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
            statusBarTranslucent={true}
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <TouchableOpacity
                        style={styles.skipButton}
                        onPress={handleSkip}
                    >
                        <Text style={styles.skipButtonText}>Skip</Text>
                    </TouchableOpacity>

                    <FlatList
                        ref={flatListRef}
                        data={onboardingSlides}
                        renderItem={renderSlideItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                    />

                    {renderPaginationDots()}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: width * 0.9,
        height: height * 0.75,
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
    },
    skipButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    skipButtonText: {
        color: Color.primary,
        fontSize: 16,
        fontFamily: FontFamily.Inter_Medium,
    },
    slide: {
        width: width * 0.9,
        paddingHorizontal: 24,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slideImage: {
        width: '80%',
        height: height * 0.25,
        marginBottom: 40,
    },
    slideTitle: {
        fontSize: 24,
        fontFamily: FontFamily.Inter_Bold,
        color: '#333',
        textAlign: 'center',
        marginBottom: 16,
    },
    slideDescription: {
        fontSize: 16,
        fontFamily: FontFamily.Inter_Regular,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 40,
    },
    buttonsContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    nextButton: {
        backgroundColor: Color.bcHeader,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 50,
        marginTop: 10,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: FontFamily.Inter_Medium,
    },
    finishButton: {
        backgroundColor: Color.bcHeader,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 50,
        marginTop: 10,
    },
    finishButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: FontFamily.Inter_Medium,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: Color.bcHeader,
        width: 20,
    },
});

export default WelcomeOnboarding; 