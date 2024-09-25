import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Modal from "react-native-modal";
import { styles } from './styles';
import DatePicker from 'react-native-date-picker';

export default function ManagerSecondCupon({ navigation }) {

    const [isModalVisible, setModalVisible] = useState(true);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);
    const [isModalVisible4, setModalVisible4] = useState(false);

    const [date, setdate] = useState(null);
    const [opendate, setOpendate] = useState(false)
    const [time, settime] = useState(null);
    const [opentime, setOpentime] = useState(false)

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
            setModalVisible(true);
        }, 1500);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../Image/scannerbg.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.backGround}>
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <View style={styles.qrcode}>
                            <Image source={require('../../../Image/qrCode2.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

            </ImageBackground>


            <Modal isVisible={isModalVisible} onBackButtonPress={() => closemodal()} onBackdropPress={() => closemodal()}
                style={{ margin: 0, }}
            >
                <View style={[styles.modalContainer]}>
                    <Text style={styles.ModalTitle}>Enter coupon code</Text>
                    <TextInput
                        placeholder='Enter coupon code'
                        placeholderTextColor='#BABABA'
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => { closemodal() }}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>

                </View>
            </Modal>

            <Modal isVisible={isModalVisible2} onBackButtonPress={() => closemodal2()} onBackdropPress={() => closemodal2()}
                style={{ margin: 0, }}
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
                            <Text style={styles.InfoText}>Cat: Food & Drinks</Text>
                            <Text style={styles.InfoText}>Started: 08-feb-2024</Text>
                            <Text style={styles.InfoText}>Sub-Cat: Dinners</Text>
                            <Text style={styles.InfoText}>Ended: 30-feb-2024</Text>
                            <Text style={styles.InfoText}>Deals: Discount</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => closemodal2()}>
                        <Text style={styles.buttonText}>Use Now</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal isVisible={isModalVisible3} onBackButtonPress={() => closemodal3()} onBackdropPress={() => closemodal3()}
                style={{ margin: 0, }}
            >
                <View style={[styles.modalContainer]}>
                    <View style={styles.userProfile}>
                        <Image source={require('../../../Image/user.png')} style={styles.UserImage} />
                        <View>
                            <Text style={styles.userName}>Kavin Kumar</Text>
                            <Text style={styles.userMsg}>Kavin Kumar is a camdell user</Text>

                        </View>
                    </View>
                    <Text style={styles.ModalTitle}>Enter Purchasing amount</Text>
                    <TextInput placeholder='Enter Amount' style={styles.input} />

                    <Text style={styles.ModalTitle}>Enter Date & Time</Text>
                    <View style={styles.inputGroup}>
                        <TouchableOpacity style={styles.dateview} onPress={() => setOpendate(true)}>

                            <Image resizeMode='contain' source={require('../../../Image/date1.png')} style={styles.dateimg} />
                            {date ? (

                                <Text style={styles.inputtxt}>{date.toLocaleDateString()}</Text>

                            ) : (
                                <Text style={styles.inputtxt}>Enter Date</Text>
                            )}

                            <DatePicker
                                mode={'date'}
                                modal
                                open={opendate}
                                date={date || new Date()}
                                onConfirm={(date) => {
                                    setOpendate(false)
                                    setdate(date)
                                }}
                                onCancel={() => {
                                    setOpendate(false)
                                }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dateview} onPress={() => setOpentime(true)}>

                            <Image resizeMode='contain' source={require('../../../Image/time1.png')} style={styles.dateimg} />
                            {time ? (

                                <Text style={styles.inputtxt}>{time.toLocaleTimeString()}</Text>

                            ) : (
                                <Text style={styles.inputtxt}>Enter Time</Text>
                            )}

                            <DatePicker
                                mode={'time'}
                                modal
                                open={opentime}
                                date={time || new Date()}
                                onConfirm={(date) => {
                                    setOpentime(false)
                                    settime(date)
                                }}
                                onCancel={() => {
                                    setOpentime(false)
                                }}
                            />
                        </TouchableOpacity>

                        {/* <TextInput placeholder='enter Date' style={styles.input2} />
                        <TextInput placeholder='enter Time' style={styles.input2} /> */}

                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => closemodal3()}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </Modal>


            <Modal isVisible={isModalVisible4}
                style={{ margin: 0, }}
            >
                <View style={[styles.modalContainer]}>
                    <View style={styles.successful}>
                        <Image source={require('../../../Image/Successful.png')} />
                        <Text style={styles.successfulText}>Successful</Text>
                    </View>
                </View>
            </Modal>

        </View >
    );
}
