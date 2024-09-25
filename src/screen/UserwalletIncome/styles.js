// UserwalletIncome
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Profile1view: {
    backgroundColor: '#A9D5B2',
    height: 300,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  LinesBackground: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    // position: 'absolute'
  },
  Backarrowprofile: {
    position: 'absolute',
    marginTop: 16,
    // marginLeft: '4%',
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // width: '48%'
  },
  hadtxttxt: {
    // borderWidth: 1,
    textAlign: 'center',
    width: '94%',
    fontWeight: '700',
    fontSize: 22,
    color: '#291F1D'
  },

  balanceContainer: {
    marginTop: 20,
    position: "absolute",
    top: 70,
    left: 35
  },

  balanceText: {
    fontFamily: "Poppins",
    fontSize: 25.95,
    fontWeight: '800',
    color: '#002408',
    marginBottom: 6,
  },
  balanceAmount: {
    fontFamily: "Poppins",
    fontSize: 45,
    fontWeight: "800",
    color: '#000000',
  },
  buttonsContainer: {
    position: "absolute",
    top: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#002408',
    padding: 15,
    borderRadius: 50,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 11,
    fontWeight: "bold"
  },

  walletHistoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 20
  },
  walletHistoryText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rentandsaleview: {
    height: 40,
    width: 110,
    backgroundColor: "#A9D5B2",
    borderRadius: 20,
    justifyContent: "center",
    padding: 10,
    alignSelf: "flex-end",
  },
  user: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  renstextstylesale:
  {
    color: "#002408",
    fontSize: 13,
    fontWeight: "800",
  },
  updwonarrowrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginHorizontal: '3%'
  },
  dropDownArrow: {
    height: 10,
    width: 16,
    alignSelf: 'center'
  },

  merchant: {
    marginTop: -20,
    marginRight: 20,
    width: 110,
    position: "absolute",
    top: 380,
    right: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 1,
    borderColor: "#75957B"
  },
  tabButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  tabButton: {
    padding: 12,
    borderRadius: 28,
    width: '45%',
    alignItems: 'center',
    backgroundColor: "#E7FDEB",
    borderWidth: 1,
    borderColor: "#8EE9A0"
  },
  tabButtonText: {
    fontSize: 16,
    color: '#002408',
    fontWeight: 'bold',
  },


  container: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
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
    marginLeft: 16,
  },
  star: {
    width: 20,
    height: 20,
  },
  ratingText: {
    fontSize: 18,
    color: '#ffc107',
  },
  offerText: {
    fontSize: 10,
    color: '#333',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  view: {
    fontSize: 16,
    color: '#002408',
    fontWeight: 'bold',
  },

  flex: {
    justifyContent: "space-between"
  },

  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  wallet: {
    fontSize: 9,
    color: '#000',
    marginBottom: 8,
  },
  plan: {
    fontSize: 12,
    marginTop: 12,
  },
  referral: {
    fontSize: 12,
    marginTop: 7,
  },
  commission: {
    fontSize: 12,
    marginTop: 7,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  date: {
    fontSize: 11,
  },
  time: {
    fontSize: 11,
  },
  profileImage: {
    width: 80,
    height: 110,
    borderRadius: 10,
    marginRight: 10
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
  iIcon: {
    width: 15,
    height: 15
  },
  cashbackPrice: {
    marginTop: 10
  },
  activeTab: {
    backgroundColor: '#002408',
    borderColor: "#002408"
  },
  activetabButtonText: {
    color: "white"
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 8
  },
  infoText: {
    fontSize: 11,
  },
  walletText: {
    fontSize: 12,
    color: '#666',
  },
  price: {
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 11,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    // marginRight: 10,
  },
  block: {
    marginLeft: 2
  },

  infoText3: {
    marginRight: 10
  },
  bankAccount: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F3F3F3"
  },

  form: {
    marginTop: 15,
  },

  inputGroup: {
    margin: 16
  },
  label: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 10,
    color: "#291F1D"
  },
  input: {
    borderWidth: 1,
    borderColor: "#D8D8D8",
    padding: 15,
    borderRadius: 26
  },
  or: {
    textAlign: "center",
    marginTop: 40,
    fontWeight: '500',
    fontSize: 20
  },
  border: {
    width: "100%",
    height: 1,
    backgroundColor: "#DCDCDC",
    marginTop: 40
  },
  touchbtn: {
    marginTop: 40,
    marginBottom: 50
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 15,
    paddingRight: 15
  }
  ,
  modalTitle: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 15,
    marginTop: 20,
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
  },

  modalInput: {
    borderWidth: 1,
    borderColor: '#E1E1E1',
    backgroundColor: "#F2F2F2",
    padding: 15,
    color: '#858585',
    borderRadius: 20,
    marginBottom: 15,
  },

  notverifyview: {
    // borderWidth: 1,
    flexDirection: 'row'
  },
  notverifytext: {
    // borderWidth: 1,
    color: "#F20F0F",
    fontWeight: "600",
    fontSize: 12
  },
  notverifytext2: {
    // borderWidth: 1,
    marginLeft: '1%',
    color: "#002408",
    fontWeight: "600",
    fontSize: 12,
    textDecorationLine: 'underline',
    textDecorationColor: '#181818'
  },

  verifytext: {
    color: "#0F26F2",
    fontWeight: "700"
  },
  withdrawal: {

  },


  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9A9999',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ECEAEA",
    marginRight: 10
  },
  checkMark: {
    width: 14,
    height: 14
  },
  checkmarkText: {
    fontSize: 18,
    color: '#fff',
  },
  emptyCheckbox: {
    width: 16,
    height: 16,
    position: 'absolute',
    borderRadius: 4,
  },
  checkboxText: {
    width: '90%',
    // borderWidth:1,
    color: '#000000',
    fontWeight: '600',
    fontSize: 10,
    marginRight: 9
  },
  WalletButton: {
    borderWidth: 1,
    width: "60%",
    marginVertical: 30,
    backgroundColor: '#A9D5B2',
    borderWidth: 1,
    borderColor: '#88DC99',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 48,
  }
  ,
  keybordcontainer: {

    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyrow: {
    flexDirection: 'row',
    width: '100%',
  },
  cell: {
    flex: 1,
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
  },
  smallText: {
    fontSize: 12,
  },
  empty: {
    backgroundColor: '#eee',
  },
  backspace: {
    width: 25,
    height: 25
  },
  secondModalContainer: {
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    height: 300,
  },

  modalTitle2: {
    color: '#000000',
    marginTop: 20,
    fontSize: 26,
    fontWeight: "700",
  },

  Notetxt: {
    marginTop: 20,
    textAlign: 'center',
    width: '92%',
    // borderWidth: 1,
    color: '#000000',
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "400",
  },

})