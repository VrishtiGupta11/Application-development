import React, { useEffect } from 'react'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { List, Colors, Card } from 'react-native-paper';
import { collection, getDoc, getDocs, getFirestore } from 'firebase/firestore';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { Button, IconButton,List,Colors } from 'react-native-paper';
// import { List,Icon } from 'react-native-paper/lib/typescript/components/List/List';
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

// Icons from react native paper
// https://materialdesignicons.com/

export default function HomeScreen() {

  const getCrossings = async () => {
    try{
      const db = getFirestore();
      const documents = [];
      const querySnapshots = await getDocs(collection(db, "crossings"));
      querySnapshots.forEach((doc)=>{
        console.log(doc.id + " => " + doc.data);
        const docData = doc.data();
        documents.push(docData);
      })
    }
    catch(error) {
      console.log("Something went wrong..");
    }
  }
    

  useEffect(()=>{
    getCrossings();
  })

    return (
      <View style={styles.container}>
        <Text>Welcome to Home</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'black',
      padding: 20,
    },

    editText: {
      fontSize: 17,
      color: Colors.blue500, 
      textAlign: "right", 
      marginTop: 10,
      marginBottom: 15,
    },

    cardContainer: {
      width: Platform.OS === "android" ? "100%": "50%",
      alignSelf: "center",
      flexDirection: 'row',
      justifyContent: "center"
    },

    card: {
      width: Platform.OS === "android" ? "48%": "100%",
      // height: 85,
      flexDirection: 'row',
      backgroundColor: Colors.grey900,
      margin: 8,
      padding: 10,
      borderRadius: 10,
      justifyContent: "space-between",
    },

    icon: {
      alignSelf: "center",
      top: -12,
    },
    
    cardText: {
      fontSize: 16,
      color: Colors.grey500,
      marginTop: 12
    },

    text: {
      color: Colors.white,
      fontSize: 25,
      fontWeight: 'bold',
      marginRight: 10,
      marginLeft: 20,
    },
    
    circle: {
      height:32, 
      width:32, 
      borderRadius:15,
    },

    listContainer: {
      width: "100%",
      // height: 100,
      backgroundColor: Colors.grey900,
      flexDirection: "column",
      margin: 10,
      borderRadius: 15,
      alignSelf: "center"
    }, 

    listItem: {
      alignItems: "center",
      flexDirection: "row",
      paddingLeft: 10,
      justifyContent: "space-between",
    },

    listText: {
      fontSize: 18,
      color: Colors.grey300,
      marginLeft: 20,
    },

    listItemLeft: {
      alignItems: "center",
      flexDirection: "row",
    },

    divider: {
      height: 1,
      width: "80%",
      backgroundColor: Colors.grey800,
      alignSelf: "flex-end",
      marginRight: 15,
      marginBottom: 2,
    }
  });


  // TODO
  // Icon on app bar to show map view containing marker on map in accordance with latitude and longitude fetched from firestore.