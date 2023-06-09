import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import { MovieInfo } from '../types'

type Props = {
    movie: MovieInfo,
    onPress?: (id: string)=>void | undefined,
}


export default function BigCatalog(props: Props): JSX.Element{
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={()=>props.onPress!!(props.movie.id)}>
            <Image 
                source={{uri:props.movie.large_cover_image}} 
                style={{width: Dimensions.get('window').width, height: 300}}></Image>
                {/* 이미지와 겹쳐서 배치해야함. */}
            <View style={style.infoContainer}>
                <Text style={style.labelYear}>{props.movie.year}년 개봉</Text>
                <View style={style.labelContainer}>
                    <Text style={style.labelTitle}>{props.movie.title}</Text>
                    <Text style={style.labelGenres}>{props.movie.genres.join(', ')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    infoContainer:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'flex-start'
    },
    labelYear:{
        color:'white',
        padding: 8,
        fontWeight: 'bold',
        marginLeft: 4,
        backgroundColor: '#E70915'
    },
    labelContainer:{
        backgroundColor: '#141414',
        width: '100%',
        padding: 8,
        opacity: 0.8
    },
    labelTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        padding: 8,
    },
    labelGenres:{
        fontSize: 12,
        color: 'white',
        padding: 8,
    }
})