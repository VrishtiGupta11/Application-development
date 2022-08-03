import { StatusBar } from "expo-status-bar";
import { Component, ReactNode, useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View, Image, Platform, ActivityIndicator } from 'react-native';

export default function App() {

  /*
  {
   "error_message" : "You must enable Billing on the Google Cloud Project at https://console.cloud.google.com/project/_/billing/enable Learn more at https://developers.google.com/maps/gmp-get-started",
   "html_attributions" : [],
   "results" : [],
   "status" : "REQUEST_DENIED"
  }
  */
  // https://developers.google.com/maps/documentation/places/web-service/usage-and-billing?hl=en-GB

  const url = "https://api.openweathermap.org/data/2.5/weather?lat=30.9010&lon=75.8573&appid=7bf36f813b6feb04163c72cde855a6e9"
  const [showIndicator, setIndicator] = useState(true);

  const getWhetherInfoFromAPI = async () => {
    try {
      const responseFromAPI = fetch(url).then((response) => response.json());
      console.log("responseFromAPI is: ");
      console.log(responseFromAPI);
      setIndicator(false);
    }
    catch(error) {
      console.error("Something Went Wront: " + error);
    }
  }

  useEffect(() => {getWhetherInfoFromAPI()}); // Jaise hi screen khule to BG me

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}><Text style={styles.headerText}>Weather Forecast</Text></View>
      {/* <Text style={styles.textStyle}>Welcome</Text> */}
      {/* renderItem is an algo applied on array */}
      {/* {showIndicator ? <ActivityIndicator style={styles.activityIndicator} /> : <FlatList data={news} renderItem={renderItem}></FlatList>} */}
      <Text>Welcome to Wether forecast app</Text>
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
