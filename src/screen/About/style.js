import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    become: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-between',
    },
    block1: {
        paddingBottom: 100,
        width: '100%',
        // borderWidth: 1,
    },
    title: {
        // borderWidth: 1,
        width: '50%',
        marginLeft: '4%',
        fontSize: 20,
        color: '#000000',
        fontWeight: "600",
        marginTop: 30
    },

    becomeImage: {
        width: '48%',
        height: 140,
        borderRadius: 16.98,
        transform: [{ rotate: "-10.2deg" }],
    },

    infoText: {
        marginTop: 20,
        // padding: 15,
        width: '92%',
        alignSelf: 'center',
        marginVertical: 15,
        fontSize: 12,
        fontWeight: "500",
        color: '#000000',
        lineHeight: 22
    }
    , aboutbutton: {
        backgroundColor: "#000",
        paddingVertical: 8,
        borderRadius: 9,
        width: '40%',
        marginLeft: '4%'
    },
    buttonText: {
        fontSize: 12.5,
        fontWeight: '600',
        color: "#fff",
        textAlign: "center"
    },
    title2: {
        textAlign: "center",
        // marginTop: -20,
        marginBottom: 15,
        fontSize: 16,
        color: '#000000',
        fontWeight: "600"
    },
    infoText2: {
        textAlign: "center",
        width: '92%',
        alignSelf: 'center',
        fontSize: 13,
        color: '#000000',
        fontWeight: "400",
        lineHeight: 30,
        marginBottom: 30
    }
    , subscribe: {
        backgroundColor: "#fff",
        borderRadius: 20,
        margin: 15,
        marginBottom: 40,
        alignItems: "center"
    },
    subscribeImage: {
        height: 150,
        marginTop: 10,
        resizeMode: 'contain'
    },
    subscribeText: {
        fontSize: 16,
        fontWeight: "600",
        color: '#291F1D',
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    },
    input: {
        borderRadius: 22,
        borderWidth: 1,
        borderColor: "#BCB8B8",
        width: "90%",
        marginVertical: 15,
        paddingLeft: 15
    },
    touchbtn: {
        width: '56%',
        paddingVertical: 10,
        backgroundColor: "#11A966",
        borderRadius: 12,
        marginTop: 15,
        marginBottom: 30
    },
    btntxt: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center"
    },
    slider: {
        height: 300
    },

    compny: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // flex: 1,
        flexWrap: "wrap",
        margin: 10,
    },
    singleCompny: {
        width: "23%",
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    compnyImage: {
        // width:"100%" ,
        height: 50,
        resizeMode: 'contain'
    }
})