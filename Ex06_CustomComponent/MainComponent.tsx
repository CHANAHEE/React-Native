    import React,{Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

import MyComponent3 from './MyComponent3'
import MyComponent4 from './MyComponent4'
import MyComponent5 from './MyComponent5'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
export default class MainComponent extends Component{
    render(): JSX.Element {
        return(
            // <View style= { style.root }>
            //     <Text>Hello RN</Text>
            //     <MyComponent></MyComponent>
            //     <MyComponent></MyComponent>
            // </View>
            // 이런식으로 Header, Body, Nav 등을 영역별로 나누어 작성할 수 있음. 

            // 가만보니 값들이 전부 똑같음. 
            // <View style= { style.root }>
            //     <Text>Hello RN</Text>
            //     <MyComponent2 myTxt='sam'></MyComponent2>
            //     <MyComponent2 myTxt='robin'></MyComponent2>
            // </View>
            // 3. 별도의 .tsx 파일에 나만의 컴포넌트를 만들고 사용해보자. 
            // <View style= { style.root }>
            //     <Text>Hello RN</Text>

            //     {/* MyComponent3 사용 */}
            //     <MyComponent3 aaa={this.clickBtn} title='press ME'></MyComponent3>
            //     <MyComponent3 aaa={this.clickBtn} title='click'></MyComponent3>
            // </View>

            // 4.
            // <View style= { style.root }>
            // <Text>Hello RN</Text>

            // {/* MyComponent4 사용 */}
            // <MyComponent4 ></MyComponent4>
            // </View>

            // 5. 여러 속성을 한방에 적용하기 
            // <View style= { style.root }>
            //     <Text>Hello RN</Text>

            //     {/* MyComponent5 사용 */}
            //     <MyComponent5 title='click me' color='indigo' onPress={()=>Alert.alert("Hello!")}></MyComponent5>
            // </View>

            // 6. 컴포넌트 간의 데이터 제어
            <View style={style.root}>
                <ComponentA message={this.state.message}></ComponentA>
                <ComponentB onPress={this.changeMessage}></ComponentB>
            </View>
        )
    }


    // 6 번 실습에서 사용할 변수 - 아주 특별한 변수
    state = {
        message: "Hello World"
    }
    changeMessage= ()=>{
        this.setState({message:"Nice to Meet You"})
    }


    clickBtn = ()=>{
        Alert.alert("Clicked")
    }
}





// 2. Custom Component 에 속성(property)값을 전달
// MyComponent2 의 속성(property) 값들의 타입을 지정 
type MyText = {
    myTxt: string
}

// 속성으로 전달될 값들의 타입을 <> 으로 지정 
class MyComponent2 extends Component<MyText>{
    render(): JSX.Element {
        return(
            <View style={{margin: 16}}>
                {/* 컴포넌트 사용시, 속성으로 전달된 값은 컴포넌트의 아주 특별한 멤버변수(props)에 자동으로 추가됨. */}
                <Text style={{marginBottom: 8, color: 'black'}}>Hello, {this.props.myTxt}</Text>
                <Button title='클릭!'></Button>
            </View>
        )
    }
}


// 1. Custom Component 만들기
class MyComponent extends Component{
    render(): JSX.Element {
        return(
            <View style={{margin: 16}}>
                <Text style={{marginBottom: 8, color: 'black'}}>Hello, Sam</Text>
                <Button title='클릭!'></Button>
            </View>
        )
    }
}

const style = StyleSheet.create({
    
    root:{
        flex: 1,
    }
})