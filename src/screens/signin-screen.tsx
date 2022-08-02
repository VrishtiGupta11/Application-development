import React from 'react'
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function SignInScreen({navigation}: any) {
    return (
      <View style={styles.container}>
        <Text>This is My SignIn Screen</Text>
        <TextInput style={styles.input}> Name </TextInput>
        <TextInput style={styles.input}> Email </TextInput>
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

    input: {

    }
  });