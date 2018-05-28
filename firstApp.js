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
      <View style={{flex:5, backgroundColor:'#ff0',}}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'F', data: ['Francisca', 'Felipe',' Fernando',' FQuack', 'Ferodo', 'Faris', 'Ferdinando', 'Filomena','Francisca', 'Felipe',' Fernando',' FQuack', 'Ferodo', 'Faris', 'Ferdinando', 'Filomena','Francisca', 'Felipe',' Fernando',' FQuack', 'Ferodo', 'Faris', 'Ferdinando', 'Filomena',]},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>

      <View style={{flex:5 , backgroundColor:'#fff',}}>
        <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />

      </View>
        <View style={{flex:1}}>
            <TextInput style={{height:40}} placeholder="rfgdfg" onChangeText={(text)=> this.setState({text})}>
            </TextInput>
            <Text style={{padding:10, fontSize:42}}>{this.state.text.split(' ').map((word)=> word && '🍕').join('')}</Text>
            <View style={{width:100}}>
              <Button onPress={()=> {
              Alert.alert('quack');
              }}
              title='PRESS THEE'
              >
              </Button>
            </View>
            <TouchableOpacity onPress={()=> {
            Alert.alert('quack');
            }}>
            <Text>
            QUACK
            </Text>
            </TouchableOpacity>
          </View>

          <TouchableNativeFeedback
              onPress={()=> {}}
              >
            <View style={styles.button}>
              <Text style={styles.buttonText}>{Platform.OS === 'android' ? 'é um quackoid' : 'nope'}</Text>
              <Text style={styles.buttonText}>{Platform.OS === 'ios' ? 'é um quackios' : 'nope'}</Text>
            </View>
          </TouchableNativeFeedback>

         <View style={{flex:2, backgroundColor:'#eee'}}>     
          <ScrollView>
            <View style={styles.container}> 
              <Text style={styles.textStyle}> {version} Open up App.js to start working on your app!</Text>
              <Text style={[styles.textRed,styles.textStyle]}>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
              <Text>Shake your phone to open th developer menu.</Text>
              <Text>Shake your phone to open the developdfd er menu.</Text>
              
              <Image source={{uri:'http://www.arcadenoe.pt/img/race/big_978.jpg'}}
                    style={[{width: 221, height: 228}, styles.image]}/>
              <Agradecimento pessoa="quack"/>
              <Agradecimento pessoa="woof woof"/>
              <Agradecimento pessoa="meow meow"/>
              <Agradecimento pessoa="kwiwi"/>
            </View>
          </ScrollView>
         </View>
      </View>
    );
  }
}


