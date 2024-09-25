// PopularDeals
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator, ImageBackground } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function PopularDeals({ navigation }) {
    const [Presslike, setPresslike] = useState(false);

    return (
        <View style={globalstyles.mainview}>
            <ScrollView >
                <View style={styles.Backarrowview}>
                    <Backarrow />
                </View>

                <View style={styles.hadview}>
                    <Text style={globalstyles.hadtxt}>Popular Deals</Text>
                </View>

                <View style={styles.mainitemview}>
                    <View style={styles.itemview}>
                        <Image source={require('../../../Image/carservice.png')} style={styles.carservice} />
                        <Image source={require('../../../Image/WHITE2.png')} style={styles.WHITE2} />
                        <Text style={styles.txt1}>Discount sales : <Text style={styles.txt11}>40 - 60 % Off</Text> </Text>
                        <Text style={styles.txt2}>Exp on : 15 Feb</Text>
                        <TouchableOpacity style={styles.Redeembtn}>
                            <Text style={styles.txt3}>Redeem</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemview}>
                        <Image source={require('../../../Image/carcar.png')} style={styles.carservice} />
                        <Image source={require('../../../Image/WHITE1go.png')} style={styles.WHITE2} />
                        <Text style={styles.txt1}>Discount sales : <Text style={styles.txt11}>40 - 60 % Off</Text> </Text>
                        <Text style={styles.txt2}>Exp on : 15 Feb</Text>
                        <TouchableOpacity style={styles.Redeembtn}>
                            <Text style={styles.txt3}>Redeem</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemview}>
                        <Image source={require('../../../Image/Rectan.png')} style={styles.carservice} />
                        <Image source={require('../../../Image/Layer_1.png')} style={styles.WHITE2} />
                        <Text style={styles.txt1}>Discount sales : <Text style={styles.txt11}>40 - 60 % Off</Text> </Text>
                        <Text style={styles.txt2}>Exp on : 15 Feb</Text>
                        <TouchableOpacity style={styles.Redeembtn}>
                            <Text style={styles.txt3}>Redeem</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemview}>
                        <Image source={require('../../../Image/carc.png')} style={styles.carservice} />
                        <Image source={require('../../../Image/cardekho.png')} style={styles.WHITE2} />
                        <Text style={styles.txt1}>Discount sales : <Text style={styles.txt11}>40 - 60 % Off</Text> </Text>
                        <Text style={styles.txt2}>Exp on : 15 Feb</Text>
                        <TouchableOpacity style={styles.Redeembtn}>
                            <Text style={styles.txt3}>Redeem</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemview}>
                        <Image source={require('../../../Image/carservice.png')} style={styles.carservice} />
                        <Image source={require('../../../Image/cardekho.png')} style={styles.WHITE2} />
                        <Text style={styles.txt1}>Discount sales : <Text style={styles.txt11}>40 - 60 % Off</Text> </Text>
                        <Text style={styles.txt2}>Exp on : 15 Feb</Text>
                        <TouchableOpacity style={styles.Redeembtn}>
                            <Text style={styles.txt3}>Redeem</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemview}>
                        <Image source={require('../../../Image/carcar.png')} style={styles.carservice} />
                        <Image source={require('../../../Image/Layer_1.png')} style={styles.WHITE2} />
                        <Text style={styles.txt1}>Discount sales : <Text style={styles.txt11}>40 - 60 % Off</Text> </Text>
                        <Text style={styles.txt2}>Exp on : 15 Feb</Text>
                        <TouchableOpacity style={styles.Redeembtn}>
                            <Text style={styles.txt3}>Redeem</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemview}>
                        <Image source={require('../../../Image/Rectan.png')} style={styles.carservice} />
                        <Image source={require('../../../Image/WHITE2.png')} style={styles.WHITE2} />
                        <Text style={styles.txt1}>Discount sales : <Text style={styles.txt11}>40 - 60 % Off</Text> </Text>
                        <Text style={styles.txt2}>Exp on : 15 Feb</Text>
                        <TouchableOpacity style={styles.Redeembtn}>
                            <Text style={styles.txt3}>Redeem</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemview}>
                        <Image source={require('../../../Image/carc.png')} style={styles.carservice} />
                        <Image source={require('../../../Image/cardekho.png')} style={styles.WHITE2} />
                        <Text style={styles.txt1}>Discount sales : <Text style={styles.txt11}>40 - 60 % Off</Text> </Text>
                        <Text style={styles.txt2}>Exp on : 15 Feb</Text>
                        <TouchableOpacity style={styles.Redeembtn}>
                            <Text style={styles.txt3}>Redeem</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.itemview}>
                        <Image source={require('../../../Image/Rectan.png')} style={styles.carservice} />
                        <Image source={require('../../../Image/WHITE2.png')} style={styles.WHITE2} />
                        <Text style={styles.txt1}>Discount sales : <Text style={styles.txt11}>40 - 60 % Off</Text> </Text>
                        <Text style={styles.txt2}>Exp on : 15 Feb</Text>
                        <TouchableOpacity style={styles.Redeembtn}>
                            <Text style={styles.txt3}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>


        </View>
    )
}
