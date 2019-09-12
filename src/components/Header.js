//import libraries for making a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//make a component
const Header = (props) => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },

    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    }

});

export default Header;