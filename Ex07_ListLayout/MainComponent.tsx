import React,{Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

export default class MainComponent extends Component{
    render(): JSX.Element {

        // 1_ 앱을 개발하면서 가장 많은 제작빈도를 가진 리스트 형태의 레이아웃을 만들어보자. 
        // 우선 RN 에서 제공하는 ListView 용 컴포넌트를 사용하지 않고 List 형태를 만들어보자. 

        // 3_ 실습에서 사용할 const 변수 : JSX 컴포넌트 객체를 변수에 저장해보자. 
        const aaa: JSX.Element = <Text>Nice</Text>

        // 6_ 변수 하나에 여러개 컴포넌트를 저장하기 위해 큰 뷰그룹을 사용
        const bbb: JSX.Element = 
        <View style={{marginTop: 8}}>
            <Text>Hello</Text>
            <Button title='Click!'></Button>
        </View>

        // 12_ 배열의 요소로 JSX 컴포넌트 저장
        // const arr: [JSX.Element,JSX.Element,JSX.Element] = [aaa,bbb,bbb]
        const arr: JSX.Element[] = [aaa,bbb,bbb]
        
        // 15_ 리스트에 보여줄 대량의 데이터 배열을 만들어보자. 
        let datas: string[] = ["aaa","bbb","ccc","ddd"]

        {
            datas.forEach(element => {
                
            });
        }

        return(
            <View style={style.root}>
                <Text style={style.title}>List Layout Test</Text>
                {/* 2_ 변수에 JSX 문법을 사용한 컴포넌트를 저장한 후에 사용할 수 있음  */}

                {/* 4_ 변수에 저장되어 있으니 여러번 사용가능 */}
                { aaa }
                { aaa }
                { aaa }

                {/* 5_ 변수 하나에 여러개의 컴포넌트를 넣어서 사용하기 */}
                { bbb }
                { bbb }
                { bbb }

                {/* 7_ 함수를 호출해서 JSX 컴포넌트를 리턴받아 사용하기  */}
                { this.showItemView() }

                {/* 9_ 함수를 호출하면서 파라미터를 전달 */}
                { this.showItemView2("sam","First","indigo")}
                { this.showItemView2("robin","Second","orange")}

                {/* 11_ 배열변수에 JSX 컴포넌트들을 요소로 넣어 사용하기 */}
                {/* 13_ JS 는 배열을 출력하면 자동으로 요소값을 나열함 */}
                {/* { arr } */}

                {/* 14_ 실제 앱 개발과정에서는 대량의 데이터가 JSX 컴포넌트이기 보다는 일반 데이터인 경우가 더 많다. */}
                {/* { datas } - ERROR : 일반 string 데이터는 컴포넌트가 아니니까 에러임. */}
                {/* 배열의 map() 메소드를 이용하여 JSX 컴포넌트를 요소로 가지는 새로운 배열을 만들어 리턴하여 보여주기 */}
                {  datas.map( function( value, index, array ){
                                return (
                                    // 배열로 만든 아이템뷰는 식별자로 key 속성이 필수로 요구됨. 
                                    <View style={style.itemView}>
                                        <Text>{value}</Text>
                                    </View>
                                )
                              } )
                }


                {/* 배열의 .map() 메소드를 이용한 단점 */}
                {/* key 속성을 개별적으로 지정해야 하는 것 */}
                {/* 개수가 많을 때 자동 스크롤 되지 않음 */}
                {/* 가로 스크롤이나 스크롤바 제어 등 리스트뷰에서의 기능이 없음 */}
                {/* 그래서 RN 에서는 리스트뷰용 컴포넌트를 별도로 제공 */}
            </View>
        )
    }

    // 10_ 실습에서 사용할 메소드 
    showItemView2(name: string, btnTitle: string, btnColor: string): JSX.Element{
        return (
            <View style={{marginTop: 8}}>
                <Text>{name}</Text>
                <Button title={btnTitle} color={btnColor}></Button>
            </View>
        )
    }

    // 8_ 실습에서 사용할 메소드
    showItemView(): JSX.Element{
        return(
            <View style={{marginTop: 8}}>
                <Text>Hello</Text>
                <Button title='Click!'></Button>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{
        flex: 1,
        padding: 16,
    },
    title:{ fontSize:24, fontWeight:'bold', color:'black'},
    itemView:{ 
        padding:16,
        margin:8,
        borderWidth:1,
        borderRadius:8,
     }
})