import React from 'react'

import MovieList from '../screen_main/MovieList'
import MovieDetail from '../screen_main/MovieDetail'

// Stack Navigator 객체 생성 [ MovieList, MovieDetail 화면 등록 ]
import { createStackNavigator } from '@react-navigation/stack'
import { MovieNavScreenList } from '../types'
const Stack = createStackNavigator<MovieNavScreenList>()

export default function MovieNav(): JSX.Element{
    return(
        <Stack.Navigator>
            <Stack.Screen name='MovieList' component={MovieList}></Stack.Screen>
            <Stack.Screen name='MovieDetail' component={MovieDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}