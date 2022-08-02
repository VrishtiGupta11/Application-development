import { StatusBar } from "expo-status-bar";
import { Component, ReactNode, useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View, Image, Platform, ActivityIndicator, Dimensions } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  // 30.9024029,75.8201689
  // Place marker on the map

  // Create new project
  // Library -> Enable
  // credentials -> Create credentials -> create API key

  // https://docs.expo.dev/versions/latest/sdk/map-view/

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion= {{
            latitude: 30.9024029,
            longitude: 75.8201689,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
      > 
      <Marker 
        coordinate={{
          latitude: 30.9024029,
          longitude: 75.8201689,
        }}
        description="Software Company"
        pinColor="red"
        title="Auribises"
        tappable
      >

      </Marker>
      </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
