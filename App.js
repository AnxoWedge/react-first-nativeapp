import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Agradecimento = ({pessoa}) => {
  return <View>
    <Text>Olá! {pessoa}</Text>
    </View>
}


export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
         <View> 
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developdfder menu.</Text>
          <Image source={{uri:'http://www.arcadenoe.pt/img/race/big_978.jpg'}}
                style={{width: 221, height: 228}}/> 
          <Agradecimento pessoa="quack"/>
          <Agradecimento pessoa="woof woof"/>
          <Agradecimento pessoa="meow meow"/>
          <Agradecimento pessoa="kwiwi"/>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  textStyle:{
    fontSize:16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
