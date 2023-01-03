import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./src/functional-component/home"
import ProfileScreen from "./src/functional-component/profile"
import OrdersScreen from "./src/functional-component/orders"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewsApp from "./src/tutorials/news-api";
import ClassComponent from "./src/tutorials/class-component";
import Hooks from "./src/tutorials/hooks";
import Whatsapp from "./src/tutorials/whatsapp";
import Reminder from "./src/tutorials/reminder";
import SignInScreen from "./src/screens/signin-screen";
import RegisterScreen from "./src/screens/register-screen";
import {initializeApp} from "firebase/app";
import { firebaseConfig } from "./src/helper/constants";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Appbar, Colors, FAB, IconButton } from "react-native-paper";
import HomeScreen from "./src/screens/home-screen";
import MapScreen from "./src/screens/map-view";
import React from 'react'

/*
https://reactnavigation.org/docs/getting-started/
https://reactnavigation.org/docs/native-stack-navigator/
*/

// Shimmer Animation when app starts

// Create the object of Stack
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

// Screens are to be registered over here
/*
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Orders' component={OrdersScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
*/

// error of reanimated resolved using => 
// in babel.config.js  =>  Plugin: ['react-native-reanimated/plugin']

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name='Home' component={HomeScreen}/>
//         <Drawer.Screen name='Profile' component={ProfileScreen}/>
//         <Drawer.Screen name='Orders' component={OrdersScreen}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Home">
//         <Tab.Screen name='Home' component={HomeScreen}/>
//         <Tab.Screen name='Profile' component={ProfileScreen}/>
//         <Tab.Screen name='Orders' component={OrdersScreen}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Home">
//         <Tab.Screen name='Home' component={HomeScreen}/>
//         <Tab.Screen name='Profile' component={ProfileScreen}/>
//         <Tab.Screen name='Orders' component={OrdersScreen}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

export default function App({navigation}:any) {

  // const navigation = useNavigation();

  const [showSplash, setShowSplash] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  initializeApp(firebaseConfig);

  async function showSplashScreen() {
    // Reference to Authentication Module
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if(user != null) {
        setTimeout(() => {
          console.log("User is Already registered or Logged In"+user.uid);
          setLoggedIn(true);
          setShowSplash(false);
        }, 3000);
      }
      else {
        setTimeout(() => {
          console.log("User is not registered or Logged In");
          // setLoggedIn(false);
          setShowSplash(false);
        }, 3000);
      }
    })
  }

  useEffect(
    ()=>{
      showSplashScreen();

      //   if(auth.currentUser != null){
      //     console.log("User is already Registered or Logged In: "+auth.currentUser.uid);
      //     setLoggedIn(true);
      //   }else{
      //     console.log("User is not Registered or Logged In");
      //   }
      //   // await new Promise(resolve => setTimeout(resolve, 3000));
      //   setTimeout(() => {
      //     setShowSplash(false);
      //   }, 3000);
      //   console.log("Wait for 3 seconds over...");
      // }

      // try{
      //   showSplashScreen();
      // }catch(error){
      //   console.log("Something Went Wrong: "+error);
      // }finally{
      //   console.log("Finally Executed..");
      // }
    }, []);

    if(showSplash){
      return (
        <View style={styles.container}>
          <Image 
            source={require('D:/Users/Documents/react_native/Application-development/myapp/assets/phatak-status.png')}
            style={styles.splashImage}
            onError={()=>(<Text>Image Not Found</Text>)}            
            >
        </Image> 
          <Image 
            source={require('D:/Users/Documents/react_native/Application-development/myapp/assets/loader.gif')}
            style={styles.loader}
            onError={()=>(<Text>Image Not Found</Text>)}            
            >
        </Image> 
          <Text style={styles.splashText}>Phatak Status</Text>
        </View>
      );
    }

  if(loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={HomeScreen} 
          options={{
            // headerBackButtonMenuEnabled: true,
            // statusBarHidden: true,
            // headerShown: false,
            title: "Phatak App",
            headerTitleStyle: {color: Colors.white},
            headerLeft: ()=> null,
            headerRight: ()=>( 
              <Appbar style={{backgroundColor: "#007A9C"}}> 
                {/* <Appbar.Action icon={"map-marker-multiple"} color={Colors.white} onPress={()=>
                  navigation.navigate('MapScreen')
                }>
                </Appbar.Action>

                <Appbar.Action icon={"logout"} color={Colors.white} onPress={()=>{
                  const auth = getAuth();
                  auth.signOut().then(()=>{setLoggedIn(false); setShowSplash(true)});
                }}>
                </Appbar.Action> */}
                <View style={styles.header}>
                  <Text style={styles.headerText}>PHATAK STATUS</Text>
                  <View style={styles.headerIconContainer}>
                    {/* <IconButton icon={"map"} color="white" onPress={() => navigation.navigate('MapScreen')}></IconButton> */}
                    <IconButton icon={"logout"} color="white" onPress={()=>
                    {
                      const auth = getAuth();
                      auth.signOut().then(()=>{setLoggedIn(false); setShowSplash(true)});
                    }}></IconButton>
                  </View>
                </View>
              </Appbar>
            ),
            headerStyle: {
              backgroundColor: "#007A9C",
            },
            headerTitleAlign: "center",
          }}
          />
          <Stack.Screen name='Profile' component={ProfileScreen}/>
          <Stack.Screen name='Orders' component={OrdersScreen}/>
          {/* <Stack.Screen name='news-api' component={NewsApp}/> */}
          <Stack.Screen name='Whatsapp' component={Whatsapp}/>
          <Stack.Screen name='ClassComponent' component={ClassComponent}/>
          <Stack.Screen name='Reminder' component={Reminder}/>
          <Stack.Screen name="SignIn" component={SignInScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="MapScreen" component={MapScreen}/>
          {/* <Stack.Screen name='Hooks' component={Hooks}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Profile' component={ProfileScreen}/>
          <Stack.Screen name='Orders' component={OrdersScreen}/>
          {/* <Stack.Screen name='news-api' component={NewsApp}/> */}
          <Stack.Screen name='Whatsapp' component={Whatsapp}/>
          <Stack.Screen name='class-component' component={ClassComponent}/>
          <Stack.Screen name='Reminder' component={Reminder}/>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{
            // title: "Sign In",
            // headerTitleAlign: "center",
            // headerStyle: {
            //   backgroundColor: Colors.blueGrey700,
            // },
            headerShown: false,
          }}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="MapScreen" component={MapScreen}/>
          {/* <Stack.Screen name='Hooks' component={Hooks}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator initialRouteName="Reminder">
  //       <Tab.Screen name='Home' component={HomeScreen}/>
  //       <Tab.Screen name='Profile' component={ProfileScreen}/>
  //       <Tab.Screen name='Orders' component={OrdersScreen}/>
  //       {/* <Tab.Screen name='news-api' component={NewsApp}/> */}
  //       <Tab.Screen name='Whatsapp' component={Whatsapp}/>
  //       <Tab.Screen name='class-component' component={ClassComponent}/>
  //       <Tab.Screen name='Reminder' component={Reminder}/>
  //       <Tab.Screen name="SignIn" component={SignInScreen}/>
  //       <Tab.Screen name="Register" component={RegisterScreen}/>
  //       <Tab.Screen name="Home Screen" component={HomeScreen}/>
  //       {/* <Tab.Screen name='Hooks' component={Hooks}/> */}
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    height: 80,
    width: "100%",
    backgroundColor: "#007A9C",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },

  headerText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },

  headerIconContainer: {
    position: "absolute",
    flexDirection: "row",
    right: 10
  },

  splashText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#013352",
  },

  splashImage: {
    width: 180,
    height: 180
  },
  
  loader: {
    width: 140,
    height: 140
  }
});