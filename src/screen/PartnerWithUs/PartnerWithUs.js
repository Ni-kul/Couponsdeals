import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function PartnerWithUs({ navigation }) {
    return (
        <View style={globalstyles.secmainview}>
                        <SafeAreaView>

            <ScrollView >
                <View style={globalstyles.Backarrowviewtwo}>
                    <Backarrow />
                    <Text style={globalstyles.hadtxttwo}>Partner With Us</Text>
                </View>


                <View style={styles.about}>
                    <Text style={styles.title2}>About us</Text>
                    <Text style={styles.infoText2}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five. scrambled it to make a type specimen book.                     </Text>
                </View>

                <View style={styles.ourClient}>
                    <Text style={styles.title1}>Our Client</Text>

                    <View style={styles.compny}>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/Acer.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/boat.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/flipkart.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/lotus.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/NYKAA.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/nike.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/Realme.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/Udemy.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/Acer.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/boat.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/flipkart.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/lotus.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/NYKAA.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/nike.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/Realme.png")} style={styles.compnyImage} />
                        </View>
                        <View style={styles.singleCompny}>
                            <Image source={require("../../../Image/Udemy.png")} style={styles.compnyImage} />
                        </View>
                    </View>
                </View>


                <View style={styles.subscribe}>
                    <Image source={require('../../../Image/subscribe.png')} style={styles.subscribeImage} />

                    <Text style={styles.subscribeText}>Get the Latest & best coupons / offers alerts </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail id" />
                    <TouchableOpacity style={styles.touchbtn} >
                        <Text style={styles.btntxt} >Subscribe</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            </SafeAreaView>
        </View>
    )
}
