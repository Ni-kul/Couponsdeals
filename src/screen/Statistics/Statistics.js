// Statistics
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';
import CircularProgress from '../componet/CircularProgress';

export default function Statistics({ navigation }) {

    return (
        <ScrollView style={styles.scorllview}>
            <View style={globalstyles.thirdmainview}>
                <View style={globalstyles.Backarrowviewtwo}>
                    <Backarrow />
                    <Text style={globalstyles.hadtxttwo}>Statistics</Text>
                </View>

                <View style={styles.namelogoview}>
                    <View style={styles.imgview}>
                        <Image source={require('../../../Image/Swiggy-logo2.png')} style={styles.Swiggylogo} />
                    </View>
                    <Text style={styles.nametxt}>Swiggy</Text>
                </View>

                 <View style={styles.circulview}>
                    <View style={styles.circulone}>
                        <CircularProgress size={64} strokeWidth={12} progress={0.83} color="#4C7C56" />
                        <Text style={styles.circultxt}>Usage of offers</Text>
                    </View>
                    <View style={styles.circulone}>
                        <CircularProgress size={64} strokeWidth={12} progress={0.66} color="#B39B5D" />
                        <Text style={styles.circultxt}>Offline purchase offers</Text>
                    </View>
                </View>
                <View style={styles.circulonline}>
                    <CircularProgress size={64} strokeWidth={12} progress={0.40} color="#EE9612" />
                    <Text style={styles.circultxt}>Online purchase offers</Text>
                </View> 

                <View style={styles.lastimgs}>
                    <Image source={require('../../../Image/newstatback.png')} style={styles.statback} />
                    {/* statback  statback3*/}
                </View>
            </View>
        </ScrollView>
    )
}