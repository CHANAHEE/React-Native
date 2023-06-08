import React, {useState, useEffect} from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import BigCatalog from './BigCatalog'

type Props = {
    url: string
}

export default function BigCatalogList(props: Props): JSX.Element{

    // REST API 를 이용(GET 방식)하여 파싱한 영화 데이터를 state 변수로 만들자. 
    const [movies,setMovies] = useState([])
    const loadData = ()=>{

        // 전달받은 url 을 통해 json 으로 인기 영화 정보를 읽어오자.
        fetch(props.url)
        .then(response=>response.json())
        .then(json=>setMovies(json.data.movies))
    }


    // 화면이 처음 보여지거나 갱신될 때 자동 호출되는 Hooks 기술 
    useEffect(()=>loadData())

    return(
        <View style={style.container}>
            <FlatList 
                horizontal={true}
                pagingEnabled={true}
                data={movies} 
                renderItem={(obj)=>{
                    return(
                        <BigCatalog movie={obj.item}></BigCatalog>
                    )
                }}></FlatList>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        height: 300,
        marginBottom: 8,
    },
})