// Dashboard
import { useIsFocused } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import Swiper from 'react-native-swiper';
import Modal from "react-native-modal";
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, BackHandler, ActivityIndicator, ImageBackground, PermissionsAndroid, Alert, Linking, } from 'react-native';
import { globalstyles } from '../../globalstyles';
import { getcategory } from '../API';
import { styles } from './styles';

Geocoder.init('AIzaSyDz-KUSiYidQkOxSfekXZ1_ZUl4_19il4E');

export default function Dashboard({ navigation }) {
    const [serachtxt, setserachtxt] = useState('');
    const [iscolor, setiscolor] = useState(0);
    const [loading, setLoading] = useState(false);
    const [iscategory, setiscategory] = useState([]);
    const [imageUri, setImageUri] = useState(null);
    const [name, setname] = useState('');
    const [isModalVisible, setisModalVisible] = useState(false);
    const [isModalVisibleS, setisModalVisibleS] = useState(false);
    const [currentAddress, setCurrentAddress] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [enterlocation, setenterlocation] = useState('');

    const imgdata = [
        { img: '../../../Image/carcar.png' },
        { img: '../../../Image/carcar.png' },
        { img: '../../../Image/carcar.png' },
    ]

    const cashbackevent = [
        { name: 'MC Dominos', img: require('../../../Image/Dominologo.png') },
        { name: 'Swiggy', img: require('../../../Image/Swiggylogo.png') },
        { name: 'Zomato', img: require('../../../Image/Zomato.png') },
    ]

    const isFocused = useIsFocused();

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location Permission",
                        message: "This app needs access to your location.",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    getUserLocation();
                } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
                    Alert.alert(
                        "Permission Denied",
                        "Location permission is required to use this feature. Please enable it in your device settings.",
                        [{ text: "OK" }]
                    );
                } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
                    Alert.alert(
                        "Permission Denied",
                        "You have permanently denied location permission. Please enable it in your device settings.",
                        [
                            { text: "Cancel", style: "cancel" },
                            { text: "Open Settings", onPress: openAppSettings }
                        ]
                    );
                }
            } catch (err) {
                console.warn(err);
            }
        } else {
            getUserLocation();
        }
    };

    const getUserLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                // console.log('Current Position:', latitude, longitude);
                reverseGeocodeLocation(latitude, longitude);
            },
            (error) => {
                console.log('Geolocation Error:', error);
                Alert.alert(
                    "Location Error",
                    "Could not fetch location. Please try again later.",
                    [{ text: "OK" }]
                );
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    const reverseGeocodeLocation = (latitude, longitude) => {
        Geocoder.from(latitude, longitude)
            .then(json => {
                const addressComponent = json.results[0].formatted_address;
                // console.log('Address:', addressComponent);
                setCurrentAddress(addressComponent);

                let city = '';
                json.results[0].address_components.forEach(component => {
                    if (component.types.includes('locality')) {
                        city = component.long_name; // This is the city name
                    }
                });

                if (city) {
                    // console.log('City:', city);
                    setCurrentCity(city); // Set only the city name
                } else {

                    setCurrentCity('City not found');
                }

            })
            .catch(error => console.warn(error));
    };

    const openAppSettings = () => {
        if (Platform.OS === 'android') {
            Linking.openSettings(); // Opens the app's settings page
        }
    };

    useEffect(() => {
        // global.tabbar = 1
        // console.log('global.tabbar d', global.tabbar)
        const Touserdata = async () => {
            setLoading(true);
            const userData = await AsyncStorage.getItem('Userdata');
            // console.log('userData', userData)
            const userDataArray = JSON.parse(userData);
            setLoading(false);
            if (userDataArray) {
                setname(userDataArray.name)
                setImageUri(userDataArray.profile_image)
            }
        }
        // const requestLocationPermission = async () => {
        //     if (Platform.OS === 'android') {
        //         try {
        //             const granted = await PermissionsAndroid.request(
        //                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        //                 {
        //                     title: "Location Permission",
        //                     message: "This app needs access to your location.",
        //                     buttonNeutral: "Ask Me Later",
        //                     buttonNegative: "Cancel",
        //                     buttonPositive: "OK"
        //                 }
        //             );
        //             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //                 getUserLocation();
        //             } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
        //                 console.error("Location permission denied");
        //                 Alert.alert(
        //                     "Permission Denied",
        //                     "Location permission is required to use this feature. Please enable it in your device settings.",
        //                     [{ text: "OK" }]
        //                 );
        //             } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        //                 console.error("Location permission denied permanently");
        //                 Alert.alert(
        //                     "Permission Denied",
        //                     "You have permanently denied location permission. Please enable it in your device settings.",
        //                     [{ text: "OK" }]
        //                 );
        //             }
        //         } catch (err) {
        //             console.warn(err);
        //         }
        //     } else {
        //         getUserLocation();
        //     }
        // };

        // const getUserLocation = () => {
        //     Geolocation.getCurrentPosition(
        //         (position) => {
        //             console.log('Position:', position);
        //             // Handle position (latitude, longitude) here
        //         },
        //         (error) => {
        //             console.log('Geolocation Error:', error);
        //             Alert.alert(
        //                 "Location Error",
        //                 "Could not fetch location. Please try again later.",
        //                 [{ text: "OK" }]
        //             );
        //         },
        //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        //     );
        // };



        navigation.addListener('focus', async () => {
            Togetcategory()
            Touserdata()
            requestLocationPermission()
        });

        const handleBackButton = () => {
            if (isFocused) {  // Check if the Home screen is focused
                BackHandler.exitApp();
                return true;
            }
            return false; // Allow default behavior for other screens
        };

        if (isFocused) {
            BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        }

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };

    }, [isFocused]);

    const Categoriesbackcolor = (val, catid) => {
        setiscolor(val);
        // global.tabbar = 2
        navigation.navigate('ListofCategories', catid);
    }

    const ToPopularDeals = () => {
        navigation.navigate('PopularDeals');
    }
    const ToNotification = () => {
        navigation.navigate('Notification');
    }

    const Togetcategory = async () => {
        setLoading(true);
        const response = await getcategory(global.URL + 'getcategory');
        setLoading(false);
        // console.log('getcategory --> response', response)
        if (response.success == true) {
            setiscategory(response.data);
        } else {
            alert('Category Data Not Found')
        }
    }

    const openmodal = () => {
        setisModalVisible(true);
    }
    const closemodal = () => {
        setisModalVisible(false);
    }
    const closemodalTap = () => {
        setisModalVisible(false);
    }



    const openmodalS = () => {
        setisModalVisibleS(true);
    }
    const closemodalS = () => {
        setisModalVisibleS(false);
    }
    const closemodalTapS = () => {
        setisModalVisibleS(false);
    }


    return (
        <View style={styles.mainviewself}>
            {loading ?
                <View style={globalstyles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}
            <ScrollView >

                <View style={styles.firstview}>
                    <View style={styles.secondview}>
                        {/* onLoadStart={() => setLoading(true)} onLoad={() => setLoading(false)} */}
                        <View style={styles.nameimageview}>
                            {imageUri ?
                                <Image source={{ uri: global.IMG + imageUri }} style={styles.proimg} />
                                :
                                <Image source={require('../../../Image/oooo1.png')} style={styles.proimg} />
                            }
                            <View style={styles.nameview}>
                                <Text style={styles.nametxt}>Hi Jaya{name}</Text>
                                {currentCity &&
                                    <View style={styles.locationview}>
                                        <Image resizeMode='contain' source={require('../../../Image/Vectorred.png')} style={styles.locationimg} />
                                        <Text style={styles.addresstxt}>{currentCity}</Text>
                                    </View>
                                }
                            </View>

                        </View>

                        <View style={styles.scannerbellview}>
                            <TouchableOpacity onPress={openmodalS}>
                                <Image source={require('../../../Image/Vector.png')} style={styles.scannerimg} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ToNotification}>
                                <Image source={require('../../../Image/bellimg.png')} style={styles.bellimg} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.refidview}>
                        <Text style={styles.refuidtxt1}>Ref ID:<Text style={{ fontWeight: '400' }}>#RFG45D</Text></Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.searchview}>
                    <Image source={require('../../../Image/search.png')} style={styles.bsearch} />
                    <TextInput
                        style={styles.inserchtxt}
                        placeholder='What are you looking for?'
                        placeholderTextColor='#858484'
                        color='black'
                        value={serachtxt}
                        onChangeText={(text) => setserachtxt(text)}
                    >
                    </TextInput>
                </View>

                {/* Subscription plan */}
                <View style={globalstyles.subview}>
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

                {/* {currentAddress &&
                    <Text>Current Location: {currentAddress} --{currentCity}</Text>
                } */}

                <View style={styles.Categoryview}>
                    <Text style={styles.txt1}>Categories</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>View all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: '4%', marginTop: 14, borderWidth: 1, borderColor: 'red' }}>
                    {/* width:'96%',marginLeft: '4%', marginTop: 14, borderWidth: 1, borderColor: 'red',flex:1 */}
                    {iscategory.length > 0 ? (
                        iscategory.map((result, index) => (
                            <TouchableOpacity key={index} style={{ ...styles.secondcatview, backgroundColor: iscolor == index ? '#A9D5B2' : 'white' }} onPress={() => Categoriesbackcolor(index, result.id)}>
                                <Image source={{ uri: global.IMG + result.icon }} style={styles.Group1} />
                                <Text style={{ ...styles.Categorytxt, color: iscolor == index ? '#FFFFFF' : '#291F1D' }} >{result.name}</Text>
                            </TouchableOpacity>
                        ))
                    ) : (
                        null
                    )}
                </ScrollView>
                {/* #D7EBC9  burgerfrie burgerking*/}
                {/* <View style={styles.Popularview}>
                    <Text style={styles.txt1}>Hot Deals</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>View all</Text>
                    </TouchableOpacity>
                </View> */}

                {/* <View style={styles.Hotdealview}>
                    <View style={styles.Hot1view}>
                        <Text style={styles.hot1ttxt}>50% Off on Burger Mania</Text>
                        <Image source={require('../../../Image/burgerking.png')} style={styles.burgerking} />
                    </View>
                    <Text style={styles.Hot2txt}>Offer till 15 Feb</Text>
                    <Image source={require('../../../Image/burgerfrie.png')} style={styles.burgerfrie} />

                </View> */}

                {/* Swiper */}
                <View style={styles.sliderview}>
                    <Swiper
                        dot={<View style={{ borderRadius: 20, height: 12, borderColor: '#6D6D6D', marginLeft: 7, backgroundColor: "#FFFFFF", width: 12, borderWidth: 1 }} />}
                        activeDot={<View style={{ backgroundColor: "#6D6D6D", marginLeft: 7, width: 12, height: 12, borderRadius: 20, }} />}
                    >
                        {imgdata.map((item, index) => (
                            <View key={index} style={styles.slide}>
                                {/* <Image source={item.img} style={styles.image} /> */}
                                <View style={styles.Hot1view}>
                                    <Text style={styles.hot1ttxt}>50% Off on Burger Mania</Text>
                                    <Image source={require('../../../Image/burgerking.png')} style={styles.burgerking} />
                                </View>
                                <Text style={styles.Hot2txt}>Offer till 15 Feb</Text>
                                <Image source={require('../../../Image/burgerfrie.png')} style={styles.burgerfrie} />
                            </View>
                        ))}
                    </Swiper>
                </View>

                <View style={styles.Popularview}>
                    <Text style={styles.txt1}>Discount</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>View all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: '4%', marginTop: 14 }}>
                    <TouchableOpacity style={styles.Popularview2} onPress={ToPopularDeals}>
                        <Image source={require('../../../Image/GroupGroup.png')} style={styles.GroupGroup} />
                        <View style={styles.Popularview3}>
                            <Text style={styles.txt3}>UPTO</Text>
                            <Text style={styles.txt4}>70% OFF</Text>
                        </View>
                        <Image resizeMode='contain' source={require('../../../Image/WHITE1go.png')} style={styles.WHITE1go} />
                        <Text style={styles.txt5}>Car service & Washing</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Popularview2}>
                        <Image source={require('../../../Image/GroupGroup.png')} style={styles.GroupGroup} />
                        <View style={styles.Popularview3}>
                            <Text style={styles.txt3}>UPTO</Text>
                            <Text style={styles.txt4}>50% OFF</Text>
                        </View>
                        <Image resizeMode='contain' source={require('../../../Image/Layer_1.png')} style={styles.Layer_1} />
                        <Text style={styles.txt5}>Only Car service </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Popularview2}>
                        <Image source={require('../../../Image/GroupGroup.png')} style={styles.GroupGroup} />
                        <View style={styles.Popularview3}>
                            <Text style={styles.txt3}>UPTO</Text>
                            <Text style={styles.txt4}>60% OFF</Text>
                        </View>
                        <Image resizeMode='contain' source={require('../../../Image/WHITE1go.png')} style={styles.WHITE1go} />
                        <Text style={styles.txt5}>Car service & Washing</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Popularview2}>
                        <Image source={require('../../../Image/GroupGroup.png')} style={styles.GroupGroup} />
                        <View style={styles.Popularview3}>
                            <Text style={styles.txt3}>UPTO</Text>
                            <Text style={styles.txt4}>50% OFF</Text>
                        </View>
                        <Image resizeMode='contain' source={require('../../../Image/Layer_1.png')} style={styles.Layer_1} />
                        <Text style={styles.txt5}>Only Car service </Text>
                    </TouchableOpacity>
                </ScrollView>


                {/* Vouchers v*/}
                <View style={styles.Popularview}>
                    <Text style={styles.txt1}>Vouchers</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>View all</Text>
                    </TouchableOpacity>
                </View>

                <View style={globalstyles.voucherview}>
                    <ImageBackground resizeMode='stretch' source={require('../../../Image/Subtract.png')} style={globalstyles.voucherimg}>
                        <View>
                            <Text style={globalstyles.vtxt1}>MC Dominos</Text>
                            <Text style={globalstyles.vtxt2}>Rs ( 5,000 - 6,000 )</Text>
                            <Text style={globalstyles.vtxt3}>Get Rs 100 Cashback</Text>
                            <TouchableOpacity style={globalstyles.voucherbtn}>
                                <Text style={globalstyles.voucherbtntxt}>Get now</Text>
                            </TouchableOpacity>
                        </View>
                        <Image resizeMode='contain' source={require('../../../Image/Dominos.png')} style={globalstyles.voucherlogo} />
                    </ImageBackground>
                </View>

                <View style={globalstyles.voucherview}>
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


                {/* Cash back events */}
                <View style={styles.Popularview}>
                    <Text style={styles.txt1}>Cash back events</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>View all</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 80 }}>
                    {cashbackevent.map((item, index) => (
                        <View key={index} style={globalstyles.cashbackeventview}>
                            <View style={{ alignSelf: 'center', justifyContent: 'center', width: '28%' }}>
                                <Image resizeMode='stretch' source={item.img} style={globalstyles.cashbackimg} />
                            </View>
                            <View style={globalstyles.cashbackedetailview}>
                                <View style={globalstyles.cashbacknamebtnview}>
                                    <Text style={globalstyles.cashbackname}>{item.name}</Text>
                                    <TouchableOpacity style={globalstyles.btnGetnow}>
                                        <Text style={globalstyles.btnGetnowtxt}>Get now</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={globalstyles.cashbackpriceview}>
                                    <Text style={globalstyles.cashbackpricetxt}>Rs ( 5,000 - 6,000 )</Text>
                                    <Text style={globalstyles.cashbackpricetxt2}>Get Rs 100 Cashback</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

            </ScrollView>

            {/* Use Your Location  -- Modal */}
            {/* <Modal isVisible={isModalVisible}
                onBackButtonPress={closemodalTap} onBackdropPress={closemodalTap}>
                <View style={styles.Mviewone}>
                    <Image resizeMode='contain' source={require('../../../Image/magelocation.png')} style={styles.mimg1} />

                    <Text style={styles.Mtxt1}>Use Your Location</Text>

                    <View style={styles.mviewtwo}>
                        <Image resizeMode='contain' source={require('../../../Image/Vector1.png')} style={styles.mimg2} />
                        <TextInput
                            style={styles.mintxt}
                            placeholder='Enter the location'
                            placeholderTextColor='#575757'
                            color='black'
                            value={enterlocation}
                            onChangeText={(text) => setenterlocation(text)}
                        >
                        </TextInput>
                    </View>

                    <Text style={styles.mortxt}>or</Text>

                    <TouchableOpacity style={styles.mviewthree}>
                        <Image resizeMode='contain' source={require('../../../Image/Vectorred.png')} style={styles.mimg3} />
                        <Text style={styles.Mtxt2}>Use current location</Text>
                    </TouchableOpacity>

                    <View style={styles.mbtnview}>

                        <TouchableOpacity style={styles.mCancelbtn} onPress={closemodalTap}>
                            <Text style={styles.mCancelbtntxt}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.mokbtn} onPress={closemodal}>
                            <Text style={styles.mokbtntxt}>OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal> */}

            {/* scenner-- Modal */}
            <Modal isVisible={isModalVisibleS} onBackButtonPress={closemodalTapS} onBackdropPress={closemodalTapS} style={styles.scanner}>
                <ImageBackground source={require('../../../Image/scannerbg1.png')} resizeMode="cover" style={styles.scannerModal}>
                    <View style={styles.modalscenner}>

                        <View style={styles.logo}>
                            <Image source={require('../../../Image/applogo.png')} />
                        </View>
                        <Swiper
                            dot={<View style={{ borderRadius: 20, height: 12, borderColor: '#6D6D6D', marginLeft: 7, backgroundColor: "#6D6D6D", width: 12, borderWidth: 1 }} />}
                            activeDot={<View style={{ backgroundColor: "#fff", marginLeft: 7, width: 12, height: 12, borderRadius: 20, }} />}
                        >

                            <View >
                                <Image source={require('../../../Image/QRcode.png')} style={styles.scannerImg} />

                            </View>
                            <View style={styles.slide}>
                                <TouchableOpacity style={styles.eyeIcon}>
                                    <Image source={require('../../../Image/mdiEye.png')} />
                                </TouchableOpacity>
                                <Text style={styles.code}>
                                    4000  1234  5647  9102
                                </Text>
                                <View style={styles.dateId}>
                                    <View style={styles.expiretion}>
                                        <Text style={styles.dateTitle}>Expiration</Text>
                                        <Text style={styles.date}>04/07/2024</Text>
                                    </View>
                                    <View style={styles.expiretion}>
                                        <Text style={styles.dateTitle}>Referral ID</Text>
                                        <Text style={styles.date}>#12A45A</Text>
                                    </View>
                                </View>
                                <View style={styles.userName}>
                                    <Text style={styles.userText}>Jaya</Text>
                                </View>
                            </View>

                        </Swiper>

                    </View>
                </ImageBackground>
            </Modal>
        </View>
    )
}
// E:\Nikul\BlockBluecryptonewsF\BlockBluecryptonews\android\app\release