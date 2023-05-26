// ### TypeScript : JavaScript + static typed 

import React,{Component} from "react";
import {View, Text, Button, StyleSheet, Alert, ToastAndroid, Image} from 'react-native'

class MainComponent extends Component{

    mainText: string = "Hello React Native"

    // 화면 갱신에 영향을 주는 아주 특별한 멤버변수 - state
    state: React.ComponentState = {
        text: "Hello RN",
        imageUrl: require("./image/moana02.jpg")
    }



    render(): JSX.Element {
        return(
            <View style={style.root}>
                <Button title="Hello" onPress={clickBtn3}></Button>
                {/* 버튼 콜백용 함수를 별도의 위치에 작성하지 않고 곧바로 지정가능 */}
                <Button title="버튼" color='orange' onPress={()=>Alert.alert("헬로")}></Button>

                {/* 버튼 콜백용 메소드는 전역보다는 이 컴포넌트 클래스의 멤버로 존재하는것을 권장. - 데이터는 클래스 내부에 있기 때문. */}
                <Button title="press me" color='green' onPress={ this.clickBtn }></Button>

                {/* 버튼 클릭시에 Text 컴포넌트의 글씨 변경 */}
                <View style={{margin: 16}}>
                    <Button title="change text" onPress={this.changeText2}></Button>

                    {/* Text 컴포넌트의 글씨가 변경되고자 한다면... 글씨가 별도의 변수로 저장되어 있어야 함. -> 멤버변수로 만들어 Test */}
                    <Text style={style.text}>{this.mainText}</Text>
                </View>

                <View style={{margin: 16}}>
                    <Button title="change text" color='black' onPress={this.changeText3}></Button>

                    {/* Text 컴포넌트의 글씨가 변경되고자 한다면... 글씨가 별도의 변수로 저장되어 있어야 함. -> 멤버변수로 만들어 Test */}
                    <Text style={style.text}>{ this.state.text }</Text>
                </View>

                <Image source={this.state.imageUrl} style={style.image}></Image>
                <Button title="change image" color='red' onPress={this.changeImage}></Button>
            </View>
        )
    }



    // 이미지 변경 버튼 
    changeImage = ()=>{
        this.setState({imageUrl: require("./image/moana03.jpg")})
    }



    // 화면에 영향을 미치는 아주 특별한 변수 state 값을 변경 
    changeText3 = ()=>{
        
        this.setState({text: "Hello"})
    }






    // ChangeText 함수 만들기
    changeText2 = ()=>{
        this.mainText = "Hello!"
        // 변수값이 변경되어도 화면갱신은 이루어지지 않는다. -> 단, render() 로 화면을 다시 그려내면 어거지로 가능은 하다. 
        // this.forceUpdate() -- 권장하지않음.

        // 그래서 화면갱신에 영향을 주는 아주 특별한 변수를 사용해야함.-> state!
        // state 는 모든 Component 가 기본으로 가지고 있는 변수
        this.state
    }

    changeText(){
        // Text 컴포넌트가 보여주는 값을 가진 mainText 멤버변수의 값
        Alert.alert("Hello")
        this.mainText = "Hello!"

        // 이 함수안에서 this.mainText 는 누구일까요? 
        // MainComponent 의 멤버 mainText 로 인식하지 않고 이 changeText 라는 함수의 멤버변수를 의미하게됨. 
        // 이를 해결하기 위해 별도의 객체로 인식되지 않는 함수표기법 '화살표 함수' 를 콜백메소드로 사용해야함. 
    }



    // 멤버메소드 : 클래스 내부니까 function 키워드 X 
    clickBtn(){
        Alert.alert('버튼 Clicked')
    }
}

// 1) 선언적 함수
function clickBtn(){
    Alert.alert("Hello")
}

// 2) 익명 함수 
let clickBtn2 = function(){
    Alert.alert('Button2')
}

// 3) 화살표 함수
let clickBtn3 = ()=>Alert.alert("Button3")




// 스타일 시트 
const style = StyleSheet.create({
    root:{
        flex: 1,
        padding: 16,
    },

    text:{
        color: 'black',
        marginTop: 16
    },

    image:{
        width: '100%',
        marginTop: 16,
        flex: 1
    }
})


export default MainComponent