// 0_ WebView Library - 버전 충돌이 있으면 낮은 버전으로 설치
// $ npm install react-native-webview@^12.1.0


import React from "react";
import {Button, View} from 'react-native'
import WebView from 'react-native-webview'

export default function Main(): JSX.Element{
    return (
        // 1_ 웹뷰의 기본 높이값은 flex:1 로 설정되어 있음. 
        <View style={{flex: 1, padding: 16}}>
            <WebView source={{uri:'https://www.saramin.co.kr/zf_user/'}}></WebView>
            <Button title='button'></Button>

            {/* 2_ 한 화면에 여러개의 웹뷰가 있을수도 있음.  */}
            <WebView source={{uri:'http://tjdrjs0803.dothome.co.kr'}}></WebView>
        </View> 
    )
}