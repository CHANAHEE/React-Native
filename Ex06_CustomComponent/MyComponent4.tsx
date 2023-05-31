import React,{Component} from 'react'
import {View, Text, Button} from 'react-native'


type Props = {
    title:string,
    color:string,
    aaa:()=>void // 함수의 타입 [파라미터 X, 리턴 X]
}
export default class MyComponent4 extends Component<Props>{
    // 정적변수로 props 가 전달되지 않을때의 기본값 지정 가능 
    // 정적 타입들의 적용은 앱을 다시 실행해야 올바르게 적용되는듯.
    static defaultProps = {
        title:'untitled',
        color:'black',
        aaa:()=>{}
    }
    render(): JSX.Element {
        return (
            <View style={{margin:16}}>
                <Button title={this.props.title} onPress={this.props.aaa} color={this.props.color}></Button>
            </View>
        )
    }
}