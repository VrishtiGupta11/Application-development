import React, { useEffect, useState } from 'react'
import { Platform, StatusBar, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { List, Colors, Card, ActivityIndicator, IconButton } from 'react-native-paper';
import { collection, getDoc, getDocs, getFirestore } from 'firebase/firestore';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { Button, IconButton,List,Colors } from 'react-native-paper';
// import { List,Icon } from 'react-native-paper/lib/typescript/components/List/List';
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

// Icons from react native paper
// https://materialdesignicons.com/

export default function HomeScreen({navigation}:any) {

  const [crossingList, setCrossingList] = useState([]);

  const getCrossings = async () => {
    let documents:any = [];
    try{
      const db = getFirestore();
      const querySnapshots = await getDocs(collection(db, "crossings"));

      querySnapshots.forEach((doc)=>{
        // console.log(doc.id + " => " + doc.data);
        const docData = doc.data();
        documents.push(docData);
      })
      // console.log("documents: ");
      // console.log(documents);
      setCrossingList(documents);
    }
    catch(error) {
      console.log("Something went wrong..");
    }
  }

  useEffect(()=>{
    getCrossings();
  }, [])

  let list = crossingList.map((element, index) => {
    // console.log(element);
    return (
      <View key={index} style={styles.cardContainer}>
        {/* {element["phatakImage"] != null ?  */}
        <Image 
            source={{uri: element["phatakImage"]}}
            style={styles.image}
            onError={()=>(<Text>Image Not Found</Text>)}            
            >
        </Image> 
         {/* : <ActivityIndicator/>} */}
        <View style={styles.text}>
          <Text>{element["phatakName"]}</Text>
          {element["status"] == 0 ? 
          <View style={styles.circleStatus}>
            <View style={[styles.circle, {backgroundColor: Colors.green800}]}></View>
            <Text>OPENED</Text> 
          </View> : 
            (element["status"] == 1 ? 
              <View style={styles.circleStatus}>
                <View style={[styles.circle, {backgroundColor: Colors.red800}]}></View>
                <Text>CLOSED</Text> 
              </View> : 
              (element["status"] == 2 ? 
                <View style={styles.circleStatus}>
                  <View style={[styles.circle, {backgroundColor: Colors.green100}]}></View>
                  <Text>OPENING</Text> 
                </View> : 
                <View style={styles.circleStatus}>
                  <View style={[styles.circle, {backgroundColor: Colors.orange800}]}></View>
                  <Text>CLOSING</Text> 
                </View>
              )
            )
          }
        </View>
      </View>
    )
  })
  

    return (
      <ScrollView>
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>PHATAK STATUS</Text>
          <View style={styles.headerIconContainer}>
            <IconButton icon={"map"} color="white"></IconButton>
            <IconButton icon={"logout"} color="white"></IconButton>
          </View>
        </View> */}
        <View style={styles.container}>
          {list}
        </View>
        <IconButton icon={"map"} size={50} style={styles.icon} onPress={() => navigation.navigate('MapScreen')}></IconButton>
      </ScrollView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: "center"
      // justifyContent: "center"
    },

    icon: {
      marginRight: 20,
      alignSelf: "flex-end",
      backgroundColor: Colors.grey400, 
    },

    cardContainer: {
      width: Platform.OS === "android" ? "100%": "30%",
      paddingBottom: 20,
      borderRadius: 20,
      marginBottom: 20,
      backgroundColor: Colors.grey200,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 1, height: 3},
      shadowRadius: 10,
      elevation: 5,
    },

    image: {
      width: "100%",
      height: 200,
      marginBottom: 10,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    }, 

    text: {
      paddingHorizontal: 5,
      flexDirection: "row",
      justifyContent: "space-between",
    },

    circle: {
      height:10, 
      width:10, 
      borderRadius:15,
      top: 5,
      marginRight: 5,
    },

    circleStatus: {
      flexDirection: "row",
      // width: 75,
      justifyContent: "space-between",
    }
  });


  // TODO
  // Icon on app bar to show map view containing marker on map in accordance with latitude and longitude fetched from firestore.