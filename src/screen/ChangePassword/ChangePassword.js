import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Animated, PanResponder, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './Style'


export default function ChangePassword({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView>

                <SafeAreaView>
                    <View style={globalstyles.Backarrowviewtwo}>
                        <Backarrow />
                        <Text style={globalstyles.hadtxttwo}>Change password</Text>
                    </View>

                    <Image resizeMode='contain' source={require('../../../Image/ChangePassword.png')} style={styles.image} />
                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputText}>
                                Create Password
                            </Text>
                            <TextInput placeholder='Enter your password' style={styles.input} />
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputText}>
                                Confirm Password
                            </Text>
                            <TextInput placeholder='Enter your password' style={styles.input} />
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttontext}>
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>

            </ScrollView>
        </View>
    )
}