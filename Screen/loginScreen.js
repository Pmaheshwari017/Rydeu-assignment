import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { COLOR } from './../common/color';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';


export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;

const LoginButton = ({ text, style, textStyle }) => (
    <View style={[styles.button, style]}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </View>
);

const Separator = () => (
    <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separator} />
    </View>
);


// const navigation1 = useNavigation()
export default function LoginScreen({ navigation }) {

    const islogin = useSelector(state => state.islogin)
    console.log("🚀 ~ login ~ islogin:", islogin)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');


    const dispatch = useDispatch()

    useEffect(() => {
        if (islogin) {
            navigation?.navigate('Home')
        }
    }, [])
    const userNameHandler = (value) => {
        setUserName(value)
    }
    const passwordHandler = (value) => {
        setPassword(value);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome!</Text>
                <Text style={styles.loginPrompt}>Please login to continue</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Email {userName.length < 4 && <Text style={{ color: 'red', marginHorizontal: 38 }}>*</Text>}</Text>
                <TextInput cursorColor={COLOR.radical_red} style={styles.input} onChangeText={setUserName} />
                <View style={styles.space} />
                <View style={styles.passwordContainer}>
                    <Text style={styles.label}>Password {password.length < 4 && <Text style={{ color: 'red' }}>*</Text>}</Text>
                    <Text style={[styles.label, styles.primaryColor]}>Forgot Password? </Text>
                </View>
                <TextInput secureTextEntry={true} cursorColor={COLOR.radical_red} style={styles.input} onChangeText={setPassword} />
            </View>
            <TouchableOpacity onPress={() => {
                if (userName === '') {
                    alert('Please enter your email')
                    return
                }
                dispatch({ type: 'USERNAME', payload: { userName: userName } })
                dispatch({ type: 'LOGIN', payload: { islogin: true } })
                navigation?.navigate('Home')
            }}
                disabled={!userName || !password}
                disabledStyle={{ backgroundColor: 'gray' }}
            >
                <LoginButton text="Login" style={!(!userName || !password) ? styles.loginButton : styles.greyColor} textStyle={styles.loginButtonText} />
            </TouchableOpacity>
            <Separator />
            <LoginButton text="Get a temporary password" style={styles.tempPasswordButton} textStyle={styles.tempPasswordButtonText} />
            <View style={styles.registerContainer}>
                <Text style={styles.registerPrompt}>Don't have an account? <Text style={styles.primaryColor}>Register Now</Text></Text>
            </View>
        </ScrollView>
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
        borderColor: '#bababa',
        borderWidth: 2,
        height: 35,
        borderRadius: 3,
        marginHorizontal: 38,
        marginHorizontal: 38,
        paddingHorizontal: 10,
        fontWeight: 'bold',
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
        // borderColor: COLOR.radical_red,
        // borderWidth: 2,
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
    greyColor: {
        backgroundColor: 'gray'
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