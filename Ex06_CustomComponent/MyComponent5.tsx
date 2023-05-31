import React,{Component} from 'react'
import {View, Text, Button} from 'react-native'


type Props = {
    title:string,
    color:string,
    onPress:()=>void // 함수의 타입 [파라미터 X, 리턴 X]
}
export default class MyComponent5 extends Component<Props>{
    render(): JSX.Element {
        return (
            <View style={{margin:16}}>
                {/* props 속성들을 한방에 적용 */}
                <Button {...this.props}></Button>
            </View>
        )
    }
}