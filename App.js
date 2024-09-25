import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Signin from './src/screen/Signin/Signin';
import SignUp from './src/screen/SignUp/SignUp';
import OTPVerification from './src/screen/OTPVerification/OTPVerification';
import Dashboard from './src/screen/Dashboard/Dashboard';
import Like from './src/screen/Like/Like';
import Merchants from './src/screen/Merchants/Merchants';
import Profile from './src/screen/Profile/Profile';
import { globalstyles } from './src/globalstyles';
import ListofCategories from './src/screen/ListofCategories/ListofCategories';
import Viewdetails from './src/screen/Viewdetail/Viewdetails';
import Subscriptionplan from './src/screen/Subscriptionplan/Subscriptionplan';
import PopularDeals from './src/screen/PopularDeals/PopularDeals';
import EditProfile from './src/screen/EditProfile/EditProfile';
import UsedCoupons from './src/screen/UsedCoupons/UsedCoupons';
import Notification from './src/screen/Notification/Notification';
import ApplyMerchants from './src/screen/ApplyMerchants/ApplyMerchants';
import Deals from './src/screen/Deals/Deals';
import AddNewDeals from './src/screen/AddNewDeals/AddNewDeals';
import Statistics from './src/screen/Statistics/Statistics';
import Forgetpasswd from './src/screen/Forgetpasswd/Forgetpasswd';
import Flash from './src/screen/Flash/Flash';
import UserPaymentDetails from './src/screen/UserPaymentDetails/UserPaymentDetails';
import UserCashBack from './src/screen/UserCashBack/UserCashBack';
import UserVouchers from './src/screen/UserVouchers/UserVouchers';
import UserwalletIncome from './src/screen/UserwalletIncome/UserwalletIncome';
import MerchantsCoupons from './src/screen/MerchantsCoupons/MerchantsCoupons';
import MCouponDescription from './src/screen/MCouponDescription/MCouponDescription';
import MSubscription from './src/screen/MSubscription/MSubscription';
import MPaymentDetials from './src/screen/MPaymentDetials/MPaymentDetials';
import MAdsPromotion from './src/screen/MAdsPromotion/MAdsPromotion';
import MDraftCoupons from './src/screen/MDraftCoupons/MDraftCoupons';
import OperatorLogin from './src/screen/OperatorLogin/OperatorLogin';
import SubscriptionHistory from './src/screen/SubscriptionHistory/SubscriptionHistory';
import LoyaltyPoints from './src/screen/LoyaltyPoints/LoyaltyPoints';
import About from './src/screen/About/About';
import Faq from './src/screen/Faq/Faq';
import PartnerWithUs from './src/screen/PartnerWithUs/PartnerWithUs';
import OperatorList from './src/screen/OperatorList/OperatorList';
import ReferralId from './src/screen/ReferralId/ReferralId';
import MyCoupons from './src/screen/MyCoupons/MyCoupons';
import Manager from './src/screen/componet/Manager';
import ChangePassword from './src/screen/ChangePassword/ChangePassword';
import ManagerHome from './src/screen/ManagerHome/ManagerHome';
import ManagerUsedCupon from './src/screen/ManagerUsedCupon/ManagerUsedCupon';
import ManagerSecondCupon from './src/screen/ManagerSecondCupon/ManagerSecondCupon';
import SccanerButton from './src/screen/componet/SccanerButton';

// E:\gradle\caches\ 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

global.Usertype = 1;

global.URL = 'https://www.demo603.amrithaa.com/camdell/public/api/';
global.IMG = 'https://www.demo603.amrithaa.com/camdell/public/images/';

function HomeTab() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name="ListofCategories" component={ListofCategories} options={{ headerShown: false }} />
      <Stack.Screen name="Viewdetails" component={Viewdetails} options={{ headerShown: false }} />
      <Stack.Screen name="PopularDeals" component={PopularDeals} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function ProfileTab() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name="UsedCoupons" component={UsedCoupons} options={{ headerShown: false }} />
      <Stack.Screen name="Subscriptionplan" component={Subscriptionplan} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function MerchantsTab() {
  return (
    <Stack.Navigator initialRouteName="Merchants">
      <Stack.Screen name="Merchants" component={Merchants} options={{ headerShown: false }} />
      <Stack.Screen name="ApplyMerchants" component={ApplyMerchants} options={{ headerShown: false }} />
      <Stack.Screen name="Deals" component={Deals} options={{ headerShown: false }} />
      <Stack.Screen name="AddNewDeals" component={AddNewDeals} options={{ headerShown: false }} />
      <Stack.Screen name="Statistics" component={Statistics} options={{ headerShown: false }} />

      <Stack.Screen name="MerchantsCoupons" component={MerchantsCoupons} options={{ headerShown: false }} />
      <Stack.Screen name="MCouponDescription" component={MCouponDescription} options={{ headerShown: false }} />
      <Stack.Screen name="MSubscription" component={MSubscription} options={{ headerShown: false }} />
      <Stack.Screen name="MPaymentDetials" component={MPaymentDetials} options={{ headerShown: false }} />
      <Stack.Screen name="MAdsPromotion" component={MAdsPromotion} options={{ headerShown: false }} />
      <Stack.Screen name="MDraftCoupons" component={MDraftCoupons} options={{ headerShown: false }} />

      {/* MAdsPromotion */}
    </Stack.Navigator>
  );
}


function TabNavigator() {
  // console.log('global.Usertype app', global.Usertype)
  return (
    <>
      {global.Usertype == 3 &&
        <SccanerButton />
      }
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: '#A9D5B2',
        tabBarActiveBackgroundColor: '#A9D5B2',
        tabBarShowLabel: false,

      }} >


        {global.Usertype == 1 ?
          <Tab.Screen name="Dashboard" component={HomeTab}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={focused ? globalstyles.hometabview : globalstyles.hometabview2}>
                  <Image
                    source={focused ? require('./Image/Home.png') : require('./Image/Home2.png')}
                    style={{
                      height: focused ? 23 : 23,
                      width: focused ? 23 : 23,
                    }}
                  />
                  <Text style={[globalstyles.hometabtxt, { color: focused ? '#FFFFFF' : '#002408' }]}>Home</Text>
                </View>
              ),
            }}
          />
          :
          null
        }

        {global.Usertype == 2 &&
          <>
            <Tab.Screen name="Deals" component={Deals}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={focused ? globalstyles.hometabview : globalstyles.hometabview2}>
                    <Image resizeMode='contain'
                      source={focused ? require('./Image/Home.png') : require('./Image/Home2.png')}
                      style={{
                        height: focused ? 23 : 23,
                        width: focused ? 23 : 23,
                      }}
                    />
                    <Text style={[globalstyles.hometabtxt, { color: focused ? '#FFFFFF' : '#002408' }]}>Home</Text>
                  </View>
                ),
              }}
            />

            <Tab.Screen name="AddNewDeals" component={AddNewDeals}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={focused ? globalstyles.hometabview : globalstyles.hometabview2}>
                    <Image
                      resizeMode='contain' source={focused ? require('./Image/form2.png') : require('./Image/form.png')}
                      style={{
                        height: focused ? 23 : 23,
                        width: focused ? 23 : 23,
                      }}
                    />
                    <Text style={[globalstyles.hometabtxt, { color: focused ? '#FFFFFF' : '#002408' }]}>Form</Text>
                  </View>
                ),
              }}
            />

            <Tab.Screen name="MerchantsCoupons" component={MerchantsCoupons}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={focused ? globalstyles.hometabview : globalstyles.hometabview2}>
                    <Image resizeMode='contain'
                      source={focused ? require('./Image/Coupons2.png') : require('./Image/Coupons.png')}
                      style={{
                        height: 22,
                        width: 24,
                      }} />
                    <Text style={[globalstyles.hometabtxt, { color: focused ? '#FFFFFF' : '#002408' }]}>Coupons</Text>
                  </View>
                ),
              }} />

          </>
        }



        {global.Usertype == 1 &&
          <>

            <Tab.Screen name="UserwalletIncome" component={UserwalletIncome}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={focused ? globalstyles.hometabview : globalstyles.hometabview2}>
                    <Image
                      source={focused ? require('./Image/Wallet2.png') : require('./Image/Wallet.png')}
                      style={{
                        height: focused ? 20 : 20,
                        width: focused ? 23 : 23,
                      }} />
                    <Text style={[globalstyles.hometabtxt, { color: focused ? '#FFFFFF' : '#002408' }]}>Wallet</Text>
                  </View>
                ),
              }}
            />

            <Tab.Screen name="Merchants" component={MerchantsTab}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={focused ? globalstyles.hometabview : globalstyles.hometabview2}>
                    <Image
                      source={focused ? require('./Image/merchant.png') : require('./Image/merch2.png')}
                      style={{
                        height: focused ? 21 : 21,
                        width: focused ? 22 : 22,
                      }} />
                    <Text style={[globalstyles.hometabtxt, { color: focused ? '#FFFFFF' : '#002408' }]}>Merchants</Text>
                  </View>
                ),
              }} />
          </>

        }

        {global.Usertype == 1 || global.Usertype == 2 ?

          <Tab.Screen name="Profile" component={ProfileTab}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={focused ? globalstyles.hometabview : globalstyles.hometabview2}>
                  <Image
                    source={focused ? require('./Image/Profile.png') : require('./Image/pro2.png')}
                    style={{
                      height: focused ? 23 : 23,
                      width: focused ? 24 : 24,
                    }} />
                  <Text style={[globalstyles.hometabtxt, { color: focused ? '#FFFFFF' : '#002408' }]}>Profile</Text>
                </View>
              ),
            }} />
          :
          null
        }

        {global.Usertype == 3 &&
          <>
            <Tab.Screen name="ManagerHome" component={ManagerHome}
              options={{
                tabBarIcon: () => (
                  <View style={globalstyles.hometabview3}>
                    <Image resizeMode='contain'
                      source={require('./Image/qrCodeSccaner.png')}
                      style={globalstyles.tabicon}
                    />
                    <Text style={globalstyles.hometabtxt}>Scanner</Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen name="ManagerUsedCupon" component={ManagerUsedCupon}
              options={{
                tabBarIcon: () => (

                  <View style={globalstyles.hometabview3}>
                    <Image resizeMode='contain'
                      source={require('./Image/Coupons.png')}
                      style={globalstyles.tabicon} />
                    <Text style={globalstyles.hometabtxt}>Used Coupons</Text>
                  </View>
                ),
              }}
            />

            <Tab.Screen name="ManagerSecondCupon" component={ManagerSecondCupon}
              options={{
                tabBarIcon: () => (
                  <View style={globalstyles.hometabview3}>
                    <Image resizeMode='contain'
                      source={require('./Image/discountcoupon.png')}
                      style={globalstyles.tabicon} />
                    <Text style={globalstyles.hometabtxt}>Online Coupons</Text>

                  </View>
                ),
              }} />
          </>
        }

      </Tab.Navigator>

    </>
  )
}


export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={false} initialRouteName="Flash">

        <Stack.Screen name="Flash" component={Flash} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Subscriptionplan" component={Subscriptionplan} options={{ headerShown: false }} />
        <Stack.Screen name="Forgetpasswd" component={Forgetpasswd} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        {/* <Stack.Screen name="ListofCategories" component={ListofCategories} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Viewdetails" component={Viewdetails} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="PopularDeals" component={PopularDeals} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Like" component={Like} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Merchants" component={Merchants} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="UsedCoupons" component={UsedCoupons} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="ApplyMerchants" component={ApplyMerchants} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Deals" component={Deals} options={{ headerShown: false }} />
        <Stack.Screen name="AddNewDeals" component={AddNewDeals} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Statistics" component={Statistics} options={{ headerShown: false }} /> */}
        <Stack.Screen name="UserPaymentDetails" component={UserPaymentDetails} options={{ headerShown: false }} />
        {/* <Stack.Screen name="UserCashBack" component={UserCashBack} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="UserVouchers" component={UserVouchers} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="UserwalletIncome" component={UserwalletIncome} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Statistics" component={Statistics} options={{ headerShown: false }} />

        {/* Merchants  MDraftCoupons*/}
        <Stack.Screen name="MerchantsCoupons" component={MerchantsCoupons} options={{ headerShown: false }} />
        <Stack.Screen name="MCouponDescription" component={MCouponDescription} options={{ headerShown: false }} />
        <Stack.Screen name="MSubscription" component={MSubscription} options={{ headerShown: false }} />
        <Stack.Screen name="MPaymentDetials" component={MPaymentDetials} options={{ headerShown: false }} />
        <Stack.Screen name="MAdsPromotion" component={MAdsPromotion} options={{ headerShown: false }} />
        <Stack.Screen name="MDraftCoupons" component={MDraftCoupons} options={{ headerShown: false }} />

        {/* OperatorLogin */}
        <Stack.Screen name="OperatorLogin" component={OperatorLogin} options={{ headerShown: false }} />


        {/* About */}
        <Stack.Screen name="UserCashBack" component={UserCashBack} options={{ headerShown: false }} />
        <Stack.Screen name="UserVouchers" component={UserVouchers} options={{ headerShown: false }} />

        <Stack.Screen name="UserwalletIncome" component={UserwalletIncome} options={{ headerShown: false }} />
        <Stack.Screen name="SubscriptionHistory" component={SubscriptionHistory} options={{ headerShown: false }} />
        <Stack.Screen name="MyCoupons" component={MyCoupons} options={{ headerShown: false }} />
        <Stack.Screen name="LoyaltyPoints" component={LoyaltyPoints} options={{ headerShown: false }} />
        <Stack.Screen name="ReferralId" component={ReferralId} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="Faq" component={Faq} options={{ headerShown: false }} />
        <Stack.Screen name="PartnerWithUs" component={PartnerWithUs} options={{ headerShown: false }} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />

        {/* UserVouchers */}

        {/* Manager / Cashier */}
        <Stack.Screen name="OperatorList" component={OperatorList} options={{ headerShown: false }} />

        {/*  */}
        <Stack.Screen name="ManagerHome" component={ManagerHome} options={{ headerShown: false }} />
        <Stack.Screen name="ManagerUsedCupon" component={ManagerUsedCupon} options={{ headerShown: false }} />
        <Stack.Screen name="ManagerSecondCupon" component={ManagerSecondCupon} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );


}