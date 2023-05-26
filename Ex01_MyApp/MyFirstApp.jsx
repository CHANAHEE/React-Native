// 1_ 리액트 라이브러리 사용
import React,{Component} from 'react'
import {  Button, Image, StyleSheet, Text, View } from 'react-native'

// 2_ 리액트 네이티브는 Component 를 상속받은 클래스들이 화면에 보여질 수 있음. 
class MyApp extends Component{
    // 3_ 리액트의 Component 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드 - override
    render(){ // ++ 클래스 내부에서 let, function 키워드 쓰면 안된다... 
        // 4_ 이 메소드 안에서 JSX (JS + XML) 언어로 뷰를 설계하고 이를 return 해줌. 

        let name = "SAM" // 8_ 지역변수
        let btnTitle = "click me" // 9_ 버튼에 보여질 글씨 

        return (
            // <Text>Hello World</Text>
            // <Text>Hello World</Text>
            // ERROR - 컴포넌트는 1개의 컴포넌트만 리턴가능

            // 6_ 그래서!! 뷰그룹을 사용한다~
            // 10_ 스타일 속성을 적용해보자!
            <View style={ style.root }>
                
                {/*  8_ 중괄호를 이용해서 JS 문법을 사용 */}
                <Text style={style.title}>Hello {name}</Text>
                <Text style={style.text}>Nice to Meet You</Text>
                {/* 7_ JSX 는 xml 안에서 JS 변수, 함수 사용가능. 그 반대도 마찬가지.
                그러면 render() 안에 변수를 만들어보자. */}

                {/* 16_ Button 컴포넌트는 style 속성이 존재하지 않음. */}
                {/* <Button  title={btnTitle}></Button> */}
                <View style={ {marginTop: 16} }>
                    <Button title={btnTitle}></Button>
                </View>

                <Image style={ style.img } source={require('./image/kitchen.jpg')}></Image>
            </View>
        )
    }
}
// 17_ 스타일 작업 객체들을 하나로 묶어서 관리하는 StyleSheet 객체 생성
const style = StyleSheet.create({
    root:{
        padding: 16,
        backgroundColor: '#AAFFCC',
        flex: 1
    },

    title:{
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16
    },

    text:{
        margin: 8,
        color: 'black',
    },

    img:{
        marginTop: 16,
        flex: 1, // 18_ 남은 공간 다먹어
        width: null,
        resizeMode: 'contain'
    }

})
// 11_ 스타일 객체 - 스타일 속성값은 CSS 를 기반으로 제작되었음.
const textStyle = {
    color: 'red',
    fontSize: 20, // 기본 단위는 dp 
    fontWeight: 'bold',
    margin: 16
}

// 12_ View 에 스타일 적용 - RN 은 기본적으로 display: flex 로 적용되어 있음. 
// 기본 배치 방향[flex-direction]이 column 방향.
// 기본적으로 컴포넌트의 height 은 wrap 임.  
const rootStyle = {
    padding: 16,
    backgroundColor: '#AAFFCC',
    // height: '100%'
    // 13_ flex-grow 속성[Android 의 layout-weight 과 비슷한 속성 ]
    // RN 에서는 flex-grow 속성을 그냥 flex 로 사용함
    flex: 1,
    // flexDirection: 'row'
}

// 14_ 중간에 있는 글씨 스타일 
const plainTextStyle = {
    margin: 8,
    color: 'black'
}

// 15_ 버튼의 스타일 객체 : 버튼 컴포넌트는 스타일링 불가능하니 주석처리하겠음.
// const btnStyle = {
//     margin: 80,
// }


// 5_ MyApp 클래스를 다른 .js 에서 사용할 수 있도록 내보내기 
export default MyApp