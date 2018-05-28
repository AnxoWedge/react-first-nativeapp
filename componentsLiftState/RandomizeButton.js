import React from 'react'
import {TouchableHighlight, Text} from 'react-native'



class RandoBtn extends React.Component {
    constructor(props){
        super(props)
        this.handlePress = this.handlePress.bind(this)
    }

    handlePress(){
        !this.props.onMyPress || this.props.onMyPress()
    }
    render(){
        return <TouchableHighlight onPress={this.handlePress}><Text>Out of Touch </Text></TouchableHighlight>
    }
}

export default RandoBtn