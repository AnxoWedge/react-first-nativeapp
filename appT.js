import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity,
  TouchableNativeFeedback, Platform, FlatList, SectionList} from 'react-native';
import styles, {version} from './styles/styles';
import dictionary from './strings/strings';
import Agradecimento from'./components/Agradecimento.js'


export default class App extends React.Component {
  constructor(props){
  super(props)
  this.state={
    text:"",
  }}
  render() {
    return (
      <View style={styles.masterContainer}> 
      
      </View>
    );
  }
}


