import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


// Functional Component

export default function App() {

  const quotes = [
    "Search the candle rather cursing the darkness.",
    "Be Exceptional",
    "Work hard, Be successful",
    "Work with joy and fill in joy"
  ];

  const [idx, setIndex] = useState(0); // Stateful Screen
  var i = idx%(quotes.length); // initially 

  if(i < 0) {
    i = quotes.length-1;
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textStyle}>{quotes[i]}</Text>
      <Button title='Next Quote' onPress={(event) => setIndex(++i)}></Button> 
      <Button accessibilityLabel='Hi' title='Previous Quote' onPress={(event) => setIndex(--i)}></Button> 
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text>Welcome to React Native with Expo</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  // Display messages of whatsapp 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    color: "red",
    margin: 20,
    fontSize: 25,
  }
});
