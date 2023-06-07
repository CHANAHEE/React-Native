import React from "react";
import {View, TextInput, StyleSheet} from 'react-native'

export default function InputComponent(): JSX.Element{
    return(
        <View style={style.container}>
            <TextInput style={style.input}></TextInput>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        
    },
    input:{

    }
})