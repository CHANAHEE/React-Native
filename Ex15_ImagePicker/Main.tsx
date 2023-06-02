// 1_ React Native 는 사진앱 or 카메라앱을 실행하는 기능이 없음. 
// 그래서 라이브러리를 사용해야함. : react-native-image-picker

// 2_ 라이브러리가 외부저장소 사용에 대한 퍼미션을 알아서 처리하기에 별도의 추가작업 필요 없음. 

import React, { useState } from "react";
import { View, Text, Image, Button, Alert, StyleSheet, ImageURISource } from 'react-native'


// 7_ 일단 카메라 앱이랑 앨범을 실행시키는 라이브러리 부터 import 하자. 
import { launchCamera, launchImageLibrary, CameraOptions, ImagePickerResponse, ImageLibraryOptions, Asset } from "react-native-image-picker";

export default function Main(): JSX.Element{
    // 3_ Uri 값을 보여주기 위해 Text를 만들었고, Uri 는 내가 선택한 사진에 따라 바뀌니까 state 변수로 만들어주자. 
    // 단, functional component 니까 state 변수가 없다. 그래서 useState 사용.

    // 4_ imgUri 는 uri 를 가지고 있는 객체가 전달되야 한다. 
    const [imgUri,setImgUri] = useState<ImageURISource>({uri:'https://cdn.pixabay.com/photo/2023/05/22/11/22/superb-fairywren-8010454__340.jpg'})

    // 6_ 함수 2개 만들었다. 변수인데, 함수를 가지고 있는 변수임. 
    const showCamera = ()=>{

        // 8_ option 객체만들어서 파라미터로 전달하자.
        const option: CameraOptions = {
            mediaType: 'photo',
            cameraType: 'back',
            saveToPhotos: true,
            quality: 1,
            videoQuality: 'high',
        }

        // 9_ 촬영결과를 콜백 메소드로 처리해보자. 설명서도 그렇게 적혀있음. 
        launchCamera(option,(response: ImagePickerResponse)=>{
            if(response.didCancel) Alert.alert("촬영 취소")
            else if(response.errorMessage) Alert.alert('Error : ' + response.errorMessage)
            else{
                // 10_ 이곳에 왔다면 이미지가 잘 촬영된것. 
                // 촬영된 이미지는 response 객체의 assets 라는 속성에 전달되었음. 
                if(response.assets != null){
                    // 11_ 선택된 이미지 객체를 이미지뷰가 보여주는 img 에 저장. 그러기 위해 선택된 이미지의 uri 를 얻어오자.
                    const uri = response.assets[0].uri
                    const source = {uri:uri}
                    setImgUri(source)
                }
            }


        })
    }

    const showGallery = async ()=>{
        // 12_ 이번에는 앨범앱을 실행하는 기능을 만들어보자.
        // 13_ 먼저 옵션객체부터 만들자. 
        const options: ImageLibraryOptions = {
            mediaType: 'mixed',
            // 16_ 여러개를 선택할수 있게끔 옵션을 줄 수도있다. 
            selectionLimit: 5
        }

        // 14_ 이렇게 하면 앨범앱이 켜진다~ 
        // 15_ ES7 의 새로운 문법을 알아보자. asyns-await 문법 [ callback 비동기작업을 동기작업 처럼 처리함. ]
        // 원래는 아래처럼 사용하는게 불가능. launchImageLibrary 는 비동기 콜백함수니까 = 을 통한 데이터 전달이 불가능. 
        // 하지만 이게 가능하게 하기 위해 위 문법이 등장.
        // const response = launchImageLibrary(options)
        const response = await launchImageLibrary(options)

        if(response.didCancel) Alert.alert("선택 취소")
        else if(response.errorMessage) Alert.alert('Error : ' + response.errorMessage)
        else{
            if(response.assets != null){
                const uris: Asset[] = []
                response.assets.forEach((value)=>uris.push(value))
                
                // 17_ 원래는 여러개 이미지를 FlatList 를 이용하여 보여줘야 하지만, 시간상 첫번째 이미지만 보여주고 끝내자.
                setImgUri(uris[0])
            }
        }
    }

    return(
        <View style={style.root}>
            <Image source={imgUri} style={style.image}></Image>
            {/* 5_ 이제 버튼을 클릭했을 때 반응을 해야하니.. 별도의 함수를 만들어서 로직을 짜보자. */}
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button title="camera" onPress={showCamera}></Button>
                <Button title="Gallery" onPress={showGallery}></Button>
            </View>

            <Text style={style.text}>{imgUri.uri}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1,
        padding: 16,
    },
    text:{
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    image:{
        flex:1,
        alignItems: 'stretch',
        marginBottom: 40,
        backgroundColor: '#000000'
    }
})