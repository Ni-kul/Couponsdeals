import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginTop: 20
    },
    cardcontainer: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 15
    },
    body: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 10,
        marginTop: 8
    },
    infoText: {
        fontSize: 11,
        color: '#575757',
        fontWeight: '500'
    },
    infoText3: {
        marginRight: 10
    },
    wallet: {
        fontSize: 9,
        color: '#000',
        marginBottom: 8,
    },
    walletText: {
        fontSize: 12,
        color: '#575757'
    },
    price: {
        alignItems: 'center',
        marginBottom: 10,
    },
    priceText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000'
    },

    rentandsaleview: {
        height: 40,
        width: 140,
        backgroundColor: "#A9D5B2",
        borderRadius: 20,
        justifyContent: "center",
        padding: 5,
        alignSelf: "flex-end",
    },
    user: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    renstextstylesale:
    {
        color: "#002408",
        fontSize: 12,
        fontWeight: "800"
    },

    updwonarrowrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: '3%'
    },
    dropDownArrow: {
        height: 8,
        width: 14,
        alignSelf: 'center'
    },
    dropDownList: {
        marginTop: -20,
        marginBottom: 20,
        width: 140,
        top: 70,
        right: 0,
        position: 'absolute',
        backgroundColor: "#A9D5B2",
        borderRadius: 20,
        zIndex: 1
    },
    renstext:
    {
        color: "#002408",
        fontSize: 13,
        fontWeight: "800",
        padding: 12,
    },
    merchant: {
        borderBottomWidth: 1,
        borderColor: '#97C9A2'
    },


    userText: {
        fontSize: 16,
        marginRight: 10
    },
    downArrow: {
        width: 15,
        height: 10,
    },
    sectionContainer: {
        marginTop: 20
    },
    sectionTitle: {
        fontSize: 20,
        color: '#000000',
        fontWeight: "700",
        fontFamily: "Sarala",
    },


    mainRenewalview: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Renewalbtn: {
        // borderWidth: 1,
        backgroundColor: '#006800',
        width: '40%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 24
    },
    Renewalbtntxt: {
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: "700",
    },
})