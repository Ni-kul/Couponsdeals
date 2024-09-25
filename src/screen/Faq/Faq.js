import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { globalstyles } from '../../globalstyles';
import Backarrow from '../componet/Backarrow';
import { styles } from './style';


export default function Faq({ navigation }) {
    const [faq, setFaq] = useState([
        { id: 1, showAns: true },
        { id: 2, showAns: false },
        { id: 3, showAns: false },
        { id: 4, showAns: false },
        { id: 5, showAns: false },
    ]);

    const handleAns = (id) => {
        setFaq(faq.map((item) => {
            if (item.id === id) {
                return { ...item, showAns: !item.showAns };
            } else {
                return { ...item, showAns: false };
            }
        }));
    }

    return (
        <View style={globalstyles.secmainview}>
            <SafeAreaView>
                <ScrollView >
                    <View style={globalstyles.Backarrowviewtwo}>
                        <Backarrow />
                        <Text style={globalstyles.hadtxttwo}>FAQs</Text>
                    </View>

                    <View style={styles.searchbox}>
                        <View style={styles.searchInput}>

                            <Image source={require('../../../Image/search.png')} style={styles.searchIcon} />
                            <TextInput
                                placeholder='Describe your issue'
                                style={styles.input}
                                placeholderTextColor='#9C9796'
                            />
                        </View>
                        <TouchableOpacity style={styles.searchButton}>
                            <Text style={styles.searchText}>Search</Text>
                        </TouchableOpacity>

                    </View>
                    {
                        faq.map((item, index) => {
                            return (
                                <View style={styles.faqs} key={index}>
                                    <TouchableOpacity style={styles.question} onPress={() => handleAns(item.id)}>
                                        <Text style={styles.queText}>
                                            How can create offers in merchant ?
                                        </Text>
                                        {
                                            !item.showAns ? <Image source={require('../../../Image/pluse.png')} />
                                                : <Image source={require('../../../Image/minus.png')} />
                                        }
                                    </TouchableOpacity>
                                    {
                                        item.showAns && (
                                            <View style={styles.ans}>
                                                <Text style={styles.ansText}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                </Text>
                                            </View>
                                        )
                                    }
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>

        </View>
    )
}
