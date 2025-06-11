import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { Color, FontFamily, FontSize } from '../../utils/GlobalStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

/**
 * A reusable component for organizing groups of questions with collapsible sections
 * 
 * @param {string} title - The section title
 * @param {boolean} expanded - Whether the section is expanded initially
 * @param {boolean} expandable - Whether the section can be collapsed/expanded
 * @param {function} onToggle - Callback function when the section is toggled
 * @param {JSX.Element} children - The content of the section (usually questions)
 * @param {object} style - Additional styles for the section container
 * @param {boolean} hasError - Whether the section has validation errors
 */
const QuestionSection = ({
    title,
    expanded = true,
    expandable = true,
    onToggle,
    children,
    style,
    hasError = false,
}) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    const toggleExpand = () => {
        if (expandable) {
            setIsExpanded(!isExpanded);
            if (onToggle) {
                onToggle(!isExpanded);
            }
        }
    };

    return (
        <View style={[styles.container, hasError && styles.errorContainer, style]}>
            {title && (
                <TouchableOpacity
                    activeOpacity={expandable ? 0.7 : 1}
                    onPress={toggleExpand}
                    style={styles.titleContainer}
                >
                    <Text style={styles.title}>{title}</Text>
                    {expandable && (
                        <MaterialIcons
                            name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                            size={24}
                            color={Color.bcHeader}
                        />
                    )}
                </TouchableOpacity>
            )}

            {isExpanded && (
                <View style={styles.content}>
                    {children}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    errorContainer: {
        borderColor: '#ff4d6d',
        borderWidth: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    title: {
        fontSize: 16,
        fontFamily: FontFamily["Inter-SemiBold"],
        color: Color.bcHeader,
        flex: 1,
    },
    content: {
        padding: 16,
    },
});

export default QuestionSection; 