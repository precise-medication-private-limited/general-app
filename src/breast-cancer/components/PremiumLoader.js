import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontFamily, Color } from '../../utils/GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const Loader = ({ type = 'chart', message = "Loading your health data..." }) => {
  // Animation values
  const pulseAnim = useRef(new Animated.Value(0)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Pulse animation for the background
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Spin animation for the icon
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 2400,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Fade in the text
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    // Progress bar animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(progressAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(progressAnim, {
          toValue: 0,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  // Map animation values to styles
  const pulseScale = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.95, 1.05],
  });

  const spinRotation = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['5%', '95%'],
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#f8d7e3', '#ffedf2']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View 
          style={[styles.loaderContainer, { 
            transform: [{ scale: pulseScale }] 
          }]}
        >
          <Animated.View style={[styles.iconContainer, { transform: [{ rotate: spinRotation }] }]}>
            {type === 'chart' ? (
              <Icon name="chart-bar" size={50} color="#E582AD" />
            ) : (
              <Icon name="clipboard-pulse" size={50} color="#E582AD" />
            )}
          </Animated.View>
          
          <Animated.Text 
            style={[
              styles.title, 
              { opacity: fadeAnim }
            ]}
          >
            Analysis
          </Animated.Text>

          <Animated.Text 
            style={[
              styles.message, 
              { opacity: fadeAnim }
            ]}
          >
            {message}
          </Animated.Text>
          
          <View style={styles.progressBarContainer}>
            <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
          </View>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    width: width * 0.85,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#E582AD',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontFamily: FontFamily.Inter_Bold,
    color: '#E582AD',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    fontFamily: FontFamily.Inter_Regular,
    color: '#666',
    marginBottom: 25,
    textAlign: 'center',
  },
  progressBarContainer: {
    width: '100%',
    height: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#E582AD',
    borderRadius: 3,
  },
});

export default Loader;