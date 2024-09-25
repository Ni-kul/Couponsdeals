// SubscriptionHistory.js

import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';


export default function SubscriptionHistory({ navigation }) {
    const [showDropDownView, setshowDropDownView] = useState(false);
    const [content, setContent] = useState(0)

    const handleDropDownList = () => {
        setshowDropDownView(!showDropDownView);
    };


    return (
        <View>
            <SafeAreaView>

                <ScrollView>
                    <View style={globalstyles.Backarrowviewtwo}>
                        <Backarrow />
                        <Text style={globalstyles.hadtxttwo}>Subscription History</Text>
                    </View>

                    <View style={styles.container}>
                        <View style={[styles.body]}>
                            <Text style={styles.sectionTitle}>New</Text>

                            <TouchableOpacity style={[styles.rentandsaleview]} onPress={handleDropDownList}>
                                <View style={styles.updwonarrowrow}>
                                    <Text style={styles.renstextstylesale}>{content === 0 ? 'User' : 'Merchnt'}</Text>
                                    <TouchableOpacity onPress={handleDropDownList}>
                                        <Image source={require('../../../Image/dwonarrow.png')} style={styles.dropDownArrow} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {showDropDownView && (
                            <View style={styles.dropDownList}>

                                <TouchableOpacity style={[styles.merchant]} onPress={() => { setContent(0); handleDropDownList() }}>
                                    <View style={styles.updwonarrowrow}>
                                        <Text style={styles.renstext}>User</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={''} onPress={() => { setContent(1); handleDropDownList() }}>
                                    <View style={styles.updwonarrowrow}>
                                        <Text style={styles.renstext}>Merchant</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        )}
                        {content === 0 ? (<>
                            <View style={styles.sectionContainer}>
                                <View style={[styles.body, styles.cardcontainer]}>
                                    <Image style={styles.image} source={require('../../../Image/education.png')} />

                                    <View style={styles.block}>
                                        <Text style={styles.title}>Basic Subscription plan</Text>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                            <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                        </View>

                                        <View style={[styles.body]}>
                                            <View style={styles.wallet}>
                                                <Text style={styles.walletText}>Used Wallet : Rs 100</Text>
                                            </View>
                                            <View style={styles.price}>
                                                <Text style={styles.priceText}>₹ 1,000</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.body, styles.cardcontainer]}>
                                    <Image style={styles.image} source={require('../../../Image/education.png')} />

                                    <View style={styles.block}>
                                        <Text style={styles.title}>Basic Subscription plan</Text>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                            <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                        </View>

                                        <View style={[styles.body]}>
                                            <View style={styles.wallet}>
                                                <Text style={styles.walletText}>Used Wallet : Rs 100</Text>
                                            </View>
                                            <View style={styles.price}>
                                                <Text style={styles.priceText}>₹ 1,000</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <Text style={styles.sectionTitle}>Expired</Text>
                            <View style={styles.sectionContainer}>
                                <View style={[styles.body, styles.cardcontainer]}>
                                    <Image style={styles.image} source={require('../../../Image/education.png')} />

                                    <View style={styles.block}>
                                        <Text style={styles.title}>Basic Subscription plan</Text>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                            <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                        </View>

                                        <View style={styles.mainRenewalview}>
                                            <Text style={styles.priceText}>₹ 1,000</Text>
                                            <TouchableOpacity style={styles.Renewalbtn}>
                                                <Text style={styles.Renewalbtntxt}>Renewal</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                                <View style={[styles.body, styles.cardcontainer]}>
                                    <Image style={styles.image} source={require('../../../Image/education.png')} />

                                    <View style={styles.block}>
                                        <Text style={styles.title}>Basic Subscription plan</Text>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                            <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                        </View>

                                        <View style={styles.mainRenewalview}>
                                            <Text style={styles.priceText}>₹ 1,000</Text>
                                            <TouchableOpacity style={styles.Renewalbtn}>
                                                <Text style={styles.Renewalbtntxt}>Renewal</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </>) : (
                            <View style={styles.sectionContainer}>
                                <View style={[styles.body, styles.cardcontainer]}>
                                    <Image style={styles.image} source={require('../../../Image/education.png')} />

                                    <View style={styles.block}>
                                        <Text style={styles.title}>Basic Subscription plan</Text>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                            <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                        </View>

                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Cat : Food</Text>
                                            <Text style={styles.infoText}>Sub - Cat : Veg Rise</Text>
                                        </View>

                                        <View style={[styles.body]}>
                                            <View style={styles.wallet}>
                                                <Text style={styles.walletText}>Used Wallet : Rs 100</Text>
                                            </View>
                                            <View style={styles.price}>
                                                <Text style={styles.priceText}>₹ 1,000</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.body, styles.cardcontainer]}>
                                    <Image style={styles.image} source={require('../../../Image/education.png')} />

                                    <View style={styles.block}>
                                        <Text style={styles.title}>Basic Subscription plan</Text>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                            <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                        </View>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Cat : Food</Text>
                                            <Text style={styles.infoText}>Sub - Cat : Veg Rise</Text>
                                        </View>

                                        <View style={[styles.body]}>
                                            <View style={styles.wallet}>
                                                <Text style={styles.walletText}>Used Wallet : Rs 100</Text>
                                            </View>
                                            <View style={styles.price}>
                                                <Text style={styles.priceText}>₹ 1,000</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.body, styles.cardcontainer]}>
                                    <Image style={styles.image} source={require('../../../Image/education.png')} />

                                    <View style={styles.block}>
                                        <Text style={styles.title}>Basic Subscription plan</Text>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                            <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                        </View>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Cat : Food</Text>
                                            <Text style={styles.infoText}>Sub - Cat : Veg Rise</Text>
                                        </View>

                                        <View style={[styles.body]}>
                                            <View style={styles.wallet}>
                                                <Text style={styles.walletText}>Used Wallet : Rs 100</Text>
                                            </View>
                                            <View style={styles.price}>
                                                <Text style={styles.priceText}>₹ 1,000</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.body, styles.cardcontainer]}>
                                    <Image style={styles.image} source={require('../../../Image/education.png')} />

                                    <View style={styles.block}>
                                        <Text style={styles.title}>Basic Subscription plan</Text>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                            <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                        </View>
                                        <View style={styles.info}>
                                            <Text style={[styles.infoText, styles.infoText3]}>Cat : Food</Text>
                                            <Text style={styles.infoText}>Sub - Cat : Veg Rise</Text>
                                        </View>

                                        <View style={[styles.body]}>
                                            <View style={styles.wallet}>
                                                <Text style={styles.walletText}>Used Wallet : Rs 100</Text>
                                            </View>
                                            <View style={styles.price}>
                                                <Text style={styles.priceText}>₹ 1,000</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        )}
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
