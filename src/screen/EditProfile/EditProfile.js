// EditProfile
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, alert, Alert, ActivityIndicator } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';
import { updateuserprofile, uploadimage } from '../API';

export default function EditProfile({ navigation }) {

    const [imageUri, setImageUri] = useState(null);
    const [name, setname] = useState('');
    const [userid, setuserid] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');
    const [isdob, setisdob] = useState('');
    const [location, setlocation] = useState('');
    const [loading, setLoading] = useState(false);
    // const [datedone, setdatedone] = useState();
    global.datedone = null;
    const [selectedId, setselectedId] = useState();
    const [gender, setgender] = useState('');
    const [day, setday] = useState();
    const [month, setmonth] = useState('');
    const [year, setyear] = useState(); //1960 to 2020 add ?
    const [validDays, setValidDays] = useState([]);
    const [msg1, setmsg1] = useState('');
    const [msg2, setmsg2] = useState('');
    const [msg3, setmsg3] = useState('');
    const [msg4, setmsg4] = useState('');
    const [msg5, setmsg5] = useState('');
    const [msg6, setmsg6] = useState('');

    const data = [
        { label: 'Jan', value: '01' },
        { label: 'Feb', value: '02' },
        { label: 'Mar', value: '03' },
        { label: 'Apr', value: '04' },
        { label: 'May', value: '05' },
        { label: 'Jun', value: '06' },
        { label: 'July', value: '07' },
        { label: 'Aug', value: '08' },
        { label: 'Sep', value: '09' },
        { label: 'Oct', value: '10' },
        { label: 'Nov', value: '11' },
        { label: 'Des', value: '12' },

    ];
    const radiobtn = (val, selectid) => {
        // console.log("--->>", val, selectid)
        setselectedId(val);
        setgender(selectid)
    }
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
            if (!response.didCancel && !response.error) {
                const base64 = response.assets[0].base64;
                if (base64) {
                    const data = {
                        base64: 'data:image/jpeg;base64,' + base64,
                    };
                    // setImageUri({ uri: dataUrl });
                    try {
                        setLoading(true);
                        const uploadimg = await uploadimage(global.URL + 'uploadimage', data);
                        // console.log('uploadimg', uploadimg)
                        setLoading(false);
                        if (uploadimg.success == true) {
                            const hello = uploadimg.data.replace('images/', '')
                            // console.log('hello', hello)
                            setImageUri(hello)
                            const data = {
                                user_id: userid,
                                mobile: mobile,
                                email: email,
                                name: name,
                                dob: isdob,
                                location: location,
                                profile_image: hello,
                            };

                            setLoading(true);
                            const response = await updateuserprofile(global.URL + 'updateuserprofile', data);
                            setLoading(false);
                            const result = await AsyncStorage.getItem('Userdata')

                            const screenData = JSON.parse(result)

                            const newUpdatedUserInfo = {
                                ...screenData,
                                "user_id": userid,
                                "mobile": mobile,
                                "email": email,
                                "name": name,
                                "dob": isdob,
                                "location": location,
                                "profile_image": hello,
                            };
                            // console.log('newUpdatedUserInfo:--(5)', newUpdatedUserInfo);

                            AsyncStorage.setItem('Userdata', JSON.stringify(newUpdatedUserInfo))

                            const updateget = await AsyncStorage.getItem('Userdata');
                            // console.log('Data updateget--(6):', updateget);
                        }
                    } catch (uploadError) {
                        console.error('Error uploading image:', uploadError);
                    }
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
                    try {
                        setLoading(true);
                        const uploadimg = await uploadimage(global.URL + 'uploadimage', data);
                        // console.log('uploadimg', uploadimg)
                        setLoading(false);
                        if (uploadimg.success == true) {
                            const hello = uploadimg.data.replace('images/', '')
                            // console.log('hello', hello)
                            setImageUri(hello)
                            const data = {
                                user_id: userid,
                                mobile: mobile,
                                email: email,
                                name: name,
                                dob: isdob,
                                location: location,
                                profile_image: hello,
                            };

                            setLoading(true);
                            const response = await updateuserprofile(global.URL + 'updateuserprofile', data);
                            setLoading(false);
                            const result = await AsyncStorage.getItem('Userdata')

                            const screenData = JSON.parse(result)

                            const newUpdatedUserInfo = {
                                ...screenData,
                                "user_id": userid,
                                "mobile": mobile,
                                "email": email,
                                "name": name,
                                "dob": isdob,
                                "location": location,
                                "profile_image": hello,
                            };
                            // console.log('newUpdatedUserInfo:--(5)', newUpdatedUserInfo);

                            AsyncStorage.setItem('Userdata', JSON.stringify(newUpdatedUserInfo))

                            const updateget = await AsyncStorage.getItem('Userdata');
                            // console.log('Data updateget--(6):', updateget);
                        }
                    } catch (uploadError) {
                        console.error('Error uploading image:', uploadError);
                    }
                } else {
                    console.error('Base64 data not found in response:', response);
                }
            }
        })
    }
    const generateValidDays = () => {
        const selectedMonth = parseInt(month);
        const selectedYear = parseInt(year);
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        const validDaysArray = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
        setValidDays(validDaysArray);
    };

    useEffect(() => {
        const Touserdata = async () => {
            setLoading(true);
            const userData = await AsyncStorage.getItem('Userdata');
            // console.log('userData -->', userData)
            const userDataArray = JSON.parse(userData);
            setLoading(false);
            if (userDataArray) {
                setuserid(userDataArray.id)
                setname(userDataArray.name)
                setemail(userDataArray.email)
                setmobile(userDataArray.mobile)
                setlocation(userDataArray.location)
                setImageUri(userDataArray.profile_image)
                setisdob(userDataArray.dob)
                setgender(userDataArray.gender)
                if (userDataArray.dob != null) {
                    const parts = await userDataArray.dob.split('-');
                    if (parts.length === 3) {
                        setyear(parts[0]);
                        setmonth(parts[1]);
                        setday(parts[2]);
                    }
                }
            }
        }

        navigation.addListener('focus', () => {
            Touserdata();
        })

        // if (month !== null && year !== '') {
        //     generateValidDays();
        // }

        // }, [month, year]);
    }, []);


    const handleDayChange = () => {
        // console.log('global.datedone', global.datedone)
        const enteredDay = parseInt(day);
        const enteredMonth = parseInt(month);
        const enteredYear = parseInt(year);

        // if (!isNaN(enteredDay) && enteredDay > 0 && enteredMonth > 0 && enteredYear > 0) {

        if (
            !isNaN(enteredDay) && enteredDay > 0
            // && !isNaN(enteredMonth) && enteredMonth > 0 && enteredMonth <= 12
            // && !isNaN(enteredYear) && enteredYear >= 1960 && enteredYear <= 2020 
        ) {

            const daysInMonth = new Date(enteredYear, enteredMonth, 0).getDate();

            if (enteredDay > 0 && enteredDay <= daysInMonth) {
                // Alert.alert('Success', 'Valid Date');
                global.datedone = 0
                setmsg3('')
            } else {
                global.datedone = 1
                setmsg3('Enter The Valid Date Of Birth*');
            }
        } else {
            global.datedone = 1
            setmsg3('Enter The Valid Date Of Birth*');
        }
    };

    // const handleDayChange = async () => {
    //     const enteredDay = parseInt(day);
    //     const enteredMonth = parseInt(month);
    //     const enteredYear = parseInt(year);

    //     // const currentYear = new Date().getFullYear();

    //     if (
    //         !isNaN(enteredDay) && enteredDay > 0 &&
    //         !isNaN(enteredMonth) && enteredMonth > 0 && enteredMonth <= 12 &&
    //         !isNaN(enteredYear) && enteredYear >= 1960 && enteredYear <= 2020
    //     ) {
    //         const daysInMonth = new Date(enteredYear, enteredMonth, 0).getDate();

    //         if (enteredDay > 0 && enteredDay <= daysInMonth) {
    //             setmsg3('');
    //         } else {
    //             Alert.alert('Invalid Date', 'Please Enter a Valid Date.');
    //             // setyear();
    //             // setmonth();
    //             // setday();
    //         }
    //     } else {
    //         Alert.alert('Invalid Date');
    //         // setyear();
    //         // setmonth();
    //         // setday();
    //     }
    // };


    const saveupdete = async () => {
        if (name == '') {
            setmsg1('Enter The Name*')
        } else {
            setmsg1('')
        }
        if (gender == '') {
            setmsg2('Enter The Gender*')
        } else {
            setmsg2('')
        }
        if (day == null) {
            setmsg3('Enter The Date*')
        } else if (day == 0) {
            setmsg3('Enter The Valid Day*')
        } else if (month == '') {
            setmsg3('Enter The Month*')
        } else if (year == null) {
            setmsg3('Enter The Year*')
        } else if (year < 1960 || year > 2020) {
            setmsg3('Enter The Valid Year (1960-2020)*')
        } else if (day != '' && month != '' && year != '') {
            handleDayChange();
        } else {
            // handleDayChange();
            setmsg3('')
        }

        if (email == '') {
            setmsg4('Enter The Email*')
        } else {
            setmsg4('')
        }
        if (mobile == '') {
            setmsg5('Enter The Mobile Number*')
        } else {
            setmsg5('')
        }
        if (location == '') {
            setmsg6('Enter The Location*')
        } else {
            setmsg6('')
        }
        if (name != '' && gender != '' && day != null && day != 0 && month != '' && year != null && year >= 1960 && year <= 2020 && global.datedone == 0 && location != '') {
            // setisdob(`${year} ${month} ${day}`) msg3 == '' && datedone == 0
            const dob = (`${year}-${month}-${day}`)
            // console.log('dob', dob)
            // setmsg3('')
            // Alert.alert('Successfully Saved.');
            const data = {
                user_id: userid,
                mobile: mobile,
                email: email,
                name: name,
                dob: dob,
                location: location,
                gender: gender,
                profile_image: imageUri,
            };

            setLoading(true);
            const response = await updateuserprofile(global.URL + 'updateuserprofile', data);

            // console.log('updateprofile --> response', response)
            setLoading(false);
            const result = await AsyncStorage.getItem('Userdata')
            // console.log('Data in result Userdata-(3) :', result);

            const screenData = JSON.parse(result)
            // console.log('Data in screenData--(4) :', screenData);

            const newUpdatedUserInfo = {
                ...screenData,
                "user_id": userid,
                "mobile": mobile,
                "email": email,
                "name": name,
                "dob": dob,
                "gender": gender,
                "location": location,
                "profile_image": imageUri,
            };
            // console.log('newUpdatedUserInfo:--(5)', newUpdatedUserInfo);

            AsyncStorage.setItem('Userdata', JSON.stringify(newUpdatedUserInfo))

            const updateget = await AsyncStorage.getItem('Userdata');
            // console.log('Data updateget--(6):', updateget);
            Alert.alert('Successfully Updated.');
            // console.log('sss')
        } else {
            Alert.alert('Data Not Updated')
        }

    }

    return (
        <View style={styles.mainview}>
            {loading ?
                <View style={globalstyles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}
            <ScrollView >

                <View style={globalstyles.Profile1view}>

                    <Image source={require('../../../Image/LinesBackground.png')} style={globalstyles.LinesBackground} />
                    <View style={globalstyles.Backarrowprofile}>
                        <Backarrow />
                    </View>
                    <Text style={globalstyles.nametxt}>Jaya{name}</Text>
                    {imageUri ?
                        <Image source={{ uri: global.IMG + imageUri }} style={globalstyles.Rprofile} />
                        :
                        <Image source={require('../../../Image/Rprofile.png')} style={globalstyles.Rprofile} />
                    }
                    <TouchableOpacity style={styles.editonpress} onPress={select}>
                        <Image source={require('../../../Image/edit.png')} style={styles.edit} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 30 }}>

                    <Text style={globalstyles.labeltxt}>User Name</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter your name'
                        placeholderTextColor='#737373'
                        value={name}
                        onChangeText={(text) => setname(text)}
                    />
                    {msg1 ? <Text style={globalstyles.msg}>{msg1}</Text> : null}
                    <View style={{ marginVertical: 30 }}>
                        <View style={styles.radiobtnview}>
                            <Text style={styles.labeltxt1}>Gender</Text>

                            <View style={styles.radiocontainer}>

                                <View style={styles.maleview}>
                                    <TouchableOpacity onPress={() => radiobtn(true, 1)}>
                                        <Text
                                            style={[
                                                styles.sl,
                                                gender == 1 ? styles.sl1 : styles.slnot,
                                            ]}
                                        ></Text>
                                    </TouchableOpacity>
                                    <Text style={styles.radiolabels}>Male</Text>
                                </View>

                                <View style={styles.maleview}>
                                    <TouchableOpacity onPress={() => radiobtn(false, 2)}>
                                        <Text
                                            style={[
                                                styles.sl,
                                                gender == 2 ? styles.sl1 : styles.slnot,
                                            ]}
                                        ></Text>
                                    </TouchableOpacity>
                                    <Text style={styles.radiolabels}>Female</Text>
                                </View>

                            </View>

                        </View>
                        {/* <View> */}
                        {msg2 ? <Text style={globalstyles.msg}>{msg2}</Text> : null}
                        {/* </View> */}
                    </View>

                    <View style={styles.dateview}>
                        <Text style={globalstyles.labeltxt}>Date of Birth</Text>

                        <View style={styles.dateviewtwo}>
                            <TextInput
                                style={styles.dateinput}
                                placeholder='00'
                                placeholderTextColor='#737373'
                                value={day}
                                maxLength={2}
                                keyboardType='numeric'
                                onChangeText={(text) => setday(text)}
                            />
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                placeholder="00"
                                value={month}
                                onChange={item => setmonth(item.value)}
                                color='black'
                                labelField="label"
                                valueField="value"
                                data={data}
                            />
                            <TextInput
                                style={styles.yearinput}
                                placeholder='0000'
                                placeholderTextColor='#737373'
                                maxLength={4}
                                keyboardType='numeric'
                                value={year}
                                onChangeText={(text) => setyear(text)}
                            />
                        </View>
                        {msg3 ? <Text style={globalstyles.msg}>{msg3}</Text> : null}

                    </View>

                    <Text style={globalstyles.labeltxt}>E-Mail Id</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter E-Mail Id'
                        placeholderTextColor='#737373'
                        value={email}
                        onChangeText={(text) => setemail(text)}
                    />
                    {msg4 ? <Text style={globalstyles.msg}>{msg4}</Text> : null}

                    <Text style={styles.labeltxt}>Mobile Number</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter Mobile Number'
                        placeholderTextColor='#737373'
                        value={mobile}
                        onChangeText={(text) => setmobile(text)}
                    />
                    {msg5 ? <Text style={globalstyles.msg}>{msg5}</Text> : null}

                    <Text style={styles.labeltxt}>Location</Text>
                    <TextInput
                        style={globalstyles.inputtxt}
                        placeholder='Enter Location'
                        placeholderTextColor='#737373'
                        value={location}
                        onChangeText={(text) => setlocation(text)}
                    />
                    {msg6 ? <Text style={globalstyles.msg}>{msg6}</Text> : null}

                </View>

                <View style={globalstyles.btnview}>
                    <TouchableOpacity disabled={setmsg3 == ''} style={globalstyles.touchbtn} onPress={saveupdete}>
                        <Text style={globalstyles.btntxt} >Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}