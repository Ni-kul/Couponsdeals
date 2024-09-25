import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    tabButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 26,
        marginBottom: 20
    },
    tabButton: {
        paddingVertical: 10,
        width: '44%',
        borderRadius: 28,
        alignItems: 'center',
        backgroundColor: "#E7FDEB",
        borderWidth: 1,
        borderColor: "#8EE9A0"
    },
    tabButtonText: {
        fontSize: 16,
        color: '#002408',
        fontWeight: '800',
    },
    activeTab: {
        backgroundColor: '#002408',
        borderColor: "#002408"
    },
    activetabButtonText: {
        color: "white"
    },
    userprofile: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 15,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EDEBEB"
    },
    userProfileImage: {
        marginRight: 7
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 100
    },
    textContent: {
        width: 240
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 9,
        justifyContent: "space-between"
    },
    iIcon: {
        width: 15,
        height: 15,
    },
    userName: {
        fontSize: 16,
        fontWeight: "700",
        color: '#000000'
    },
    ReferralId: {
        fontSize: 12,
        fontWeight: "500",
        color: "#575757"
    },
    date: {
        fontSize: 12,
        fontWeight: "500",
        color: "#575757"
    },
    rs: {
        fontSize: 12,
        fontWeight: "500",
        color: "#575757"
    },
    connect: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        flexWrap: "wrap",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 40
    },
    userconnect: {
        width: "47%",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        backgroundColor: "#fff",
        padding: 15,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 13
    },
    connectuser: {
        fontSize: 16,
        fontWeight: "700",
        color: '#000000',
        marginTop: 15
    },
    connectuserId: {
        fontSize: 11,
        fontWeight: "500",
        color: "#575757",
        marginTop: 6,
    },
    whatNextModal: {
        top: 30,
        position: "absolute",
        right: 20,
        left: 0,
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: "flex-end",
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    what: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 20,
        width: 300,
    },
    imageContent:
    {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 15,
        marginRight: 15
    },
    image: {
        width: 50,
        height: 40
    }
    , image1: {
        width: 40,
        height: 40

    }, text: {
        fontSize: 8,
        fontWeight: "600",
        color: '#3F3E3E',
        top: -6
    },
    whatText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    text1: {
        width: 60,
        textAlign: "center",
        fontSize: 10,
        fontWeight: "600",
        color: '#3A3939'
    },
    whatTitle: {
        fontSize: 14,
        textAlign: "center",
        fontWeight: "600",
        marginTop: 20,
        color: '#291F1D',
        marginBottom: 15,
        textTransform: "capitalize"
    }
})