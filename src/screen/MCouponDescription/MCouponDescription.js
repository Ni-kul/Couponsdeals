// MCouponDescription
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function MCouponDescription({ navigation, route }) {

    const [loading, setLoading] = useState(false);
    const [showAds, setshowAds] = useState(false);

    const Too = route.params
    // console.log('Too', Too);
    const { from } = Too || {};
    const imgdata = [
        { img: require('../../../Image/carcar.png') },
        { img: require('../../../Image/carcar.png') },
        { img: require('../../../Image/carcar.png') },
    ]

    // useEffect(() => {
    //     navigation.addListener('focus', () => {
    //         if (Too != null) {
    //             if (from === 'MAdsPromotion') {
    //                 setshowAds(true);
    //             }
    //         }
    //     })

    // }, []);

    const ToMSubscription = () => {
        navigation.navigate('MSubscription');
    }

    const ToMDraftCoupons = () => {
        navigation.navigate('MDraftCoupons');
    }

    const ToMAdsPromotion = () => {
        navigation.navigate('MAdsPromotion');
    }

    return (
        <View style={globalstyles.thirdmainview}>
            {loading ?
                <View style={globalstyles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}

            <ScrollView>

                <View style={styles.Backarrowviewtwo}>
                    <Backarrow />
                    <Text style={styles.hadtxttwo}>Description</Text>
                    <TouchableOpacity >
                        <Image resizeMode='contain' source={require('../../../Image/delete.png')} style={styles.deletimg} />
                    </TouchableOpacity>
                </View>

                {from ?

                    <View style={styles.adsview}>
                        <View style={styles.adsview2}>
                            <Text style={styles.adstxt1} >Ads promotion</Text>
                            <View style={styles.adsview3}>
                                <Image resizeMode='contain' source={require('../../../Image/ru1.png')} style={styles.rupeeimg} />
                                <Text style={styles.adstxt3} >500</Text>
                                <View style={{ marginLeft: '3%' }}>
                                    <Text style={styles.adstxt4} >PER</Text>
                                    <Text style={styles.adstxt5} >MONTH</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.adsview4}>
                            <Image resizeMode='contain' source={require('../../../Image/right2.png')} style={styles.right2img} />
                            <Text style={styles.adstxt6}>Gold plan subscription</Text>
                        </View>

                        <View style={styles.adsview4}>
                            <Image resizeMode='contain' source={require('../../../Image/right2.png')} style={styles.right2img} />
                            <Text style={styles.adstxt6}>1 month of subscription</Text>
                        </View>

                        <View style={styles.adsview5}>
                            <Text style={styles.adstxt6}>Start 20/03/2024</Text>
                            <Text style={styles.adstxt6}>   End 20/04/2024</Text>
                        </View>

                    </View>
                    :
                    <View style={styles.adsview}>
                        <Text style={styles.adstxt1} >Ads promotion</Text>
                        <Text style={styles.adstxt2} >Did you want first preference for your coupons sale</Text>

                        <TouchableOpacity style={styles.adsapplybtn} onPress={ToMAdsPromotion}>
                            <Text style={styles.adsapplybtntxt}>Apply </Text>
                        </TouchableOpacity>

                    </View>
                }

                <View style={globalstyles.sliderview}>
                    <Swiper
                        dot={<View style={globalstyles.Swiperdot} />}
                        activeDot={<View style={globalstyles.Swiperactivdot} />}
                    >
                        {imgdata.map((item, index) => (
                            <View key={index}>
                                <FastImage resizeMode='stretch' source={item.img} style={globalstyles.swiperimg} />
                            </View>
                        ))}
                    </Swiper>

                    <View style={styles.logoview}>
                        <Image resizeMode='contain' source={require('../../../Image/WHITE1go.png')} style={styles.logoimg} />
                    </View>
                </View>

                <View style={styles.firstview}>
                    <Text style={styles.labletxt}>Car service & Washing</Text>
                    <TouchableOpacity style={styles.Onlinebtnview}>
                        <Text style={styles.txt2}>Online</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secondview}>

                    <Text style={styles.notetxt}>Note : <Text style={{ fontWeight: '400' }}>You can get 100 Loyalty Points for this coupons</Text></Text>

                    <View style={styles.thirdview} >

                        <Text style={styles.txt8}>Restrictions : <Text style={styles.txt7}>3581GMS35</Text></Text>
                        <Text style={styles.txt81}>Coupon Type : <Text style={styles.txt71}>Discount</Text></Text>
                        <Text style={styles.txt81}>Start  Deals : <Text style={styles.txt71}>Feb,15,2024</Text></Text>
                        <Text style={styles.txt81}>End  Deals : <Text style={styles.txt71}>Feb,30,2024</Text></Text>
                        <Text style={styles.txt81}>Min-Purchace : <Text style={styles.txt71}>1,000</Text></Text>

                        <View style={styles.fourview}>
                            <View style={styles.fiveview}>
                                <Text style={styles.txt81}>Max-Purchase : <Text style={styles.txt71}>30,000</Text></Text>
                            </View>
                            <View style={styles.fiveview}>
                                <Text style={styles.txt81}>Available coupons : <Text style={styles.txt71}>150</Text></Text>
                            </View>
                        </View>

                        <View style={styles.fourview}>
                            <View style={styles.fiveview}>
                                <Text style={styles.txt81}>Used coupons : <Text style={styles.txt71}>150</Text></Text>
                            </View>
                            <View style={styles.fiveview}>
                                <Text style={styles.txt81}>Coupons Used : <Text style={styles.txt71}>online</Text></Text>
                            </View>
                        </View>

                        <Text style={styles.txt81}>Available coupons : <Text style={styles.txt71}>250</Text></Text>
                    </View>

                    <Text style={styles.txt4}>Description</Text>
                    <Text style={styles.txt3}>A car wash, or auto wash, is a facility used to clean the exterior, and in some cases the interior, of cars. Car washes can be self-service, full-service (with attendants who wash the vehicle), or fully automated (possibly connected to a filling station)</Text>

                    <Text style={styles.txt4}>Categories : <Text style={styles.txt5}>Automotive</Text></Text>
                    <Text style={styles.txt4}>Sub - Categories : <Text style={styles.txt5}>Car washing</Text></Text>
                    <Text style={styles.txt4}>Business type : <Text style={styles.txt5}>Car service</Text></Text>
                    <Text style={styles.txt4}>No of year of trading : <Text style={styles.txt5}>22 Years</Text></Text>

                    <Text style={styles.txt4}>Terms & conditions</Text>
                    {/* blackdot */}
                    <View style={styles.TandCview}>
                        <Image source={require('../../../Image/blackdot.png')} style={styles.blackdot} />
                        <Text style={styles.txt6}>How to propel your business growth with discount coupons</Text>
                    </View>
                    <View style={styles.TandCview}>
                        <Image source={require('../../../Image/blackdot.png')} style={styles.blackdot} />
                        <Text style={styles.txt6}>What limits to use and how to build an effective coupon journey</Text>
                    </View>
                    <View style={styles.TandCview}>
                        <Image source={require('../../../Image/blackdot.png')} style={styles.blackdot} />
                        <Text style={styles.txt6}>Learn the best practices of all successful coupon campaigns</Text>
                    </View>

                    <Text style={styles.txt4}>How to use</Text>
                    <Text style={styles.txt3}>If you receive an online store coupon, you can enter in the coupon code at check out on the merchants online store. When you redeem a coupon, your card statement may initially show a pending charge for the full transaction amount</Text>

                    <View style={styles.weblinkview}>
                        <Text style={styles.txt44}>Website link  : </Text>
                        <Text style={styles.txt33}> https://www.w3.org/Provider/Style/dummy.htmlAutomotive</Text>
                    </View>

                    {/* download */}
                    <TouchableOpacity style={styles.touchbtn} onPress={ToMDraftCoupons}>
                        <Image resizeMode='contain' source={require('../../../Image/download.png')} style={styles.downloadimg} />
                        <Text style={styles.btntxt}>Download Coupons</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchbtn2} onPress={ToMSubscription}>
                        <Image resizeMode='contain' source={require('../../../Image/download.png')} style={styles.downloadimg} />
                        <Text style={styles.btntxt2}>Used Coupons</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchbtn} >
                        <Text style={styles.btntxt}>Publish</Text>
                    </TouchableOpacity>

                </View>


            </ScrollView>
        </View>
    )
}