import React,{Component} from 'react'
import {View, Text} from 'react-native'

type Props = {
    message: string,
}

export default class ComponentA extends Component<Props>{
    static defaultProps = {
        message:"no text"
    }
    render(): JSX.Element {
        return(
            <View style={{margin: 8}}>
                <Text style={{color:'black'}}>{this.props.message}</Text>
            </View>
        )
    }
}