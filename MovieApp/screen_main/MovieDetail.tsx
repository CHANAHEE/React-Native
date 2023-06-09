import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack'
import { MovieInfo, MovieNavScreenList } from '../types'
import { ScrollView } from 'react-native-gesture-handler'
import BigCatalog from '../components_movie/BigCatalog'
type MovieDetailProps = StackScreenProps<MovieNavScreenList,'MovieDetail'>

export default function MovieDetail(props: MovieDetailProps): JSX.Element{

    // // 0. 테스트 목적
    // return(
    //     <View style={style.root}>
    //         <Text>MOVIE DETAIL</Text>
    //     </View>
    // )

    // 상세페이지 제작

    // 영화정보들을 저장할 변수
    const [movie,setMovie] = useState<MovieInfo>()

    const loadData = ()=>{
        const {id} = props.route.params!! // 구조분해할당

       
        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        .then( res=>res.json() )
        .then( json=>setMovie(json.data.movie))
    }

    useEffect(()=>loadData())
    
    return movie?
    (
        <ScrollView style={style.root}>
            {/* 1. 상세화면의 큰 이미지는 BigCatalog 를 재사용 할 예정 */}
            <BigCatalog movie={movie} onPress={()=>{}}></BigCatalog>

            {/* 2. 영화정보 출력 영역 */}
            <View>
                <Text style={style.title}>영화정보</Text>
                <View style={style.infoContainer}>
                    <Text>{movie.runtime}분</Text>
                    <Text>평점 : {movie.rating}</Text>
                    <Text>좋아요 : {movie.like_count}</Text>
                </View>
            </View>
            {/* 3. 줄거리 출력 영역 */}
            <View>
                <Text style={style.title}>줄거리</Text>
                <Text style={style.description}>{movie.description_full}</Text>
            </View>
            {/* 4. 배우 캐스팅 정보출력 영역 */}

            {/* 5.  */}
        </ScrollView>
    ) :
    (
        <View style={style.loadingContainer}>
            <ActivityIndicator size='large' color='#270915'></ActivityIndicator>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1,
    },
    loadingContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 24,
        paddingRight: 16,
        paddingLeft: 16,
        paddingBottom: 8,
    },
    infoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    description:{
        paddingLeft: 16,
        paddingRight: 16,
    }
})