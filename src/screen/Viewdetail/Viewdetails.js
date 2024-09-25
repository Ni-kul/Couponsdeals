// Viewdetails
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import StarRating from 'react-native-star-rating-widget';
import Modal from "react-native-modal";
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function Viewdetails({ navigation }) {
    const [Presslike, setPresslike] = useState(false);
    const [showCouponCode, setShowCouponCode] = useState(false);
    const [isModalVisible, setisModalVisible] = useState(false);
    const [isModalVisible2, setisModalVisible2] = useState(false);
    const [ratingModalVisible, setratingModalVisible] = useState(false);
    const [rating, setRating] = useState(0);

    const imgdata = [
        { img: require('../../../Image/carcar.png') },
        { img: require('../../../Image/carcar.png') },
        { img: require('../../../Image/carcar.png') },
    ]

    const Tocode = () => {
        setShowCouponCode(!showCouponCode);
        navigation.navigate('Subscriptionplan');
    };

    const handlePresslike = () => {
        setPresslike(!Presslike);
    };

    const openmodal = () => {
        setisModalVisible(true);
    }
    const closemodal = () => {
        Tocode()
        setisModalVisible(false);
    }
    const closemodalTap = () => {
        setisModalVisible(false);
    }

    const openmodal2 = () => {
        setisModalVisible2(true);
    }
    const closemodal2 = () => {

        setisModalVisible2(false);
    }
    const closemodalTap2 = () => {
        setisModalVisible2(false);
        navigation.navigate('UserPaymentDetails');
    }

    // ratingModalVisible
    const openmodalrating = () => {
        setratingModalVisible(true);
    }
    const closemodalrating = () => {
        setratingModalVisible(false);
    }
    const closemodalTaprating = () => {
        setratingModalVisible(false);
    }

    return (
        <View style={globalstyles.secmainview}>
            <ScrollView >
                <View style={styles.Backarrowview}>
                    <Backarrow />
                    <Image resizeMode='contain' source={require('../../../Image/WHITE1go.png')} style={styles.WHITE1go} />
                </View>

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
                </View>

                <View style={{ position: 'absolute', zIndex: 1, top: 74, alignSelf: 'flex-end', right: '8%' }}>
                    <TouchableOpacity onPress={handlePresslike} >
                        <Image resizeMode='contain' source={Presslike ? require('../../../Image/liketwo.png') : require('../../../Image/like.png')} style={styles.liketwo} />
                    </TouchableOpacity>
                </View>

                <View style={styles.firstview}>
                    <Text style={styles.labletxt}>Car service & Washing</Text>
                    <TouchableOpacity style={styles.Onlinebtnview}>
                        <Text style={styles.txt2}>Online</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secondview}>

                    <Text style={styles.notetxt}>Note : <Text style={{ fontWeight: '400' }}>When you purchase this coupon you can get some loyalty point </Text></Text>

                    <View style={styles.thirdview} >

                        <Text style={styles.txt8}>Restrictions : <Text style={styles.txt7}>3581GMS35</Text></Text>
                        <Text style={styles.txt81}>Coupon Type : <Text style={styles.txt71}>Discount</Text></Text>
                        <Text style={styles.txt81}>Start  Deals : <Text style={styles.txt71}>Feb,15,2024</Text></Text>
                        <Text style={styles.txt81}>End  Deals : <Text style={styles.txt71}>Feb,30,2024</Text></Text>
                        <Text style={styles.txt81}>Min-Purchace : <Text style={styles.txt71}>1,000</Text></Text>
                        <Text style={styles.txt81}>Max-Purchase : <Text style={styles.txt71}>30,000</Text></Text>

                        <View style={styles.fourview}>
                            <View style={styles.fiveview}>
                                <Text style={styles.txt81}>Get discount : <Text style={styles.txt71}>50%</Text></Text>
                            </View>
                            <View style={styles.fiveview}>
                                <Text style={styles.txt81}>Available coupons : <Text style={styles.txt71}>150</Text></Text>
                            </View>
                        </View>

                    </View>

                    <Text style={styles.txt4}>Description</Text>
                    <Text style={styles.txt3}>A car wash, or auto wash, is a facility used to clean the exterior, and in some cases the interior, of cars. Car washes can be self-service, full-service (with attendants who wash the vehicle), or fully automated (possibly connected to a filling station)</Text>

                    <Text style={styles.txt4}>Categories : <Text style={styles.txt5}>Automotive</Text></Text>
                    <Text style={styles.txt4}>Sub - Categories : <Text style={styles.txt5}>Car washing</Text></Text>

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

                    {!showCouponCode && (
                        <View style={{ marginBottom: 70 }}>
                            <TouchableOpacity style={globalstyles.touchbtn} onPress={openmodal}>
                                <Text style={globalstyles.btntxt}>Get code</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {showCouponCode && (
                        <View style={{ marginBottom: 36 }}>
                            {/* <Image source={require('../../../Image/couponcode.png')} style={styles.couponcode} /> */}
                            <Image source={require('../../../Image/coupcode.png')} style={styles.couponcode} />

                            <Text style={styles.txt10}>COUPON CODE</Text>
                            <Text style={styles.whiteline}></Text>
                            <Text style={styles.txt11}>Code</Text>
                            <Text style={styles.txt12}>AAA-98546-254</Text>
                            <TouchableOpacity style={styles.txtcopyview}>
                                <Image source={require('../../../Image/textcopy.png')} style={styles.textcopy} />
                            </TouchableOpacity>
                            <Text style={styles.txt13}>COUPON CODE</Text>

                        </View>
                    )}


                    <TouchableOpacity style={globalstyles.touchbtn} onPress={openmodalrating}>
                        <Text style={globalstyles.btntxt}>Copy code</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>



            {/* Terms & condition  -- Modal */}
            <Modal isVisible={isModalVisible}
                onBackButtonPress={closemodalTap} onBackdropPress={closemodalTap}>
                <View style={styles.Mviewone}>

                    <Text style={styles.Mtxt1}>Terms & condition</Text>

                    <Text style={styles.Mtxt2}>If you confirm to purchase this coupons and after reduce in your subscription count</Text>

                    <TouchableOpacity style={globalstyles.touchbtn} onPress={openmodal2}>
                        <Text style={globalstyles.btntxt}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Modal>


            {/* Congratulations  -- Modal */}
            <Modal isVisible={isModalVisible2}
                onBackButtonPress={closemodalTap2} onBackdropPress={closemodalTap2}>
                <View style={styles.Mviewone2}>

                    <Text style={styles.Mtxt1}>Congratulations</Text>
                    <View style={styles.Mviewtwo}>

                        <Image resizeMode='stretch' source={require('../../../Image/pngtree.png')} style={styles.pngtreeimg} />
                        <View>
                            <Image resizeMode='contain' source={require('../../../Image/reward.png')} style={styles.reward} />
                            <View style={styles.mrupeecoinview}>
                                <Image resizeMode='contain' source={require('../../../Image/rupeecoin.png')} style={styles.rupeecoin} />
                                <Text style={styles.Mtxt3}>100</Text>
                            </View>
                        </View>
                        <Image resizeMode='stretch' source={require('../../../Image/pngtree2.png')} style={styles.pngtreeimg} />

                    </View>
                    <Text style={styles.Mtxt4}>You Can Get 200 Loyalty Points</Text>

                </View>
            </Modal>


            {/* rating  -- Modal  closemodalrating*/}
            <Modal isVisible={ratingModalVisible}
                onBackButtonPress={closemodalTaprating} onBackdropPress={closemodalTaprating}>
                <View style={styles.Mratingview}>

                    <Text style={styles.Mratingtxt1}>Share your Feedback</Text>
                    <View >
                        <StarRating
                            style={{ marginTop: 14, marginBottom: 20, alignSelf: 'center' }}
                            starSize={40}
                            color='#F55B03'
                            emptyColor='#D3D3D3'
                            rating={rating}
                            onChange={setRating}
                        //  enableHalfStar={false}
                        />

                    </View>

                    <TouchableOpacity style={globalstyles.touchbtn} onPress={closemodalrating}>
                        <Text style={globalstyles.btntxt}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
    )
}
