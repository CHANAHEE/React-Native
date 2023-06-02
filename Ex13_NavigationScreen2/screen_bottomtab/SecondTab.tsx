import React from "react";
import {View, Text, StyleSheet, Image } from 'react-native'

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabScreenList } from "../Main";

type SecondProps = BottomTabScreenProps<BottomTabScreenList,"Second">

export default function SecondTab(props: SecondProps){ 
    // 10_ 개별 컴포넌트 안에서도 tabBar 옵션에 관한 지정이 가능하다! 
    props.navigation.setOptions({
        tabBarLabel: '두번째',
        tabBarIcon: ()=><Image source={require('../image/sky.jpg')} style={style.image}></Image>,
        tabBarBadge: '2',
        headerShown: false,
    })

    return(
        <View style={style.root}>
            <Text style={style.text}>Second Tab</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex:1, justifyContent: "center", alignItems: "center"
    },
    text:{
        padding: 8, color: 'black'
    },
    image:{
        width: 32,
        height: 32
    }
})