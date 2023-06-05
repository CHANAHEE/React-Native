// 1_ AsyncStorage Library - Android 의 SharedPreferences 와 비슷한 기능

import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'

export default function Main(): JSX.Element{


    // 5_ TextInput 요소의 글씨가 변경될 때 마다 저장하는 state 변수
    const [inputText, setInputText] = useState<string>('')
    // 7_ state data 만들기
    const [data, setData] = useState<string>('RESULT')

    // 6_ 
    const changeText = (value: string)=>{
        setInputText(value)
    }

    // 2_ save data to local storage method
    const saveData = ()=>{
        // 3_ TextInput 요소에 써있는 글씨를 AsyncStorage 에 저장 [key , value 쌍으로 저장]
        // 4_ TextInput 요소의 글씨가 변경될 때마다 저장하는 변수 : inputText
        AsyncStorage.setItem("Data",inputText).then(()=>{
            Alert.alert("성공!")
        })
        setInputText('')
    }



    // 8_ 함수를 만들자. load data from local storage method
    const loadData = async ()=>{
        // 9_ 비동기로 AsyncStorage 의 "Data" 라는 키의 value 값을 읽어오자. 
        // 10_ async - await 문법으로 비동기 작업을 동기 작업처럼 처리
        let value = await AsyncStorage.getItem("Data") 
        if(value != null) setData(value)
        
    }
    return (
        <View style={style.root}>
            <TextInput style={style.textInput}
                onChangeText={ changeText }
                value={ inputText }
                placeholder='Enter some text here'>
            </TextInput>
            <Button title='save data' onPress={ saveData }></Button>

            <View style={{marginTop: 16}}></View>
            <Button title='load data' color='orange' onPress={ loadData }></Button>
            <Text style={style.text}>{data}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1, padding: 16,
    },
    textInput:{
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'black',
        marginBottom: 16,
    },
    text:{
        marginTop: 16,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        padding: 16
    }

})