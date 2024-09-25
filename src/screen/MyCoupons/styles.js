import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pagecontetn:{
        marginTop:30
    },
    container: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop:15
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: "space-between"
    },
    justdial: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007bff',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    star: {
        width: 15,
        height: 15,
    },
    ratingText: {
        fontSize: 18,
        color: '#ffc107',
        marginLeft : 5
    },
    offerText: {
        fontSize: 12,
        color: '#333',
    },
    offerText2: {
        fontSize: 12,
        color: '#F23812',
        fontWeight:"800"
    },

    voucherview:{
        marginTop:5
    },  
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between"
    },
    carImage: {
        width: 120,
        height: 100,
        borderRadius: 10,
        marginRight: 16,
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10
    },
    view: {
        backgroundColor:"#A9D5B2",
        padding:4,
        width:80,
        borderRadius: 20,

    },
    viewText:{
        fontSize: 16,
        color: '#002408',
        fontWeight: 'bold',
        textAlign:"center",
    },
    iIcon: {
        width: 16,
        height: 15
      },

      logo: {
        width: 60,
        height: 60,
        marginRight: 16,
      },
      textContainer: {
        flex: 1,
      },
      cashback: {
        fontSize: 11,
        color: '#046851',
        fontWeight: 'bold',
      },
      getbtn :{
        backgroundColor:"#A9D5B2",
        width:90,
        borderRadius:10
      },
      getText: {
        color:"#002408",
        fontSize:14,
        padding:6,
        fontWeight:"700",
        textAlign:"center"
      },

      cashbackPrice: {
        marginTop: 10
      },
})