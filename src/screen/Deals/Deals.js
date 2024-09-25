// Deals
import React, { useState, useEffect } from 'react';
import Svg, { Circle } from 'react-native-svg';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Animated, Easing } from 'react-native';
import { globalstyles } from '../../globalstyles';
import { styles } from './styles';
import CircularProgress from '../componet/CircularProgress';

export default function Deals({ navigation }) {

    const ToAddNewDeals = () => {
        navigation.navigate('AddNewDeals')
    }
    const ToStatistics = () => {
        navigation.navigate('Statistics')
    }

    const manager = [
        { 'name': 'sanjay' },
        { 'name': 'jac' },
        { 'name': 'Tom' },
    ]

    const Draftdata = [
        { name: 'Swiggy', img: require('../../../Image/Swiggy-logo2.png'), text1: 'Online' },
        { name: 'MC Dominos', img: require('../../../Image/Dominologo.png'), text1: 'Online' },
    ]

    const ToOperatorLogin = () => {
        navigation.navigate('OperatorLogin')
    }

    const ToLoyaltyPoints = () => {
        navigation.navigate('LoyaltyPoints')
    }

    const ToOperatorList = () => {
        navigation.navigate('OperatorList')
    }

    // MerchantsCoupons 
    const ToMerchantsCoupons = () => {
        navigation.navigate('MerchantsCoupons')
    }

    const ToMDraftCoupons = () => {
        navigation.navigate('MDraftCoupons')
    }

    const ToMAdsPromotion = () => {
        navigation.navigate('MAdsPromotion')
    }

    return (
        <View style={globalstyles.thirdmainview}>
            <ScrollView >

                <View style={styles.firstview}>
                    <Image source={require('../../../Image/LinesBackground.png')} style={styles.LinesBackground} />

                    <View style={styles.secondview}>
                        <Image source={require('../../../Image/oooo1.png')} style={styles.proimg} />

                        <View style={styles.nameview}>
                            <Text style={styles.nametxt}>Hi Jaya</Text>
                            <TouchableOpacity style={styles.refidview}>
                                <Text style={styles.refuidtxt1}>Ref ID:<Text style={{ fontWeight: '400' }}>#RFG45D</Text></Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.coinview} onPress={ToLoyaltyPoints}>
                            <Image resizeMode='contain' source={require('../../../Image/rupeecoin.png')} style={styles.rupeecoin} />
                            <Text style={styles.cointxt}>100</Text>
                        </TouchableOpacity>

                    </View>
                </View>



                <View style={styles.thirdview}>
                    <Text style={styles.txtone}>Deals</Text>
                    <TouchableOpacity style={styles.addview} onPress={ToAddNewDeals}>
                        <Image source={require('../../../Image/plusadd.png')} style={styles.plusadd} />
                        <Text style={styles.txttwo}>Add New Deals</Text>
                    </TouchableOpacity>
                </View>

                {/* Subscription plan */}
                <View style={styles.subview}>
                    <View style={globalstyles.subview1}>
                        <Text style={globalstyles.subtxt1}>Your Subscription plan</Text>
                        <TouchableOpacity><Text style={globalstyles.subtxt2}>View all</Text></TouchableOpacity>
                    </View>
                    <View style={globalstyles.subview2}>
                        <Image resizeMode='contain' source={require('../../../Image/education.png')} style={globalstyles.subimg} />
                        <Text style={globalstyles.subtxt3}>Premium <Text style={globalstyles.subtxt33}>( PER MONTH )</Text></Text>
                    </View>

                    <View style={globalstyles.subview3}>
                        <Text style={globalstyles.subtxt4}>Starting Date : <Text style={{ fontWeight: '600' }}>11/05/2024</Text></Text>
                        <Text style={globalstyles.subtxt4}>End Date : <Text style={{ fontWeight: '600' }}>11/06/2024</Text></Text>
                    </View>

                    <View style={globalstyles.subview4}>
                        <Text style={globalstyles.subtxt4}>Coupon Available : <Text style={{ fontWeight: '600' }}>19</Text></Text>
                        <TouchableOpacity style={globalstyles.Renewebtn}>
                            <Text style={globalstyles.subtxt5}>Renewed now</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.view4}>
                    <Text style={styles.txt1}>Your coupons</Text>
                    <TouchableOpacity onPress={ToMerchantsCoupons}>
                        <Text style={styles.txt1}>View all</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.fourview}>
                    <View style={styles.fiveview}>
                        <Image source={require('../../../Image/Swiggy-logo2.png')} style={styles.Swiggylogo} />
                        <View style={styles.sixview}>
                            <Text style={styles.txtthree}>Swiggy</Text>
                            {/* <Text style={styles.txtfour}>Online</Text> */}
                        </View>
                    </View>

                    <View style={styles.sevenview}>
                        <View style={styles.eightview}>
                            <Text style={styles.txtcat}>Cat : Food & Drinks</Text>
                        </View >
                        <View style={styles.eightview}>
                            <Text style={styles.txtcat}>Started : 08-feb-2024</Text>
                        </View>
                    </View>

                    <View style={styles.sevenview}>
                        <View style={styles.eightview}>
                            <Text style={styles.txtcat}>Sub - Cat : Dinners</Text>
                        </View >
                        <View style={styles.eightview}>
                            <Text style={styles.txtcat}>Ended : 30-feb-2024</Text>
                        </View>
                    </View>
                    <View style={styles.nineview}>
                        <View style={styles.eightview}>
                            <Text style={styles.txtcat}>Deals :  Offers</Text>
                        </View >
                        <TouchableOpacity style={styles.btnview} onPress={ToStatistics}>
                            <Text style={styles.btnviewtxt}>View Statistics</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.pendingtxt}>Pending</Text>
                </View>

                <View style={styles.fourview}>
                    <View style={styles.fiveview}>
                        <Image source={require('../../../Image/Dominologo.png')} style={styles.Swiggylogo} />
                        <View style={styles.sixview}>
                            <Text style={styles.txtthree}>MC Dominos</Text>
                            {/* <Text style={styles.txtfour}>Offline</Text> */}
                        </View>
                    </View>

                    <View style={styles.sevenview}>
                        <View style={styles.eightview}>
                            <Text style={styles.txtcat}>Cat : Food & Drinks</Text>
                        </View >
                        <View style={styles.eightview}>
                            <Text style={styles.txtcat}>Started : 08-feb-2024</Text>
                        </View>
                    </View>

                    <View style={styles.sevenview}>
                        <View style={styles.eightview}>
                            <Text style={styles.txtcat}>Sub - Cat : Dinners</Text>
                        </View >
                        <View style={styles.eightview}>
                            <Text style={styles.txtcat}>Ended : 30-feb-2024</Text>
                        </View>
                    </View>
                    <View style={styles.nineview}>
                        <View style={styles.eightview}>
                            <Text style={styles.txtcat}>Deals :  Offers</Text>
                        </View >
                        <TouchableOpacity style={styles.btnview} onPress={ToStatistics}>
                            <Text style={styles.btnviewtxt}>View Statistics</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.pendingtxt1}>Approval</Text>
                </View>


                {/* Draftdata */}
                <View style={styles.view4}>
                    <Text style={styles.txt1}>Draft coupons</Text>
                    <TouchableOpacity onPress={ToMDraftCoupons}>
                        <Text style={styles.txt1}>View all</Text>
                    </TouchableOpacity>
                </View>

                {Draftdata.map((data, index) => (

                    <View style={styles.fourview} key={index}>
                        <View style={styles.fiveview}>
                            <Image source={data.img} style={styles.Swiggylogo} />
                            <Text style={styles.txtthree2}>{data.name}</Text>
                            <TouchableOpacity style={styles.addview2} onPress={ToAddNewDeals}>
                                <Image source={require('../../../Image/plusadd.png')} style={styles.plusadd2} />
                                <Text style={styles.txttwo2}>Add New Deals</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.sevenview}>
                            <View style={styles.eightview}>
                                <Text style={styles.txtcat}>Cat : Food & Drinks</Text>
                            </View >
                            <View style={styles.eightview}>
                                <Text style={styles.txtcat}>Started : 08-feb-2024</Text>
                            </View>
                        </View>

                        <View style={styles.sevenview}>
                            <View style={styles.eightview}>
                                <Text style={styles.txtcat}>Sub - Cat : Dinners</Text>
                            </View >
                            <View style={styles.eightview}>
                                <Text style={styles.txtcat}>Ended : 30-feb-2024</Text>
                            </View>
                        </View>
                        <View style={styles.nineview}>
                            <View style={styles.eightview}>
                                <Text style={styles.txtcat}>Deals :  Discount</Text>
                            </View >
                            <TouchableOpacity style={styles.btnview2} >
                                <Text style={styles.btnviewtxt}>View</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}


                <View style={styles.view4}>
                    <Text style={styles.txt1}>Ads Promotion</Text>
                    <TouchableOpacity onPress={ToMAdsPromotion}>
                        <Text style={styles.txt1}>View all</Text>
                    </TouchableOpacity>
                </View>
                {Draftdata.map((data, index) => (
                    <View style={styles.fourview} key={index}>
                        <View style={styles.fiveview}>
                            <Image source={data.img} style={styles.Swiggylogo} />
                            <View style={styles.sixview}>
                                <Text style={styles.txtthree}>{data.name}</Text>
                                <Text style={styles.txtfour}>{data.text1}</Text>
                            </View>
                        </View>

                        <View style={styles.sevenview}>
                            <View style={styles.eightview}>
                                <Text style={styles.txtcat}>Cat : Food & Drinks</Text>
                            </View >
                            <View style={styles.eightview}>
                                <Text style={styles.txtcat}>Started : 08-feb-2024</Text>
                            </View>
                        </View>

                        <View style={styles.sevenview}>
                            <View style={styles.eightview}>
                                <Text style={styles.txtcat}>Sub - Cat : Dinners</Text>
                            </View >
                            <View style={styles.eightview}>
                                <Text style={styles.txtcat}>Ended : 30-feb-2024</Text>
                            </View>
                        </View>
                        <View style={styles.nineview}>
                            <View style={styles.eightview}>
                                <Text style={styles.txtcat}>Deals :  Offers</Text>
                            </View >
                            <TouchableOpacity style={styles.btnview} onPress={ToStatistics}>
                                <Text style={styles.btnviewtxt}>View Statistics</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <Text style={styles.pendingtxt}>{data.text1}</Text> */}
                    </View>
                ))}


                <Text style={styles.txtfive}>Statistics</Text>


                <View style={styles.Statview}>
                    <Text style={styles.txtsix}>Active users</Text>
                    <View style={styles.Stattwoview}>
                        <CircularProgress size={64} strokeWidth={12} progress={0.83} color="#4C7C56" />
                        <Text style={styles.txtseven}>Usage of offers</Text>
                    </View>
                    <Text style={styles.linestyle}></Text>
                    <View style={styles.Stattwoview}>
                        <CircularProgress size={64} strokeWidth={12} progress={0.66} color="#B39B5D" />
                        <Text style={styles.txtseven}>Offline purchase offers</Text>
                    </View>
                    <Text style={styles.linestyle}></Text>
                    <View style={styles.Stattwoview}>
                        <CircularProgress size={64} strokeWidth={12} progress={0.40} color="#EE9612" />
                        <Text style={styles.txtseven}>Online purchase offers</Text>
                    </View>
                </View>


                <View style={styles.view10}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={ToOperatorLogin}>
                            <Image resizeMode='contain' source={require('../../../Image/add1.png')} style={styles.add1img} />
                        </TouchableOpacity>
                        <Text style={styles.txt11}>Create Operator Login</Text>
                    </View>

                    <TouchableOpacity onPress={ToOperatorList}>
                        <Text style={styles.txt11}>View all</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.view11}> */}
                <ScrollView horizontal={true} style={styles.view11} showsHorizontalScrollIndicator={false}>

                    {manager.map((data, index) => (
                        <View style={styles.managerview} key={index}>
                            <View style={styles.view12}>
                                <Image resizeMode='contain' source={require('../../../Image/Ellipse190.png')} style={styles.managerimg} />
                                <Text style={styles.txt12}>Manager</Text>
                            </View>

                            <TouchableOpacity style={styles.editimgview}>
                                <Image resizeMode='contain' source={require('../../../Image/bxs_edit.png')} style={styles.bxs_editimg} />
                            </TouchableOpacity>

                            <View style={styles.view13}>
                                <Text style={styles.txt13}>Name : Sanjay</Text>
                            </View>

                            <View style={styles.view13}>
                                <Text style={styles.txt13}>E-mail ID :</Text>
                                <Text style={styles.txt14}>Sanjay4@gmail .com</Text>
                            </View>

                            <View style={styles.view15}>
                                <TouchableOpacity style={styles.view16}>
                                    <Text style={styles.txt15}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.view17}>
                                    <Text style={styles.txt16}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                </ScrollView>
                {/* </View> */}

            </ScrollView>


        </View>
    )
}