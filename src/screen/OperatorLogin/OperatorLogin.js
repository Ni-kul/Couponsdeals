// OperatorLogin
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';
import { Dropdown } from 'react-native-element-dropdown';

export default function OperatorLogin({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Operatortype, setOperatortype] = useState('');
    const [msg1, setmsg1] = useState('');
    const [msg2, setmsg2] = useState('');
    const [msg3, setmsg3] = useState('');
    const [msg4, setmsg4] = useState('');
    const [btnshow, setbtnshow] = useState('1');
    const [passwdSH, setpasswdSH] = useState(true);

    const data = [
        { label: 'User', value: '1' },
        { label: 'Manager', value: '2' },
        { label: 'Cashier', value: '3' },
    ];

    const passwdshowhide = (value) => {
        // console.log('value', value)
        setbtnshow(value)
        if (value == '1') {
            setpasswdSH(true)
        } else {
            setpasswdSH(false)
        }
    }

    const ToOperatorList = () => {
        navigation.navigate('OperatorList')
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
                    <Text style={globalstyles.hadtxttwo}>Create Operator Login</Text>
                </View>

                <View style={{ marginTop: 10, marginBottom: 30 }}>
                    <Image resizeMode='contain' source={require('../../../Image/op.png')} style={styles.opimg} />

                    <Text style={globalstyles.inputhadtxt}>Name</Text>
                    <TextInput
                        style={globalstyles.intxt}
                        placeholder='Enter the name'
                        placeholderTextColor='#BABABA'
                        color='black'
                        value={name}
                        onChangeText={(text) => setname(text)}
                    >
                    </TextInput>
                    {msg1 ? <Text style={globalstyles.msg}>{msg1}</Text> : null}

                    <Text style={globalstyles.inputhadtxt}>Email Id</Text>
                    <TextInput
                        style={globalstyles.intxt}
                        placeholder='Enter Email Id'
                        placeholderTextColor='#BABABA'
                        color='black'
                        value={email}
                        onChangeText={(text) => setemail(text)}
                    >
                    </TextInput>
                    {msg2 ? <Text style={globalstyles.msg}>{msg2}</Text> : null}

                    <Text style={globalstyles.inputhadtxt}>Select the operatsor</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="Select the operator"
                        value={Operatortype}
                        onChange={item => {
                            setOperatortype(item.value);
                            // global.Usertype = item.value;
                        }}
                        color='#BABABA'
                        labelField="label"
                        valueField="value"
                        data={data}
                    />
                    {msg3 ? <Text style={globalstyles.msg}>{msg3}</Text> : null}


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
                    {msg4 ? <Text style={globalstyles.msg}>{msg4}</Text> : null}

                    <View style={{ marginTop: 40 }}>
                        <TouchableOpacity style={globalstyles.touchbtn} onPress={ToOperatorList}>
                            <Text style={globalstyles.btntxt}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}