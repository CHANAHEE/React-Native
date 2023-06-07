import React from 'react'

// 9_ LoginNav 의 Stack Navigator 객체 생성
import { createStackNavigator } from '@react-navigation/stack'


// 10_ LoginNav 에서 전환할 화면 스크린들 타입을 지정해줘야 함. type.tsx 로 이동~~
// 12_ 타입 만들어주었으니 import 하자. 
// 13_ 어느정도 완료되었으니, 이제 로그인 관련 화면들을 만들러가보자. screen_login 폴더 만들고 화면 만들기~~ 
import { LoginNavScreenList } from '../types'

// 15_ 각 화면들의 tsx 파일들을 다 만들었으니, 이제 navigator 가 보여줄 화면 컴포넌트들 import 해주자. 
const Stack = createStackNavigator<LoginNavScreenList>()

import Login from '../screen_login/Login'
import Signup from '../screen_login/Signup'
import ResetPassword from '../screen_login/ResetPassword'


export default function LoginNav(): JSX.Element{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
            <Stack.Screen name='ResetPassword' component={ResetPassword}></Stack.Screen>
        </Stack.Navigator>
    )
}