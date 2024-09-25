import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: "absolute",
        bottom: 0,
        top: 0,
        left: 0, right: 0
    },
    backGround: {
        backgroundColor: 'rgba(0, 14, 3, 0.74)',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30,
    },
    ModalTitle: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 15,
        color: '#000000'
    },
    input: {
        borderWidth: 1,
        borderColor: "#D7D7D7",
        color: '#000000',
        paddingLeft: 16,
        borderRadius: 12,
        marginBottom: 30
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 100,
        marginTop: 10,
        backgroundColor: "#A9D5B2",
        height: 44,
        width: '60%',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600"
    },
    UserImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    userProfile: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30
    },
    userName: {
        marginBottom: 5,
        fontSize: 18,
        fontWeight: "600",
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
    },
    compnyText: {
        fontSize: 18,
        fontWeight: "600",
        color: '#291F1D'
    },
    cuponInfo: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 15
    },
    InfoText: {
        width: "50%",
        marginBottom: 10,
        fontSize: 12.5,
        fontWeight: '500',
        color: '#291F1D'

    },
    successful: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    successfulText: {
        fontSize: 24,
        fontWeight: "600",
        marginTop: 15,
        color: '#000000'
    }

})