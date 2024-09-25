import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    about: {
        padding: 10
    }
    , title2: {
        fontWeight: "600",
        fontSize: 20,
        marginTop: 15,
        textTransform: "capitalize"
    },
    infoText2: {
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 30,
        marginTop: 10,
        textTransform: "capitalize"
    },ourClient:{
        marginTop:20,
        marginBootm:40
    },title1:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"700"
    },compny:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        // flex: 1,
        flexWrap: "wrap",
        margin:10
    },
    singleCompny:{
        width:"23%",
        backgroundColor:"#fff",
        borderRadius:10,
        alignItems:"center",
        marginBottom:10,
    },
    compnyImage:{ 
        // width:"100%" ,
        height:50      ,
        resizeMode: 'contain'
    }
    , subscribe: {
        backgroundColor: "#fff",
        borderRadius: 20,
        margin: 15,
        marginBottom:40,
        alignItems: "center"
    },
    subscribeImage: {
        height: 250,
        resizeMode: 'contain'
    },
    subscribeText: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    },
    input: {
        borderRadius: 22,
        borderWidth: 1,
        borderColor: "#BCB8B8",
        width: "90%",
        margin: 15,
        padding: 15
    },
    touchbtn: {
        width: 183,
        padding: 15,
        backgroundColor: "#11A966",
        borderRadius: 12,
        marginTop: 15,
        marginBottom: 30
    },
    btntxt: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center"
    }


})