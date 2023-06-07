import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


// 14_ 로그인 화면 만들자! 스타일 적용하고, props 전달받기! 이제 타입을 지정해줘야 할 차례.
import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'
type LoginProps = StackScreenProps<LoginNavScreenList,'Login'>

export default function Login(props: LoginProps): JSX.Element{
    // return(
    //     <View style={style.root}>
    //         <Text>Log In</Text>
    //     </View>
    // )

    // 16_ 로그인 화면 제대로 만들자! 
    return(
        <View style={style.root}>
            {/* 17_ 크게 2개의 영역으로 구성 : 로그인 콘텐츠 영역, 아래쪽에 회사이름 or 앱이름 표시영역  */}
            {/* 18_ 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 21_ 로고 */}
                <Text>MOVIE CHA</Text>

                {/* 22_ 이메일/ 비밀번호 입력박스 */}
                {/* 23_ TextInput 은 로그인, 회원가입, 비밀번호 재설정 화면에서도 모두 사용되므로 사용빈도 높음. 
                이를 일일이 스타일하기 어려우므로 별도의 Custom Component 로 제작하여서 재사용성을 높임. */}
            </View>

            {/* 19_ footer 영역 */}
            <View style={style.footer}>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1, backgroundColor: '#FEFFFF'
    },
    content:{
        flex: 1, // 20_ footer 영역 제외한 모든 공간을 사용하겠다!
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    footer:{
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3'
    }
})