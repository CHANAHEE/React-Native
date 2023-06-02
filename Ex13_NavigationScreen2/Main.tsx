import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'


// 1_ BottomTabNavigator 를 만들어내는 기능함수 import 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// 3_ BottomTabNavigator 에 등록할 Screen 컴포넌트 리스트 타입을 지정
export type BottomTabScreenList = {
    First: undefined,
    Second: undefined,
    Third: undefined
}

// 2_ BottomTabNavigator 객체 생성
const BottomTab = createBottomTabNavigator<BottomTabScreenList>()

// 4_ Tab 으로 보여줄 화면 screen 컴포넌트 3개 import 
import FirstTab from './screen_bottomtab/FirstTab'
import SecondTab from './screen_bottomtab/SecondTab'
import ThirdTab from './screen_bottomtab/ThirdTab'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Main(): JSX.Element{
    return(
        // 8_ 3개의 화면을 만들었다면.. 아래처럼 메뉴를 만들수 있음.
        // 9_ 추가로 옵션까지 줄 수 있음. 전체에 적용되는 옵션은 screenOptions, 개별적 옵션은 각 Screen 에 option 으로.. 
        <NavigationContainer>
            <BottomTab.Navigator
                initialRouteName='Second'
                screenOptions={{
                    tabBarActiveTintColor: 'orange',
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveBackgroundColor: '',
                    tabBarShowLabel: true,
                    tabBarLabelPosition: 'beside-icon'
                }}>
                <BottomTab.Screen 
                    name='First' 
                    component={FirstTab}
                    options={{
                        tabBarLabel: "첫번째",
                        tabBarIcon: ()=>{return <Image source={require('./image/sky.jpg')} style={{width: 32, height: 32}}></Image>},
                        tabBarBadge: '안뇽?',
                        tabBarActiveTintColor: 'green'
                    }}></BottomTab.Screen>
                <BottomTab.Screen name='Second' component={SecondTab}></BottomTab.Screen>
                <BottomTab.Screen name='Third' component={ThirdTab}></BottomTab.Screen>
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}