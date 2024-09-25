import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, TextInput, FlatList, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './style';

export default function About({ navigation }) {
   
 
    return (
        <View style={globalstyles.secmainview}>
                       
            <ScrollView > 
                <ImageBackground source={require('../../../Image/become1.png')} resizeMode="cover" style={styles.become1}>

                <SafeAreaView>
                    <View style={globalstyles.Backarrowviewtwo}>
                        <Backarrow />
                        <Text style={globalstyles.hadtxttwo}>About Us</Text>
                    </View>

                    <View style={styles.block1}>

                        <View style={styles.become}>
                            <Text style={styles.title}>Become a Agency partner</Text>
                            <Image source={require('../../../Image/Become.png')} style={styles.becomeImage} />
                        </View>
                        <Text style={styles.infoText}>
                            A car wash, or auto wash, is a facility used to clean the exterior, and in some cases the interior, of cars. Car washes can be self-service, full-service (with attendants who wash the vehicle), or fully automated (possibly connected to a filling station)
                        </Text>
                        <TouchableOpacity style={styles.aboutbutton}>
                            <Text style={styles.buttonText}>Become a partner</Text>
                        </TouchableOpacity>
                    </View>

                    </SafeAreaView>
                </ImageBackground>
                <View>
                    <Text style={styles.title2}>Become a Agency partner</Text>
                    <Text style={styles.infoText2}>
                        A car wash, or auto wash, is a facility used to clean the exterior, and in some cases the interior, of cars. Car washes can be self-service, full-service (with attendants who wash the vehicle), or fully automated (possibly connected to a filling station)
                    </Text>
                </View>

                <View style={styles.sliderBlock}>
                    <Text style={styles.title2}>Our partners</Text>
                    <View style={styles.slider}>
                    <Swiper
                            dot={<View style={{ borderRadius: 20, height: 12, borderColor: '#DED6D6', marginLeft: 7, backgroundColor: "#DED6D6", width: 12, borderWidth: 1 }} />}
                            activeDot={<View style={{ backgroundColor: "#B3B3B3", marginLeft: 7, width: 12, height: 12, borderRadius: 20, }} />}
                        >
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

                    </Swiper>
                    </View>
                </View>

                <View style={styles.subscribe}>
                    <Image source={require('../../../Image/subscribe.png')} style={styles.subscribeImage} />

                    <Text style={styles.subscribeText}>Get the Latest & best coupons / offers alerts </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail id"
                        placeholderTextColor='#959393' />
                    <TouchableOpacity style={styles.touchbtn} >
                        <Text style={styles.btntxt} >Subscribe</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}