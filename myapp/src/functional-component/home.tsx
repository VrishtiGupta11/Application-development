import React from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View, Image, Platform, ActivityIndicator, Dimensions } from 'react-native';

export default function HomeScreen({navigation}:any) {
    return (
      <View style={styles.container}>
        <Text>This is My HomeScreen</Text>
        <Button title="Go To Profile" onPress={() => navigation.navigate("Profile")}></Button>
      </View>
    )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });