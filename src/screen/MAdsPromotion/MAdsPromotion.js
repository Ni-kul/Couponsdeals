// MAdsPromotion
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';

export default function MAdsPromotion({ navigation }) {

    const [loading, setLoading] = useState(false);

    const Draftdata = [
        { name: 'Swiggy', img: require('../../../Image/Swiggy-logo2.png'), text1: 'Online', text2: 'Pending', },
        { name: 'MC Dominos', img: require('../../../Image/Dominologo.png'), text1: 'Offline', text2: 'Approval' },
        { name: 'Swiggy', img: require('../../../Image/Swiggy-logo2.png'), text1: 'Online', text2: 'Approval', },
        { name: 'MC Dominos', img: require('../../../Image/Dominologo.png'), text1: 'Offline', text2: 'Approval' },
    ]

    // MCouponDescription
    const ToMCouponDescription = () => {
        navigation.navigate('MCouponDescription', { from: 'MAdsPromotion' });
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
                    <Text style={globalstyles.hadtxttwo}>Ads Promotion</Text>
                </View>

                <View style={{ marginTop: 10, marginBottom: 30 }}>
                    {Draftdata.map((data, index) => (

                        <TouchableOpacity style={styles.view1} key={index} onPress={() => ToMCouponDescription()}>
                            <View style={styles.view2}>
                                <Image source={data.img} style={styles.logoimg} />
                                <View style={styles.nameview}>
                                    <Text style={styles.nametxt}>{data.name}</Text>
                                    <Text style={styles.onofftxt}>{data.text1}</Text>
                                </View>

                                <TouchableOpacity >
                                    <Text style={styles.txtviewmore}>View more</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.view3}>
                                <View style={styles.view4}>
                                    <Text style={styles.txtcat}>Cat : Food & Drinks</Text>
                                </View >
                                <View style={styles.view4}>
                                    <Text style={styles.txtcat}>Started : 08-feb-2024</Text>
                                </View>
                            </View>

                            <View style={styles.view3}>
                                <View style={styles.view4}>
                                    <Text style={styles.txtcat}>Sub - Cat : Dinners</Text>
                                </View >
                                <View style={styles.view4}>
                                    <Text style={styles.txtcat}>Ended : 30-feb-2024</Text>
                                </View>
                            </View>

                            <View style={styles.view3}>
                                <View style={styles.view4}>
                                    <Text style={styles.txtcat}>Deals :  Discount</Text>
                                </View >
                                <View style={styles.view4}>
                                    <Text style={styles.txtcat}>Used coupons : 150</Text>
                                </View>
                            </View>

                            <View style={styles.lastview}>
                                <View style={styles.priceview}>
                                    <FastImage resizeMode='contain' source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg} />
                                    <Text style={styles.pricetxt}>500</Text>
                                </View>

                                <TouchableOpacity style={styles.btnview} >
                                    <Text style={styles.btnviewtxt}>View Statistics</Text>
                                </TouchableOpacity>
                            </View>


                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}