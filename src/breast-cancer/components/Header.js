import React from 'react';
import { StyleSheet, View, StatusBar, Platform, TouchableOpacity, Text } from 'react-native';
import { Header as RNEHeader, Icon } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Color, FontFamily, FontSize } from "../../utils/GlobalStyles";

/**
 * A premium styled header component for use across the application
 */
const Header = ({ 
  title, 
  onBackPress, 
  rightComponent,
  gradientColors = ["#E582AD", "#ffa6bb"], 
  titleStyle = {}
}) => {
  const insets = useSafeAreaInsets();
  
  // Get proper status bar height
  const statusBarHeight = StatusBar.currentHeight || (Platform.OS === 'ios' ? insets.top : 0);
  
  // Custom left component with circle background
  const renderLeftComponent = () => (
    <TouchableOpacity 
      onPress={onBackPress}
      style={styles.backButtonContainer}
    >
      <Icon
        name="arrow-back"
        color="#fff"
        size={22}
      />
    </TouchableOpacity>
  );

  return (
    <View>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      
      {/* Main container that holds both StatusBar space and header */}
      <View style={styles.mainContainer}>
        {/* Gradient background for the entire header including status bar */}
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.gradientBackground]}
        />
        
        {/* Status bar spacer */}
        <View style={{ height: statusBarHeight }} />
        
        {/* Actual header content */}
        <View style={styles.headerContent}>
          <View style={styles.leftContainer}>
            {renderLeftComponent()}
          </View>
          
          <View style={styles.titleContainer}>
            <Text
              style={[styles.titleText, titleStyle]}
            >
              {title}
            </Text>
          </View>
          
          <View style={styles.rightContainer}>
            {rightComponent}
          </View>
        </View>
      </View>
      
      <View style={styles.headerShadow} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    overflow: 'hidden',
    zIndex: 1000,
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerContent: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftContainer: {
    width: 60,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  titleText: {
    color: "#fff", 
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.Inter_SemiBold,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  rightContainer: {
    width: 70,
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 999, // Ensure the dropdown appears on top of other elements
  },
  headerShadow: {
    height: 6,
    backgroundColor: 'transparent',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
  },
  backButtonContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Header;