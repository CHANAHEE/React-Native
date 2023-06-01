import React,{Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'


// 15_ StackNavigator 의 Screen 으로 등록된 컴포넌트는 props 를 받음
// Main.tsx 에서 Stack 만들때 속성으로 안줘도 자동으로 객체가 전달됨. 

// 16_ StackNavigator 에서 사용할 props 의 타입을 import 해야함. 미리 지정된 타입!
import { StackScreenProps } from '@react-navigation/stack'

// 17_ Main.tsx 에서 만든 StackNavigator 의 ScreenList 타입이 필요! 
import { StackScreenList } from '../Main' 

// 18_ StackNavigator 에서 사용할 props 타입을 지정 - 제네릭으로 ScreenList 타입을 지정, 현재 스크린 이름을 지정.
type HomeProps = StackScreenProps<StackScreenList,"Home">

// 19_ 파라미터 지정해주고, props 의 navigation 객체를 이용해서 화면전환하자! 
export default function Home(props: HomeProps): JSX.Element{
    return(
        <View style={style.root}>
            <Text style={style.text}>HOME</Text>

            {/* 14_ 이제 버튼 만들어서 Second 로 넘어갈 준비하자 */}
            <Button title='go Second' onPress={()=>props.navigation.navigate("Second")}></Button>

            {/* 23_ Second 화면으로 이동하면서 Home 화면 종료시켜보자 finish() 랑 비슷 */}
            <Button title='go second & finish' color='green' onPress={()=>props.navigation.replace("Second")}></Button>

            {/* 24_ Second 화면으로 이동하면서 데이터를 전달해보기 [ Android 의 Intent 에서 사용하는 Extra data 와 비슷 ] */}
            <Button title='go Second with data' color='violet' onPress={()=>props.navigation.navigate('Second',{name:"Sam",age:10})}></Button>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex:1,
        padding: 16
    },

    text:{
        padding: 8,
        color: 'black'
    }
})