// UserVouchers
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import Modal from "react-native-modal";
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function UserVouchers({ navigation }) {

    const [promocode, setpromocode] = useState('');

    return (
        <View style={globalstyles.secmainview}>
            <ScrollView >
                <View style={styles.Backarrowview}>
                    <Backarrow />

                    <Text>Vouchers</Text>

                </View>


                <View style={globalstyles.voucherview}>
                    <ImageBackground resizeMode='stretch' source={require('../../../Image/Subtract.png')} style={globalstyles.voucherimg}>
                        <View>
                            <Text style={globalstyles.vtxt1}>MC Dominos</Text>
                            <Text style={globalstyles.vtxt2}>Rs ( 5,000 - 6,000 )</Text>
                            <Text style={globalstyles.vtxt3}>Get Rs 100 Cashback</Text>
                            <TouchableOpacity style={globalstyles.voucherbtn}>
                                <Text style={globalstyles.voucherbtntxt}>Get now</Text>
                            </TouchableOpacity>
                        </View>
                        <Image resizeMode='contain' source={require('../../../Image/Dominos.png')} style={globalstyles.voucherlogo} />
                    </ImageBackground>
                </View>

                <View style={globalstyles.voucherview}>
                    <ImageBackground resizeMode='stretch' source={require('../../../Image/Subtract2.png')} style={globalstyles.voucherimg}>
                        <View>
                            <Text style={globalstyles.v2txt1}>Swiggy</Text>
                            <Text style={globalstyles.v2txt2}>Rs ( 5,000 - 6,000 )</Text>
                            <Text style={globalstyles.v2txt3}>Get Rs 100 Cashback</Text>
                            <TouchableOpacity style={globalstyles.voucherbtn2}>
                                <Text style={globalstyles.voucherbtntxt2}>Get now</Text>
                            </TouchableOpacity>
                        </View>
                        <Image resizeMode='contain' source={require('../../../Image/Swiggylogo.png')} style={globalstyles.voucherlogo} />
                    </ImageBackground>
                </View>


            </ScrollView>

        </View>
    )
}
