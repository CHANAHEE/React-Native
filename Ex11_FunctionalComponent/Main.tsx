import React,{Component, useEffect, useState} from "react";
import {View, Text, Button, StyleSheet} from 'react-native'

export default class Main extends Component{

    render(): JSX.Element {
        return(
            <View style={style.root}>
                {/* 1_ 새로운 Custom Component 제작 방법 */}
                {/* (1) class Component : Component class 를 상속해서 만드는 일반적인 Component */}
                {/* (2) Functional Component : 마치 함수를 만드는 방식처럼 만들어진 Component [ 함수형 컴포넌트 ] */}

                {/* 2_ 두 컴포넌트의 차이를 알아보기 위하여 익숙한 방식인 class 형 컴포넌트를 만들어보자. */}
                {/* 4_ 클래스형 컴포넌트 적용 */}
                <MyComponent></MyComponent>

                {/* 6_ 함수형 컴포넌트 적용 */}
                {/* 12_ 간단한 콘텐츠를 화면에 보여주고자 할 때 간결하게 작성할 수 있는 컴포넌트임. */}
                {/* 13_ 즉, Component 를 상속받지 않았기에, 생성자 X, state X, props X */}
                <MyComponent2></MyComponent2>

                {/* 14_ 대신에 props(속성) 은 전달받는것이 가능함 */}
                {/* 15_ props 를 받는 일반적인 class component */}
                <MyComponent3 data='aaaasdfasdfasdfasdf'></MyComponent3>

                {/* 18_ props 를 받는 functional component */}
                <MyComponent4 data='bbb'></MyComponent4>

                {/* 21_ 여러개의 속성을 받아보기 */}
                <MyComponent5 data='ccc' title='sam'></MyComponent5>

                {/* 23_ 여러개의 속성을 구조분해할당으로 받기 */}
                <MyComponent6 data='ccc' title='sam'></MyComponent6>

                {/* 25_ 컴포넌트간 데이터 제어를 해보자 */}
                <ClickBtn onPress={this.changeText}></ClickBtn>
                <TextComponent msg={this.state.msg}></TextComponent>

                {/* 31_ 결론적으로 functional component 는 class component 에 비해 코딩이 간결하다. */}
                {/* 단, state 가 없다. 그래서 단순한 화면 컴포넌트용으로 적합하였다. */}

                {/* 32_ 하지만 현재는 functional component 의 간결한 코딩방식이 선호되어서  */}
                {/* state 가 없다는 단점을 보완하기 위한 Hook 기능이 도입되었음. */}

                {/* 33_ functional component Hook 실습 */}
                <MyComponent7></MyComponent7>
            </View>
        )
    }

    // 29_ 아주 특별한 멤버변수 state
    state: React.ComponentState = { msg: "Hello" }

    // 30_ changeText 함수 만들기 
    changeText = ()=>this.setState({msg:"Nice to Meet You"})
}
// 34_ functional component Hook..
function MyComponent7(): JSX.Element{

    // 35_ 함수형 컴포넌트는 state, setState() 가 없음.
    //let msg="Hello" // 36_ 지역변수 

    // 37_ 함수형 컴포넌트에서 state 를 사용할 수 있도록 만드는 문법 : useState()

    // 38_ msg 라는 특별한 변수 ( state 의 능력을 하사받음.) 와 값을 변경하는 setMsg() 메소드를 선언
    let [msg,setMsg] = useState<string>('Hello')
    const [age, setAge] = useState<number>(0) // 39_ number 타입도 가능. 제네릭 안써도 자동추론 가능! 

    // 40_ 함수형 컴포넌트는 라이프사이클도 없음. 
    // 대신 화면을 갱신할 때 자동호출되던 componentDidUpdate, componentDidMount 메소드를 대체하는 함수가 있음. 
    // 화면이 처음 시작할때와 state 변경으로 인해 화면이 갱신될 때마다 호출되는 기능을 
    // ex.. 서버에서 데이터 읽어오거나 DB 작업등을 할 때.. useEffect!
    useEffect( ()=>{
        // 41_ 리프레시 같은 작업하기 좋겠다. 
        console.log("useEffect : 화면 갱신")
    } )
    return(
        <View style={{padding: 16}}>
            <Text>{msg}</Text>
            <Button title="change" onPress={()=>setMsg('Good')}></Button>


            <Text>{age}</Text>
            <Button title="change" onPress={()=>setAge(age+1)}></Button>
        </View>
    )
}





// 26_ 컴포넌트들 간의 데이터 제어 - 직접 참조는 불가능
// 27_ 버튼을 가진 함수형 컴포넌트
type Props3 = { onPress:()=>void }
const ClickBtn = (props: Props3)=>{
    return(
        <View style={{padding: 16}}>
            <Button title="change" onPress={props.onPress}></Button>
        </View>
    )
}

//  28_ 버튼에 의해 변경될 글씨를 보여주는 함수형 컴포넌트 
type Props4 = { msg: string }
const TextComponent = (props: Props4 )=>{
    return(
        <View style={{padding: 8}}>
            <Text>message : {props.msg}</Text>
        </View>
    )
}




// 22_ 여러개 프로퍼티 받기
type Props2 = { data: string, title: string}

// 24_ 구조분해할당으로 받기
function MyComponent6({data,title}: Props2){
    return(
        <View>
            <Text>MyComponent6 : {data}</Text>
            <Text>MyComponent6 : {title}</Text>
        </View>
    )
}

function MyComponent5(props: Props2){
    return(
        <View>
            <Text>MyComponent5 : {props.data}</Text>
            <Text>MyComponent5 : {props.title}</Text>
        </View>
    )
}


type Props = { data: string } // 17_ 프로퍼티의 자료형
// 19_ props 를 받는 functional component
function MyComponent4( props: Props){ // 20_ 태그문의 속성으로 지정한 값들은 파라미터로 전달됨.
    return (
        <View>
            <Text>MyComponent4 : {props.data}</Text>
        </View>
    )
}





// 16_ props 를 받는 class component
class MyComponent3 extends Component<Props>{
    render(): JSX.Element{
        return(
            <View>
                <Text> MyComponent3 : {this.props.data}</Text>
            </View>
        )
    }
}


// 5_ Functional Component 
function MyComponent2(): JSX.Element{

    // 10_ 생성자는 존재하지 않음. 
    // constructor(){}

    // 11_ 화면갱신에 영향을 주는 아주 특별한 변수 state 도 없음.
    // 컴포넌트를 사용하는 태그문에서 전달한 프로퍼티들을 가진 props 라는 특별한 변수도 없음. 
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}

// 7_ 함수형 컴포넌트를 익명함수 형태로 만들수도 있음. 
// const MyComponent2 = function(): JSX.Element{
//     return (
//         <View>
//             <Text>Hello</Text>
//         </View>
//     )
// }

// 8_ 화살표 함수 형태로 함수형 컴포넌트 설계 
// const MyComponent2 = (): JSX.Element => {
//     return (
//         <View>
//             <Text>Hello</Text>
//         </View>
//     )
// }

// 9_ 축약형으로
// const MyComponent2 = (): JSX.Element => <View><Text>Hello</Text></View>


// 3_ 일반적인 컴포넌트 
class MyComponent extends Component{
    render(): JSX.Element{
        return(
            <View>

            </View>
        )
    }
}



const style = StyleSheet.create({
    root:{

    },
})