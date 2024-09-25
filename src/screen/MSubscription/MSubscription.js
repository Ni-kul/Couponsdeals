// MSubscription
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function MSubscription({ navigation }) {

    const [loading, setLoading] = useState(false);

    const images = [
        { name: 'GOLD', img: require('../../../Image/p1.png') },
        { name: 'BRONZE', img: require('../../../Image/p2.png') },
        { name: 'SILVER', img: require('../../../Image/p3.png') },
    ];

    const borderColors = ['#f5da4d', '#895e33', '#dadada'];

    const ToMPaymentDetials = (data) => {
        navigation.navigate('MPaymentDetials', data);
    }

    const ToMPaymentDetials1 = () => {
        navigation.navigate('MPaymentDetials');
    }



    return (
        <View style={globalstyles.thirdmainview}>
            {loading ?
                <View style={globalstyles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}

            <ScrollView>

                <View style={globalstyles.Backarrowviewtwo}>
                    <Backarrow />
                    <Text style={globalstyles.hadtxttwo}>Subscription plan</Text>
                </View>

                {/* <TouchableOpacity onPress={ToMPaymentDetials1}>
                    <Text>ToMPaymentDetials1</Text>
                </TouchableOpacity> */}

                {images.length > 0 ?
                    <View style={{ marginTop: 10, width: '92%', alignSelf: 'center',marginBottom:30 }}>
                        {images.map((data, index) => (

                            <ImageBackground key={index} resizeMode='stretch' source={data.img} style={[globalstyles.MSplanview1, { borderColor: borderColors[index] }]}>
                                <View style={globalstyles.MSplanview2}>
                                    <ImageBackground resizeMode='contain' source={require('../../../Image/Ellipseplan.png')} style={globalstyles.MSEllipseplanimg} >
                                        <Text style={globalstyles.MStxt1}>{data.name}</Text>
                                    </ImageBackground>
                                    <View style={{ marginTop: 4 }}>
                                        <View style={globalstyles.MSplanview3}>
                                            <Image resizeMode='contain' source={require('../../../Image/right1.png')} style={globalstyles.MSright1img} />
                                            <Text style={globalstyles.MStext2}>Subscription Plan choose</Text>
                                        </View>

                                        <View style={globalstyles.MSplanview3}>
                                            <Image resizeMode='contain' source={require('../../../Image/right1.png')} style={globalstyles.MSright1img} />
                                            <Text style={globalstyles.MStext2}>Subscription Plan choose</Text>
                                        </View>
                                        <View style={globalstyles.MSplanview3}>
                                            <Image resizeMode='contain' source={require('../../../Image/right1.png')} style={globalstyles.MSright1img} />
                                            <Text style={globalstyles.MStext2}>Subscription Plan choose</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={globalstyles.MSplanview4}>

                                    <Image resizeMode='contain' source={require('../../../Image/rupeeimg.png')} style={globalstyles.MSrupeeimg} />
                                    <Text style={globalstyles.MStext3}>500</Text>

                                    <View style={{ marginLeft: '1%' }}>
                                        <Text style={globalstyles.MStext4}>PER</Text>
                                        <Text style={globalstyles.MStext5}>MONTH</Text>
                                    </View>

                                    <TouchableOpacity style={styles.planbtn} onPress={() => ToMPaymentDetials(data.name)}>
                                        <Text style={styles.planbtntxt}>CHOOSE PLAN</Text>
                                    </TouchableOpacity>
                                </View>

                                {index === 1 &&
                                    // <BlurView
                                    //     style={styles.blurviewstyle}
                                    //     blurType="light"
                                    //     blurAmount={2}
                                    // >
                                    //     <Text style={styles.notAvailableText}>Not Available</Text>
                                    // </BlurView>
                                    <View style={styles.blurviewstyle2}>
                                        <Text style={styles.notAvailableText}>Not Available</Text>
                                    </View>
                                }
                            </ImageBackground>
                        ))}

                    </View>
                    :
                    null
                }
            </ScrollView>
        </View>
    )
}