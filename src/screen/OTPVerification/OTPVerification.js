// OTPVerification
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import OTPTextInput from 'react-native-otp-textinput'
import { globalstyles } from '../../globalstyles';
import { verifyotp } from '../API';
import { styles } from './styles';

export default function OTPVerification({ navigation, route }) {
    const [enterOTP, setenterOTP] = useState('');
    const [msg1, setmsg1] = useState('');
    const [timer, setTimer] = useState(20);
    const [showResend, setShowResend] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [idModalVisible, setidModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ReferralID, setReferralID] = useState('');

    // const signupdata = route.params
    // console.log('signupdata', signupdata)

    useEffect(() => {
        openmodalid()
        let newIntervalId = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(newIntervalId);
                    setShowResend(true);
                    return 0;
                }
            });
        }, 1000);
        setIntervalId(newIntervalId);

        return () => {
            clearInterval(newIntervalId);
        };
    }, []);

    const formatTime = (timeInSeconds) => {
        const seconds = timeInSeconds % 60;
        return `${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const startTimer = () => {
        setTimer(20);
        setShowResend(false)
    };
    const handleResend = async () => {
        clearInterval(intervalId);
        startTimer();
        const newIntervalId = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(newIntervalId);
                    setShowResend(true);
                    return 0;
                }
            });
        }, 1000);
        setIntervalId(newIntervalId);
    };

    const checkvalidation = async () => {
        // if (enterOTP == '') {
        //     setmsg1('*Please Enter The OTP')
        // } else {
        //     setmsg1('')

        //     // openmodal();
        //     const data = {
        //         user_id: signupdata.id,
        //         otp: enterOTP,
        //     };
        //     setLoading(true);
        //     const response = await verifyotp(global.URL + 'verifyotp', data);
        //     // console.log('verifyotp --> response', response)
        //     setLoading(false);
        //     if (response.success == true) {
        //         const setdata = await AsyncStorage.setItem('Userdata', JSON.stringify(response.data[0]));
        //         // console.log('setdata',setdata)
        openmodal()
        //     } else {
        //         alert(' verifyotp false')
        //     }
        // }
    }

    const openmodal = () => {
        setModalVisible(true);
    }
    const closemodal = () => {
        setModalVisible(false);
        navigation.navigate('Dashboard')
    }
    const closemodalTap = () => {
        setModalVisible(false);
    }


    const openmodalid = () => {
        setidModalVisible(true);
    }
    const closemodalid = () => {
        setidModalVisible(false);

    }
    const closemodalTapid = () => {
        setidModalVisible(false);
    }

    const ToDashboard = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <View style={globalstyles.mainview}>
            <ScrollView >

                <View style={globalstyles.imgview}>
                    <Image source={require('../../../Image/39577231.png')} style={globalstyles.oneimg} />
                </View>

                <View style={globalstyles.absoluteview}>
                    <View style={{ marginTop: 29, paddingBottom: 20, alignSelf: 'center', }}>
                        <Text style={globalstyles.txt1}>OTP Verification</Text>
                    </View>
                </View>

                <View style={{ width: '80%', alignSelf: 'center', marginTop: 4, marginBottom: 30 }}>
                    <Text style={styles.txt2}>Enter The Code Send To Your Mobile Number +91 </Text>
                    {/* {signupdata.mobile} */}
                    <Text style={styles.timertxt}>{formatTime(timer)} </Text>

                    <OTPTextInput
                        containerStyle={{ marginTop: '9%', backgroundColor: 'white', alignSelf: 'center' }}
                        textInputStyle={styles.otptxtinput}
                        tintColor={'#002408'}
                        offTintColor={'#002408'}
                        // tintColor={(Platform.OS === 'ios') ? '#004BBC' : 'white'}
                        inputCount={4}
                        handleTextChange={(enterOTP) => setenterOTP(enterOTP)}
                    />
                </View>
                {msg1 ? <Text style={globalstyles.msg}>{msg1}</Text> : null}

                {showResend &&
                    <View style={styles.Resendview}>
                        <Text style={styles.txt3}>Don’t received the OTP?</Text>
                        <TouchableOpacity onPress={handleResend}>
                            <Text style={styles.txt4}> Resend</Text>
                        </TouchableOpacity>
                    </View>
                }

                <View style={styles.lastview}>
                    <TouchableOpacity style={globalstyles.touchbtn} onPress={ToDashboard}>
                        <Text style={globalstyles.btntxt}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal isVisible={isModalVisible}
                onBackButtonPress={closemodalTap} onBackdropPress={closemodalTap}>
                <View style={globalstyles.Mviewone}>

                    <Text style={globalstyles.Mtxt1}>Terms & condition</Text>
                    <Text style={globalstyles.Mtxt2}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</Text>

                    <View style={globalstyles.Mviewtwo}>
                        <TouchableOpacity style={globalstyles.TandCmodalbtn} onPress={closemodal}>
                            <Text style={globalstyles.btntxt} >Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal isVisible={idModalVisible}
                onBackButtonPress={closemodalTapid} onBackdropPress={closemodalTapid}>
                <View style={{ backgroundColor: '#FFFFFF', borderColor: '#C0C0C0', borderRadius: 20 }}>

                    <TouchableOpacity style={styles.m2imgview} onPress={closemodalTapid}>
                        <Image source={require('../../../Image/close.png')} style={styles.closeimg} />
                    </TouchableOpacity>
                    <Text style={styles.M2txt1}>Referral ID</Text>
                    {/* close */}
                    <Text style={styles.M2txt2}>Did you have referral id enter here you will get offers for this app</Text>

                    <TextInput
                        style={styles.intxt}
                        placeholder='Enter Referral ID'
                        placeholderTextColor='#000000'
                        color='black'
                        value={ReferralID}
                        onChangeText={(text) => setReferralID(text)}
                    />

                    <View style={globalstyles.Mviewtwo}>
                        <TouchableOpacity style={globalstyles.TandCmodalbtn} onPress={closemodalid}>
                            <Text style={globalstyles.btntxt} >Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
