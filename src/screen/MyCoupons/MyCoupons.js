// MyCoupons.js

import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function MyCoupons({ navigation, route }) {

    const routedata = route.params
    console.log('routedata', routedata);

    return (
        <>
            <SafeAreaView>

                <ScrollView>
                    <View style={globalstyles.Backarrowviewtwo}>
                        <Backarrow />
                        <Text style={globalstyles.hadtxttwo}>{routedata == 1 ? 'My coupons' : 'Wishlist'}</Text>
                    </View>

                    <View style={styles.pagecontetn}>
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <View style={styles.body}>
                                    <Image
                                        source={require('../../../Image/Layer_1.png')} // Replace with your star icon
                                    />
                                    <View style={styles.rating}>
                                        <Image
                                            source={require('../../../Image/ratting.png')} // Replace with your star icon
                                            style={styles.star}
                                        />
                                        <Text style={styles.ratingText}>4.5</Text>
                                    </View>
                                </View>




                                <View style={[styles.body, styles.flex]}>
                                    <TouchableOpacity>
                                        <Image source={require('../../../Image/liketwo.png')} style={styles.iIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.body}>
                                <Image
                                    source={require('../../../Image/carservice.png')} // Replace with your car image
                                    style={styles.carImage}
                                />
                                <View style={styles.details}>
                                    <Text style={styles.title}>Only Car Service</Text>
                                    <View style={styles.description}>
                                        <Text style={styles.offerText}>
                                            (Above Rs 5,000)
                                        </Text>
                                        <Text style={styles.offerText2}>Get 50% Off</Text>
                                    </View>
                                    <View style={styles.description}>

                                        <Text style={styles.offerText}>Offer till 15th Feb</Text>
                                        <TouchableOpacity style={styles.view}>
                                            <Text style={styles.viewText}>View</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>

                        <View style={[globalstyles.voucherview, styles.voucherview]}>
                            <ImageBackground resizeMode='stretch' source={require('../../../Image/Subtract2.png')} style={globalstyles.voucherimg}>
                                <View>
                                    <Text style={globalstyles.v2txt1}>Swiggy</Text>
                                    <Text style={globalstyles.v2txt2}>Rs ( 5,000 - 6,000 )</Text>
                                    <Text style={globalstyles.v2txt3}>Get Rs 100 Cashback</Text>
                                    <TouchableOpacity style={globalstyles.voucherbtn2}>
                                        <Text style={globalstyles.voucherbtntxt2}>Get now</Text>
                                    </TouchableOpacity>
                                </View>
                                <Image resizeMode='contain' source={require('../../../Image/Swiggylogo.png')} style={globalstyles.voucherlogo} />
                            </ImageBackground>
                        </View>

                        <View style={[styles.container, styles.body]}>
                            <Image
                                source={require('../../../Image/Dominos.png')}
                                style={styles.logo}
                            />
                            <View style={styles.textContainer}>
                                <View style={[styles.body, styles.flex]}>
                                    <Text style={styles.title}>MC Dominos</Text>
                                    <TouchableOpacity style={styles.getbtn}>
                                        <Text style={styles.getText}>Get now</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={[styles.body, styles.flex, styles.cashbackPrice]}>
                                    <Text style={styles.price}>
                                        Rs (5,000 - 6,000)
                                    </Text>
                                    <Text style={styles.cashback}>
                                        Get Rs 100 Cashback
                                    </Text>
                                </View>

                            </View>
                        </View>
                        <View style={[styles.container, styles.body]}>
                            <Image
                                source={require('../../../Image/Dominos.png')}
                                style={styles.logo}
                            />
                            <View style={styles.textContainer}>
                                <View style={[styles.body, styles.flex]}>
                                    <Text style={styles.title}>MC Dominos</Text>
                                    <TouchableOpacity style={styles.getbtn}>
                                        <Text style={styles.getText}>Get now</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={[styles.body, styles.flex, styles.cashbackPrice]}>
                                    <Text style={styles.price}>
                                        Rs (5,000 - 6,000)
                                    </Text>
                                    <Text style={styles.cashback}>
                                        Get Rs 100 Cashback
                                    </Text>
                                </View>

                            </View>
                        </View>
                        <View style={[styles.container, styles.body]}>
                            <Image
                                source={require('../../../Image/Dominos.png')}
                                style={styles.logo}
                            />
                            <View style={styles.textContainer}>
                                <View style={[styles.body, styles.flex]}>
                                    <Text style={styles.title}>MC Dominos</Text>
                                    <TouchableOpacity style={styles.getbtn}>
                                        <Text style={styles.getText}>Get now</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={[styles.body, styles.flex, styles.cashbackPrice]}>
                                    <Text style={styles.price}>
                                        Rs (5,000 - 6,000)
                                    </Text>
                                    <Text style={styles.cashback}>
                                        Get Rs 100 Cashback
                                    </Text>
                                </View>

                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}