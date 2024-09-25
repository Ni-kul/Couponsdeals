import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: "absolute",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0
    },
    backGround: {
        backgroundColor: 'rgba(0, 14, 3, 0.74)',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        position: "absolute",
    },
    qrcode: {
        borderWidth: 5,
        borderColor: "white",
        borderRadius: 20,
        alignItems: "center",
        margin: 40,
        marginTop: 70

    },
    modalContainer: {
        backgroundColor: 'white',
        width: '92%',
        alignSelf: 'center',
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30,
    },
    ModalTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 15,
        color: '#000000'
    },
    input: {
        borderWidth: 1,
        height: 46,
        borderColor: "#D7D7D7",
        paddingLeft: 16,
        color: '#000000',
        borderRadius: 20,
        marginBottom: 30
    },
    inputGroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    dateview: {
        width: "48%",
        height: 46,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#D7D7D7",
        borderRadius: 20,
    },
    dateimg: {
        width: 18,
        height: 18,
        marginLeft: '8%'
    },
    inputtxt: {
        marginLeft: '6%',
        color: '#737373',
        fontSize: 12,
        fontWeight: '500'
    },

    input2: {
        width: "45%",
        borderWidth: 1,
        borderColor: "#D7D7D7",
        paddingLeft: 16,
        borderRadius: 12,
        color: '#000000',
        marginBottom: 30
    },
    button: {
        alignItems: "center",
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: "#A9D5B2",
        height: 44,
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: '#000000'
    },
    UserImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10,
    }, userProfile: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30
    },
    userName: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 5,
        color: '#000000'
    },
    userMsg: {
        fontSize: 13,
        fontWeight: "500",
        color: '#000000'
    },
    cupon: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#CFCFCF",
        borderRadius: 10,
        padding: 15,
        marginBottom: 30
    },
    logo: {
        width: 40,
        height: 40
    }, compnyLogo: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15
    }, compnyText: {
        fontSize: 20,
        fontWeight: "600"
    },
    cuponInfo: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 15
    }, InfoText: {
        width: "50%",
        marginBottom: 10,
        fontSize: 12,
        fontWeight: '500'
    },
    successful: {
        alignItems: "center",
        justifyContent: "center",
    },
    successfulText: {
        fontSize: 24,
        fontWeight: "600",
        marginTop: 15,
        marginBottom: 20
    }

})