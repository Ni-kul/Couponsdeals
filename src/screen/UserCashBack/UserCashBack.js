// UserCashBack
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import Modal from "react-native-modal";
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function UserCashBack({ navigation }) {

    const [promocode, setpromocode] = useState('');

    const cashbackevent = [
        { name: 'MC Dominos', img: require('../../../Image/Dominologo.png') },
        { name: 'Swiggy', img: require('../../../Image/Swiggylogo.png') },
        { name: 'Zomato', img: require('../../../Image/Zomato.png') },
    ]

    return (
        <View style={globalstyles.secmainview}>
            <ScrollView >
                <View style={styles.Backarrowview}>
                    <Backarrow />

                    <Text>Cash Back</Text>

                </View>


                <View style={{ marginBottom: 80 }}>
                    {cashbackevent.map((item, index) => (
                        <View key={index} style={globalstyles.cashbackeventview}>
                            <View style={{ alignSelf: 'center', justifyContent: 'center', width: '28%' }}>
                                <Image resizeMode='stretch' source={item.img} style={globalstyles.cashbackimg} />
                            </View>
                            <View style={globalstyles.cashbackedetailview}>
                                <View style={globalstyles.cashbacknamebtnview}>
                                    <Text style={globalstyles.cashbackname}>{item.name}</Text>
                                    <TouchableOpacity style={globalstyles.btnGetnow}>
                                        <Text style={globalstyles.btnGetnowtxt}>Get now</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={globalstyles.cashbackpriceview}>
                                    <Text style={globalstyles.cashbackpricetxt}>Rs ( 5,000 - 6,000 )</Text>
                                    <Text style={globalstyles.cashbackpricetxt2}>Get Rs 100 Cashback</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>


            </ScrollView>

        </View>
    )
}
