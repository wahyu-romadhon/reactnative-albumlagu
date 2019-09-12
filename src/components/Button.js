import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'purple',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'teal',
        marginLeft: 45,
        marginRight: 45
    },

    textStyle: {
        alignSelf: 'center',
        color: 'whitesmoke',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default Button;