// ListofCategories
import React, { useState, useEffect } from 'react';
import Modal from "react-native-modal";
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator, ImageBackground } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';
import { getsubcategory } from '../API';

export default function ListofCategories({ route, navigation }) {
    const [iscolor, setiscolor] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibletwo, setModalVisibletwo] = useState(false);
    const [iscolormodal, setiscolormodal] = useState(1);
    const [Presslike, setPresslike] = useState(false);
    const [category, setcategory] = useState(null);
    const [nearme, setnearme] = useState(null);
    const [deals, setdeals] = useState(null);
    const [discount, setdiscount] = useState(null);
    const [cashback, setcashback] = useState(null);
    const [loading, setLoading] = useState(false);
    const [subcategory, setsubcategory] = useState([
        { name: 'Petrol Station' },
        { name: 'Car Wash' },
        { name: 'Car Sales' },
        { name: 'Garages' },
        { name: 'Petrol Station' },
        { name: 'Garages' },
    ]);

    const cashbackevent = [
        { name: 'MC Dominos', img: require('../../../Image/Dominologo.png') },
        { name: 'Swiggy', img: require('../../../Image/Swiggylogo.png') },
        { name: 'Zomato', img: require('../../../Image/Zomato.png') },
    ]

    const getcatid = route.params
    // console.log('getcatid', getcatid) 

    useEffect(() => {

        navigation.addListener('focus', async () => {
            // Togetsubcategory()
        });

    }, []);


    const CategoryChange = (val, cat) => {
        console.log('val category', val, cat)
        setiscolormodal(val);
        setcategory(cat);
    }
    const Applynearme = (val) => {
        console.log('val ', val)
        setnearme(val)
    }
    const Applydeals = (val) => {
        console.log('val ', val)
        setdeals(val)
    }
    const Applydiscount = (val) => {
        console.log('val ', val)
        setdiscount(val)
    }
    const Applycashback = (val) => {
        console.log('val ', val)
        setcashback(val)
    }

    const ToViewdetails = () => {
        navigation.navigate('Viewdetails');
    }
    const Categoriesbackcolor = (val) => {
        setiscolor(val);
    }
    const handlePresslike = () => {
        setPresslike(!Presslike);
    };
    const goBack = () => {
        navigation.goBack();
    };
    const openmodal = () => {
        setModalVisible(true);
    }
    const closemodal = () => {
        setModalVisible(false);
    }
    const closemodalTap = () => {
        setModalVisible(false);
    }
    const openmodaltwo = () => {
        setModalVisibletwo(true);
    }
    const closemodaltwo = () => {
        setModalVisibletwo(false);
    }
    const closemodalTaptwo = () => {
        setcategory(null)
        setModalVisibletwo(false);
    }


    const Togetsubcategory = async () => {
        // setLoading(true);
        // const userData = await AsyncStorage.getItem('Userdata');
        // const userDataArray = JSON.parse(userData);
        // console.log('userDataArray', userDataArray.id)
        // setLoading(true);

        const data = {
            category: getcatid
        }

        setLoading(true);
        const response = await getsubcategory(global.URL + 'getsubcategory', data);
        setLoading(false);
        // console.log('getsubcategory --> response', response)
        if (response.success == true) {
            setsubcategory(response.data);
        } else {
            alert('Subcategory Data Not Found')
        }
    }

    // filtertwo poolsidebar games flowers sports    
    return (
        <View style={globalstyles.secmainview}>
            {loading ?
                <View style={globalstyles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.hadview}>
                    <Backarrow />
                    <Text style={globalstyles.hadtxt}>Automotive</Text>
                    <TouchableOpacity onPress={openmodal}>
                        <Image source={require('../../../Image/filter.png')} style={styles.filterimg} />
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: '4%', marginTop: 40 }}>
                    {subcategory.length > 0 ? (
                        subcategory.map((result, index) => (
                            <TouchableOpacity key={index} style={{ ...styles.presscategory, backgroundColor: iscolor == index ? '#A9D5B2' : '#F3F3F3' }} onPress={() => Categoriesbackcolor(index)}>
                                <Text style={{ ...styles.presscategorytxt, color: iscolor == index ? '#002408' : '#291F1D' }}>{result.name}</Text>
                            </TouchableOpacity>
                        ))
                    ) : (
                        null
                    )}
                </ScrollView>

                <View style={{ marginBottom: 16, marginTop: 5 }}>
                    <View style={styles.viewone}>
                        <View style={{ width: '30%', marginRight: '5%', }}>
                            <Image resizeMode='contain' source={require('../../../Image/WHITE1go.png')} style={globalstyles.WHITE1go} />
                            <Image source={require('../../../Image/carr.png')} style={styles.itemimg} />
                        </View>

                        <View style={{ width: '65%' }}>
                            <View style={styles.mainviewbtn}>
                                <View style={styles.mainviewbtn}>
                                    <Image source={require('../../../Image/ratting.png')} style={globalstyles.ratting} />
                                    <Text style={globalstyles.rattxt}>4.5</Text>
                                </View>
                                <TouchableOpacity onPress={handlePresslike} >
                                    <Image resizeMode='contain' source={Presslike ? require('../../../Image/liketwo.png') : require('../../../Image/like.png')} style={styles.liketwo} />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.txt2}>Car service & Washing</Text>
                            <Text style={styles.txt3}>(Above Rs 5,000)<Text style={styles.txt33}> Get 50% Off</Text></Text>
                            <View style={styles.mainviewbtn}>
                                <Text style={globalstyles.txt4}>Offer till 15th Feb</Text>
                                <TouchableOpacity style={styles.viewbtn} onPress={ToViewdetails}>
                                    <Text style={styles.viewbtntxt}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* cashback */}
                <View style={{ marginBottom: 10 }}>
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

                {/* voucher */}
                <View style={styles.voucherview}>
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


                {/*  */}
            </ScrollView>

            <Modal isVisible={isModalVisible} onBackButtonPress={closemodalTap} onBackdropPress={closemodalTap} style={{ margin: 0, justifyContent: 'flex-end' }} >

                <View style={{ backgroundColor: '#FFFFFF', borderTopRightRadius: 33, borderTopLeftRadius: 33, }}>

                    <View style={styles.modalhadview}>
                        <Text style={styles.modalhadtxt}>Filter</Text>
                        <Image source={require('../../../Image/filter.png')} style={styles.filterimg} />
                    </View>

                    <TouchableOpacity style={styles.modaldetail} onPress={openmodaltwo}>
                        <Text style={styles.modaldetailtxt}>{category ? category : "Select a category"}</Text>
                        {category &&
                            <Image source={require('../../../Image/VectorV.png')} style={styles.VectorVimg} />
                        }
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modaldetail} onPress={() => Applynearme(1)}>
                        <Text style={styles.modaldetailtxt}>Near me</Text>
                        {nearme == 1 && <Image source={require('../../../Image/VectorV.png')} style={styles.VectorVimg} />}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modaldetail} onPress={() => Applydeals(2)}>
                        <Text style={styles.modaldetailtxt}>Deals</Text>
                        {deals == 2 && <Image source={require('../../../Image/VectorV.png')} style={styles.VectorVimg} />}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modaldetail} onPress={() => Applydiscount(3)}>
                        <Text style={styles.modaldetailtxt}>Discounts</Text>
                        {discount == 3 && <Image source={require('../../../Image/VectorV.png')} style={styles.VectorVimg} />}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modaldetail} onPress={() => Applycashback(4)}>
                        <Text style={styles.modaldetailtxt}>Cash backs</Text>
                        {cashback == 4 && <Image source={require('../../../Image/VectorV.png')} style={styles.VectorVimg} />}
                    </TouchableOpacity>
                    {/* Cash backs */}

                    <View style={{ marginTop: 22, marginBottom: 30 }} >
                        <TouchableOpacity style={globalstyles.modaltouchbtn} onPress={() => closemodal()}>
                            <Text style={globalstyles.btntxt}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


            <Modal isVisible={isModalVisibletwo} onBackButtonPress={closemodalTaptwo} onBackdropPress={closemodalTaptwo} style={{ margin: 0, justifyContent: 'flex-end' }} >
                <View style={{ backgroundColor: '#F3F3F3', borderTopRightRadius: 33, borderTopLeftRadius: 33, }}>
                    <View style={styles.modalhadview}>
                        <Text style={styles.modalhadtxt}>Filter</Text>
                        <Image source={require('../../../Image/filtertwo.png')} style={styles.filterimg} />
                    </View>

                    <View style={styles.modaltwoview}>
                        <TouchableOpacity style={{ ...styles.secondcatview, backgroundColor: iscolormodal == 1 ? '#A9D4B2' : 'white' }} onPress={() => CategoryChange(1, "Automotive")}>
                            <Image source={require('../../../Image/Group1.png')} style={styles.Group1} />
                            <Text style={{ ...styles.Categorytxt, color: iscolormodal == 1 ? '#FFFFFF' : '#291F1D' }} >Automotive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.secondcatview, backgroundColor: iscolormodal == 2 ? '#A9D4B2' : 'white' }} onPress={() => CategoryChange(2, "Entertainment")}>
                            <Image source={require('../../../Image/entertainment.png')} style={styles.Group1} />
                            <Text style={{ ...styles.Categorytxt, color: iscolormodal == 2 ? '#FFFFFF' : '#291F1D' }} >Entertainment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.secondcatview, backgroundColor: iscolormodal == 3 ? '#A9D4B2' : 'white' }} onPress={() => CategoryChange(3, "Fashion & Clothing")}>
                            <Image source={require('../../../Image/icons8-veganclothing-1001.png')} style={styles.Group1} />
                            <Text style={{ ...styles.Categorytxt, color: iscolormodal == 3 ? '#FFFFFF' : '#291F1D' }} >Fashion & Clothing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.secondcatview, backgroundColor: iscolormodal == 4 ? '#A9D4B2' : 'white' }} onPress={() => CategoryChange(4, "Household & Garden")}>
                            <Image source={require('../../../Image/icons8garden1.png')} style={styles.Group1} />
                            <Text style={{ ...styles.Categorytxt, color: iscolormodal == 4 ? '#FFFFFF' : '#291F1D' }} >Household & Garden</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.secondcatview, backgroundColor: iscolormodal == 5 ? '#A9D4B2' : 'white' }} onPress={() => CategoryChange(5, "Flowers & Gifts")}>
                            <Image source={require('../../../Image/flowers.png')} style={styles.Group1} />
                            <Text style={{ ...styles.Categorytxt, color: iscolormodal == 5 ? '#FFFFFF' : '#291F1D' }} >Flowers & Gifts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.secondcatview, backgroundColor: iscolormodal == 6 ? '#A9D4B2' : 'white' }} onPress={() => CategoryChange(6, "Food & Drinks")}>
                            <Image source={require('../../../Image/poolsidebar.png')} style={styles.Group1} />
                            <Text style={{ ...styles.Categorytxt, color: iscolormodal == 6 ? '#FFFFFF' : '#291F1D' }} >Food & Drinks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.secondcatview, backgroundColor: iscolormodal == 7 ? '#A9D4B2' : 'white' }} onPress={() => CategoryChange(7, "Toys & Games")}>
                            <Image source={require('../../../Image/games.png')} style={styles.Group1} />
                            <Text style={{ ...styles.Categorytxt, color: iscolormodal == 7 ? '#FFFFFF' : '#291F1D' }} >Toys & Games</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 14, marginBottom: 30 }} >
                        <TouchableOpacity style={globalstyles.modaltouchbtn} onPress={() => closemodaltwo()}>
                            <Text style={globalstyles.btntxt}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
