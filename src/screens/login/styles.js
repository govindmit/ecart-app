const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: 750,
  },
  Backicon: {
    top: 10,
    left: 8,
  },
  textview: {
    width: 375,
  },
  text: {
    color: '#222222',
    fontSize: 34,
    width: 94,
    height: 45,
    top: 310,
    left: 150,
    fontWeight: 'bold',
    lineHeight: 34,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
    top: -150,
  },
  input: {
    width: '100%',
    height: 50,
    // borderColor: 'black',
    // borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 15,
    left: 15,
  },
  forgotPassword: {
    color: 'black',
    textDecorationLine: 'none',
    marginBottom: 20,
    marginLeft: '65%',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  btn: {
    width: '100%',
    left: 10,
    borderRadius: 30,
    borderColor: 'red',
    borderWidth: 10,
    backgroundColor: 'red',
  },
});
export default styles;

// box-shadow: 0px 1px 8px 0px #0000000D;
