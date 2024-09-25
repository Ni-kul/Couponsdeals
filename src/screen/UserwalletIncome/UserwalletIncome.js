// UserwalletIncome.js
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';
import Modal from "react-native-modal";

export default function UserwalletIncome({ navigation }) {

    const [showMerchantView, setShowMerchantView] = useState(false);
    const [activeTab, setActiveTab] = useState('income');
    const [showBankAccount, setShowBankAccount] = useState()
    const [isModalVisible, setModalVisible] = useState(false);
    const [isChecked, setIsChecked] = React.useState(false);
    const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

    const [bankverify, setbankverify] = useState(false);

    const handleUserButtonClick = () => {
        // console.log('showMerchantView', showMerchantView)
        setShowMerchantView(!showMerchantView);
    };
    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Update active tab state
    };

    const handleBankAccount = (id) => {
        setShowBankAccount(id)
    }


    const openmodal = () => {
        setModalVisible(true);
    }

    // const openSecondModal = () => {
    //     setSecondModalVisible(true);
    //     console.log(isSecondModalVisible);
    //   };
    const closemodalTap = () => {
        setModalVisible(false);
        setIsSecondModalVisible(true)
    }

    const closesecondmodalTap = () => {
        setIsSecondModalVisible(false);
    }

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={globalstyles.secmainview}>
            <ScrollView >
                <View style={styles.Profile1view}>

                    <Image source={require('../../../Image/LinesBackground.png')} style={styles.LinesBackground} />

                    <View style={styles.Backarrowprofile}>
                        <Backarrow />
                        <Text style={styles.hadtxttxt}>Wallet</Text>
                    </View>
                </View>

                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>Your Balance</Text>
                    <Text style={styles.balanceAmount}>₹400</Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={openmodal}>Withdrawal Request</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => handleBankAccount(1)}>Bank Account</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.walletHistoryContainer}>
                    <Text style={styles.walletHistoryText}>Wallet History</Text>
                    <TouchableOpacity style={[styles.rentandsaleview, showMerchantView ? styles.user : ""]} onPress={handleUserButtonClick}>
                        <View style={styles.updwonarrowrow}>
                            <Text style={styles.renstextstylesale}>User</Text>
                            <TouchableOpacity onPress={handleUserButtonClick}>
                                <Image source={require('../../../Image/dwonarrow.png')} style={styles.dropDownArrow} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                {showMerchantView && (
                    <TouchableOpacity style={[styles.rentandsaleview, styles.merchant]}>
                        <View style={styles.updwonarrowrow}>
                            <Text style={styles.renstextstylesale}>Merchant</Text>
                        </View>
                    </TouchableOpacity>
                )}


                <View style={styles.tabButtonsContainer}>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'income' && styles.activeTab]}
                        onPress={() => handleTabClick('income')}
                    >
                        <Text style={[styles.tabButtonText, activeTab === 'income' && styles.activetabButtonText]}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'expenses' && styles.activeTab]}
                        onPress={() => handleTabClick('expenses')}
                    >
                        <Text style={[styles.tabButtonText, activeTab === 'expenses' && styles.activetabButtonText]}>Expenses</Text>
                    </TouchableOpacity>
                </View>


                {activeTab === 'income' &&
                    <>
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <Image
                                    source={require('../../../Image/Layer_1.png')} // Replace with your star icon
                                />
                                <View style={styles.rating}>
                                    <Image
                                        source={require('../../../Image/ratting.png')} // Replace with your star icon
                                        style={styles.star}
                                    />
                                    <Text style={styles.ratingText}>4.5</Text>
                                </View>



                                <View style={[styles.body, styles.flex]}>
                                    <Text style={styles.offerText}>
                                        (Get amount: 150 cash back)
                                    </Text>
                                    <TouchableOpacity>
                                        <Image source={require('../../../Image/oui_i.png')} style={styles.iIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.body}>
                                <Image
                                    source={require('../../../Image/carservice.png')} // Replace with your car image
                                    style={styles.carImage}
                                />
                                <View style={styles.details}>
                                    <Text style={styles.title}>Only Car Service</Text>
                                    <View style={styles.description}>
                                        <Text style={styles.offerText}>
                                            (Above Rs 5,000)
                                        </Text>
                                        <Text style={styles.offerText}>Get 50% Off</Text>
                                    </View>
                                    <View style={styles.description}>

                                        <Text style={styles.offerText}>Offer till 15th Feb</Text>
                                        <Text style={styles.view}>View</Text>
                                    </View>

                                </View>
                            </View>
                        </View>


                        <View style={[styles.body, styles.container]}>
                            <Image
                                source={require('../../../Image/user-1.png')}
                                style={styles.profileImage}
                            />
                            <View style={styles.infoContainer}>
                                <View style={[styles.body, styles.flex]}>
                                    <Text style={styles.name}>Dinesh Kumar</Text>
                                    <View style={[styles.body, styles.flex]}>
                                        <Text style={styles.wallet}>
                                            (Wallet amount: pending)
                                        </Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../../Image/oui_i.png')} style={styles.iIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <Text style={styles.plan}>Basic Subscription Plan</Text>
                                <Text style={styles.referral}>Referral ID: #SD1542</Text>
                                <Text style={styles.commission}>Commission: Rs: 150</Text>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.date}>Date: 11/06/2024</Text>
                                    <Text style={styles.time}>Time: 05:00 PM</Text>
                                </View>
                            </View>

                        </View>


                        <View style={[styles.container, styles.body]}>
                            <Image
                                source={require('../../../Image/Dominos.png')}
                                style={styles.logo}
                            />
                            <View style={styles.textContainer}>
                                <View style={[styles.body, styles.flex]}>
                                    <Text style={styles.title}>MC Dominos</Text>
                                    <View style={[styles.body, styles.flex]}>
                                        <Text style={styles.wallet}>
                                            (Wallet amount: pending)
                                        </Text>
                                        <TouchableOpacity>
                                            <Image source={require('../../../Image/oui_i.png')} style={styles.iIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={[styles.body, styles.flex, styles.cashbackPrice]}>
                                    <Text style={styles.price}>
                                        Rs (5,000 - 6,000)
                                    </Text>
                                    <Text style={styles.cashback}>
                                        Get Rs 100 Cashback
                                    </Text>
                                </View>

                            </View>
                        </View>
                    </>}


                {activeTab === 'expenses' &&
                    <>


                        <View style={[styles.body, styles.container,]}>
                            <Image style={styles.image} source={require('../../../Image/education.png')} />

                            <View style={styles.block}>
                                <Text style={styles.title}>Basic Subscription plan</Text>
                                <View style={styles.info}>
                                    <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                    <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                </View>

                                <View style={[styles.body, styles.flex]}>
                                    <View style={styles.wallet}>
                                        <Text style={styles.walletText}>Used Wallet : Rs 100</Text>
                                    </View>
                                    <View style={styles.price}>
                                        <Text style={styles.priceText}>₹ 1,000</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.body, styles.container,]}>
                            <Image style={styles.image} source={require('../../../Image/education.png')} />

                            <View style={styles.block}>
                                <Text style={styles.title}>Basic Subscription plan</Text>
                                <View style={styles.info}>
                                    <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                    <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                </View>

                                <View style={[styles.body, styles.flex]}>
                                    <View style={styles.wallet}>
                                        <Text style={styles.walletText}>Used Wallet : Rs 100</Text>
                                    </View>
                                    <View style={styles.price}>
                                        <Text style={styles.priceText}>₹ 1,000</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.body, styles.container,]}>
                            <Image style={styles.image} source={require('../../../Image/education.png')} />

                            <View style={styles.block}>
                                <Text style={styles.title}>Basic Subscription plan</Text>
                                <View style={styles.info}>
                                    <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                    <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                </View>

                                <View style={[styles.body, styles.flex]}>
                                    <View style={styles.wallet}>
                                        <Text style={styles.walletText}>Used Wallet : Rs 100</Text>
                                    </View>
                                    <View style={styles.price}>
                                        <Text style={styles.priceText}>₹ 1,000</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.body, styles.container,]}>
                            <Image style={styles.image} source={require('../../../Image/education.png')} />

                            <View style={styles.block}>
                                <Text style={styles.title}>Basic Subscription plan</Text>
                                <View style={styles.info}>
                                    <Text style={[styles.infoText, styles.infoText3]}>Start on : 22/02/2023</Text>
                                    <Text style={styles.infoText}>End on: 22/02/2023</Text>
                                </View>

                                <View style={[styles.body, styles.flex]}>
                                    <View style={styles.wallet}>
                                        <Text style={styles.walletText}>Used Wallet : Rs 100</Text>
                                    </View>
                                    <View style={styles.price}>
                                        <Text style={styles.priceText}>₹ 1,000</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </>
                }
            </ScrollView>


            {showBankAccount == '1' && (

                <View style={styles.bankAccount}>
                    <SafeAreaView>


                        <ScrollView>
                            <View style={globalstyles.Backarrowviewtwo}>
                                <Backarrow />
                                <Text style={globalstyles.hadtxttwo}>Bank Details</Text>
                            </View>

                            <View style={styles.form}>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>
                                        Account Name
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Account Name" />
                                </View>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>
                                        Account Number
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter IFSC Code Number" />
                                </View>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>
                                        IFSC Code Number
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter IFSC Code Number" />
                                </View>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>
                                        Mobile number
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Mobile Number" />
                                </View>

                                <View style={styles.border}></View>

                                <Text style={styles.or}>
                                    OR
                                </Text>

                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>
                                        Enter UPI ID
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Mobile Number" />
                                </View>
                                <View style={styles.border}></View>
                                <TouchableOpacity style={[globalstyles.touchbtn, styles.touchbtn]} onPress={() => handleBankAccount(0)}>
                                    <Text style={globalstyles.btntxt}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>

                    </SafeAreaView>
                </View>
            )
            }

            {/* Modal for withdrawal request */}
            <Modal
                isVisible={isModalVisible}
                onBackButtonPress={closemodalTap}
                onBackdropPress={closemodalTap}
                style={{ margin: 0, justifyContent: 'flex-end' }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.withdrawal}>


                        <Text style={styles.modalTitle}>Enter Withdrawal Amount</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter Withdrawal Amount"
                            keyboardType="numeric"
                            color='#858585'
                        />

                        {bankverify == false ?
                            <View style={styles.notverifyview}>
                                <Text style={styles.notverifytext}>! Not Verify Your Bank Account</Text>
                                <TouchableOpacity onPress={() => setbankverify(true)}>
                                    <Text style={styles.notverifytext2}>Click here</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={styles.body}>
                                <Image source={require('../../../Image/bitcoin-icons_verify.png')} />
                                <Text style={styles.verifytext}>Verify Bank Account</Text>
                            </View>
                        }

                        <View style={styles.checkboxContainer}>
                            <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
                                <View style={[styles.checkbox, isChecked && styles.checked]}>
                                    {isChecked && (

                                        <Image source={require('../../../Image/check.png')} style={styles.checkMark} />

                                    )}
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.checkboxText}>
                                Your request verify by camdell after then your amount transfer to your account and it take time for verification process
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.WalletButton} onPress={() => {

                            // console.log(isSecondModalVisible)
                            closemodalTap()
                            // setIsSecondModalVisible(true);
                        }}>
                            <Text style={globalstyles.btntxt}>Submit</Text>
                        </TouchableOpacity>

                        {/* 
                        <View style={styles.keybordcontainer}>
                            <View style={styles.keyrow}>
                                <TouchableOpacity style={styles.cell}><Text style={styles.text}>1</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.cell}><Text style={styles.text}>2</Text><Text style={styles.smallText}>ABC</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.cell}><Text style={styles.text}>3</Text><Text style={styles.smallText}>DEF</Text></TouchableOpacity>
                            </View>
                            <View style={styles.keyrow}>
                                <TouchableOpacity style={styles.cell}><Text style={styles.text}>4</Text><Text style={styles.smallText}>GHI</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.cell}><Text style={styles.text}>5</Text><Text style={styles.smallText}>JKL</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.cell}><Text style={styles.text}>6</Text><Text style={styles.smallText}>MNO</Text></TouchableOpacity>
                            </View>
                            <View style={styles.keyrow}>
                                <TouchableOpacity style={styles.cell}><Text style={styles.text}>7</Text><Text style={styles.smallText}>PQRS</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.cell}><Text style={styles.text}>8</Text><Text style={styles.smallText}>TUV</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.cell}><Text style={styles.text}>9</Text><Text style={styles.smallText}>WXYZ</Text></TouchableOpacity>
                            </View>
                            <View style={styles.keyrow}>
                                <TouchableOpacity style={[styles.cell, styles.empty]} />
                                <TouchableOpacity style={styles.cell}><Text style={styles.text}>0</Text></TouchableOpacity>
                                <TouchableOpacity style={[styles.cell, styles.empty]}>
                                    <Image source={require('../../../Image/backspace-arrow.png')} style={styles.backspace} />
                                </TouchableOpacity>
                            </View>
                        </View> */}
                    </View>
                </View>
            </Modal>

            <Modal isVisible={isSecondModalVisible}>
                <View style={[styles.secondModalContainer, { backgroundColor: '#FFFFFF', }]}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.modalTitle2}>Note</Text>
                        <Text style={styles.Notetxt}>
                            Your withdrawal request send to Camdell once verified your account and amount will transfer to you account.
                        </Text>
                        <TouchableOpacity style={styles.WalletButton} onPress={closesecondmodalTap}>
                            <Text style={globalstyles.btntxt}>ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}