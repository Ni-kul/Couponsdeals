// Forgetpasswd
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import Backarrow from '../componet/Backarrow';
import { globalstyles } from '../../globalstyles';
import { styles } from './styles';
import { forgotpassword } from '../API';

export default function Forgetpasswd({ navigation }) {
    const [email, setemail] = useState('');
    const [msg1, setmsg1] = useState('');
    const [loading, setLoading] = useState(false);

    const ToForgetpasswd = async () => {
        if (email == '') {
            setmsg1('*Please Enter The Email')
        } else {
            setmsg1('')

            const data = {
                email: email,
            }
            setLoading(true);
            const response = await forgotpassword(global.URL + 'forgotpassword', data);
            setLoading(false);
            if (response.success == true) {
                alert(response.message)
                navigation.navigate('Signin');
            } else {
                alert('Not Signup')
            }
        }
    }
    return (
        <View style={globalstyles.mainview}>
             {loading ?
                    <View style={globalstyles.spinner}>
                        <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                    </View>
                    : null}
            <ScrollView >

                <View style={globalstyles.imgview}>
                    <Image source={require('../../../Image/39577231.png')} style={globalstyles.oneimg} />
                </View>
                <View style={styles.backarrowview}>
                    <Backarrow />
                </View>
                <View style={globalstyles.absoluteview}>
                    <View style={globalstyles.singview}>
                        <Text style={globalstyles.txt1}>Forget Password</Text>
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

                <View style={{ marginTop: 60, marginBottom: 10 }}>
                    <TouchableOpacity style={globalstyles.touchbtn} onPress={ToForgetpasswd}>
                        <Text style={globalstyles.btntxt}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
