import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MainNavScreenList } from '../types'
type FavoriteProps = BottomTabScreenProps<MainNavScreenList,'Favorite'>


export default function Favorite(props: FavoriteProps): JSX.Element{

    // 0. 테스트 목적
    return(
        <View style={style.root}>
            <Text style={style.title}>FAVORITE</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1,
    },
    title:{
        padding: 8,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
    }
})