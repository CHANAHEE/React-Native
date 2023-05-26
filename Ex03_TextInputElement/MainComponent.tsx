import React,{Component} from "react";
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class MainComponent extends Component{

    // 4_ state 만들기
    state: React.ComponentState = {
        inputMsg: "",
        completeMsg: "",
        text: ""
    }

    // 12_ 화면에 영향이 없는 일반 변수
    inputValue = ""

    render(): JSX.Element {
        return(
            <View style={style.root}>
                {/* 1_ TextInput */}
                <TextInput style={style.input} onChangeText={this.watcher}></TextInput>

                {/* 3_ TextInput 에 글씨를 작성할 때마다 그 글씨를 보여주는 텍스트 뷰 */}
                <Text style={style.text}>{this.state.inputMsg}</Text>

                {/* 7_ TextInput 입력에 사용한 소프트키보드의 완료버튼을 눌렀을 때 글씨 보여주기 */}
                <TextInput style={style.input} onSubmitEditing={this.submit}></TextInput>
                <Text style={style.text}>{this.state.completeMsg}</Text>

                {/* 10_ 버튼 클릭시 써있는 글씨를 텍스트뷰에 보여주기 */}
                <TextInput multiline={true} style={style.input} onChangeText={this.text}></TextInput>
                <View style={{marginTop: 16}}>
                    <Button title="저장" onPress={this.saveText}></Button>
                </View>
                <Text style={style.text}>{this.state.text}</Text>

            </View>
        )
    }

    saveText = ()=>{
        this.setState({text: this.inputValue})
    }

    // 11_ TextInput 컴포넌트의 글씨가 변경될 때마다 반응하는 메소드
    text = (value: string)=>{
        // 13_ 일반 변수에 저장
        this.inputValue = value
    }

    // 8_ 소프트키보드의 완료버튼 이벤트 처리
    submit = (event: any)=>{ // 9_ 파라미터로 string 이 아닌 이벤트 객체가 전달됨. 
        this.setState({completeMsg:event.nativeEvent.text})
    }

    // 5_ 글씨변경 때마다 반응하는 콜백 메서드 - 파라미터로 써있는 글씨가 전달됨
    watcher = (value: string)=>{
        // 6_ Text 컴포넌트가 보여주는 state 변수값 변경
        this.setState({inputMsg:value})
    }
}


// 2_ 스타일 객체 
const style = StyleSheet.create({
    root:{
        flex: 1,
        padding: 16
    },
    input:{
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 8,
        paddingLeft: 10
    },
    text:{
        padding: 8,
        fontWeight: "bold",
        fontSize: 20
    }
})