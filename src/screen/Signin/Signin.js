// Signin
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalstyles } from '../../globalstyles';
import { styles } from './styles';
import { login } from '../API';
import { Dropdown } from 'react-native-element-dropdown';

export default function Signin({ navigation }) {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [msg1, setmsg1] = useState('');
    const [msg2, setmsg2] = useState('');
    const [passwdSH, setpasswdSH] = useState(true);
    const [btnshow, setbtnshow] = useState('1');
    const [loading, setLoading] = useState(false);
    const [usertype, setusertype] = useState('');

    const data = [
        { label: 'User', value: '1' },
        { label: 'Manager', value: '2' },
        { label: 'Cashier', value: '3' },
    ];

    const ToSignUp = () => {
        navigation.navigate('SignUp');
    }
    const ToForgetpasswd = () => {
        navigation.navigate('Forgetpasswd');
    }

    const passwdshowhide = (value) => {
        // console.log('value', value)
        setbtnshow(value)
        if (value == '1') {
            setpasswdSH(true)
        } else {
            setpasswdSH(false)
        }
    }

    const signin = async () => {
        // if (email == '') {
        //     setmsg1('*Please Enter The Email')
        // } else {
        //     setmsg1('')
        // }
        // if (password == '') {
        //     setmsg2('*Please Enter The Password')
        // } else {
        //     setmsg2('')
        // }

        // if (email != '' && password != '') {
        //     // login
        //     const data = {
        //         email: email,
        //         password: password
        //     }
        //     setLoading(true);
        //     console.log('dats', data)
        //     const response = await login(global.URL + 'login', data);
        //     console.log(' login --> response', response)
        //     setLoading(false);
        //     if (response.success == true) {
        //         const setdata = await AsyncStorage.setItem('Userdata', JSON.stringify(response.data[0]));
        navigation.navigate('Dashboard');
        //     } else {
        //         Alert.alert('Not Signin')
        //     }
        // }
    }

    return (
        <View style={globalstyles.mainview}>
            <ScrollView >
                {/* <View style={{flex:1 }}> */}
                {loading ?
                    <View style={globalstyles.spinner}>
                        <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                    </View>
                    : null}
                <View style={globalstyles.imgview}>
                    <Image source={require('../../../Image/39577231.png')} style={globalstyles.oneimg} />
                </View>

                <View style={globalstyles.absoluteview}>
                    <View style={globalstyles.singview}>
                        <Text style={globalstyles.txt1}>Sign in</Text>
                    </View>
                </View>

                <Text style={globalstyles.emailtxt}>User Type</Text>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    placeholder="Select User Type"
                    value={usertype}
                    // onChange={item => setusertype(item.value)}
                    onChange={item => {
                        setusertype(item.value);
                        global.Usertype = item.value;
                    }}

                    color='#BABABA'
                    labelField="label"
                    valueField="value"
                    data={data}
                />

                <Text style={globalstyles.inputhadtxt}>Email Id</Text>
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
                {msg2 ? <Text style={globalstyles.msg}>{msg2}</Text> : null}

                <TouchableOpacity onPress={ToForgetpasswd}>
                    <Text style={styles.forgettxt}>Forget Password ?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={globalstyles.touchbtn} onPress={signin}>
                    <Text style={globalstyles.btntxt}>Sign in</Text>
                </TouchableOpacity>

                <View style={styles.lastview}>
                    <Text style={styles.txt3}>Didn’t have account ? </Text>
                    <TouchableOpacity onPress={ToSignUp}>
                        <Text style={styles.txt4}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                {/* </View> */}
            </ScrollView>
        </View>
    )
}
