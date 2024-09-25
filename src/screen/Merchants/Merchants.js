// Merchants.js
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Animated, PanResponder } from 'react-native';
import { globalstyles } from '../../globalstyles';
import { styles } from './styles';

export default function Merchants({ navigation }) {

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                // Check if the swipe is towards the right
                if (gestureState.dx > 100) {
                    pan.x.setValue(gestureState.dx);
                    pan.y.setValue(0);
                    navigation.navigate('ApplyMerchants');
                }
            },
            onPanResponderRelease: () => {
                // Handle swipe release
                Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
            },
        })
    ).current;


    return (
        <View style={globalstyles.mainview}>
            <ScrollView >
                <Image source={require('../../../Image/Merchantslogin.png')} style={styles.Merchantslogin} />

                <Text style={styles.txt1}>Merchants Login</Text>

                <Animated.View style={[styles.loginbtnview, pan.getLayout()]} {...panResponder.panHandlers}>
                    {/* <View style={styles.loginbtnview}> */}
                    <Text style={styles.txt2}>Swipe To Log In </Text>
                    <Image source={require('../../../Image/Mlogin.png')} style={styles.Mlogin} />
                    {/* </View> */}
                </Animated.View>

            </ScrollView>

        </View>
    )
}