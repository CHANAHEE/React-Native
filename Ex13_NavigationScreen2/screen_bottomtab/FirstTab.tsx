import React from "react";
import {View, Text, StyleSheet } from 'react-native'

// 5_ Navigator 의 screen 은 props 객체를 전달받음. 그 타입 지정. 
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import { BottomTabScreenList } from "../Main";
// 7_ type 을 지정. 한번 더 확인하는 느낌으로다가.. 
type FirstProps = BottomTabScreenProps<BottomTabScreenList,"First">

export default function FirstTab(props: FirstProps){ // 6_ props 객체 : { navigator , route }
    return(
        <View style={style.root}>
            <Text style={style.text}>First Tab</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex:1, justifyContent: "center", alignItems: "center"
    },
    text:{
        padding: 8, color: 'black'
    }
})