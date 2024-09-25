import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    searchbox: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#038667",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '92%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 24,
        marginBottom: 16,
        height: 44,
    },
    searchInput: {
        flexDirection: "row",
        alignItems: 'center',
        width: '66%',
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginHorizontal: '4%'
    },
    input: {
        // borderWidth:1,
        width: '90%',
        fontSize: 11.5,
        fontWeight: "700",
        color: '#9C9796'
    },
    searchButton: {
        backgroundColor: "#11A966",
        height: 44,
        justifyContent: 'center',
        borderRadius: 14,
        width: '30%',

    },
    searchText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
        textAlign: "center"
    },
    faqs: {
        borderWidth: 1,
        borderColor: "#038667",
        margin: 15,
        backgroundColor: "#fff",
        borderRadius: 5
    }, question: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15
    },
    ans: {
        padding: 15,
        borderColor: "#E2D3CF",
        borderTopWidth: 1
    },
    queText: {
        fontSize: 13,
        color: '#000000',
        fontWeight: "600"
    },

    ansText: {
        fontSize: 10,
        color: '#000000',
        fontWeight: "400",
        lineHeight: 15,
    }
})