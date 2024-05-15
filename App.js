import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { COLOR } from './common/color';
import LoginScreen from './Screen/loginScreen';
import { StackScreen } from './Screen/StackScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;





export default function App() {
  return (
    <Provider store={store}>
      <StackScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  welcomeContainer: {
    marginTop: height / 8,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  loginPrompt: {
    color: '#bababa',
    marginTop: 10,
  },
  formContainer: {
    marginTop: height / 10,
  },
  label: {
    marginHorizontal: 38,
    marginBottom: 5,
    color: '#292929',
  },
  input: {
    borderColor: '#f3f3f3',
    borderWidth: 2,
    height: 35,
    marginHorizontal: 38,
    marginHorizontal: 38,
    paddingHorizontal: 10,

  },
  space: {
    marginVertical: 15,
  },
  passwordContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  primaryColor: {
    color: '#ff2d5c',
  },
  button: {
    alignItems: 'center',
    borderColor: COLOR.radical_red,
    borderWidth: 2,
    marginHorizontal: 38,
    marginTop: 30,
    height: 35,
  },
  buttonText: {
    margin: 'auto',
  },
  loginButton: {
    backgroundColor: COLOR.radical_red,
  },
  loginButtonText: {
    color: 'white',
  },
  separatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row',
  },
  separator: {
    borderWidth: 1,
    borderColor: '#f3f3f3',
    width: "31%",
    marginHorizontal: 30,
  },
  separatorText: {
    color: COLOR.codgray,
  },
  tempPasswordButton: {
    borderColor: COLOR.radical_red,
    marginTop: 15,
  },
  tempPasswordButtonText: {
    color: COLOR.radical_red,
  },
  registerContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  registerPrompt: {
    color: COLOR.codgray,
  },
});