import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';


const SccanerButton = () => {
    return (
        <View style={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "#fff",
            bottom: 40,
            // width: '100%',
            alignSelf: 'center',
            // borderTopLeftRadius: 30,
            // borderTopRightRadius: 30,
            // borderWidth:1,
            borderRadius: 30
        }}>


            <View style={{
                // bottom: -10,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <TouchableOpacity style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    borderWidth: 5,
                    backgroundColor: "#fff",
                    borderColor: "#A9D5B2",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Image source={require('../../../Image/sccannerButton.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>


            </View>
        </View>
    )
}
export default SccanerButton;