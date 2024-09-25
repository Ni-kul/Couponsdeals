// UsedCoupons
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function UsedCoupons({ navigation }) {


    return (
        <View style={globalstyles.secmainview}>
            <ScrollView >
                <View style={globalstyles.Backarrowviewtwo}>
                    <Backarrow />
                    <Text style={globalstyles.hadtxttwo}>Used Coupons</Text>
                </View>
                <View style={{ marginBottom: 90, marginTop: 10 }}>
                    <View style={styles.cashbackeventview}>
                        <View style={{ alignSelf: 'center', justifyContent: 'center', width: '28%' }}>
                            <Image source={require('../../../Image/Dominos.png')} style={styles.Dominos} />
                        </View>
                        <View style={styles.cashbackedetailview}>
                            <View style={styles.namebtnview}>
                                <Text style={styles.txt6}>MC Dominos</Text>
                                <TouchableOpacity style={styles.btnGetnow}>
                                    <Text style={styles.txt7}>Get now</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.priceview}>
                                <Image source={require('../../../Image/ratting.png')} style={styles.ratting} />
                                <Text style={styles.txt8}>4.5</Text>
                                <Image source={require('../../../Image/rupeeimg.png')} style={globalstyles.rupeeimg} />
                                <Text style={styles.txt9}>799</Text>
                                <Text style={styles.txt10}>1000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.viewone}>
                        <View style={globalstyles.secview}>
                            <View style={{ width: '30%', marginRight: '5%' }}>
                                <Image source={require('../../../Image/goGroup.png')} style={globalstyles.WHITE1go} />
                                <Image source={require('../../../Image/carservice.png')} style={globalstyles.carr} />
                            </View>

                            <View style={{ width: '65%' }}>
                                {/* <TouchableOpacity  >
                                <Image source={Presslike ? require('../../../Image/liketwo.png') : require('../../../Image/like.png')} style={styles.liketwo} />
                            </TouchableOpacity> */}
                                <Text style={globalstyles.txt2}>Car Service & Electronics Works</Text>
                                <Text style={globalstyles.txt3}>20%-50%</Text>
                                <Text style={globalstyles.txt4}>Offer till 15th Feb</Text>
                            </View>
                        </View>
                        <Text style={styles.colorline}></Text>
                        <View style={globalstyles.rattimeview}>
                            <View style={globalstyles.rattimeviewtwo1}>
                                <Image source={require('../../../Image/ratting.png')} style={globalstyles.ratting} />
                                <Text style={globalstyles.rattxt}>4.5</Text>
                            </View>

                            <View style={globalstyles.rattimeviewtwo}>
                                <Image source={require('../../../Image/time.png')} style={globalstyles.time} />
                                <Text style={globalstyles.rattxt}>30 - 45 min</Text>
                            </View>

                            <View style={globalstyles.rattimeviewtwo}>
                                <TouchableOpacity style={styles.viewbtn} >
                                    <Text style={globalstyles.viewbtntxt}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.cashbackeventview}>
                        <View style={styles.cashbackimgview} >
                            <Image source={require('../../../Image/Swiggylogo.png')} style={styles.Dominos} />
                        </View>
                        <View style={styles.cashbackedetailview}>
                            <View style={styles.namebtnview}>
                                <Text style={styles.txt6}>Swiggy</Text>
                                <TouchableOpacity style={styles.btnGetnow}>
                                    <Text style={styles.txt7}>Get now</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.priceview}>
                                <Image source={require('../../../Image/ratting.png')} style={styles.ratting} />
                                <Text style={styles.txt8}>4.5</Text>
                                <Image source={require('../../../Image/rupeeimg.png')} style={globalstyles.rupeeimg} />
                                <Text style={styles.txt9}>850</Text>
                                <Text style={styles.txt10}>1200</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.cashbackeventview}>
                        <View style={{ alignSelf: 'center', justifyContent: 'center', width: '28%' }}>
                            <Image source={require('../../../Image/Zomato.png')} style={globalstyles.Dominos} />
                        </View>
                        <View style={styles.cashbackedetailview}>
                            <View style={styles.namebtnview}>
                                <Text style={styles.txt6}>Zomato</Text>
                                <TouchableOpacity style={styles.btnGetnow}>
                                    <Text style={styles.txt7}>Get now</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.priceview}>
                                <Image source={require('../../../Image/ratting.png')} style={styles.ratting} />
                                <Text style={styles.txt8}>4.5</Text>
                                <Image source={require('../../../Image/rupeeimg.png')} style={globalstyles.rupeeimg} />
                                <Text style={styles.txt9}>700</Text>
                                <Text style={styles.txt10}>1100</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>


        </View>
    )
}