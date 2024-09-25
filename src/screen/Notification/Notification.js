// Notification
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalstyles } from '../../globalstyles';
import { getnotification } from '../API';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function Notification({ navigation }) {

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        navigation.addListener('focus', async () => {
            Togetnotification()
        });

    }, []);
    // getnotification

    const Togetnotification = async () => {
        setLoading(true);
        const userData = await AsyncStorage.getItem('Userdata');
        const userDataArray = JSON.parse(userData);
        setLoading(false);
        const data = {
            user_id: userDataArray.id,
        }
        setLoading(true);
        const response = await getnotification(global.URL + 'getnotification', data);
        console.log('getnotification --> response', response)
        setLoading(false);
        // if (response.success == true) {
        // } else {
        //     alert('error getnotification')
        // }
    }

    return (
        <View style={styles.mainview}>
            {loading ?
                <View style={globalstyles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}
            <ScrollView >
                <View style={globalstyles.Backarrowviewtwo}>
                    <Backarrow />
                    <Text style={globalstyles.hadtxttwo}>Notification</Text>
                </View>
                <View style={{ marginBottom: 20, }}>
                    <View style={styles.newview}>
                        <Text style={styles.newtxt}>New</Text>
                        <View style={styles.countershowview}>
                            <Text style={styles.countershow}>2</Text>
                        </View>
                    </View>

                    <View style={styles.NewNotview}>
                        <Image source={require('../../../Image/Ellip1.png')} style={styles.Ellip1} />
                        <Text style={styles.NewNottxt}><Text style={styles.NewNottxttwo}>50% OFF</Text> in ultraboost all terrain LTD Shoes!!</Text>
                    </View>

                    <View style={styles.NewNotview}>
                        <Image source={require('../../../Image/Ellip2.png')} style={styles.Ellip1} />
                        <Text style={styles.NewNottxt}>One step ahead with stylish colection every week</Text>
                    </View>


                    <View style={styles.newview}>
                        <Text style={styles.newtxt}>Earlier</Text>
                        <View style={styles.countershowview}>
                            <Text style={styles.countershow}>4</Text>
                        </View>
                    </View>

                    <View style={styles.NewNotview}>
                        <Image source={require('../../../Image/Ellip3.png')} style={styles.Ellip1} />
                        <Text style={styles.NewNottxt}><Text style={styles.NewNottxttwo}>FLASH Sale</Text> starting tomorrow Don’t forget to check it out</Text>
                    </View>

                    <View style={styles.NewNotview}>
                        <Image source={require('../../../Image/Ellip4.png')} style={styles.Ellip1} />
                        <Text style={styles.NewNottxt}>Promo code <Text style={styles.NewNottxttwo}>B88FSECC8#</Text> Don’t forget to use</Text>
                    </View>

                    <View style={styles.NewNotview}>
                        <Image source={require('../../../Image/Ellip5.png')} style={styles.Ellip1} />
                        <Text style={styles.NewNottxt}><Text style={styles.NewNottxttwo}>FLASH Sale</Text> starting tomorrow Don’t forget to check it out</Text>
                    </View>

                    <View style={styles.NewNotview}>
                        <Image source={require('../../../Image/Ellip1.png')} style={styles.Ellip1} />
                        <Text style={styles.NewNottxt}>One step ahead with stylish colection every week</Text>
                    </View>

                </View>
            </ScrollView>

        </View>
    )
}