import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Animated, PanResponder, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './style';


export default function ManagerUsedCupon({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);


    const data = [
        { name: 'Kavin Kumar', },
        { name: 'Kavin Kumar', },
        { name: 'Kavin Kumar', },
    ];

    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <View style={globalstyles.Backarrowviewtwo}>
                        <Backarrow />
                        <Text style={globalstyles.hadtxttwo}>Used coupons</Text>
                        <TouchableOpacity style={{ marginLeft: -20 }} onPress={() => setModalVisible(true)}>
                            <Image resizeMode='contain' source={require('../../../Image/filter.png')} style={{ width: 20, height: 22 }} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.container}>

                        <Text style={styles.newtxt}>New</Text>
                        {data.map((data, index) => (

                            <View style={styles.cupon} key={index}>
                                <View style={styles.userCompny}>
                                    <View style={styles.userProfile}>
                                        <Image source={require('../../../Image/user.png')} style={styles.UserImage} />
                                        <View>
                                            <Text style={styles.userName}>Kavin Kumar</Text>
                                        </View>
                                    </View>
                                    <View style={styles.compnyLogo}>

                                        <Image resizeMode='contain' source={require('../../../Image/Swiggylogo.png')} style={styles.logo} />
                                        <Text style={styles.compnyText}>Swiggy</Text>
                                    </View>
                                </View>

                                <View style={styles.cuponInfo}>
                                    <Text style={styles.InfoText}>Cat : Food  & Drinks</Text>
                                    <Text style={styles.InfoText}>Started : 08-feb-2024</Text>
                                    <Text style={styles.InfoText}>Sub - Cat : Dinners</Text>
                                    <Text style={styles.InfoText}>Ended : 30-feb-2024</Text>
                                    <Text style={styles.InfoText}>Deals :  Discount</Text>
                                    <Text style={styles.InfoText}>Type : Online</Text>
                                    <Text style={styles.InfoText}>Date : 06/07/2024</Text>
                                    <Text style={styles.InfoText}>Time : 12 : 00 PM</Text>
                                    <Text style={styles.InfoText2}>Purchase amount : Rs 1,500</Text>
                                </View>
                            </View>
                        ))}


                    </View>
                </ScrollView>
            </SafeAreaView>


            <Modal
                isVisible={isModalVisible} onBackButtonPress={() => setModalVisible(false)} onBackdropPress={() => setModalVisible(false)}
                style={{ margin: 0, justifyContent: 'flex-end' }}
            >
                <View style={[styles.modalContainer]}>
                    <View style={styles.modalhadview}>
                        <Text style={styles.modalhadtxt}>Filter</Text>
                        <Image resizeMode='contain' source={require('../../../Image/filter.png')} style={styles.filterimg} />
                    </View>


                    <TouchableOpacity style={styles.modaldetail}>
                        <Text style={styles.modaldetailtxt}>Select categories</Text>
                        <Image resizeMode='contain' source={require('../../../Image/dwonarrow.png')} style={styles.VectorVimg} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modaldetail}>
                        <Text style={styles.modaldetailtxt}>Select Sub - categories</Text>
                        <Image resizeMode='contain' source={require('../../../Image/dwonarrow.png')} style={styles.VectorVimg} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modaldetail}>
                        <Text style={styles.modaldetailtxt}>Select Date</Text>
                        <Image resizeMode='contain' source={require('../../../Image/dwonarrow.png')} style={styles.VectorVimg} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modaldetail}>
                        <Text style={styles.modaldetailtxt}>Select Time</Text>
                        <Image resizeMode='contain' source={require('../../../Image/dwonarrow.png')} style={styles.VectorVimg} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modaldetail}>
                        <Text style={styles.modaldetailtxt}>Select Deals</Text>
                        <Image resizeMode='contain' source={require('../../../Image/dwonarrow.png')} style={styles.VectorVimg} />
                    </TouchableOpacity>

                    <View style={styles.buttonview}>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}