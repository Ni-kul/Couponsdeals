// UserPaymentDetails
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import Modal from "react-native-modal";
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, ImageBackground, TextInput } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function UserPaymentDetails({ navigation }) {

    const [promocode, setpromocode] = useState('');
    // LoyaltyPoint
    const [LoyaltyPoint, setLoyaltyPoint] = useState(100);

    const handleMinus = () => {
        if (LoyaltyPoint > 0) {
            setLoyaltyPoint(LoyaltyPoint - 1);
        }
    };

    const handlePlus = () => {
        setLoyaltyPoint(LoyaltyPoint + 1);
    };

    return (
        <View style={globalstyles.secmainview}>
            <ScrollView >
                <View style={globalstyles.Backarrowviewtwo}>
                    <Backarrow />
                    <Text style={globalstyles.hadtxttwo}>Payment Detials</Text>
                </View>

                <View style={styles.viewone}>
                    <Image resizeMode='contain' source={require('../../../Image/education.png')} style={styles.education} />
                    <View style={{ marginLeft: '10%', width: '40%', alignItems: 'center' }}>
                        <Text style={styles.plantxt}>Premium</Text>
                        <Text style={styles.plantxt2}>PER MONTH</Text>
                        <View style={styles.planview2}>
                            <FastImage resizeMode='contain' source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg} />
                            <Text style={styles.plantxt3}>500</Text>
                        </View>

                    </View>
                </View>

                <Text style={styles.linestyle}>line</Text>

                <View style={{ width: '92%', alignSelf: 'center', marginVertical: 12, }}>

                    <Text style={styles.txt1}>Enter Promo Code</Text>
                    <TextInput
                        style={styles.intxt}
                        placeholder='Enter Promo Code'
                        placeholderTextColor='#BABABA'
                        color='black'
                        value={promocode}
                        onChangeText={(text) => setpromocode(text)}
                    >
                    </TextInput>

                    {/* Select Loyalty point */}
                    <Text style={styles.txt11}>Select Loyalty point</Text>
                    <View style={styles.pointview}>

                        <View style={styles.pointview2}>
                            <FastImage resizeMode='contain' source={require('../../../Image/rupeecoin.png')} style={styles.rupeecoin} />
                            <Text style={styles.buttonText}>Loyalty Point</Text>
                        </View>
                        <View style={styles.Pointbutton}>
                            <TouchableOpacity onPress={handleMinus} style={styles.buttonadd}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.buttonText}>{LoyaltyPoint.toString()}</Text>
                            <TouchableOpacity onPress={handlePlus} style={styles.buttonadd}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>


                <Text style={styles.linestyle}>line</Text>

                <View style={styles.Walletamountview}>
                    <Text style={styles.txt2}>Wallet amount</Text>
                    <View style={styles.Walletview2}>
                        <View style={styles.Walletview3}>
                            <FastImage source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg} />
                            <Text style={styles.txt3}>400</Text>
                        </View>
                        <TouchableOpacity style={styles.Usenowbtn}>
                            <Text style={styles.Usenowbtntxt}>Use now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.linestyle}>line</Text>

                <View style={{ width: '92%', alignSelf: 'center', marginTop: 10, }}>

                    <Text style={styles.txt4}>Payment Details :</Text>
                    <View style={styles.view1}>
                        <Text style={styles.txt5}>Sub - Total amount </Text>
                        <View style={styles.view2}>
                            <Text style={styles.txt6}> : </Text>
                            <FastImage resizeMode='contain' source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg2} />
                            <Text style={styles.txt6}>500</Text>
                        </View>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.txt5}>Promo Code</Text>
                        <View style={styles.view2}>
                            <Text style={styles.txt6}> : </Text>
                            <FastImage resizeMode='contain' source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg2} />
                            <Text style={styles.txt6}>400</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.linestyle}>line</Text>

                <View style={styles.view3}>
                    <Text style={styles.txt5}>Total amount</Text>
                    <View style={styles.view2}>
                        <Text style={styles.txt6}></Text>
                        <View style={styles.view2}>
                            <Text style={styles.txt6}> : </Text>
                            <FastImage resizeMode='contain' source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg2} />
                            <Text style={styles.txt6}>100</Text>
                        </View>
                    </View>
                </View>


                <TouchableOpacity style={styles.touchbtn} >
                    <Text style={globalstyles.btntxt}>Payment Process</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}
