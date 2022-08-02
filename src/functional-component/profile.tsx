import React from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View, Image, Platform, ActivityIndicator, Dimensions } from 'react-native';

export default function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text>This is My ProfileScreen</Text>
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