// MPaymentDetials
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, ImageBackground, TextInput } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';

export default function MPaymentDetials({ navigation, route }) {

    const [loading, setLoading] = useState(false);
    const [promocode, setpromocode] = useState('');

    const selectedPlanName = route.params
    console.log('route data', selectedPlanName)
    const images = [
        { name: 'GOLD', img: require('../../../Image/p1.png') },
        { name: 'BRONZE', img: require('../../../Image/p2.png') },
        { name: 'SILVER', img: require('../../../Image/p3.png') },
    ];

    const borderColorsMap = {
        'GOLD': '#f5da4d',
        'BRONZE': '#895e33',
        'SILVER': '#dadada'
    };
    const selectedPlan = images.filter(plan => plan.name === selectedPlanName);

    const borderColors = ['#f5da4d', '#895e33', '#dadada'];
    // { borderColor: borderColorsMap[data.name] }

    const ToDeals = () => {
        navigation.navigate('Deals');
    }

    return (
        <View style={globalstyles.thirdmainview}>
            {loading ?
                <View style={globalstyles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}

            <ScrollView>


                <View style={globalstyles.Backarrowviewtwo}>
                    <Backarrow />
                    <Text style={globalstyles.hadtxttwo}>Payment Detials</Text>
                </View>

                <View style={{ marginTop: 10, width: '92%', alignSelf: 'center' }}>

                    {selectedPlan.map((data, index) => (

                        <ImageBackground key={index} resizeMode='stretch' source={data.img} style={[globalstyles.MSplanview1, { borderColor: borderColorsMap[data.name] }]}>
                            <View style={globalstyles.MSplanview2}>
                                <ImageBackground resizeMode='contain' source={require('../../../Image/Ellipseplan.png')} style={globalstyles.MSEllipseplanimg} >
                                    <Text style={globalstyles.MStxt1}>{data.name}</Text>
                                </ImageBackground>
                                <View style={{ marginTop: 4 }}>
                                    <View style={globalstyles.MSplanview3}>
                                        <Image resizeMode='contain' source={require('../../../Image/right1.png')} style={globalstyles.MSright1img} />
                                        <Text style={globalstyles.MStext2}>Subscription Plan choose</Text>
                                    </View>

                                    <View style={globalstyles.MSplanview3}>
                                        <Image resizeMode='contain' source={require('../../../Image/right1.png')} style={globalstyles.MSright1img} />
                                        <Text style={globalstyles.MStext2}>Subscription Plan choose</Text>
                                    </View>
                                    <View style={globalstyles.MSplanview3}>
                                        <Image resizeMode='contain' source={require('../../../Image/right1.png')} style={globalstyles.MSright1img} />
                                        <Text style={globalstyles.MStext2}>Subscription Plan choose</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={globalstyles.MSplanview4}>

                                <Image resizeMode='contain' source={require('../../../Image/rupeeimg.png')} style={globalstyles.MSrupeeimg} />
                                <Text style={globalstyles.MStext3}>500</Text>

                                <View style={{ marginLeft: '1%' }}>
                                    <Text style={globalstyles.MStext4}>PER</Text>
                                    <Text style={globalstyles.MStext5}>MONTH</Text>
                                </View>

                            </View>

                        </ImageBackground>
                    ))}

                </View>

                <Text style={styles.linestyle}></Text>

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
                </View>

                <Text style={styles.linestyle}></Text>

                <View style={styles.Walletamountview}>
                    <Text style={styles.txt2}>Wallet amount</Text>
                    <View style={styles.Walletview2}>
                        <View style={styles.Walletview3}>
                            <FastImage resizeMode='contain' source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg} />
                            <Text style={styles.txt3}>400</Text>
                        </View>
                        <TouchableOpacity style={styles.Usenowbtn}>
                            <Text style={styles.Usenowbtntxt}>Use now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.linestyle}></Text>

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

                <Text style={styles.linestyle}></Text>
                <View style={styles.view3}>
                    <Text style={styles.txt5}>Total amount</Text>
                    <View style={styles.view2}>
                        <Text style={styles.txt6}> : </Text>
                        <FastImage resizeMode='contain' source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg2} />
                        <Text style={styles.txt6}>100</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.touchbtn} onPress={ToDeals}>
                    <Text style={globalstyles.btntxt}>Payment Process</Text>
                </TouchableOpacity>


            </ScrollView >
        </View >
    )
}