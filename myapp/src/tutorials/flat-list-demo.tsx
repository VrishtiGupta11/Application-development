// pendrive songs - > circular LL
// phone logs -> doubly LL

import { StatusBar } from "expo-status-bar";
import { Component, ReactNode, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

// const flights = [
//   {
//     name: "GoFirst",
//     from: "Delhi",
//     to: "Bangalore",

//   },
// ];

// JSON Object list
// Component -> ListView contains List items
// FlatList will genearate list

const gallary = [
  {
    name: "Image 1",
    timeStamp: "2 July 2022 7:16pm",
    extension: "png",
    size: "274.26KB",
    height: 12,
    width: 12,
    folder: "Screenshots"
  },
  {
    name: "Video 1",
    timeStamp: "2 July 2022 7:18pm",
    extension: "mp4",
    size: "274.26KB",
    height: 11,
    width: 1,
    folder: "Video"
  },
  {
    name: "Image 2",
    timeStamp: "2 July 2022 7:20pm",
    extension: "jpg",
    size: "274.26KB",
    height: 1411,
    width: 720,
    folder: "Camera"
  }
]

const Item = (itemData: any) => (
  <View style={styles.item}>
    <View style={styles.circleTitle}>
      <View style={styles.circle}></View>
      <Text style={styles.title}>{itemData['timeStamp']+'\n\n'}</Text>
    </View>
    <View style={styles.circleTitle}>
      <View style={styles.circle}></View>
      <Text style={styles.title}>{itemData['name']}</Text>
    </View>
    <Text style={styles.subTitle}>{'/'+itemData['folder']+'/'+itemData['name']}</Text>
    <Text style={styles.subTitle}>{itemData['width']}X{itemData['height']+'\t'+itemData['size']}</Text>
  </View>
);

const renderItem = ({item}: any) => (Item(item));



export default function App() {

  // let [sort, setSort] = useState(gallary);
  let [isSorted, setIsSorted] = useState(false);


  function sortGallary() {
    for(let i=0; i<gallary.length; i++) {
      for(let j=0; j<gallary.length-i-1; j++) {
        if(gallary[j]["height"]*gallary[j]["width"] < gallary[j+1]["height"]*gallary[j+1]["width"]) {
          let temp = gallary[j];
          gallary[j] = gallary[j+1];
          gallary[j+1] = temp;
        }
      }
    }
    console.log(gallary);
    setIsSorted(true);
  }

  const button = () => (
    <TouchableHighlight onPress={() => {sortGallary()}}>
      <View style={styles.button}>
        <Text style={{fontSize: 15}}>SORT</Text>
      </View>
    </TouchableHighlight>
  )

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text style={styles.textStyle}>Welcome</Text> */}
      {/* renderItem is an algo applied on array */}
      {button()}
      <FlatList data={gallary} renderItem={renderItem}></FlatList>  
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  background: {
    backgroundColor: '#fae',
    fontSize: 24,
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#DCDBDB2B',
    padding: 20,
    margin: 10,
    width: 300,
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
});



// // pendrive songs - > circular LL
// // phone logs -> doubly LL

// import { StatusBar } from "expo-status-bar";
// import { Component, ReactNode, useState, useEffect } from "react";
// import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

// // const flights = [
// //   {
// //     name: "GoFirst",
// //     from: "Delhi",
// //     to: "Bangalore",

// //   },
// // ];

// // JSON Object list
// // Component -> ListView contains List items
// // FlatList will genearate list

// const gallary = [
//   {
//     name: "Image 1",
//     timeStamp: "2 July 2022 7:16pm",
//     extension: "png",
//     size: "274.26KB",
//     height: 12,
//     width: 12,
//     folder: "Screenshots"
//   },
//   {
//     name: "Video 1",
//     timeStamp: "2 July 2022 7:18pm",
//     extension: "mp4",
//     size: "274.26KB",
//     height: 11,
//     width: 1,
//     folder: "Video"
//   },
//   {
//     name: "Image 2",
//     timeStamp: "2 July 2022 7:20pm",
//     extension: "jpg",
//     size: "274.26KB",
//     height: 1411,
//     width: 720,
//     folder: "Camera"
//   }
// ]

// const Item = (itemData: any) => (
//   <View style={styles.item}>
//     <View style={styles.circleTitle}>
//       <View style={styles.circle}></View>
//       <Text style={styles.title}>{itemData['timeStamp']+'\n\n'}</Text>
//     </View>
//     <View style={styles.circleTitle}>
//       <View style={styles.circle}></View>
//       <Text style={styles.title}>{itemData['name']}</Text>
//     </View>
//     <Text style={styles.subTitle}>{'/'+itemData['folder']+'/'+itemData['name']}</Text>
//     <Text style={styles.subTitle}>{itemData['width']}X{itemData['height']+'\t'+itemData['size']}</Text>
//   </View>
// );

// const renderItem = ({item}: any) => (Item(item));



// export default function App() {

//   let [sort, setSort] = useState(gallary);
//   // let [isSorted, setIsSorted] = useState(false);


//   function sortGallary() {
//     for(let i=0; i<sort.length; i++) {
//       for(let j=0; j<sort.length-i-1; j++) {
//         if(sort[j]["height"]*sort[j]["width"] < sort[j+1]["height"]*sort[j+1]["width"]) {
//           let temp = sort[j];
//           sort[j] = sort[j+1];
//           sort[j+1] = temp;
//         }
//       }
//     }
//   }

//   const button = () => (
//     <TouchableHighlight onPress={() => {sortGallary(); setSort(sort)}}>
//       <View style={styles.button}>
//         <Text style={{fontSize: 15}}>SORT</Text>
//       </View>
//     </TouchableHighlight>
//   )

//   useEffect(() => {
//     sortGallary(); 
//     setSort(sort)
//   })

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       {/* <Text style={styles.textStyle}>Welcome</Text> */}
//       {/* renderItem is an algo applied on array */}
//       {button()}
//       <FlatList data={sort} renderItem={renderItem}></FlatList>  
//       </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20
//   },

//   background: {
//     backgroundColor: '#fae',
//     fontSize: 24,
//     marginBottom: 20,
//   },

//   item: {
//     backgroundColor: '#DCDBDB2B',
//     padding: 20,
//     margin: 10,
//     width: 300,
//     elevation: 1,
//     borderRadius: 10,
//     shadowColor: '#6E69692C',
//     shadowOffset: {height: 6, width: 4},
//   },

//   title: {
//     fontSize: 15,
//     color: '#',
//   },

//   subTitle: {
//     fontSize: 12,
//     color: '#7C7373',
//   },

//   circle: {
//     height: 17,
//     width: 17,
//     borderRadius: 20,
//     backgroundColor: "#8E8686",
//     marginRight: 10
//   },

//   circleTitle: {
//     flex: 1,
//     flexDirection: "row",
//   },

//   button: {
//     borderRadius: 10,
//     height: 30,
//     width: 100,
//     backgroundColor: "#6E696943",
//     textAlign: "center",
//     justifyContent: 'center',
//   },
// });

