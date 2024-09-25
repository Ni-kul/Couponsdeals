import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    secmainview: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // borderWidth:2,
        // borderColor:'red',
        // justifyContent:'flex-end'
    },
    scorllview: {
        flex: 1,
        // efedeb
        // backgroundColor: '#D2F4D9',
        backgroundColor: '#defbe6',
    },
    namelogoview: {
        marginVertical: 40,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    imgview: {
        backgroundColor: '#FFFFFF',
        borderRadius: 32,
        paddingVertical: 6,
        paddingHorizontal: 6,
    },
    Swiggylogo: {
        width: 50,
        height: 50
    },
    nametxt: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: '600',
        color: '#291F1D'
    },
    circulview: {
        // borderWidth: 1,
        marginTop: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '92%',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    circulone: {
        paddingVertical: 14,
        width: '48%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D0D0D0'
    },
    circultxt: {
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '600',
        fontSize: 17,
        color: '#000000',
    },
    circulonline: {
        borderWidth: 1,
        borderColor: '#D0D0D0',
        marginTop: 26,
        padding: 10,
        width: '48%',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 130
    },
    lastimgs: {
        // flex: 1,
        // borderWidth: 1,
        width: '100%',
        height: 130,
        // marginTop: 30,
        // top:10,
        // borderWidth: 1,
        bottom: 0,
        // marginBottom:10,
        position: 'absolute',
    },
    statback: {
        width: '100%',
        height: 130,
        zIndex: 1,
    },

})