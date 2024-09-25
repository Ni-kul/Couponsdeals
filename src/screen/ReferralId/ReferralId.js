import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './style';


export default function ReferralId({ navigation }) {
    const [activeTab, setActiveTab] = useState('income');
    const [whatNext, setWhatNext] = useState();


    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Update active tab state
    };

    const handleWhatNext = (id) => {
        if (whatNext === id) {
            setWhatNext(null);
        } else {
            setWhatNext(id);
        }
    }

    const userData = [
        {
            name: "Dinesh kumar",
            ReferralId: "485625",
            rs: "500",
            date: "05/06/2024"
        },
        {
            name: "Sanjay kumar",
            ReferralId: "485625",
            rs: "500",
            date: "05/06/2024"
        },
        {
            name: "Kavin",
            ReferralId: "485625",
            rs: "500",
            date: "05/06/2024"
        },
        {
            name: "Kaviya Anjali",
            ReferralId: "485625",
            rs: "500",
            date: "05/06/2024"
        },
    ]
    return (
        <View style={globalstyles.secmainview}>
            <SafeAreaView>
                <ScrollView >
                    <View style={globalstyles.Backarrowviewtwo}>
                        <Backarrow />
                        <Text style={globalstyles.hadtxttwo}>Referral ID profile</Text>
                    </View>

                    <View style={styles.tabButtonsContainer}>
                        <TouchableOpacity
                            style={[styles.tabButton, activeTab === 'income' && styles.activeTab]}
                            onPress={() => handleTabClick('income')}
                        >
                            <Text style={[styles.tabButtonText, activeTab === 'income' && styles.activetabButtonText]}>Income</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, activeTab === 'Connect' && styles.activeTab]}
                            onPress={() => handleTabClick('Connect')}
                        >
                            <Text style={[styles.tabButtonText, activeTab === 'Connect' && styles.activetabButtonText]}>Connect</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {activeTab === 'income' &&
                            <>
                                <View>
                                    {userData.map((i, index) => {
                                        return (
                                            <>
                                                <View style={styles.userprofile} key={index}>
                                                    <View style={styles.userProfileImage}>
                                                        <Image resizeMode='contain' source={require('../../../Image/user-2.png')} style={styles.userImage} />
                                                    </View>
                                                    <View style={styles.textContent}>
                                                        <View style={styles.flex}>
                                                            <Text style={styles.userName}>
                                                                {i.name}
                                                            </Text>
                                                            <TouchableOpacity onPress={() => handleWhatNext(index)}>

                                                                <Image source={require('../../../Image/oui_i.png')} style={styles.iIcon} />
                                                            </TouchableOpacity>

                                                        </View>
                                                        <View style={styles.flex}>
                                                            <Text style={styles.ReferralId}>Referral ID : {i.ReferralId}</Text>
                                                            <Text style={styles.date}>Date : {i.date}</Text>
                                                        </View>
                                                        <Text style={styles.rs}>
                                                            Plan commission : RS {i.rs}
                                                        </Text>
                                                    </View>


                                                </View>
                                                {whatNext == index &&

                                                    <TouchableOpacity onPress={() => handleWhatNext(index)} style={styles.whatNextModal}>
                                                        <View style={styles.what} >
                                                            <Text style={styles.whatTitle}>What happen next</Text>
                                                            <View style={styles.imageContent}>
                                                                <Image source={require('../../../Image/1.png')} style={styles.image1} />
                                                                <Text style={styles.text}>1-2 Days</Text>
                                                                <Image source={require('../../../Image/2.png')} style={styles.image} />
                                                                <Text style={styles.text}>40-60 Days</Text>

                                                                <Image source={require('../../../Image/3.png')} style={styles.image} />
                                                            </View>
                                                            <View style={styles.whatText}>
                                                                <Text style={styles.text1}>Claim
                                                                    Submitted</Text>
                                                                <Text style={styles.text1}>Verified your
                                                                    request</Text>
                                                                <Text style={styles.text1}>Final amount will
                                                                    Add on your
                                                                    Wallet</Text>
                                                            </View>
                                                        </View>

                                                    </TouchableOpacity>
                                                }

                                            </>
                                        )
                                    })}
                                </View>
                            </>}
                        {activeTab === 'Connect' &&
                            <>
                                <View style={styles.connect}>
                                    {userData.map((i, index) => {
                                        return (
                                            <View style={styles.userconnect} key={index}>
                                                <View style={styles.userProfileImage}>
                                                    <Image source={require('../../../Image/user-2.png')} style={styles.userImage} />
                                                </View>
                                                <Text style={styles.connectuser}>
                                                    {i.name}
                                                </Text>

                                                <Text style={styles.connectuserId}>Referral ID : {i.ReferralId}</Text>

                                            </View>
                                        )
                                    })}
                                </View>
                            </>
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}


