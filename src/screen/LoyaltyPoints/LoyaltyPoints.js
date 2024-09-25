import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';
import Modal from "react-native-modal";


export default function LoyaltyPoints({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [showYourOrder, setShowYourOrder] = useState()
    const [addressDetils, setAddressDetails] = useState();

    const closemodalTap = () => {
        setModalVisible(false);
    }
    const handleYourOrder = (id) => {
        setShowYourOrder(id)
    }

    const handleAddress = (id) => {
        setAddressDetails(id);
        closemodalTap()
        // console.log(addressDetils)
    }

    const orderdata = [
        { img: require('../../../Image/watch.png') },
        { img: require('../../../Image/laptop.png') },
        { img: require('../../../Image/headphons.png') },
        { img: require('../../../Image/watch.png') },
    ]

    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <View style={globalstyles.Backarrowviewtwo}>
                        <Backarrow />
                        <Text style={globalstyles.hadtxttwo}>Loyalty Points</Text>

                        <TouchableOpacity onPress={() => handleYourOrder(1)}>
                            <Image source={require('../../../Image/ph_package-bold.png')} style={styles.orderimage} />

                        </TouchableOpacity>
                    </View>
                    <View style={styles.loyaltyPointsbox}>
                        <View style={styles.LoyaltyPoints}>
                            <Text style={styles.heading}>
                                Loyalty point
                            </Text>
                            <Text style={styles.currentcoin}>
                                Current Points
                            </Text>
                            <View style={styles.currentPoint}>
                                <Image resizeMode='contain' source={require('../../../Image/rupeecoin.png')} style={styles.coinimage} />
                                <Text style={styles.coin}>
                                    100
                                </Text>
                            </View>
                        </View>
                        <Image resizeMode='contain' source={require('../../../Image/medal-awards-and-trophies-png.png')} style={styles.trophies} />
                    </View>
                    <Text style={styles.bestText}>
                        Best Deals
                    </Text>

                    <View style={styles.dealItems}>
                        <View style={styles.dealItem}>
                            <Image source={require('../../../Image/headphons.png')} style={styles.productImage} />
                            <Text style={styles.dealTitle}>Air Pods Max 9S</Text>
                            <TouchableOpacity style={styles.dealBtn} onPress={() => setModalVisible(true)}>
                                <Text style={styles.btnText}>
                                    Use </Text>
                                <Image resizeMode='contain' source={require('../../../Image/rupeecoin.png')} style={styles.dealCoinImage} />
                                <Text style={styles.btnText}>
                                    250 </Text>

                            </TouchableOpacity>
                        </View>
                        <View style={styles.dealItem}>
                            <Image source={require('../../../Image/watch.png')} style={styles.productImage} />
                            <Text style={styles.dealTitle}>Apple Watch </Text>
                            <TouchableOpacity style={styles.dealBtn} onPress={() => setModalVisible(true)}>
                                <Text style={styles.btnText}>
                                    Use </Text>
                                <Image source={require('../../../Image/rupeecoin.png')} style={styles.dealCoinImage} />
                                <Text style={styles.btnText}>
                                    500 </Text>

                            </TouchableOpacity>
                        </View>
                        <View style={styles.dealItem}>
                            <Image source={require('../../../Image/handbag.png')} style={styles.productImage} />
                            <Text style={styles.dealTitle}>Hand Bag</Text>
                            <TouchableOpacity style={styles.dealBtn} onPress={() => setModalVisible(true)}>
                                <Text style={styles.btnText}>
                                    Use </Text>
                                <Image source={require('../../../Image/rupeecoin.png')} style={styles.dealCoinImage} />
                                <Text style={styles.btnText}>
                                    550 </Text>

                            </TouchableOpacity>
                        </View>
                        <View style={styles.dealItem}>
                            <Image source={require('../../../Image/laptop.png')} style={styles.productImage} />
                            <Text style={styles.dealTitle}>HP Laptop</Text>
                            <TouchableOpacity style={styles.dealBtn} onPress={() => setModalVisible(true)}>
                                <Text style={styles.btnText}>
                                    Use </Text>
                                <Image source={require('../../../Image/rupeecoin.png')} style={styles.dealCoinImage} />
                                <Text style={styles.btnText}>
                                    1,550 </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

            <Modal isVisible={modalVisible}
                onBackButtonPress={closemodalTap}
                onBackdropPress={closemodalTap} style={{ margin: 0, justifyContent: 'flex-end' }}>
                <View style={[styles.modalContainer]}>
                    <Image source={require("../../../Image/headphons.png")} style={styles.modalProductImage} />
                    <Text style={styles.ModalTitle}>Air Pods Max 9S</Text>
                    <View style={styles.description}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text style={styles.descriptioninfo}>This is part of a redesign for a bank account opening solution. This project had some really interesting constraints</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => handleAddress(1)}>
                        <Text style={styles.buttonText}>Use</Text>
                        <Image source={require('../../../Image/rupeecoin.png')} style={styles.dealCoinImage} />
                        <Text style={styles.buttonText}>250</Text>

                    </TouchableOpacity>
                </View>
            </Modal>


            {
                showYourOrder == '1' && (
                    <View style={styles.yourOredr}>
                        <SafeAreaView>
                            <ScrollView>
                                <View style={globalstyles.Backarrowviewtwo}>
                                    <Backarrow />
                                    <Text style={globalstyles.hadtxttwo}>Your Order</Text>

                                    <TouchableOpacity onPress={() => handleYourOrder(1)}>
                                        <Image source={require('../../../Image/ph_package-bold.png')} style={styles.orderimage} />

                                    </TouchableOpacity>
                                </View>

                                <View style={styles.orderContainer}>
                                    {orderdata.map((data, index) => (
                                        <View style={styles.orderIems} key={index}>
                                            <View style={styles.orderTop}>
                                                <Text style={styles.orderidtxt}>Order ID : ASKMN485JDN</Text>
                                                <TouchableOpacity style={styles.trackbtn} onPress={() => handleYourOrder(0)}><Text style={styles.tracktxt}>Track</Text></TouchableOpacity>
                                            </View>
                                            <View style={styles.border} />
                                            <View style={styles.orderContent}>
                                                <Image resizeMode='contain' source={data.img} style={styles.orderImage} />

                                                <View>
                                                    <Text style={styles.orderTitle}>Apple Watch</Text>
                                                    <View style={styles.coinsinfo}>
                                                        <Text style={styles.cointext}>Use</Text>
                                                        <Image source={require('../../../Image/rupeecoin.png')} style={styles.ordercoinimage} />
                                                        <Text style={styles.cointext}>250</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    ))}

                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                )
            }
            {
                showYourOrder == '0' && (
                    <SafeAreaView>
                        <View style={styles.yourOredr}>
                            <View style={globalstyles.Backarrowviewtwo}>
                                <Backarrow />
                                <Text style={globalstyles.hadtxttwo}>Your Order</Text>

                            </View>
                            <View style={styles.orderContainer}>
                                <View style={styles.orderIems}>
                                    <View style={styles.orderTop}>
                                        <Text >Order ID : ASKMN485JDN</Text>
                                    </View>
                                    <View style={styles.border} />
                                    <View style={styles.orderContent}>
                                        <Image source={require('../../../Image/watch.png')} style={styles.orderImage} />

                                        <View>
                                            <Text style={styles.orderTitle}>Apple Watch</Text>
                                            <View style={styles.coinsinfo}>
                                                <Text style={styles.cointext}>Use</Text>
                                                <Image source={require('../../../Image/rupeecoin.png')} style={styles.ordercoinimage} />
                                                <Text style={styles.cointext}>250</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.orderTracker}>
                                    <View style={styles.orderTrackIcons}>
                                        <View style={styles.circle1} />
                                        <View style={styles.line} />
                                        <View style={styles.circle2} />
                                    </View>
                                    <Text style={styles.text1}><Text style={styles.textBold}>Order confirmed in</Text> 27nd Apr 24 </Text>
                                    <Text style={styles.text2}><Text style={styles.textBold}>Delivery on</Text> 27nd Apr 24 </Text>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                )
            }

            {
                addressDetils == '1' && (
                    <View style={styles.addressDetils}>
                        <SafeAreaView>
                            <ScrollView>
                                <View style={globalstyles.Backarrowviewtwo}>
                                    <Backarrow />
                                    <Text style={globalstyles.hadtxttwo}>Address Details</Text>
                                </View>

                                <View style={styles.form}>
                                    <View style={styles.inputGroup}>
                                        <Text style={styles.label}>
                                            Name
                                        </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Name" />
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Text style={styles.label}>
                                            Mobile number
                                        </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Mobile Number" />
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Text style={styles.label}>
                                            Address
                                        </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Address" />
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Text style={styles.label}>
                                            Landmark
                                        </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter near landmark" />
                                    </View>
                                    <View style={styles.inputGroup}>
                                        <Text style={styles.label}>
                                            Pin code
                                        </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Pin Code" />
                                    </View>
                                    <TouchableOpacity style={[globalstyles.touchbtn, styles.touchbtn]} onPress={() => setAddressDetails(0)}>
                                        <Text style={globalstyles.btntxt}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                )
            }
        </View>
    )

}
