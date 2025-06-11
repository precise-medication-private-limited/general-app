import React, { useRef, useEffect, memo } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from '../../utils/GlobalStyles';

const { width } = Dimensions.get('window');

// Use memo to prevent unnecessary re-renders
const SkeletonLoader = memo(({ type = 'question', count = 3 }) => {
  // Single animation value for the sweep effect
  const sweepAnimation = useRef(new Animated.Value(-1)).current;
  
  // Define animation once and reuse
  useEffect(() => {
    // Create smooth infinite animation loop
    const startAnimation = () => {
      Animated.loop(
        Animated.timing(sweepAnimation, {
          toValue: 2,
          duration: 1800,
          useNativeDriver: true,
        })
      ).start();
    };
    
    startAnimation();
    
    // Clean up animation when component unmounts
    return () => {
      sweepAnimation.stopAnimation();
    };
  }, []);
  
  // Interpolate the animation value for the gradient position
  const translateX = sweepAnimation.interpolate({
    inputRange: [-1, 2],
    outputRange: [-width, width * 2],
  });
  
  // Simplified shimmer effect that uses a sweeping gradient
  const renderShimmer = () => (
    <View style={styles.shimmerContainer}>
      <Animated.View
        style={[
          styles.shimmer,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <LinearGradient
          colors={['transparent', 'rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.45)', 'rgba(255, 255, 255, 0.15)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
      </Animated.View>
    </View>
  );
  
  // Render a single doctor card skeleton for list type
  const renderDoctorCardSkeleton = () => (
    <View style={styles.doctorCard}>
      <View style={styles.doctorCardInner}>
        {/* Doctor image skeleton */}
        <View style={styles.skeletonDoctorImage}>
          {renderShimmer()}
        </View>
        
        {/* Doctor info skeleton */}
        <View style={styles.doctorInfoContainer}>
          <View style={styles.skeletonDoctorName}>
            {renderShimmer()}
          </View>
          <View style={styles.skeletonDoctorSpecialty}>
            {renderShimmer()}
          </View>
          <View style={styles.skeletonDoctorBio}>
            {renderShimmer()}
          </View>
        </View>
      </View>
      
      {/* Action buttons skeleton */}
      <View style={styles.actionButtonsContainer}>
        <View style={styles.skeletonActionButton}>
          {renderShimmer()}
        </View>
        <View style={styles.skeletonRemoveButton}>
          {renderShimmer()}
        </View>
      </View>
    </View>
  );

  // Render list type skeleton (for SavedDoctors)
  const renderListSkeleton = () => (
    <View style={styles.listContainer}>
      {[...Array(count)].map((_, index) => (
        <View key={index}>
          {renderDoctorCardSkeleton()}
        </View>
      ))}
    </View>
  );
  
  // Render question type skeleton (default)
  const renderQuestionSkeleton = () => (
    <View style={styles.container}>
      {/* Section 1 */}
      <View style={styles.section}>
        <View style={styles.skeletonTitle}>
          {renderShimmer()}
        </View>
        
        <View style={styles.questionContainer}>
          <View style={styles.skeletonQuestion}>
            {renderShimmer()}
          </View>
          <View style={styles.optionsContainer}>
            <View style={styles.skeletonOption}>
              {renderShimmer()}
            </View>
            <View style={styles.skeletonOption}>
              {renderShimmer()}
            </View>
          </View>
        </View>
      </View>
      
      {/* Section 2 */}
      <View style={styles.section}>
        <View style={styles.questionContainer}>
          <View style={styles.skeletonQuestion}>
            {renderShimmer()}
          </View>
          <View style={styles.optionsContainer}>
            <View style={styles.skeletonOption}>
              {renderShimmer()}
            </View>
            <View style={styles.skeletonOption}>
              {renderShimmer()}
            </View>
          </View>
        </View>
      </View>
      
      {/* Button */}
      <View style={styles.skeletonButton}>
        {renderShimmer()}
      </View>
    </View>
  );

  // Choose the right skeleton based on type
  switch (type) {
    case 'list':
      return renderListSkeleton();
    case 'question':
    default:
      return renderQuestionSkeleton();
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  skeletonTitle: {
    height: 24,
    width: '70%',
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 16,
  },
  questionContainer: {
    marginBottom: 16,
  },
  skeletonQuestion: {
    height: 18,
    width: '90%',
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 12,
    overflow: 'hidden',
  },
  optionsContainer: {
    marginTop: 8,
  },
  skeletonOption: {
    height: 40,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  skeletonButton: {
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 25,
    marginTop: 16,
    overflow: 'hidden',
  },
  // Doctor card skeleton styles
  doctorCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorCardInner: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  skeletonDoctorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E0E0E0',
    marginRight: 15,
    overflow: 'hidden',
  },
  doctorInfoContainer: {
    flex: 1,
  },
  skeletonDoctorName: {
    height: 20,
    width: '60%',
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  skeletonDoctorSpecialty: {
    height: 16,
    width: '80%',
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  skeletonDoctorBio: {
    height: 14,
    width: '90%',
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  skeletonActionButton: {
    height: 36,
    flex: 1,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginRight: 10,
    overflow: 'hidden',
  },
  skeletonRemoveButton: {
    height: 36,
    width: 40,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmerContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  shimmer: {
    width: width, // Make it as wide as the screen
    height: '100%',
    position: 'absolute',
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
});

// Set displayName for debugging
SkeletonLoader.displayName = 'SkeletonLoader';

export default SkeletonLoader;