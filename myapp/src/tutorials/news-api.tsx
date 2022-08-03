import { StatusBar } from "expo-status-bar";
import { Component, ReactNode, useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View, Image, Platform, ActivityIndicator } from 'react-native';

const Item = (itemData: any) => (
  <View style={styles.item}>
    <Image style={styles.image} source={{uri: itemData['urlToImage']}}></Image>
    <Text style={styles.title}>{itemData['title']+'\n\n'}</Text>
    <Text style={styles.subTitle}>{itemData['publishedAt']}</Text>
    
  </View>
);

const renderItem = ({item}: any) => (Item(item));

export default function NewsApp() {

  const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5bd64f76020741b5b9abd6114877a79a";
  const [news, setNews] = useState([]);
  const [showIndicator, setIndicator] = useState(true);

  // It runs in background
  const getNewsFromNewsAPI = async () => {
    try {
      const responseFromAPI = await fetch(url)
      // const responseFromAPI = await fetch(url).then(
      //   res=> res.json()
      // )

      // fetch() => send request and get response
      console.log("response from API: "+responseFromAPI);

      const jsonData = await responseFromAPI.json();
      // console.log(jsonData['articles'])
      let articles = jsonData['articles'];
      setNews(articles);
      setIndicator(false);
    }
    catch(error) {
      console.error("Something went wrong: "+error)
    }

  } 

  useEffect(() => {getNewsFromNewsAPI()});

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}><Text style={styles.headerText}>NEWS</Text></View>
      {/* <Text style={styles.textStyle}>Welcome</Text> */}
      {/* renderItem is an algo applied on array */}
      {showIndicator ? <ActivityIndicator style={styles.activityIndicator} /> : <FlatList data={news} renderItem={renderItem}></FlatList>}
      {/* <Text>Welcome to news app</Text> */}
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10
    // margin: 10
  },

  background: {
    backgroundColor: '#fae',
    fontSize: 24,
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#DCDBDB2B',
    padding: 10,
    margin: 10,
    width: Platform.OS === "android" ? "95%": "60%",
    alignSelf: 'center',
    elevation: 1,
    borderRadius: 10,
    shadowColor: '#6E69692C',
    shadowOffset: {height: 6, width: 4},
  },

  title: {
    fontSize: 15,
    color: '#',
  },

  subTitle: {
    fontSize: 12,
    color: '#7C7373',
  },

  circle: {
    height: 17,
    width: 17,
    borderRadius: 20,
    backgroundColor: "#8E8686",
    marginRight: 10
  },

  circleTitle: {
    flex: 1,
    flexDirection: "row",
  },

  button: {
    borderRadius: 10,
    height: 30,
    width: 100,
    backgroundColor: "#6E696943",
    textAlign: "center",
    justifyContent: 'center',
  },

  image: {
    height: 400,
    width: "100%",
    borderRadius: 10,
  },

  header: {
    height: 80,
    width: "100%",
    backgroundColor: "#D7A6E6",
    justifyContent: "center"
  },

  headerText: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  }, 

  activityIndicator: {
    justifyContent: "center",
  },
});


// Assignment

// Open weather data
// find ATM near me
// google restaurant API - Nearby Search
// book flights -> flight reservatoin API
// IRCTS API