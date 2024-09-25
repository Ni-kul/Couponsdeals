// SignUp
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, } from 'react-native';
import { globalstyles } from '../../globalstyles';
import { register } from '../API';
import { styles } from './styles';

export default function SignUp({ navigation, route }) {
    const [email, setemail] = useState('');
    const [Mobileno, setMobileno] = useState('');
    const [password, setpassword] = useState('');
    const [msg1, setmsg1] = useState('');
    const [msg2, setmsg2] = useState('');
    const [msg3, setmsg3] = useState('');
    const [passwdSH, setpasswdSH] = useState(true);
    const [btnshow, setbtnshow] = useState('1');
    const [loading, setLoading] = useState(false);
    // const navigateTo = () => {
    //     navigation.navigate('ForgetPassword');
    // }

    const passwdshowhide = (value) => {
        // console.log('value', value)
        setbtnshow(value)
        if (value == '1') {
            setpasswdSH(true)
        } else {
            setpasswdSH(false)
        }
    }
    const checkvalidation = async () => {
        // if (email == '') {
        //     setmsg1('*Please Enter The Email')
        // } else {
        //     setmsg1('')
        // }
        // if (Mobileno == '') {
        //     setmsg2('*Please Enter The Mobile Number')
        // } else {
        //     setmsg2('')
        // }
        // if (password == '') {
        //     setmsg3('*Please Enter The Password')
        // } else {
        //     setmsg3('')
        // }

        // if (email != "" && Mobileno != "" && password != "") {

        //     const data = {
        //         email: email,
        //         password: password,
        //         mobile: Mobileno,
        //     };
        //     setLoading(true);
        //     const response = await register(global.URL + 'register', data);
        //     console.log('signup register--> response', response)
        //     setLoading(false);
        //     if (response.success == true) {
        //         // alert('Succesfully Signup')
        navigation.navigate('OTPVerification');
        // navigation.navigate('OTPVerification', response.data[0]);
        //     } else {
        //         alert('Not Signup')
        //     }
        // }
    }
    return (
        <View style={globalstyles.mainview}>
            {loading ?
                <View style={globalstyles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}
            <ScrollView >
                {/* <View style={{flex:1 }}> */}

                <View style={globalstyles.imgview}>
                    <Image source={require('../../../Image/39577231.png')} style={globalstyles.oneimg} />
                </View>

                <View style={globalstyles.absoluteview}>
                    <View style={globalstyles.singview}>
                        <Text style={globalstyles.txt1}>Sign Up</Text>
                    </View>
                </View>

                <Text style={globalstyles.emailtxt}>Email Id</Text>
                <TextInput
                    style={globalstyles.intxt}
                    placeholder='Email Id'
                    placeholderTextColor='#BABABA'
                    color='black'
                    value={email}
                    onChangeText={(text) => setemail(text)}
                >
                </TextInput>
                {msg1 ? <Text style={globalstyles.msg}>{msg1}</Text> : null}


                <Text style={globalstyles.inputhadtxt}>Mobile Number</Text>
                <TextInput
                    style={globalstyles.intxt}
                    placeholder='Mobile Number'
                    placeholderTextColor='#BABABA'
                    color='black'
                    keyboardType='numeric'
                    value={Mobileno}
                    onChangeText={(text) => setMobileno(text)}
                >
                </TextInput>
                {msg2 ? <Text style={globalstyles.msg}>{msg2}</Text> : null}


                <Text style={globalstyles.inputhadtxt}>Password</Text>
                <View style={{
                    borderRadius: 8, borderWidth: 1,
                    borderColor: '#D7D7D7', flexDirection: 'row', width: '92%', alignSelf: 'center'
                }}>
                    <TextInput
                        style={styles.intxtpasswd}
                        placeholder='Password'
                        placeholderTextColor='#BABABA'
                        color='black'
                        value={password}
                        secureTextEntry={passwdSH}
                        onChangeText={(text) => setpassword(text)}
                    >
                    </TextInput>
                    {btnshow == '1' ?
                        <TouchableOpacity style={globalstyles.passwdbtn} onPress={() => passwdshowhide(2)}>
                            <Image source={require('../../../Image/passwd.png')} style={globalstyles.passwdimg} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={globalstyles.passwdbtn} onPress={() => passwdshowhide(1)}>
                            <Image source={require('../../../Image/show.png')} style={globalstyles.passwdimg} />
                        </TouchableOpacity>
                    }
                </View>
                {msg3 ? <Text style={globalstyles.msg}>{msg3}</Text> : null}


                <View style={styles.lastview}>
                    <TouchableOpacity style={globalstyles.touchbtn} onPress={checkvalidation}>
                        <Text style={globalstyles.btntxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                {/* </View> */}
            </ScrollView>
        </View>
    )
}
