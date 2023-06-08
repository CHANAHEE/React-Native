import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, Alert, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// 사용 컴포넌트들 import 
import BigCatalogList from '../components_movie/BigCatalogList'

import { StackScreenProps } from '@react-navigation/stack'
import { MovieNavScreenList } from '../types'
import { TouchableOpacity } from 'react-native-gesture-handler'
type MovieListProps = StackScreenProps<MovieNavScreenList,'MovieList'>

export default function MovieList(props: MovieListProps): JSX.Element{

    // 헤더 모양 설정 = render() 메소드로 UI 완료된 후 설정이 가능함
    // 화면이 그려진 후 발동하는 라이프 사이클 메소드 효과를 주는 Hooks 기술

    const setHeader = ()=>{
        props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerRight: ()=>(
                <TouchableOpacity style={{marginRight: 16}} onPress={()=>Alert.alert('menu')}>
                    <Image source={require('../Images/ic_dot_menu.png')}></Image>
                </TouchableOpacity>  
            ),
            headerLeft: ()=>(
                <TouchableOpacity 
                    style={{marginLeft: 16, flexDirection: 'row', alignItems: 'center'}}
                    onPress={async ()=>{
                        await AsyncStorage.removeItem('email')
                        props.navigation.replace('Intro')
                    }}>
                    <Image source={require('../Images/Tabs/ic_profile.png')}></Image>
                    <Text style={{marginLeft: 4}}>로그아웃</Text>
                </TouchableOpacity>
            )
        })
    }

    useEffect(()=>setHeader())

    // 0. 테스트 목적
    // return(
    //     <View style={style.root}>
    //         <Text>MOVIE LIST</Text>
    //     </View>
    // )

    //인기 영화 정보 불러오는 url [get방식]
    const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

    // 최신등록순 영화 정보 불러오는 url 
    const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
    
    // 평점순 영화 정보 불러오는 url 
    const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
    
    // 다운로드순 영화 정보 불러오는 url 
    const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";
 
    
    // 1. 영화 리스트 화면을 보여주자 
    return(
        <ScrollView style={style.root}>
            {/* 큰 이미지로 가장 높은 선호도를 가진 영화들을 가로 스크롤 되도록(페이징) 보여주기 */}
            {/* 이 작업을 별도의 컴포넌트를 만들어서 제작하면 코드가 분리되어 유지보수가 용이*/}
            <BigCatalogList url={bigUrl}></BigCatalogList>

            {/* 최신등록순, 평점순, 다운로드순 영화목록을 보여주는 작은 사이즈의 가로 스크롤 리스트를 보여주자. */}
            
        </ScrollView>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1, backgroundColor: '#FEFFFF'
    },
    title:{
        padding: 8,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
    }
})