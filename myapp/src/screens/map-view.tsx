import { collection, GeoPoint, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, View, Dimensions, ActivityIndicator, Text } from 'react-native';
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({navigation}:any) {
    const [crossingList, setCrossingList] = useState([]);
    const getCrossings = async () => {
        let documents:any = [];
        try{
          const db = getFirestore();
          const querySnapshots = await getDocs(collection(db,"crossings"));
     
          querySnapshots.forEach((doc)=>{
            const docData = doc.data();
            documents.push(docData);
          })
          setCrossingList(documents);
          // console.log(documents)
          console.log(documents[0]["location"]["latitude"])
        }
        catch(error) {
          console.log("Something went wrong..");
        }
      }

    useEffect(()=>{
      getCrossings();
    }, [])

    

    const list = crossingList.length !=0 ? crossingList.map((element, index)=> {
      console.log(index);
      console.log(element["location"]["latitude"]+'\t'+element["location"]["longitude"])
      return (
        <Marker key={index}
            coordinate={{
                latitude: element["location"]["latitude"] != null ? element["location"]["latitude"] : 30.9024029,
                longitude: element["location"]["longitude"] != null ? element["location"]["longitude"] : 75.8201689,
            }}
            title= {element["name"]}
            // description= {String(element["status"])}
            description={element["location"]["latitude"]+'\t'+element["location"]["longitude"]}
            pinColor="red"
            tappable
        >
        </Marker>
      )
    }) : <ActivityIndicator/>

    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
          initialRegion= {{
          latitude: 30.9024029,
          longitude: 75.8201689,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}>{list}</MapView>
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
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  