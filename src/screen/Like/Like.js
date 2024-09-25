// Like.js
import React, { useState, useEffect, } from 'react';
import { Text, View, Image, TouchableOpacity, Animated, ScrollView, } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function Like({ navigation }) {
    // useEffect(() => {
    //     navigation.addListener('focus', () => {

    //     })
    // }, []);

    const data = [
        {
            name: "Seoul",
            population: 10,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 40,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Beijing",
            population: 10,
            color: "#966C6C",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "New York",
            population: 30,
            color: "#000000",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Moscow",
            population: 10,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];
    const [chartData, setChartData] = useState(data);

    return (
        <View style={globalstyles.mainview}>
            <ScrollView >

                <View style={globalstyles.Backarrowviewtwo}>
                    <Backarrow />
                    <Text style={globalstyles.hadtxttwo}>Offers likes</Text>
                </View>

                <View style={{ marginBottom: 90, marginTop: 0 }}>

                    <View style={styles.viewone}>
                        <View style={globalstyles.secview}>
                            <View style={{ width: '30%', marginRight: '5%' }}>
                                <Image source={require('../../../Image/WHITE1go.png')} style={globalstyles.WHITE1go} />
                                <Image source={require('../../../Image/carr.png')} style={globalstyles.carr} />
                            </View>

                            <View style={{ width: '65%', marginTop: 14 }}>

                                <Text style={globalstyles.txt2}>Car service & Washing</Text>
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

                    <View style={styles.viewone}>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <View style={{ width: '30%', marginRight: '5%' }}>
                                <Image source={require('../../../Image/Layer_1.png')} style={globalstyles.WHITE1go} />
                                <Image source={require('../../../Image/carservice.png')} style={globalstyles.carr} />
                            </View>

                            <View style={{ width: '65%' }}>

                                <Text style={globalstyles.txt2}>Only Car service</Text>
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
                                <TouchableOpacity style={styles.viewbtn}>
                                    <Text style={globalstyles.viewbtntxt}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.viewone}>

                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <View style={{ width: '30%', marginRight: '5%' }}>
                                <Image source={require('../../../Image/cardekho.png')} style={globalstyles.WHITE1go} />
                                <Image source={require('../../../Image/Rectan.png')} style={globalstyles.carr} />
                            </View>

                            <View style={{ width: '65%' }}>

                                <Text style={globalstyles.txt2}>Denting & painting</Text>
                                <Text style={globalstyles.txt3}>20%-50%</Text>
                                <Text style={globalstyles.txt4}>Offer till 11th Feb</Text>
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
                                <TouchableOpacity style={styles.viewbtn}>
                                    <Text style={globalstyles.viewbtntxt}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.viewone}>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <View style={{ width: '30%', marginRight: '5%' }}>
                                <Image source={require('../../../Image/goGroup.png')} style={globalstyles.WHITE1go} />
                                <Image source={require('../../../Image/Rectan.png')} style={globalstyles.carr} />
                            </View>

                            <View style={{ width: '65%' }}>

                                <Text style={globalstyles.txt2}>Car service & electronics works</Text>
                                <Text style={globalstyles.txt3}>40%-50%</Text>
                                <Text style={globalstyles.txt4}>Offer till 11th Feb</Text>
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
                                <TouchableOpacity style={styles.viewbtn}>
                                    <Text style={globalstyles.viewbtntxt}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>



        </View>
    )
}
