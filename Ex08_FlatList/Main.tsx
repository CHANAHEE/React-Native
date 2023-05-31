import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList, ListRenderItemInfo, TouchableOpacity, Alert, Image} from 'react-native'

export default class Main extends Component{

    // 1_ RN 에서 ListView 의 역할을 하는 컴포넌트는 2가지 종류가 있음.
    // 1) FlatList: 일반적인 리스트뷰
    // 2) SectionList : 섹션에 따라 구분 지어서 리스트할 때 사용

    // 2_ 먼저, FlatList 에서 사용할 대량의 데이터 배열 - 데이터 변경에 실시간 대응하려면 state 사용 
    state: React.ComponentState = {
        // 1) 일단 간단한 string 문자열 배열
        datas: ["aaa","bbb","ccc","ddd","aaa","bbb","ccc","ddd","aaa","bbb","ccc","ddd"], 

        // 8_ 텍스트 2개, 이미지 1개 아이템 뷰 - 데이터들
        items: [
            {name: "sam", message: "Hello World", img: {uri:'https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_640.jpg'}},
            {name: "robin", message: "Hello RN", img: {uri:'https://cdn.pixabay.com/photo/2020/06/14/01/19/poppy-5296176_640.jpg'}},
            {name: "cho", message: "Hello Android", img: {uri:'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_640.jpg'}},
            {name: "mim", message: "Nice to Meet you", img: {uri:'https://cdn.pixabay.com/photo/2015/07/05/13/44/beach-832346_640.jpg'}},
            {name: "anan", message: "Hello Web", img: {uri:'https://cdn.pixabay.com/photo/2015/06/22/08/38/siblings-817369_640.jpg'}},
            {name: "goose", message: "Yahoo", img: {uri:'https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_640.jpg'}},
            {name: "map", message: "Hello Naver", img: {uri:'https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_640.jpg'}},
            {name: "skill", message: "Hello LOOO", img: {uri:'https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_640.jpg'}},
            {name: "roo", message: "안녕하세요", img: {uri:'https://cdn.pixabay.com/photo/2018/05/02/17/22/beach-3369140_640.jpg'}},
            {name: "noo", message: "저는", img: {uri:'https://cdn.pixabay.com/animation/2022/07/29/08/05/08-05-11-359_512.gif'}},
            {name: "android", message: "조성건", img: {uri:'https://cdn.pixabay.com/animation/2023/03/01/15/29/15-29-04-253_512.gif'}},
            {name: "react", message: "입니다.", img: {uri:'https://cdn.pixabay.com/animation/2022/09/12/14/50/14-50-36-1_512.gif'}}
        ]
    }


    render(): JSX.Element {
        return (
            <View style={style.root}>
                <Text style={style.title}>Flat List</Text>

                {/* 3_ FlatList : RN 의 기본 리스트뷰 컴포넌트 */}
                {/* 필수 2개의 속성(props) - data, renderItem */}
                {/* 1) data - FlatList 가 보여줄 대량의 데이터들 지정 */}
                {/* 2) renderItem - 아이템 하나의 모양을 만들어서 리턴하는 콜백함수 지정 */}

                {/* <FlatList 
                    data={this.state.datas} 
                    renderItem={( obj: ListRenderItemInfo<string> )=>{ // 4_ 렌더링할 아이템의 정보를 가지고 있는 객체
                        return(
                            <View>
                                <Text>{obj.index} : {obj.item}</Text>
                            </View>
                        )
                    }}></FlatList> */}

                {/* 5_ 위 renderItem 의 obj 파라미터 객체를 구조분해할당 */}
                {/* <FlatList 
                    data={this.state.datas} 
                    renderItem={( {item,index} )=>{ // 6_ 구조분해할당 : obj 객체의 index, item 멤버를 뽑아올수있음. 
                        return(
                            <View>
                                <Text>{index} : {item}</Text>
                            </View>
                        )
                    }}></FlatList> */}

                {/* 7_ 아이템 클릭 이벤트 처리 */}
                {/* <FlatList 
                    data={this.state.datas} 
                    renderItem={( {item,index} )=> 
                        <TouchableOpacity style={style.itemView} onPress={()=>Alert.alert(item)}>
                            <Text>index : {index}</Text>
                            <Text>data : {item}</Text>
                        </TouchableOpacity> }>

                </FlatList> */}
                
                {/* 9_ 텍스트 2개, 이미지 1개 짜리 아이템 뷰 모양 */}
                <FlatList
                    data={this.state.items}
                    renderItem={({item,index})=>
                        <TouchableOpacity  style={style.item} onPress={()=>this.showAlert(item,index)}>
                            <Image source={item.img} style={style.itemImg}></Image>
                            <View>
                                <Text style={style.itemName}>{item.name}</Text>
                                <Text style={style.itemMessage}>{item.message}</Text>
                            </View>
                        </TouchableOpacity>
                    }>

                </FlatList>
            </View>
        )        
    }

    showAlert=(item: any, index: number)=>{
        Alert.alert(item.name + " : " + index)
    }
}

//스타일객체
const style= StyleSheet.create({
    root: {flex:1, padding:16,},
    title:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:16,
        color:'black',        
    },
    itemView:{
        borderWidth:1,
        borderRadius:8,
        margin:8,
        padding:8,
    },
    item:{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 12,
    },

    itemImg:{
        width: 120,
        height: 100,
        resizeMode: 'cover',
        marginRight: 8,

    },

    itemName:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },

    itemMessage:{
        fontSize: 16,
        fontStyle: 'italic',

    }
})