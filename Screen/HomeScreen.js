import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { height } from './loginScreen';
import { COLOR } from '../common/color';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState('')
    const [time, setTime] = useState(null)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const userName = useSelector(state => state.username.userName)
    const dispatch = useDispatch()

    const togglePickerVisibility = (type, isVisible) => {
        type === 'date' ? setDatePickerVisibility(isVisible) : setTimePickerVisibility(isVisible);
    };

    const handleTimeConfirm = (time) => {
        setTime(time)
        togglePickerVisibility('time', false);
    }

    const handleConfirm = (date) => {
        setData(date)
        togglePickerVisibility('date', false);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: userName,
            headerStyle: {
                backgroundColor: COLOR.radical_red,
            },
            headerTintColor: '#fff',
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    dispatch({ type: 'LOGOUT', payload: false })
                    navigation.navigate('loginScreen')
                }}>
                    <Text style={{ color: '#fff', marginRight: 10 }}>Logout</Text>
                </TouchableOpacity>
            )
        })
    }, [userName, dispatch, navigation])

    return (
        <View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={() => togglePickerVisibility('date', false)}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={() => togglePickerVisibility('time', false)}
            />
            <View style={styles.formContainer}>
                <Text style={styles.label}>Tap to select date</Text>
                <TouchableOpacity onPress={() => togglePickerVisibility('date', true)}>
                    <TextInput value={`${data ? data.toLocaleDateString() : ""}`} cursorColor={'#ff2d5c'} style={styles.input} editable={false} />
                </TouchableOpacity>
                <View style={styles.space} />
                <Text style={styles.label}>Tap to select time</Text>
                <TouchableOpacity onPress={() => togglePickerVisibility('time', true)}>
                    <TextInput cursorColor={'#ff2d5c'} style={styles.input} editable={false} value={`${time ? new Date(time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : ""}`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    formContainer: {
        marginTop: height / 10,
    },
    label: {
        marginHorizontal: 38,
        marginBottom: 5,
        color: COLOR.radical_red,
    },
    input: {
        borderColor: '#bababa',
        borderWidth: 2,
        height: 35,
        color: '#292929',
        borderRadius: 3,
        marginHorizontal: 38,
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    space: {
        marginVertical: 15,
    },
})