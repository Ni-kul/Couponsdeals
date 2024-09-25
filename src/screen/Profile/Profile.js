// Profile.js
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, SafeAreaView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function Profile({ navigation }) {

    const [isModalVisible, setModalVisible] = useState(false);
    const [isSeconModalVisible, setSecondModalVisible] = useState(false)
    const [loading, setLoading] = useState(false);
    const [imageUri, setImageUri] = useState(null);
    const [name, setname] = useState('');

    useEffect(() => {
        const Touserdata = async () => {
            setLoading(true);
            const userData = await AsyncStorage.getItem('Userdata');
            // console.log('userData', userData)
            const userDataArray = JSON.parse(userData);
            setLoading(false);
            if (userDataArray) {
                setname(userDataArray.name)
                setImageUri(userDataArray.profile_image)

            }
        }

        navigation.addListener('focus', () => {
            // Touserdata();
            // global.tabbar = 2
            // console.log('global.tabbar p', global.tabbar)
        })

    }, []);

    const ToEditProfile = () => {
        navigation.navigate('EditProfile')
    }
    const ToUsedCoupons = () => {
        navigation.navigate('UsedCoupons')
    }
    const openmodal = () => {
        setModalVisible(true);
    }
    const closemodal = (val) => {
        setModalVisible(false);
    }
    const closemodalTap = (val) => {
        setModalVisible(false);
    }
    const openSecondmodal = () => {
        setSecondModalVisible(true);
    }
    const closeSecondmodal = (val) => {
        setSecondModalVisible(false);
    }
    const closeSecondmodalTap = (val) => {
        setSecondModalVisible(false);
    }

    const ToSubscriptionplan = () => {
        navigation.navigate('Subscriptionplan')
    }
    const ToUserwalletIncome = () => {
        navigation.navigate('UserwalletIncome')
    }

    const ToSubscriptionhistory = () => {
        navigation.navigate('SubscriptionHistory')
    }

    const ToMyCoupons = (data) => {
        navigation.navigate('MyCoupons', data)
    }

    const ToLoyltyPoints = () => {
        navigation.navigate('LoyaltyPoints')
    }
    const ToReferralId = () => {
        navigation.navigate('ReferralId')
    }
    const ToAbout = () => {
        navigation.navigate('About')
    }
    const ToFaq = () => {
        navigation.navigate('Faq')
    }
    const ToPartnerWithUs = () => {
        navigation.navigate('PartnerWithUs')
    }

    const ToChangePassword = () => {
        navigation.navigate('ChangePassword')
    }

    // LinesBackground 
    const LogOut = async () => {
        const finalRes = await AsyncStorage.removeItem('Userdata');
        console.log('Userdata-Users-LogOut', finalRes)
        navigation.navigate('Signin');
    }
    return (

        <View style={styles.secmainview}>
            {loading ?
                <View style={globalstyles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}
            <ScrollView >

                <View style={globalstyles.Profile1view}>
                    <Image source={require('../../../Image/LinesBackground.png')} style={globalstyles.LinesBackground} />
                    <View style={globalstyles.Backarrowprofile}>
                        <Backarrow />
                    </View>

                    <Text style={styles.nametxt}>Jaya{name}</Text>
                    <View style={styles.coinview}>
                        <Image resizeMode='contain' source={require('../../../Image/rupeecoin.png')} style={styles.rupeecoin} />
                        <Text style={styles.cointxt}>100</Text>
                    </View>
                    {imageUri ?
                        <Image resizeMode='contain' source={{ uri: global.IMG + imageUri }} style={globalstyles.Rprofile} />
                        :
                        <Image resizeMode='contain' source={require('../../../Image/Rprofile.png')} style={globalstyles.Rprofile} />
                    }
                    {/* <Image source={require('../../../Image/Rprofile.png')} style={globalstyles.Rprofile} /> */}
                </View>

                <View style={{ marginTop: 50, marginBottom: 90 }}>

                    <TouchableOpacity onPress={ToEditProfile}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/profile1.png')} style={styles.profile1} />
                            <Text style={styles.onetxt}>My Profile</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/Vectorp.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>Became A Partner</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => ToMyCoupons(1)}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/fluent_people.png')} style={styles.vectorimg} />
                            <Text style={styles.onetxt}>My coupons</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => ToUsedCoupons()}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/discount1.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>Used coupons</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => ToMyCoupons(2)}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/li2.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>Wishlist</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={ToUserwalletIncome}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/Wallet.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>Wallet</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ToLoyltyPoints}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/Vectorlo.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>Loyalty Points</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ToSubscriptionplan}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/plan.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>Subscription plan</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ToSubscriptionhistory}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/Vectorsh.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>Subscription History</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ToReferralId} >
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/VectorRid.png')} style={styles.profile1} />
                            <Text style={styles.onetxt}>Referral ID</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openmodal()}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/TandC.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>Terms and Conditions</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ToChangePassword}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/Vectorpass.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>Change password</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ToAbout}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/Vectoraboutus.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>About us</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ToFaq} >
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/faq.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>FAQs Question</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ToPartnerWithUs}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/Vectorpus.png')} style={styles.discount1} />
                            <Text style={styles.onetxt}>Partner with us</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openSecondmodal()}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/Vectordelete.png')} style={styles.profile1} />
                            <Text style={styles.onetxt}>Delete Account</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={LogOut}>
                        <View style={styles.viewone}>
                            <Image resizeMode='contain' source={require('../../../Image/logout.png')} style={styles.logout} />
                            <Text style={styles.onetxt}>Logout</Text>
                            <Image source={require('../../../Image/Rarrow.png')} style={styles.Rarrow} />
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>


            <Modal isVisible={isModalVisible}
                onBackButtonPress={() => closemodalTap()} onBackdropPress={() => closemodalTap()}>
                <View style={globalstyles.Mviewone}>

                    <Text style={globalstyles.Mtxt1}>Terms & condition</Text>
                    <Text style={globalstyles.Mtxt2}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</Text>

                    <View style={globalstyles.Mviewtwo}>
                        <TouchableOpacity style={globalstyles.TandCmodalbtn} onPress={() => closemodal()}>
                            <Text style={globalstyles.btntxt} >Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal isVisible={isSeconModalVisible}
                onBackButtonPress={() => closeSecondmodal()} onBackdropPress={() => closeSecondmodalTap()}>
                <View style={globalstyles.Mviewone}>

                    <Text style={globalstyles.Mtxt1}>Terms & condition</Text>
                    <Text style={globalstyles.Mtxt2}>Are you sure you want to delete your account . Once confirmed we will verify and delete the account within 4 days. If your mind changed afterwards, you can access the app by registering again.</Text>

                    <View style={globalstyles.Mviewtwo}>
                        <TouchableOpacity style={styles.TandCmodalbtn} onPress={() => closeSecondmodal()}>
                            <Text style={styles.btntxt} >Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


        </View>

    )
}