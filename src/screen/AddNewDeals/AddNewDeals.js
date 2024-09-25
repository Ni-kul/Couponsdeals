// AddNewDeals
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import DatePicker from 'react-native-date-picker';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Animated, PanResponder, Alert, ActivityIndicator } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';
import { adddeal } from '../API'
import CheckBox from '@react-native-community/checkbox';

export default function AddNewDeals({ navigation }) {

    const [BusinessName, setBusinessName] = useState('');
    const [TrendingName, setTrendingName] = useState('');
    const [categories, setcategories] = useState('');
    const [subcat, setsubcat] = useState('');
    const [BusinessType, setBusinessType] = useState('');
    const [CouponUsedType, setCouponUsedType] = useState('');
    const [Street1, setStreet1] = useState('');
    const [Street2, setStreet2] = useState('');
    const [Location, setLocation] = useState('');
    const [State, setState] = useState('');
    const [City, setCity] = useState('');
    const [RegistrationNumber, setRegistrationNumber] = useState('');
    const [Relationship, setRelationship] = useState('');
    const [description, setdescription] = useState('');
    const [TradingYears, setTradingYears] = useState('');
    const [CouponType, setCouponType] = useState('');
    const [minamount, setminamount] = useState('');
    const [maxamount, setmaxamount] = useState('');
    const [DiscountAmount, setDiscountAmount] = useState('');
    const [TandC, setTandC] = useState('');
    const [HowUseCoupon, setHowUseCoupon] = useState('');
    const [Websitelink, setWebsitelink] = useState('');
    const [images, setimages] = useState('');
    const [TotalCoupons, setTotalCoupons] = useState('');
    const [startdate, setstartdate] = useState(null);
    const [open, setOpen] = useState(false)
    const [enddate, setenddate] = useState(null);
    const [opentwo, setOpentwo] = useState(false)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [loading, setLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [AdsModalVisible, setAdsModalVisible] = useState(false);
    const [CongModalVisible, setCongModalVisible] = useState(false);

    const [msg1, setmsg1] = useState('');
    const [msg2, setmsg2] = useState('');
    const [msg3, setmsg3] = useState('');
    const [msg4, setmsg4] = useState('');
    const [msg5, setmsg5] = useState('');
    const [msg6, setmsg6] = useState('');
    const [msg7, setmsg7] = useState('');
    const [msg8, setmsg8] = useState('');
    const [msg9, setmsg9] = useState('');
    const [msg10, setmsg10] = useState('');
    const [msg11, setmsg11] = useState('');
    const [msg12, setmsg12] = useState('');
    const [msg13, setmsg13] = useState('');
    const [msg14, setmsg14] = useState('');
    const [msg15, setmsg15] = useState('');
    const [msg16, setmsg16] = useState('');
    const [msg17, setmsg17] = useState('');
    const [msg18, setmsg18] = useState('');
    const [msg19, setmsg19] = useState('');
    const [msg20, setmsg20] = useState('');
    const [msg21, setmsg21] = useState('');
    const [msg22, setmsg22] = useState('');
    const [msg23, setmsg23] = useState('');
    const [msg24, setmsg24] = useState('');
    const [msg25, setmsg25] = useState('');
    const [msg26, setmsg26] = useState('');
    const [msg27, setmsg27] = useState('');

    const data = [
        { label: 'Jan', value: '1' },
        { label: 'Feb', value: '2' },
    ];

    function select() {
        // Alert.alert('alert ! , ok')
        Alert.alert("", "Choos a Option", [
            {
                text: 'Back',
                onPress: () => { }
            },
            {
                text: 'Gallery',
                onPress: () => openLibrary(),
            },
            {
                text: 'Camera',
                onPress: () => openCamera(),
            },
        ]);
    }
    const openCamera = () => {
        let options = {
            mediaType: 'photo',
            includeBase64: true,
        }
        launchCamera(options, async (response) => {
            // console.log('response', response);
            if (!response.didCancel && !response.error) {
                const base64 = response.assets[0].base64;
                if (base64) {
                    const data = {
                        base64: 'data:image/jpeg;base64,' + base64,
                    };

                } else {
                    console.error('Base64 data not found in response:', response);
                }
            }
        });
    }

    const openLibrary = () => {
        let options = {
            mediaType: 'photo',
            includeBase64: true,
        }
        launchImageLibrary(options, async (response) => {
            if (!response.didCancel && !response.error) {
                const base64 = response.assets[0].base64;
                if (base64) {
                    const data = {
                        base64: 'data:image/jpeg;base64,' + base64,
                    };

                } else {
                    console.error('Base64 data not found in response:', response);
                }
            }
        })
    }
    const ToSubmit = async () => {
        openmodal();
        // if (BusinessName == '') {
        //     setmsg1('Enter The Business Name*')
        // } else {
        //     setmsg1('')
        // }
        // if (TrendingName == '') {
        //     setmsg2('Enter The Trending Name*')
        // } else {
        //     setmsg2('')
        // }
        // if (categories == '') {
        //     setmsg3('Enter The Categories*')
        // } else {
        //     setmsg3('')
        // }
        // if (subcat == '') {
        //     setmsg4('Enter The Sub - Categories*')
        // } else {
        //     setmsg4('')
        // }
        // if (BusinessType == '') {
        //     setmsg4('Select Business Type*')
        // } else {
        //     setmsg4('')
        // }

        // if (CouponUsedType === '') {
        //     setmsg6('Enter The Coupon Used Type*');
        // } else {
        //     setmsg6('');
        // }

        // if (RegistrationNumber === '') {
        //     setmsg7('Enter The Registration Number*');
        // } else {
        //     setmsg7('');
        // }

        // if (Relationship === '') {
        //     setmsg8('Enter The Relationship*');
        // } else {
        //     setmsg8('');
        // }

        // if (TradingYears === '') {
        //     setmsg9('Enter The Trading Years*');
        // } else {
        //     setmsg9('');
        // }

        // if (CouponType === '') {
        //     setmsg10('Enter The Coupon Type*');
        // } else {
        //     setmsg10('');
        // }

        // if (minamount === '') {
        //     setmsg11('Enter The Minimum Amount*');
        // } else {
        //     setmsg11('');
        // }

        // if (maxamount === '') {
        //     setmsg12('Enter The Maximum Amount*');
        // } else {
        //     setmsg12('');
        // }

        // if (DiscountAmount === '') {
        //     setmsg13('Enter The Discount Amount*');
        // } else {
        //     setmsg13('');
        // }

        // if (description === '') {
        //     setmsg14('Enter The Description*');
        // } else {
        //     setmsg14('');
        // }

        // if (TandC === '') {
        //     setmsg15('Enter The Terms and Conditions*');
        // } else {
        //     setmsg15('');
        // }

        // if (HowUseCoupon === '') {
        //     setmsg16('Enter How To Use The Coupon*');
        // } else {
        //     setmsg16('');
        // }

        // if (Websitelink === '') {
        //     setmsg17('Enter The Website Link*');
        // } else {
        //     setmsg17('');
        // }

        // if (TotalCoupons === '') {
        //     setmsg18('Enter The Total Coupons*');
        // } else {
        //     setmsg18('');
        // }

        // CouponUsedType
        // if (images == '') {
        //     setmsg5('Enter The Upload Images*')
        // } else {
        //     setmsg5('')
        // }



        // if (startdate == '') {
        //     setmsg10('Enter The Deals Started Date*')
        // } else {
        //     setmsg10('')
        // }

        // if (enddate == '') {
        //     setmsg11('Enter The Deals Ended Date*')
        // }
        // else {
        //     setmsg11('')
        // }


        // if (maxamount != '') {
        //     setLoading(true);
        //     const userData = await AsyncStorage.getItem('Userdata');
        //     const userDataArray = JSON.parse(userData);
        //     setLoading(false);

        //     const formatstartdate = startdate.toISOString().split('T')[0];
        //     // console.log('1', formatstartdate)
        //     const formatenddate = enddate.toISOString().split('T')[0];
        // console.log('2', formatenddate)

        // const data = {
        //     user_id: userDataArray.id,
        //     offer_title: tittle,
        //     category: categories,
        //     offer_usage: ,
        //     sub_category: subcat,
        //     type_of_deal: ,
        //     description: description,
        //     terms_condition: TandC,
        //     how_to_use: touse,
        //     start_date: formatstartdate,
        //     end_date: formatenddate,
        //     restriction: ,
        //     minimum_purchase: minamount,
        //     maxumum_purchase: maxamount,
        // }
        // setLoading(true);
        // const response = await adddeal(global.URL + 'adddeal', data);
        // // console.log('adddeal --> response', response)
        // setLoading(false);
        // if (response.success == true) {
        //     Alert.alert('Successfully Created.')
        // navigation.navigate('Deals')
        // } else {
        //     alert('Not created.')
        // }

        // } else {
        //     console.log('error adddeal')
        // }
        // adddeal ?


    }

    const openmodal = () => {
        setModalVisible(true);
    }
    const closemodal = () => {
        openmodalCong();
        setModalVisible(false);
    }
    const closemodalTap = () => {
        openmodalAds();
        setModalVisible(false);
    }

    const openmodalAds = () => {
        setAdsModalVisible(true);
    }
    const closemodalAds = () => {
        navigation.navigate('MerchantsCoupons');
        setAdsModalVisible(false);
    }
    const closemodalTapAds = () => {
        navigation.navigate('MerchantsCoupons');
        setAdsModalVisible(false);
    }

    // CongModalVisible
    const openmodalCong = () => {
        setCongModalVisible(true);
    }
    const closemodalCong = () => {
        openmodalAds()
        setCongModalVisible(false);
    }

    const ToMerchantsCoupons = () => {
        navigation.navigate('MerchantsCoupons');
    }

    return (
        <View style={globalstyles.thirdmainview}>
            {loading ?
                <View style={globalstyles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}
            <ScrollView >
                <View style={globalstyles.Backarrowviewtwo}>
                    <Backarrow />
                    <Text style={globalstyles.hadtxttwo}>Add New Deals</Text>
                </View>

                <View style={styles.firstview}>
                    <Text style={globalstyles.labeltxttwo}>Business Name</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter Business Name'
                        placeholderTextColor='#737373'
                        value={BusinessName}
                        onChangeText={(text) => setBusinessName(text)}
                    />
                    {msg1 ? <Text style={globalstyles.msg}>{msg1}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Trending Name</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter Trending Name'
                        placeholderTextColor='#737373'
                        value={TrendingName}
                        onChangeText={(text) => setTrendingName(text)}
                    />
                    {msg2 ? <Text style={globalstyles.msg}>{msg2}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Categories</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="Select Categories"
                        value={categories}
                        onChange={item => setcategories(item.value)}
                        color='black'
                        labelField="label"
                        valueField="value"
                        data={data}
                    />
                    {msg3 ? <Text style={globalstyles.msg}>{msg3}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Sub - Categories</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="select Sub-Categories"
                        value={subcat}
                        onChange={item => setsubcat(item.value)}
                        color='black'
                        labelField="label"
                        valueField="value"
                        data={data}
                    />
                    {msg4 ? <Text style={globalstyles.msg}>{msg4}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Business Type</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="Select Business Type"
                        value={BusinessType}
                        onChange={item => setBusinessType(item.value)}
                        color='black'
                        labelField="label"
                        valueField="value"
                        data={data}
                    />
                    {msg5 ? <Text style={globalstyles.msg}>{msg5}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Coupon used</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="Select Coupon Used Type"
                        value={CouponUsedType}
                        onChange={item => setCouponUsedType(item.value)}
                        color='black'
                        labelField="label"
                        valueField="value"
                        data={data}
                    />
                    {msg6 ? <Text style={globalstyles.msg}>{msg6}</Text> : null}

                    {/* Street1 */}

                    <Text style={globalstyles.labeltxttwo}>Street 1</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter The Street 1'
                        placeholderTextColor='#737373'
                        value={Street1}
                        onChangeText={(text) => setStreet1(text)}
                    />
                    {msg7 ? <Text style={globalstyles.msg}>{msg7}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Street 2</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter The Street 2'
                        placeholderTextColor='#737373'
                        value={Street2}
                        onChangeText={(text) => setStreet2(text)}
                    />
                    {msg8 ? <Text style={globalstyles.msg}>{msg8}</Text> : null}


                    <Text style={globalstyles.labeltxttwo}>Location</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter The Location'
                        placeholderTextColor='#737373'
                        value={Location}
                        onChangeText={(text) => setLocation(text)}
                    />
                    {msg9 ? <Text style={globalstyles.msg}>{msg9}</Text> : null}


                    <Text style={globalstyles.labeltxttwo}>State</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="Select State"
                        value={State}
                        onChange={item => setState(item.value)}
                        color='black'
                        labelField="label"
                        valueField="value"
                        data={data}
                    />
                    {msg10 ? <Text style={globalstyles.msg}>{msg10}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>City</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="Select City"
                        value={City}
                        onChange={item => setCity(item.value)}
                        color='black'
                        labelField="label"
                        valueField="value"
                        data={data}
                    />
                    {msg11 ? <Text style={globalstyles.msg}>{msg11}</Text> : null}


                    <Text style={globalstyles.labeltxttwo}>Registration Number</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter Registration Number'
                        placeholderTextColor='#737373'
                        value={RegistrationNumber}
                        onChangeText={(text) => setRegistrationNumber(text)}
                    />
                    {msg12 ? <Text style={globalstyles.msg}>{msg12}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Business Relationship</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="Select Relationship"
                        value={Relationship}
                        onChange={item => setRelationship(item.value)}
                        color='black'
                        labelField="label"
                        valueField="value"
                        data={data}
                    />
                    {msg13 ? <Text style={globalstyles.msg}>{msg13}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Description</Text>
                    <TextInput
                        style={styles.multilneinputtxt}
                        placeholder='Type The Discription'
                        placeholderTextColor='#737373'
                        multiline={true}
                        value={description}
                        onChangeText={(text) => setdescription(text)}
                    />
                    {msg14 ? <Text style={globalstyles.msg}>{msg14}</Text> : null}

                    {/* no of year of trading */}
                    <Text style={globalstyles.labeltxttwo}>No of year of trading</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter Trading Years'
                        placeholderTextColor='#737373'
                        keyboardType='numeric'
                        value={TradingYears}
                        onChangeText={(text) => setTradingYears(text)}
                    />
                    {msg15 ? <Text style={globalstyles.msg}>{msg15}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Coupon Type</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="Select Coupon Type"
                        value={CouponType}
                        onChange={item => setCouponType(item.value)}
                        color='black'
                        labelField="label"
                        valueField="value"
                        data={data}
                    />
                    {msg16 ? <Text style={globalstyles.msg}>{msg16}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Minimum Amount</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter Min - Amount'
                        placeholderTextColor='#737373'
                        value={minamount}
                        onChangeText={(text) => setminamount(text)}
                    />
                    {msg17 ? <Text style={globalstyles.msg}>{msg17}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Maximum Amount</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter Max - Amount'
                        placeholderTextColor='#737373'
                        value={maxamount}
                        onChangeText={(text) => setmaxamount(text)}
                    />
                    {msg18 ? <Text style={globalstyles.msg}>{msg18}</Text> : null}

                    {/* How to use coupon*/}
                    <Text style={globalstyles.labeltxttwo}>Discount Amount</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter Amount'
                        placeholderTextColor='#737373'
                        value={DiscountAmount}
                        onChangeText={(text) => setDiscountAmount(text)}
                    />
                    {msg19 ? <Text style={globalstyles.msg}>{msg19}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Terms & conditions</Text>
                    <TextInput
                        style={styles.multilneinputtxt}
                        placeholder='Type The Terms & Conditons'
                        placeholderTextColor='#737373'
                        multiline={true}
                        value={TandC}
                        onChangeText={(text) => setTandC(text)}
                    />
                    {msg20 ? <Text style={globalstyles.msg}>{msg20}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>How To Use Coupon</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='How To Use Coupons'
                        placeholderTextColor='#737373'
                        value={HowUseCoupon}
                        onChangeText={(text) => setHowUseCoupon(text)}
                    />
                    {msg21 ? <Text style={globalstyles.msg}>{msg21}</Text> : null}

                    {/* Websitelink */}
                    <Text style={globalstyles.labeltxttwo}>Website Link</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter Website Link'
                        placeholderTextColor='#737373'
                        value={Websitelink}
                        onChangeText={(text) => setWebsitelink(text)}
                    />
                    {msg22 ? <Text style={globalstyles.msg}>{msg22}</Text> : null}


                    <Text style={globalstyles.labeltxttwo}>Upload Images</Text>
                    <View style={styles.uploadimgview}>
                        {images ? (
                            <View>
                                <Text style={styles.imginputtxt}>{images}</Text>
                            </View>

                        ) : (
                            <Text style={styles.imginputtxt}>Upload The Images</Text>
                        )}
                        <TouchableOpacity onPress={select}>
                            <Image source={require('../../../Image/uoloadimg.png')} style={styles.uoloadimg} />
                        </TouchableOpacity>
                    </View>
                    {msg23 ? <Text style={globalstyles.msg}>{msg23}</Text> : null}

                    {/* Total coupons */}
                    <Text style={globalstyles.labeltxttwo}>Total Coupons</Text>
                    <TextInput
                        style={styles.dealinputtxt}
                        placeholder='Enter Website Link'
                        placeholderTextColor='#737373'
                        value={TotalCoupons}
                        onChangeText={(text) => setTotalCoupons(text)}
                    />
                    {msg24 ? <Text style={globalstyles.msg}>{msg24}</Text> : null}


                    <Text style={globalstyles.labeltxttwo}>Deals Started Date</Text>
                    <View style={styles.uploadimgview}>
                        {startdate ? (
                            <Text style={styles.imginputtxt}>{startdate.toLocaleDateString()}</Text>

                        ) : (
                            <Text style={styles.imginputtxt}>Enter The Started Date</Text>
                        )}
                        <DatePicker
                            mode={'date'}
                            modal
                            open={open}
                            date={startdate || new Date()}
                            onConfirm={(date) => {
                                setOpen(false)
                                setstartdate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <Image source={require('../../../Image/dateimg.png')} style={styles.uoloadimg} />
                        </TouchableOpacity>
                    </View>
                    {msg25 ? <Text style={globalstyles.msg}>{msg25}</Text> : null}


                    <Text style={globalstyles.labeltxttwo}>Deals Ended Date</Text>
                    <View style={styles.uploadimgview}>
                        {enddate ? (
                            <Text style={styles.imginputtxt}>{enddate.toLocaleDateString()}</Text>

                        ) : (
                            <Text style={styles.imginputtxt}>Enter The Ended Date</Text>
                        )}
                        <DatePicker
                            mode={'date'}
                            modal
                            open={opentwo}
                            date={enddate || new Date()}
                            onConfirm={(date) => {
                                setOpentwo(false)
                                setenddate(date)
                            }}
                            onCancel={() => {
                                setOpentwo(false)
                            }}
                        />
                        <TouchableOpacity onPress={() => setOpentwo(true)}>
                            <Image source={require('../../../Image/dateimg.png')} style={styles.uoloadimg} />
                        </TouchableOpacity>
                    </View>
                    {msg26 ? <Text style={globalstyles.msg}>{msg26}</Text> : null}

                    <View style={styles.CheckBoxview}>
                        <CheckBox
                            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }], }}
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColors={
                                toggleCheckBox
                                    ? { true: '#494949', false: '#EDEDED' } // When checked
                                    : { true: '#EDEDED', false: '#494949' } // When unchecked
                            }

                        />
                        <Text style={styles.CheckBoxtxt}><Text style={{ fontWeight: '500' }}>Note : </Text>When you purchase this coupon you can get some loyalty point </Text>
                    </View>
                    {msg27 ? <Text style={globalstyles.msg}>{msg27}</Text> : null}

                </View>

                <View style={globalstyles.btnview}>
                    <TouchableOpacity style={globalstyles.touchbtn} onPress={openmodal}>
                        <Text style={globalstyles.btntxt} >Submit</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            {/* Verification modal */}
            <Modal isVisible={isModalVisible}
                onBackButtonPress={closemodalTap} onBackdropPress={closemodalTap}>
                <View style={globalstyles.Mviewone}>

                    <Text style={globalstyles.Mtxt1}>Verification</Text>
                    <Text style={globalstyles.Mtxt2}>Once submit your coupon you can’t edited  & Deleted</Text>

                    <View style={styles.Mviewtwo}>
                        <TouchableOpacity style={styles.modalbtn} onPress={closemodal}>
                            <Text style={styles.btntxt} >Yes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.modalbtn2} onPress={closemodalTap}>
                            <Text style={styles.btntxt2} >NO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Ads modal */}
            <Modal isVisible={AdsModalVisible}
                onBackButtonPress={closemodalAds} onBackdropPress={closemodalTapAds}>
                <View style={globalstyles.Mviewone}>

                    <Text style={globalstyles.Mtxt1}>Ads</Text>
                    <Text style={globalstyles.Mtxt2}>Did you want first preference on your coupons sale</Text>

                    <View style={styles.Mviewtwo}>
                        <TouchableOpacity style={styles.modalbtn} onPress={closemodalAds}>
                            <Text style={styles.btntxt} >Yes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.modalbtn2} onPress={closemodalTapAds}>
                            <Text style={styles.btntxt2} >NO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Congratulations modal*/}
            <Modal isVisible={CongModalVisible}
                onBackButtonPress={closemodalCong} onBackdropPress={closemodalCong} >
                <View style={styles.Mviewone1}>

                    <Text style={styles.Mtxt1}>Congratulations</Text>
                    <View style={styles.Mview2}>

                        <Image resizeMode='stretch' source={require('../../../Image/pngtree.png')} style={styles.pngtreeimg} />
                        <View>
                            <Image resizeMode='contain' source={require('../../../Image/reward.png')} style={styles.reward} />
                            <View style={styles.mrupeecoinview}>
                                <Image resizeMode='contain' source={require('../../../Image/rupeecoin.png')} style={styles.rupeecoin} />
                                <Text style={styles.Mtxt3}>100</Text>
                            </View>
                        </View>
                        <Image resizeMode='stretch' source={require('../../../Image/pngtree2.png')} style={styles.pngtreeimg} />

                    </View>
                    <Text style={styles.Mtxt4}>You Can Get 200 Loyalty Points</Text>

                </View>
            </Modal>

        </View>
    )
}