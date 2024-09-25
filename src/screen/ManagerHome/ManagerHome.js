import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Animated, PanResponder, ImageBackground, SafeAreaView, Alert } from 'react-native';
import { globalstyles } from '../../globalstyles';
import SccanerButton from '../componet/SccanerButton';
import { styles } from './styles';
import Modal from "react-native-modal";


export default function ManagerHome({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);
    const [isModalVisible4, setModalVisible4] = useState(false);

    // Enter coupon code modal
    const openmodal = () => {
        setModalVisible(true);
    }
    const closemodal = () => {
        setModalVisible(false);
        openmodal2()
    }

    // Use Now modal
    const openmodal2 = () => {
        setModalVisible2(true);
    }
    const closemodal2 = () => {
        openmodal3();
        setModalVisible2(false);
    }

    // Enter Purchasing amount modal
    const openmodal3 = () => {
        setModalVisible3(true);
    }
    const closemodal3 = () => {
        openmodal4()
        setModalVisible3(false);
    }

    // Successful modal
    const openmodal4 = () => {
        setModalVisible4(true);
        setTimeout(() => {
            setModalVisible4(false);
        }, 1500);
    }
    const closemodal4 = () => {
        setModalVisible4(false);
    }


    return (
        <View>

            <ScrollView>
                <ImageBackground source={require('../../../Image/scannerbg.jpeg')} >
                    <View style={styles.backGround}>

                        <View style={styles.qrcode}>
                            <Image source={require('../../../Image/qrCode2.png')} />
                        </View>
                        <View style={[styles.modalContainer]}>
                            <Text style={styles.ModalTitle}>Enter 16 Digited Number</Text>
                            <TextInput
                                placeholder='Enter 16 Digited number'
                                style={styles.input}
                                keyboardType='numeric'
                                placeholderTextColor='#BABABA'
                            />
                            <TouchableOpacity style={styles.button} onPress={() => openmodal()}>
                                <Text style={styles.buttonText}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>


            <Modal isVisible={isModalVisible} onBackButtonPress={() => closemodal()} onBackdropPress={() => closemodal()}
                style={{ margin: 0, justifyContent: 'flex-end' }}
            >
                <View style={[styles.modalContainer]}>
                    <View style={styles.userProfile}>
                        <Image source={require('../../../Image/user.png')} style={styles.UserImage} />
                        <View>
                            <Text style={styles.userName}>Kavin Kumar</Text>
                            <Text style={styles.userMsg}>Kavin Kumar is a camdell user</Text>
                        </View>
                    </View>
                    <Text style={styles.ModalTitle}>Enter coupon code</Text>
                    <TextInput placeholder='Enter coupon code' style={styles.input} />
                    <TouchableOpacity style={styles.button} onPress={() => closemodal()}>
                        <Text style={styles.buttonText}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal
                isVisible={isModalVisible2} onBackButtonPress={() => closemodal2()} onBackdropPress={() => closemodal2()}
                style={{ margin: 0, justifyContent: 'flex-end' }}
            >
                <View style={[styles.modalContainer]}>
                    <View style={styles.userProfile}>
                        <Image source={require('../../../Image/user.png')} style={styles.UserImage} />
                        <View>
                            <Text style={styles.userName}>Kavin Kumar</Text>
                        </View>
                    </View>

                    <View style={styles.cupon}>
                        <View style={styles.compnyLogo}>

                            <Image source={require('../../../Image/Swiggylogo.png')} style={styles.logo} />
                            <Text style={styles.compnyText}>Swiggy</Text>
                        </View>
                        <View style={styles.cuponInfo}>
                            <Text style={styles.InfoText}>Cat : Food  & Drinks</Text>
                            <Text style={styles.InfoText}>Started : 08-feb-2024</Text>
                            <Text style={styles.InfoText}>Sub - Cat : Dinners</Text>
                            <Text style={styles.InfoText}>Ended : 30-feb-2024</Text>
                            <Text style={styles.InfoText}>Deals :  Discount</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => closemodal2()}>
                        <Text style={styles.buttonText}>
                            Use Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal
                isVisible={isModalVisible3} onBackButtonPress={() => closemodal3()} onBackdropPress={() => closemodal3()}
                style={{ margin: 0, justifyContent: 'flex-end' }}
            >
                <View style={[styles.modalContainer]}>
                    <View style={styles.userProfile}>
                        <Image source={require('../../../Image/user.png')} style={styles.UserImage} />
                        <View>
                            <Text style={styles.userName}>Kavin Kumar</Text>
                        </View>
                    </View>
                    <Text style={styles.ModalTitle}>Enter Purchasing amount</Text>
                    <TextInput placeholder='Enter Amount' style={styles.input} />
                    <TouchableOpacity style={styles.button} onPress={() => closemodal3()}>
                        <Text style={styles.buttonText}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>


            <Modal
                isVisible={isModalVisible4} onBackButtonPress={() => closemodal4()} onBackdropPress={() => closemodal4()}
                style={{ margin: 0, flex: 1 }}
            >
                <View style={styles.successful}>
                    <Image source={require('../../../Image/Successful.png')} />
                    <Text style={styles.successfulText}>Successful</Text>
                </View>
            </Modal>

        </View>

    )
}