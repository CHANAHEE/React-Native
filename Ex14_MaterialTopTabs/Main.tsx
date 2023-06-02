import React from "react";
import { Image } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export type TopTabScreenList = {
    one: undefined,
    two: undefined,
    three: undefined
}

const TopTab = createMaterialTopTabNavigator<TopTabScreenList>()

// 1_ 탭에 의해 전환될 화면들 제작 및 import 
import FirstTab from "./screen_materialtoptab/FirstTab";
import SecondTab from "./screen_materialtoptab/SecondTab";
import ThirdTab from "./screen_materialtoptab/ThirdTab";

// 2_ 화면제작이야 지금까지 했던거랑 똑같다. 옵션들만 좀 알아보자. 공식사이트 참고.
export default function Main(): JSX.Element{
    return(
        <NavigationContainer>
            <TopTab.Navigator
                initialRouteName="two"
                tabBarPosition="top"
                screenOptions={{
                    swipeEnabled: true,
                    tabBarActiveTintColor: 'orange',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIndicatorStyle: {
                        backgroundColor: 'orange',
                        height: 1,
                    },
                    tabBarShowIcon: true, // 3_ 아이콘 지정은 따로 안했음. 할수있다 정도만 알것.
                }}>
                <TopTab.Screen 
                    name="one" 
                    component={FirstTab}
                    options={{
                        tabBarLabel: '첫번째',
                        tabBarIcon: ()=><Image source={require('./image/sky.jpg')} style={{width: 32, height: 32, borderRadius: 100}}></Image>,
                        tabBarShowLabel: false,
                    }}></TopTab.Screen>
                <TopTab.Screen name="two" component={SecondTab}></TopTab.Screen>
                <TopTab.Screen name="three" component={ThirdTab}></TopTab.Screen>
            </TopTab.Navigator>
        </NavigationContainer>
    )
}