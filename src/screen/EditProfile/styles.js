// EditProfile
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        // backgroundColor: '#FFFFFF'
    },
    editonpress: {
        position: 'absolute',
        top: 106,
        left: '80%',
    },
    edit: {
        width: 20,
        height: 21
    },
    radiobtnview: {
        // borderWidth:1,
        alignSelf: 'center',
        width: '92%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    labeltxt1: {
        marginLeft: '2%',
        fontSize: 18,
        fontWeight: '600',
        color: '#291F1D'
    },
    radiocontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '64%',
        justifyContent: 'space-around',
        marginLeft: '10%',
        flexDirection: 'row',
    },
    radiolabels: {
        fontWeight: '400',
        color: '#000000',
        fontSize: 18,
        marginLeft: '10%'
    },
    maleview: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sl: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#002408'
    },
    sl1: {
        backgroundColor: '#002408',
    },
    slnot: {
        backgroundColor: '#FFFFFF',
    },

    dateview: {
        marginBottom: 30
    },
    dateviewtwo: {
        marginTop: 10,
        flexDirection: 'row',
        width: '80%',
        // borderWidth: 1,
        justifyContent: 'space-between',
        marginRight: '6%',
        alignSelf: 'flex-end',
    },
    dateinput: {
        borderWidth: 1,
        borderColor: '#D8D8D8',
        backgroundColor: '#FFFFFF',
        width: '20%',
        borderRadius: 10,
        textAlign: 'center',
        // color: '#000000',
        fontSize: 18,
        fontWeight: '600'
    },
    dropdown: {
        borderWidth: 1,
        width: '34%',
        borderColor: '#D8D8D8',
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },
    placeholderStyle: {
        textAlign: 'center',
        color: '#737373',
        fontSize: 18,
        fontWeight: '600'
    },
    selectedTextStyle: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 18,
        fontWeight: '600'
    },
    inputSearchStyle: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 18,
        fontWeight: '600'
    },
    yearinput: {
        borderWidth: 1,
        borderColor: '#D8D8D8',
        backgroundColor: '#FFFFFF',
        width: '36%',
        borderRadius: 10,
        textAlign: 'center',
        color: '#000000',
        fontSize: 18,
        fontWeight: '600'
    },
    labeltxt: {
        marginTop:18,
        marginLeft: '6%',
        fontSize: 18,
        fontWeight: '600',
        color: '#291F1D'
    },
  
})