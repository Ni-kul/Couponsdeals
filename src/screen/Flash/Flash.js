// Flash
import React, { useState, useEffect, } from 'react';
import { View, Image, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

export default function Flash({ navigation }) {

    useEffect(() => {

        navigation.addListener('focus', () => {

            const checkUserLogin = async () => {
                const UserLogindata = await AsyncStorage.getItem('Userdata');
                // console.log('UserLogindata ---->', UserLogindata)
                if (UserLogindata) {
                    navigation.navigate('Dashboard');
                } else {
                    navigation.navigate('Signin');
                }
            };
            const timer = setTimeout(checkUserLogin, 1000);

            return () => clearTimeout(timer);

        })

    }, []);

    return (
        <View style={styles.logoview}>
            <Image source={require('../../../Image/logo.png')} style={styles.applogo} />
        </View>
    )
}