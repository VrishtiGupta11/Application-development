import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Hooks() {
    const [counter, setCounter] = useState(0);
    const [numbers, setNumbers] = useState([4, 1, 6, 9, 7]);
    
    const increment = (() => {
        console.log("CounterCounter "+counter);
        setCounter(counter+1);
        console.log("CounterCounter "+counter);
    })
    const sortNumbers = (() => {
        // setNumbers([...[], numbers.sort()]);
        console.log("NumbersNumbers " + numbers)
    })

    // useEffect(()=>{
    //     // let num = [4, 1, 6, 9, 7];
    //     numbers.sort()
    //     setNumbers(numbers);
    // });

    return (
        <View style={styles.container}>
            <Text>{counter+'\n'}</Text>
            <Button title="+" onPress={increment}></Button>
            <Text>{numbers + '\t'}</Text>
            <Button title="Sort" onPress={sortNumbers}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textStyle: {
      color: "grey",
      margin: 20,
      fontSize: 25,
    }
  });
  
  