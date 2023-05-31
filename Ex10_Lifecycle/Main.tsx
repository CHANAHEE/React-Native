import React,{Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'


type Props = {}

export default class Main extends Component<Props>{

    // 1_ 컴포넌트의 기본 LifeCycle method 6개 (지금은 4개로 줄어들었음)

    // 2_  (1) 생성자 메소드 
    constructor(props: Props){
        super(props) // 3_ JS 는 부모생성자의 호출을 반드시 명시적으로 해야함.

        // 4_ 아직 화면이 rendering 되기 전이기에 화면에 무엇인가를 출력할 수 없음 
        // 그래서 Log 기록을 남기자. 
        console.log("constructor 호출")
    }

    // 5_  (2) 화면에 보여지기 전에 이 컴포넌트가 화면에 연결되기 직전에 호출
    // componentWillMount(): void {} // deprecated
    // UNSAFE_componentWillMount(): void {}    2023년도 버전에서는 deprecated

    // 6_  (3) 화면에 그려내는 메소드 
    render(): JSX.Element {
        console.log("render 호출")
        return(
            <View style={style.root}>
                <Text style={style.title}>안녕하세요</Text>
                <Button title='button' onPress={()=>this.setState({date:"Hello"})}></Button>
            </View>
        )
    }

    // 7_ (4) 화면이 그려진 후 딱 1번 호출되는 메소드 
    componentDidMount(): void {
        console.log("componentDidMount 호출")
        // 8_ 보통은 이곳에서 서버 로딩 작업을 수행
    }

    // 9_ (5) render() 메소드가 호출된 후, 항상 호출되는 메소드 (즉, 화면이 갱신될 때 마다 실행)
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('componentDidUpdate 호출')
    }

    // 10_ (6) 컴포넌트가 종료될 때 호출되는 메소드 
    componentWillUnmount(): void {
        console.log('componentWillUnmount 호출')
    }
}





const style = StyleSheet.create({
    root:{
        flex: 1,
        padding: 16
    },

    title:{
        color: 'black',
        fontWeight: 'bold',
        padding: 8
    }
})