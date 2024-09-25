import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

    },
    operatorList: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        flexWrap: "wrap",
        width: '93%',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    operatorItem: {
        width: "48%",
        borderWidth: 1,
        borderColor: "#CBCBCB",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: '2%',
        marginTop: 15
    },
    user: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    userImage: {
        borderRadius: 50,
        width: 30,
        height: 30,
        marginRight: 10
    },
    userText: {
        fontWeight: "600",
        fontSize: 15,
        color: '#000000'
    },
    editIcon: {
        width: 15,
        height: 15,
        top: -10,
        left: 5
    },
    userInfo: {
        fontSize: 11,
        fontWeight: "600",
        color: '#000000',
        marginTop: 5
    },
    buttonGroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // paddingBottom: 10,
        marginTop: 15
    },
    delete: {
        borderWidth: 1,
        borderColor: "#FF8A8A",
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "48%",
        paddingVertical: 5

    },
    deleteText: {
        color: "#FF0000",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 11,
    },
    view: {
        backgroundColor: "#002408",
        borderRadius: 10,
        width: "48%",
        paddingVertical: 5

    },
    viewText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 11,
        textAlign: "center"
    }
})