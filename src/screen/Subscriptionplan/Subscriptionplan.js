// Subscriptionplan
import React, { useState, useRef } from 'react';
import FastImage from 'react-native-fast-image';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './styles';

export default function Subscriptionplan({ navigation }) {
  const [selectedIndex, setselectedIndex] = useState(1);

  const changeslide = (val) => {
    // console.log('val', val);
    setselectedIndex(val);
  }
  return (
    <View style={globalstyles.mainview}>
      <ScrollView >
        <View style={styles.Backarrowview}>
          <Backarrow />

          <Text style={styles.txt1}>Subscription plan</Text>
          <Image source={require('../../../Image/goodcredit.png')} style={styles.goodcredit} />

        </View>

        <View style={styles.sliderview}>

          <TouchableOpacity onPress={() => changeslide(1)}
            style={[
              selectedIndex === 1 ? styles.selectsilde : styles.sliderscreenview,
            ]}
          >
            <FastImage source={require('../../../Image/education.png')} style={styles.education} />
            <Text style={styles.txt2}>APREMIUM</Text>
            <Text style={styles.txt3}>Per Month</Text>

            <View style={styles.priceview}>
              <FastImage source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg} />
              <Text style={styles.pricetxt}>500</Text>
            </View>

            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={{ marginTop: 28, marginBottom: 10, width: '100%' }}>
              <TouchableOpacity style={styles.touchbtn} >
                <Text style={styles.btntxt} >Subscribe</Text>
              </TouchableOpacity>
            </View>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => changeslide(2)}
            style={[
              selectedIndex === 2 ? styles.selectsilde : styles.sliderscreenview,
            ]}
          >
            <FastImage source={require('../../../Image/education.png')} style={styles.education} />
            <Text style={styles.txt2}>PREMIUM</Text>
            <Text style={styles.txt3}>Per Month</Text>

            <View style={styles.priceview}>
              <FastImage source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg} />
              <Text style={styles.pricetxt}>1000</Text>
            </View>

            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={{ marginTop: 28, marginBottom: 10, width: '100%' }}>
              <TouchableOpacity style={styles.touchbtn} >
                <Text style={styles.btntxt} >Subscribe</Text>
              </TouchableOpacity>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeslide(3)}
            style={[
              selectedIndex === 3 ? styles.selectsilde : styles.sliderscreenview,
            ]}
          >
            <FastImage source={require('../../../Image/education.png')} style={styles.education} />
            <Text style={styles.txt2}>BPREMIUM</Text>
            <Text style={styles.txt3}>Per Month</Text>

            <View style={styles.priceview}>
              <FastImage source={require('../../../Image/rupeeimg.png')} style={styles.rupeeimg} />
              <Text style={styles.pricetxt}>1500</Text>
            </View>

            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={styles.detailview}>
              <FastImage source={require('../../../Image/rightarrow.png')} style={styles.rightarrow} />
              <Text style={styles.detailtxt}>long established fact</Text>
            </View>
            <View style={{ marginTop: 28, marginBottom: 10, width: '100%' }}>
              <TouchableOpacity style={styles.touchbtn} >
                <Text style={styles.btntxt} >Subscribe</Text>
              </TouchableOpacity>
            </View>

          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  )
}
