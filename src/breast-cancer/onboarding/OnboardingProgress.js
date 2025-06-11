import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';
import * as Progress from 'react-native-progress';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Color } from '../../utils/GlobalStyles';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
// Import our onboarding manager
import * as OnboardingManager from './OnboardingManager';

const OnboardingProgress = ({
    showProgressCard = true,
    mini = false,
    onClose = () => { }
}) => {
    const {profile} = useSelector(state => state.profile);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [overallProgress, setOverallProgress] = useState(0);
    const [completedSections, setCompletedSections] = useState({});
    const [showChecklist, setShowChecklist] = useState(false);
    const [profiledata, setProfiledata] = useState(profile?.data);
    // Load progress data
    useEffect(() => {
        loadProgressData();

        // Reload when screen comes into focus
        const unsubscribe = navigation.addListener('focus', () => {
            loadProgressData();
        });

        return unsubscribe;
    }, [navigation]);

    // Load all progress data
    const loadProgressData = async () => {
        setLoading(true);
        try {
            // Get section completion status
            const sections = await OnboardingManager.getAllSectionsStatus();
            setCompletedSections(sections);

            // Calculate overall progress
            const progress = await OnboardingManager.calculateOverallProgress();
            setOverallProgress(progress);
        } catch (error) {
            console.error('Error loading progress data:', error);
        } finally {
            setLoading(false);
        }
    };

    // Navigate to a section
    const handleNavigateToSection = (sectionKey) => {
        const screenName = OnboardingManager.getScreenForSection(sectionKey, profiledata);
        setShowChecklist(false);
        navigation.navigate(screenName);
    };

    // Show the checklist modal
    const handleShowChecklist = () => {
        setShowChecklist(true);
    };

    // Close the checklist modal
    const handleCloseChecklist = () => {
        setShowChecklist(false);
        onClose();
    };

    // Get the appropriate color based on progress
    const getProgressColor = (progress) => {
        if (progress < 0.3) return '#FF6B6B'; // Red for low progress
        if (progress < 0.7) return '#FFD166'; // Yellow for medium progress
        return '#06D6A0'; // Green for high progress
    };

    // Get a message based on progress
    const getProgressMessage = (progress) => {
        if (progress < 0.3) return "Let's start building your health profile";
        if (progress < 0.7) return "You're making good progress!";
        if (progress < 1) return "Almost there! share your profile with a doctor";
        return "Your profile is complete!";
    };

    // List of sections with their details
    const sectionItems = [
        {
            id: 'profile',
            title: 'Personal Profile',
            description: 'Basic information about you',
            icon: 'account-circle',
            completed: completedSections.profile
        },
        {
            id: 'breast_health',
            title: 'Breast Health Assessment',
            description: 'Document any lumps, pain, or changes you\'ve noticed',
            icon: 'heart-pulse',
            completed: completedSections.breast_health
        },
        {
            id: 'family_part',
            title: 'Detailed Family Information',
            description: 'Information about your family members and their health',
            icon: 'account-group',
            completed: completedSections.family_part
        },
        {
            id: 'medical_history',
            title: 'Personal Medical History',
            description: 'Add information about your personal health conditions',
            icon: 'clipboard-text',
            completed: completedSections.medical_history
        },
        {
            id: 'family_history',
            title: 'Family History of Cancer',
            description: 'Family history of cancer across generations',
            icon: 'family-tree',
            completed: completedSections.family_history
        },
        {
            id: 'doctor_shared',
            title: 'Connect with a Doctor',
            description: 'Share your profile with a healthcare provider',
            icon: 'doctor',
            completed: completedSections.doctor_shared
        }
    ];

    // Count completed sections
    const completedCount = Object.values(completedSections).filter(Boolean).length;
    const totalSections = Object.keys(completedSections).length || 6;

    // Render a mini progress indicator
    const renderMiniProgress = () => {
        if (loading) return null;

        // If all sections are complete and mini mode, don't show anything
        if (mini && completedCount === totalSections) return null;

        return (
            <TouchableOpacity
                style={styles.miniCard}
                onPress={handleShowChecklist}
            >
                <Progress.Bar
                    progress={overallProgress}
                    width={100}
                    height={6}
                    color={getProgressColor(overallProgress)}
                    unfilledColor="#E0E0E0"
                    borderWidth={0}
                />
                <Text style={styles.miniText}>
                    {completedCount}/{totalSections}
                </Text>
            </TouchableOpacity>
        );
    };

    // Render the full progress card
    const renderProgressCard = () => {
        if (loading) return null;

        // If all sections are complete, don't show the card
        if (completedCount === totalSections) return null;

        return (
            <TouchableOpacity
                style={styles.progressCard}
                onPress={handleShowChecklist}
            >
                <View style={styles.progressHeader}>
                    <Text style={styles.progressTitle}>Health Profile</Text>
                    <Text style={styles.progressCount}>{completedCount}/{totalSections} Complete</Text>
                </View>

                <Progress.Bar
                    progress={overallProgress}
                    width={null}
                    height={10}
                    borderRadius={5}
                    color={getProgressColor(overallProgress)}
                    unfilledColor="#E0E0E0"
                    borderWidth={0}
                    style={styles.progressBar}
                />

                <View style={styles.progressCTA}>
                    <Text style={styles.progressMessage}>
                        {getProgressMessage(overallProgress)}
                    </Text>
                    <MaterialIcons name="arrow-forward" size={18} color={Color.primary} />
                </View>
            </TouchableOpacity>
        );
    };

    // Render a section item in the checklist
    const renderSectionItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.sectionItem,
                item.completed ? styles.completedItem : {}
            ]}
            onPress={() => handleNavigateToSection(item.id)}
            disabled={item.id === 'doctor_shared' && overallProgress < 0.8}
            activeOpacity={item.id === 'doctor_shared' && overallProgress < 0.8 ? 0.1 : 0.7}
        >
            {/* add ovelay */}
            {item.id === 'doctor_shared' && overallProgress < 0.8 && (
                <View style={styles.overlay}>
                    <Text style={styles.overlayText}>Complete your profile to share with a doctor</Text>
                </View>
            )}

            <View style={styles.sectionItemContent}>
                <View style={[
                    styles.itemIconContainer,
                    item.completed ? styles.completedIconContainer : {}
                ]}>
                    <Icon
                        name={item.icon}
                        size={24}
                        color={item.completed ? '#fff' : Color.primary}
                    />
                </View>

                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                </View>

                <View style={styles.itemStatusContainer}>
                    {item.completed ? (
                        <View style={styles.completedBadge}>
                            <Icon name="check" size={16} color="#fff" />
                        </View>
                    ) : (
                        <Icon name="chevron-right" size={24} color="#999" />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            {/* Show either the mini or full progress indicator based on props */}
            {mini ? renderMiniProgress() : (showProgressCard && renderProgressCard())}

            {/* Checklist Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                isVisible={showChecklist}
                onBackdropPress={handleCloseChecklist}
                onRequestClose={handleCloseChecklist}
                statusBarTranslucent={true}
                backdropOpacity={0.5}
                style={styles.modal}
                deviceHeight={Dimensions.get('window').height + 50}
            >
                <View style={styles.checklistModal}>
                    <View style={styles.checklistHeader}>
                        <Text style={styles.checklistTitle}>Complete Your Health Profile</Text>
                        <Text style={styles.checklistDescription}>
                            Completing these sections helps doctors better assess your breast health
                        </Text>

                        <View style={styles.progressContainer}>
                            <Progress.Circle
                                size={80}
                                progress={typeof overallProgress === 'number' ? overallProgress : 0}
                                thickness={8}
                                showsText={true}
                                formatText={() => `${Math.round((typeof overallProgress === 'number' ? overallProgress : 0) * 100)}%`}
                                color={getProgressColor(overallProgress)}
                                unfilledColor="#E0E0E0"
                                borderColor="#E0E0E0"
                                borderWidth={0}
                                textStyle={styles.progressText}
                            />
                            <View style={styles.progressTextContainer}>
                                <Text style={styles.progressTitle}>Your Progress</Text>
                                <Text style={styles.progressSubtitle}>
                                    {getProgressMessage(overallProgress)}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <FlatList
                        data={sectionItems}
                        renderItem={renderSectionItem}
                        keyExtractor={item => item.id}
                    />

                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={handleCloseChecklist}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    // Mini progress indicator
    miniCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffa6bb',
        padding: 8,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    miniText: {
        fontSize: 12,
        fontFamily: FontFamily.Inter_Medium,
        color: '#666',
        marginLeft: 8,
    },

    // Full progress card
    progressCard: {
        flex: 1,
        // backgroundColor: '#fff',
        // borderRadius: 15,
        padding: 16,
        // marginHorizontal: 16,
        // marginVertical: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 4,
        // elevation: 3,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    progressTitle: {
        fontSize: 16,
        fontFamily: FontFamily.Inter_Bold,
        color: '#333',
    },
    progressCount: {
        fontSize: 14,
        fontFamily: FontFamily.Inter_Regular,
        color: '#666',
    },
    progressBar: {
        marginVertical: 10,
    },
    progressCTA: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    progressMessage: {
        fontSize: 14,
        fontFamily: FontFamily.Inter_Regular,
        color: Color.primary,
    },

    // Checklist modal
    modal: {
        flex: 1,
        overflow: 'hidden',
    },
    checklistModal: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '100%',
        maxHeight: Dimensions.get('window').height * 0.8,
        paddingBottom: 20,
        overflow: 'hidden',
    },
    checklistHeader: {
        padding: 20,
        backgroundColor: '#f8f9fa',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    checklistTitle: {
        fontSize: 20,
        fontFamily: FontFamily.Inter_Bold,
        color: '#333',
        marginBottom: 8,
    },
    checklistDescription: {
        fontSize: 14,
        fontFamily: FontFamily.Inter_Regular,
        color: '#666',
        marginBottom: 20,
        lineHeight: 20,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    progressTextContainer: {
        marginLeft: 20,
        width: '60%',
    },
    progressSubtitle: {
        fontSize: 14,
        fontFamily: FontFamily.Inter_Regular,
        color: '#666',
    },
    progressText: {
        fontSize: 14,
        fontFamily: FontFamily.Inter_Bold,
        color: '#333',
    },

    // Section items in checklist
    sectionItem: {
        width: '100%',
        overflow: 'hidden',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    completedItem: {
        backgroundColor: '#f0fff4',
    },
    sectionItemContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f0f4ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    completedIconContainer: {
        backgroundColor: '#06D6A0',
    },
    itemTextContainer: {
        width: '65%',
        overflow: 'hidden',
    },
    itemTitle: {
        fontSize: 16,
        fontFamily: FontFamily.Inter_Medium,
        color: '#333',
        marginBottom: 4,
    },
    itemDescription: {
        fontSize: 13,
        fontFamily: FontFamily.Inter_Regular,
        color: '#666',
        lineHeight: 18,
    },
    itemStatusContainer: {
        marginLeft: 10,
    },
    completedBadge: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#06D6A0',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Close button
    closeButton: {
        marginTop: 20,
        backgroundColor: '#f0f0f0',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 50,
        alignSelf: 'center',
    },
    closeButtonText: {
        fontSize: 16,
        fontFamily: FontFamily.Inter_Medium,
        color: '#666',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(215, 214, 214, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    overlayText: {
        fontSize: 16,
        fontFamily: FontFamily.Inter_Bold,
        color: 'rgba(48, 48, 48, 0.9)',
        textAlign: 'center',
        padding: 20,
    },

});

export default OnboardingProgress;