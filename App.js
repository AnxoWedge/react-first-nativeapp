import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity,
  TouchableNativeFeedback, Platform, FlatList, SectionList} from 'react-native';
import styles, {version} from './styles/styles';
import dictionary from './strings/strings';
import Agradecimento from './components/Agradecimento.js'
import MyTextArea from './componentsLiftState/MyTextArea'
import RandoBtn from './componentsLiftState/RandomizeButton'


export default class App extends React.Component {
  constructor(props){
  super(props)
  this.state={
    text:"",
  }
this.handleRando = this.handleRando.bind(this)
this.handleBtnRandoClick = this.handleBtnRandoClick.bind(this)

}

handleRando () {
  console.log('handlerino')
}
handleBtnRandoClick () {
  console.log('CLICKERINO')
}
  render() {
    return (
      <View style={styles.masterContainer}> 
        <MyTextArea text= "fhuewifh"/>
        <RandoBtn onMyPress={this.handleRando} />
        <RandoBtn onMyPress={this.handleBtnRandoClick} />
        <RandoBtn/>
      </View>
    );
  }
}


