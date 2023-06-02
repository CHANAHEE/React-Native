import React from "react";
import {View, Text, StyleSheet} from 'react-native'



// 2_ FirstTab 이 전달받을 props 에 대한 정의를 해주어야 한다. 미리 정해진 Type 을 가져와서 확인.
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import { TopTabScreenList } from "../Main";

type FirstProps = MaterialTopTabScreenProps<TopTabScreenList,"one">

export default function FirstTab(props: FirstProps): JSX.Element{
    return(
        <View style={style.root}>
            <Text style={style.text}>TAB #1</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        padding: 8,
        color: 'black',
        fontWeight: 'bold'
    }
})