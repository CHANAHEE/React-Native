// 1_ React Native는 기본적으로 Screen(화면) 전환 기능을 제공하지 않기에 Library를 사용해야함
// 2_ package.json 파일안에 dependencies 블럭이 연결된 라이브러리 목록임

// 3_ 가장 유명한 화면전환 라이브러리 : react navigation [https://reactnavigation.org 사이트 참고]
// 4_ 기본 필수 라이브러리 추가 : @react-navigation/native 
// 5_ 추가 라이브러리 : react-native-screens, react-native-safe-area-context

// 6_ Main컴포넌트 만들기
import React from 'react'
import {Button, Image} from 'react-native'
// 7_ 가장 먼저 Navigator들을 감싸는 최상위 Container 컴포넌트가 있어야 함
import { NavigationContainer } from '@react-navigation/native'

// 8_ 화면전환의 방법을 결정하는 Navigator 의 종류가 여러개..
// Stack, Drawer, Bottom Tab, Material Bottom Tab, Material Top Tab 
// 각 Navigator 를 사용할 때마다 전용 라이브러리를 추가로 설치해야 함. 

// 9_ 이 중에서 가장 기본인 StackNavigator 사용해보기 - 라이브러리 설치
import { createStackNavigator } from '@react-navigation/stack'

// 10_ 이제 Stack 사용 시작! HomeComponent.tsx 도 만들어주자! 공식문서에서 보면 사용법도 나오니까 참고할것. 
import Home from './screen/HomeComponent'
import Second from './screen/SecondComponent'

// 11_ typescript 에서는 스크린 리스트의 타입을 지정해줄 것을 권장함. 
export type StackScreenList={
    // 12_ 화면명(route 명) : 화면 전환 시 전달할 파라미터의 자료형 (지금은 전달 안할꺼니까 undefined)
    // 13_ Second 도 만들어주자!! (SecondComponent.tsx)
    Home: undefined,
    Second: undefined | {name: string, age: number}, // 25_ | 연산자로 타입 여러개를 지정가능
}

const Stack = createStackNavigator<StackScreenList>()

export default function Main():JSX.Element{
    return (
        <NavigationContainer>
            {/* 27_ 옵션메뉴들.. 공식문서를 활용해볼것. 자주바뀐다고 함. */}
            {/* 28_ initialRouteName 은 시작 페이지를 결정할 수 있다! */}
            {/* 29_ screenOptions 를 이용하면 여러 스타일을 적용할 수 있다. */}
            <Stack.Navigator 
                screenOptions={{
                    headerStyle:{
                        backgroundColor: 'brown'
                    },
                    headerTintColor:'white',
                    headerTitle: "Hello World!",
                    headerTitleAlign: 'center'
                }}
                >
                {/* 30_ 화면별로 적용시키고 싶으면 option 속성을 이용! title 은 전체 스크린 옵션이 우선순위가 잡히는 듯. */}
                <Stack.Screen options={{
                    title: '홈', 
                    headerTintColor: 'red', 
                    headerRight: ()=>{return <Button title='menu'></Button>},
                    headerLeft: ()=><Image source={require('./image/away-3408119_640.jpg')} style={{width: 40, height: 40, marginLeft: 10}}></Image>,
                    headerTitle: ()=><Image source={require('./image/away-3408119_640.jpg')} style={{width: 40, height: 40, marginLeft: 10}}></Image>,
                    headerShown: true // 31_ 헤더 visibility 조정 가능
                    }} name='Home' component={Home}/>
                <Stack.Screen name='Second' component={Second}/>
            </Stack.Navigator>            
        </NavigationContainer>        
    )
}





