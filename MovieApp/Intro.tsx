import React from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator,Alert } from 'react-native'

// 8_ Stack Navigator 의 screen 으로 등록된 컴포넌트에서 전달받을 props 타입을 지정해줘야함. 
import { StackScreenProps } from '@react-navigation/stack'
import { RootScreenList } from './types'
type IntroProps = StackScreenProps<RootScreenList,'Intro'>


// functional component
// 7_ 파라미터로 props {navigation, route} 객체를 전달받는다. 
export default function Intro(props: IntroProps):JSX.Element{
    

    return (
        // 6_ 화면 전환 테스트 목적으로 보여질 임시 화면
        <View style={style.root}>
            <Text>Intro</Text>
            <Button title='go login' onPress={()=>props.navigation.navigate('LoginNav')}></Button>
            <View><Button title='메인화면으로..' color='green' onPress={()=>props.navigation.navigate('MainNav')}></Button></View>
        </View>
    )
}

const style= StyleSheet.create({
    root:{ flex:1, justifyContent:'center', alignItems:'center', }
})