import React from "react";
import {View, Text, StyleSheet } from 'react-native'

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabScreenList } from "../Main";

type ThirdProps = BottomTabScreenProps<BottomTabScreenList,"Third">

export default function ThirdTab(props: ThirdProps){ 
    return(
        <View style={style.root}>
            <Text style={style.text}>Third Tab</Text>
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