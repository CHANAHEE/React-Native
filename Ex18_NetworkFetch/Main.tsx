import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, Alert} from 'react-native'
 
export default function Main(): JSX.Element{

    const [message, setMessage] = useState('')

    // 13_ 영화정보 1개의 타입
    type MovieInfo = {
        id: string,
        title: string,
        releaseYear: string,
    }

    // 11_ RN 개발자 사이트의 movies.json 파일 응답 객체 정보 
    // 12_ 이 응답객체의 타입을 미리 지정해두자. 
    type MoviesResponse = {
        title: string,
        description: string,
        movies: MovieInfo[]
    }

    
    const [movieResponse, setMoviesResponse] = useState<MoviesResponse>({title:'',description:'',movies:[]})
    const getMessage = ()=>{
        console.log('fetch start...')

        
        // // 1. JavaScript 의 네트워크 작업 객체 : XMLHttpRequest
        // const xhr = new XMLHttpRequest()
        // // 2_ 서버의 응답 결과를 받을때 반응하는 콜백 메소드를 등록해야 한다. 이 메소드는 send() 하기 이전에 미리 작성해두어야 함. 
        // xhr.onreadystatechange = ()=>{
        //     // 3_ 서버의 응답은 여러개 올 수 있음. 
        //     if( xhr.readyState == 4 && xhr.status == 200){
        //         Alert.alert("응답 완료!")
        //         setMessage( xhr.responseText )
        //     }
        // }

        // xhr.open('GET','http://tjdrjs0803.dothome.co.kr/index.html',true)
        // xhr.send()

        // 4_ fetch() 함수 - JS 에 기본으로 내장된 네트워크 통신 라이브러리
        // fetch('http://tjdrjs0803.dothome.co.kr').then((response: Response)=>{
            
        //     setMessage( response.status.toString() ) // 5_ 결과가 200 이면 OK!
        // })

        // 6_ 응답 결과를 text 로 받아보기
        // fetch('http://tjdrjs0803.dothome.co.kr')
        // .then((response: Response)=>{
        //     // 7_ 응답 객체에게 응답 결과를 글씨로 바꿔달라고 요청 - 비동기 작업 
        //     return response.text()
        // }).then((text: string)=>{
        //     setMessage(text)
        // }).catch((error)=>{ // 8_ 위 작업 중 하나에서 에러 발생하면 실행되는 영역 
        //     Alert.alert(error)
        // })

        // 9_ 위 then() 메소드의 파라미터 화살표 함수의 축약 표현 
        // fetch('http://tjdrjs0803.dothome.co.kr').then(response=>response.text()).then(text=>setMessage(text))

        // 10_ Open API - JSON 파싱
        // 우선 facebook 에서 샘플로 제공하는 json 파일 파싱 실습
        // fetch('https://reactnative.dev/movies.json')
        // .then(res=>res.text()).then(text=>setMessage(text))

        // 14_ json 파싱 
        fetch('https://reactnative.dev/movies.json')
        .then(res=>res.json())
        .then(obj=>setMoviesResponse(obj))

        // 17_ HTTP Request Method ... fetch 
        let name = "sam"
        let message = "hello"

        // (1) GET 방식 : aaa.php 는 있다고 치고.. 코드만 작성해보자.
        fetch(`http://tjdrjs0803.dothome.co.kr/aaa.php?name=${name}&msg=${message}`)
        .then(res=>res.text()).then(text=>setMessage(text))

        // (2) POST 방식 
        fetch('http://tjdrjs0803.dothome.co.kr/bbb.php', {
            method:'POST',
            headers:{'Content-type':'application/x-www-form-urlencoded'},
            body: `name=${name}&msg=${message}`
        })
        .then(res=>res.text()).then(text=>setMessage(text))

        // (3) POST 로 보낼 데이터가 객체일때는 그냥 json 문자열로 변환하여 서버로 보냄. 
        let person = {name: 'robin', age: 20, address: 'seoul'}
        fetch('http://tjdrjs0803.dothome.co.kr/ccc.php',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(person) // 18_ object --> json
        })
        .then(res=>res.json).then(obj=>Alert.alert("json 파싱된 객체 받음"))
        
    }
    return(
        <View style={style.root}>
            <Button title="fetch data" onPress={getMessage}></Button>
            <ScrollView style={style.container}>
                <Text style={style.text}>{ message }</Text>
            </ScrollView>

            {/* 15_ 영화정보 리스트 */}
            <View style={{flex:1,marginTop:6}}>
                <Text style={{color:'black', fontWeight:'bold', padding: 8, textAlign: 'center'}}>영화정보 리스트</Text>
                {/* 16_ 영화 movies 는 여러개... FlatList 컴포넌트 써야 하지만.. */}
                {
                    movieResponse.movies.map(movie=>{
                        return (
                            <View style={style.item}>
                                <Text>{movie.id}</Text>
                                <Text>{movie.title}</Text>
                                <Text>{movie.releaseYear}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex:1,padding:16
    },
    container:{
        marginTop: 16
    },
    text:{
        padding: 8,color: 'black'
    },
    item:{
        borderWidth: 1, borderRadius: 4, padding: 8, margin: 2
    }
})