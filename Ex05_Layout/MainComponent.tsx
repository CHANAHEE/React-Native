import React,{Component} from 'react'
import {View} from 'react-native'

export default class MainComponent extends Component{
    render(): JSX.Element {
        return (
            //여러개의 컴포넌트를 배치하려면 큰 뷰그룹이 있어야 함. 왜? return은 1개의 컴포넌트만 가능함

            //1. 3개의 자식뷰 배치하기
            // <View>
            //     {/* 뷰의 사이즈는 width, height 에 숫자나 %를 사용함. 기본단위는 dp */}
            //     <View style={ {width:50, height:50, backgroundColor:'red'} }></View>
            //     <View style={ {width:100, height:100, backgroundColor:'green'} }></View>
            //     <View style={ {width:'70%', height:150, backgroundColor:'blue'} }></View>
            // </View>

            //2. 3개의 자식뷰 높이를 수치값을 주면 해상도에 대응하기 어려움
            //   비율로 높이값 지정하는 것을 권장 . RN에서는 flex 레이아웃을 권장함
            //   화면의 높이를 3분할 하여 1:2:4 가 되도록..
            //   최상위 View의 높이의 기본값은 wrap 임. 즉, 부모 height이 필수
            //   화면 전체를 사용하려면 View의 높이는 수치값을 알기 어려움. 해상도 다르기에.
            //   그래서 flex 로 높이를 지정하길 권장
            // <View style={{flex:1}}>
            //     <View style={{flex:1, backgroundColor:'red'}}></View>
            //     <View style={{flex:2, backgroundColor:'green'}}></View>
            //     <View style={{flex:4, backgroundColor:'blue'}}></View>
            // </View>

            //3. RN의 flex 스타일의 기본 배치방향은 column(세로)방향임.
            //   배치방향을 변경하여 배치해보기 - 가로(row)배치
            //   가로방향으로 1:2:4의 비율로 너비를 지정
            //   flex 스타일의 정렬 중 배치방향의 교차축정렬 align-items 의 기본값이 stretch 여서 100% 높이값이로 보여짐
            // <View style={{flex:1, flexDirection:'row'}}>
            //     <View style={{flex:1, backgroundColor:'red'}}></View>
            //     <View style={{flex:2, backgroundColor:'green'}}></View>
            //     <View style={{flex:4, backgroundColor:'blue'}}></View>
            // </View>

            //4. 자식뷰들의 높이와 너비를 개별지정하여 배치 정렬해보기
            // justifyContent : 배치방향과 같은 축의 정렬
            // alignItems     : 배치방향과 교차 축의 정렬 [stretch(기본값) - 남은 공간만큼 뷰의 크기를 늘림. 단, width/height 이 없을 때 적용]
            // <View style={ {flex:1, flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'} }>
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            //4.2 가로배치 일 때의 정렬
            // <View style={ {flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'} }>
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green', alignSelf:'flex-end'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            //     {/* 자식 중에서 1개만 다른 정렬을 하고 싶을때.. justifySelf, alignSelf */}
            // </View>

            //5. 자식뷰들의 너비나 높이를 하나만 주고 나머지는 flex 로 비율로 크기 지정
            // <View style={{flex:1, flexDirection:'column'}}>
            //     <View style={{height:50, backgroundColor:'red'}}></View>

            //     {/* 남은 공간을 1:2 의 비율로 높이값 지정 */}
            //     <View style={{flex:1, backgroundColor:'green'}}></View>
            //     <View style={{flex:2, backgroundColor:'blue'}}></View>
            // </View>

            //6. 중첩 구조의 배치 .. 수직/수평의 중첩
            // 뷰들이 겹치려면? flex 스타일을 뷰의 겹침을 허용하지 않음. 
            // 뷰를 겹치려면. position 속성 이용. RN 의 모든 컴포넌트는 기본 position 이 relative 로 설정. 
            <View style={{flex:1, flexDirection:'column'}}>
                {/* 크게 수직으로 2분할 [ 1:2 비율 ] */}

                {/* 6.1 상단 1의 영역 */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 좌우 2:1 분할 */}
                    <View style={{flex:2, backgroundColor:'red'}}>
                        {/* 절대 위치 지정으로 뷰 겹치기 */}
                        <View style={{width: 50, height: 50, backgroundColor:'white', left:10, top:10, position:'absolute'}}></View>
                        <View style={{width: 50, height: 50, backgroundColor:'gray', left:20, top:20,position:'absolute'}}></View>
                    </View>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <View style={{flex:1, backgroundColor:'yellow'}}></View>
                        <View style={{flex:1, backgroundColor:'green'}}></View>
                    </View>
                </View>

                {/* 6.2 하단 2의 영역 */}
                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 좌우 1:2 분할 */}
                    <View style={{flex:1, backgroundColor:'blue'}}></View>
                    <View style={{flex:2}}>
                        <View style={{flex:1, backgroundColor:'gray'}}></View>
                        <View style={{flex:1, backgroundColor:'brown'}}>
                            {/* 절대 위치 지정으로 뷰 겹치기 */}
                            <View style={{width: 50, height: 50, backgroundColor:'white', left:10, top:10, position:'absolute'}}></View>
                            <View style={{width: 50, height: 50, backgroundColor:'gray', left:20, top:20,position:'absolute'}}></View>
                        </View>
                    </View>
                </View>

                {/* 절대 위치 지정으로 뷰 겹치기 */}
                <View style={{width: 100, height: 100, backgroundColor: 'aqua', position: 'absolute', bottom:20, right: 20, borderRadius: 50}}></View>
            </View>

        )        
    }
}