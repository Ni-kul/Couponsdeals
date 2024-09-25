import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { globalstyles } from '../../globalstyles';

const Backarrow = ({ arroesttyle }) => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };
    return (

        // <View style={styles.container}>
        <TouchableOpacity style={styles.viewone} onPress={goBack}>
            <Image resizeMode='contain' source={require('../../../Image/back22.png')} style={styles.Backarrowimg} />
            {/* <Image source={require('../../../Image/bb2.png')} style={[styles.Backarrowimg,arroesttyle]} /> */}
        </TouchableOpacity>
        // </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    viewone: {
        // borderWidth: 1,
        width: 12,
        // width: '5%',
    },
    Backarrowimg: {
        // width: 14,
        // height: 24
        width: 15,
        height: 26
    },
})
export default Backarrow;

