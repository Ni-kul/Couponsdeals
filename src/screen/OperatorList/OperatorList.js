import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Animated, PanResponder, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './style';


export default function OperatorList({ navigation }) {

    const data = [
        { name: 'Sanjay', },
        { name: 'Sanjay', },
        { name: 'Sanjay', },
        { name: 'Sanjay', },
        { name: 'Sanjay', },
        { name: 'Sanjay', },
    ];

    return (
        <View style={styles.container}>
            <SafeAreaView>

                <ScrollView>
                    <View style={globalstyles.Backarrowviewtwo}>
                        <Backarrow />
                        <Text style={globalstyles.hadtxttwo}>Operator List</Text>
                    </View>

                    <View style={styles.operatorList}>

                        {data.map((data, index) => (
                            <View style={styles.operatorItem} key={index}>
                                <View style={styles.user}>
                                    <Image source={require('../../../Image/user.png')} style={styles.userImage} />
                                    <Text style={styles.userText}>Manager</Text>
                                    <TouchableOpacity>
                                        <Image source={require('../../../Image/edit_dark.png')} style={styles.editIcon} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.userInfo}>
                                    Name : {data.name}
                                </Text>
                                <Text style={styles.userInfo}>
                                    E-mail ID : Sanjay4@gmail.com
                                </Text>
                                <View style={styles.buttonGroup}>
                                    <TouchableOpacity style={styles.delete}>
                                        <Text style={styles.deleteText}>Delete</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.view}>
                                        <Text style={styles.viewText}>View</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}

                    </View>


                </ScrollView>
            </SafeAreaView>
        </View>
    )
}