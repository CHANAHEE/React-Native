import React,{Component} from 'react'
import {View, Text, Button} from 'react-native'

type Props = {
    onPress: ()=>void
}

export default class ComponentB extends Component<Props>{
    render(): JSX.Element {
        return(
            <View style={{margin: 8}}>
                <Button title='change' onPress={this.props.onPress} ></Button>
            </View>
        )
    }
}