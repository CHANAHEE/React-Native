import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


// 14_ 로그인 화면 만들자! 스타일 적용하고, props 전달받기! 이제 타입을 지정해줘야 할 차례.
import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'
type ResetProps = StackScreenProps<LoginNavScreenList,'ResetPassword'>

export default function Login(props: ResetProps): JSX.Element{
    return(
        <View style={style.root}>
            <Text>Reset Password</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1, backgroundColor: '#FEFFFF'
    },
})