import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { globalstyles } from '../../globalstyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ManagerUsedCupon from '../ManagerUsedCupon/ManagerUsedCupon';
import SccanerButton from './SccanerButton';
import ManagerHome from '../ManagerHome/ManagerHome';
import ManagerSecondCupon from '../ManagerSecondCupon/ManagerSecondCupon';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const style = StyleSheet.create({
    tab: {
        alignItems: "center",
        marginTop: 15,
    },
    IconImage: {
        width: 25,
        height: 25
    }


})

function Scanner() {
    return (
        <Stack.Navigator initialRouteName="ManagerHome">
            <Stack.Screen name="ManagerHome" component={ManagerHome} options={{ headerShown: false }} />
            <Stack.Screen name="ManagerUsedCupon" component={ManagerUsedCupon} options={{ headerShown: false }} />
            <Stack.Screen name="ManagerSecondCupon" component={ManagerSecondCupon} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}


const Manager = () => {

    return (

        <>
            <SccanerButton />
            <View style={{ height: 70, width: '100%', backgroundColor: '#fff', position: 'absolute', bottom: 0 }}></View>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    // backgroundColor:'red',
                    tabBarInactiveTintColor: '#002408',
                    tabBarActiveTintColor: '#002408',

                    tabBarLabelStyle: {
                        marginBottom: 10,
                        fontSize: 10,
                        fontWeight: '800'
                    },
                    tabBarStyle: {
                        backgroundColor: '#A9D5B2',
                        borderBottomWidth: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative', // Use relative positioning
                        borderColor: '#Red',
                        borderWidth: 0.5,
                        height: 70,
                        borderRadius: 40,
                        zIndex: 1
                    },

                }}>

                <Tab.Screen name="Scanner" component={ManagerHome}
                    options={{
                        tabBarIcon: () => (
                            <View style={style.tab}>
                                <Image
                                    source={require('../../../Image/qrCodeSccaner.png')}
                                    style={style.IconImage}
                                />
                            </View>
                        ),
                    }}
                />

                <Tab.Screen name="Used Coupons" component={ManagerUsedCupon}
                    options={{
                        tabBarIcon: () => (

                            <View style={style.tab}>
                                <Image
                                    source={require('../../../Image/solarcard.png')}
                                    style={style.IconImage} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen name="Online Coupons" component={ManagerSecondCupon}
                    options={{
                        tabBarIcon: () => (
                            <View style={style.tab}>
                                <Image
                                    source={require('../../../Image/discountcoupon.png')}
                                    style={style.IconImage} />
                            </View>
                        ),
                    }} />
            </Tab.Navigator>
        </>

    )
}
export default Manager;