// ApplyMerchants
import React, { useState, useEffect } from 'react';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Animated, PanResponder, ActivityIndicator, Alert } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';
import { applyformerchant } from '../API';

export default function ApplyMerchants({ navigation }) {
    const [name, setname] = useState('');
    const [brand, setbrand] = useState('');
    const [contact, setcontact] = useState('');
    const [location, setlocation] = useState('');
    const [establisyear, setestablisyear] = useState('');

    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [emailid, setemailid] = useState('');
    const [passwd, setpasswd] = useState('');
    const [confmpasswd, setconfmpasswd] = useState('');

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
    const [isModalVisible, setisModalVisible] = useState();
    const [loading, setLoading] = useState(false);

    const ToApply = async () => {

        let isValid = true;
        // if (name == '') {
        //     setmsg1('Enter The Shop Name*')
        // } else {
        //     setmsg1('')
        // }
        // if (brand == '') {
        //     setmsg2('Enter The Brand Name*')
        // } else {
        //     setmsg2('')
        // }
        // if (Fname.trim() === '') {
        //     setmsg6('Enter the First Name*');
        //     isValid = false;
        // } else {
        //     setmsg6('');
        // }
        // if (Lname.trim() === '') {
        //     setmsg7('Enter the Last Name*');
        //     isValid = false;
        // } else {
        //     setmsg7('');
        // }
        // if (contact == '') {
        //     setmsg3('Enter The Contact Number*')
        // }
        // else {
        //     setmsg3('')
        // }
        // if (emailid.trim() == '') {
        //     setmsg8('Enter the Email Address*');
        //     isValid = false;
        // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailid)) {
        //     setmsg4('Enter a valid Email Address');
        //     isValid = false;
        // } else {
        //     setmsg8('');
        // }

        // if (passwd.trim() === '') {
        //     setmsg9('Enter the Password*');
        //     isValid = false;
        // } else {
        //     setmsg9('');
        // }

        // if (confmpasswd.trim() === '') {
        //     setmsg10('Confirm your Password*');
        //     isValid = false;
        // } else if (passwd !== confmpasswd) {
        //     setmsg10('Passwords do not match');
        //     isValid = false;
        // } else {
        //     setmsg10('');
        // }

        // if (location == '') {
        //     setmsg4('Enter The Shop Location*')
        // } else {
        //     setmsg4('')
        // }
        // if (establisyear == '') {
        //     setmsg5('Enter The Established Year*')
        // } else {
        //     setmsg5('')
        // }
        // if (name != '' && brand != '' && contact != '' && location != '' && establisyear != '') {

        // if (isValid) {
        // Alert.alert('successfully');
        // openmodal()

        // setLoading(true);
        // const userData = await AsyncStorage.getItem('Userdata');
        // const userDataArray = JSON.parse(userData);
        // setLoading(false);
        // const data = {
        //     user_id: userDataArray.id,
        //     shop_name: name,
        //     brand_name: brand,
        //     contact_number: contact,
        //     shop_location: location,
        //     established_year: establisyear
        // }
        // setLoading(true);
        // const response = await applyformerchant(global.URL + 'applyformerchant', data);
        // // console.log('applyformerchant --> response', response)
        // setLoading(false);
        // if (response.success == true) {
        //     openmodal()
        // } else {
        //     alert('error applyformerchant')
        // }
        // } else {
        //     Alert.alert('Not')
        // }
    }
    // navigation.navigate('Dashboard')

    // useEffect(() => {
    //     setisModalVisible(true);
    // }, []);

    const openmodal = () => {
        // Alert.alert(`isModalVisible: ${isModalVisible}`);
        // console.log(data, 'openww', isModalVisible)
        setisModalVisible(true);
    }
    const closemodal = () => {
        setisModalVisible(false);
        navigation.navigate('Deals');
    }
    const closemodalTap = () => {
        setisModalVisible(false);
    }

    const ToDeals = () => {
        // openmodal();
        navigation.navigate('Deals');
    }

    // console.log('Modal visibility:', isModalVisible);


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
                    <Text style={globalstyles.hadtxttwo}>Apply of Merchants</Text>
                </View>
                <View style={styles.firstview}>

                    {/* <Text style={globalstyles.labeltxttwo}>Shop Name</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter Your Shop Name'
                        placeholderTextColor='#737373'
                        value={name}
                        onChangeText={(text) => setname(text)}
                    />
                    {msg1 ? <Text style={globalstyles.msg}>{msg1}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Brand Name</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter Your Brand Name'
                        placeholderTextColor='#737373'
                        value={brand}
                        onChangeText={(text) => setbrand(text)}
                    />
                    {msg2 ? <Text style={globalstyles.msg}>{msg2}</Text> : null} */}


                    <Text style={globalstyles.labeltxttwo}>First Name</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter Your First Name'
                        placeholderTextColor='#737373'
                        value={Fname}
                        onChangeText={(text) => setFname(text)}
                    />
                    {msg6 ? <Text style={globalstyles.msg}>{msg6}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Last Name</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter Your Name Name'
                        placeholderTextColor='#737373'
                        value={Lname}
                        onChangeText={(text) => setLname(text)}
                    />
                    {msg7 ? <Text style={globalstyles.msg}>{msg7}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Contact Number</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter Your Number'
                        placeholderTextColor='#737373'
                        keyboardType='numeric'
                        value={contact}
                        onChangeText={(text) => setcontact(text)}
                    />
                    {msg3 ? <Text style={globalstyles.msg}>{msg3}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>E-mail ID</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter Your Email Id'
                        placeholderTextColor='#737373'
                        value={emailid}
                        onChangeText={(text) => setemailid(text)}
                    />
                    {msg8 ? <Text style={globalstyles.msg}>{msg8}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Password</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter Your Password'
                        placeholderTextColor='#737373'
                        value={passwd}
                        onChangeText={(text) => setpasswd(text)}
                    />
                    {msg9 ? <Text style={globalstyles.msg}>{msg9}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Confirm Password</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Confirm Password'
                        placeholderTextColor='#737373'
                        value={confmpasswd}
                        onChangeText={(text) => setconfmpasswd(text)}
                    />
                    {msg10 ? <Text style={globalstyles.msg}>{msg10}</Text> : null}


                    {/* <Text style={globalstyles.labeltxttwo}>Shop Location</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter Your Shop Location'
                        placeholderTextColor='#737373'
                        value={location}
                        onChangeText={(text) => setlocation(text)}
                    />
                    {msg4 ? <Text style={globalstyles.msg}>{msg4}</Text> : null}

                    <Text style={globalstyles.labeltxttwo}>Established Year</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Shop Established Year'
                        placeholderTextColor='#737373'
                        keyboardType='numeric'
                        maxLength={4}
                        value={establisyear}
                        onChangeText={(text) => setestablisyear(text)}
                    />
                    {msg5 ? <Text style={globalstyles.msg}>{msg5}</Text> : null} */}

                </View>

                <View style={globalstyles.btnview}>
                    <TouchableOpacity style={globalstyles.touchbtn} onPress={() => openmodal()}>
                        {/* onPress={() => setisModalVisible(true)} */}
                        <Text style={globalstyles.btntxt} >Apply Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>


            <Modal isVisible={isModalVisible} onBackButtonPress={closemodalTap} onBackdropPress={closemodalTap}>
                {/*  */}
                <View style={globalstyles.Mviewone}>

                    <Text style={globalstyles.Mtxt1}>Approval pending</Text>
                    <Text style={globalstyles.Mtxt2}>Once Approved you can access the Merchant features</Text>

                    <View style={globalstyles.Mviewtwo}>
                        <TouchableOpacity style={globalstyles.TandCmodalbtn} onPress={closemodal}>
                            <Text style={globalstyles.btntxt} >Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}