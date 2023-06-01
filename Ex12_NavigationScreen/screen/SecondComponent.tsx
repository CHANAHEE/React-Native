import React,{Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

// 21_ 여기서도 props 를 이용하기 위해 동일한 작업을 해주자. 
import {StackScreenProps} from '@react-navigation/stack'
import { StackScreenList } from '../Main'
type SecondProps = StackScreenProps<StackScreenList,"Second">

export default function Second(props: SecondProps){
    return(
        <View style={style.root}>
            <Text style={style.text}>SECOND</Text>

            {/* 20_ Home 화면으로 돌아가는 버튼 */}
            <Button title='Back to Home' onPress={()=>props.navigation.navigate("Home")}></Button>

            {/* 22_ Home 화면이 아니라 이전화면으로 돌아가려면? */}
            <Button title='go back' color='orange' onPress={()=>props.navigation.goBack()}></Button>

            {/* 26_ navigate()로 데이터를 전달했다면.. */}
            {/* route 객체로 전달받을 수 있음! */}
            <Text>{props.route.params?.name} : {props.route.params?.age}</Text>

            {/* 32_ 버튼 클릭시에 제목줄 제목 변경 */}
            <Button title='제목줄 변경' onPress={()=>props.navigation.setOptions({title:"Hello!"})}></Button>
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