import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./src/functional-component/home"
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
/*
https://reactnavigation.org/docs/getting-started/
https://reactnavigation.org/docs/native-stack-navigator/
*/

// Shimmer Animation when app starts

// Create the object of Stack
// const Stack = createNativeStackNavigator();
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Reminder">
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>
        <Tab.Screen name='Orders' component={OrdersScreen}/>
        {/* <Tab.Screen name='news-api' component={NewsApp}/> */}
        <Tab.Screen name='Whatsapp' component={Whatsapp}/>
        <Tab.Screen name='class-component' component={ClassComponent}/>
        <Tab.Screen name='Reminder' component={Reminder}/>
        <Tab.Screen name="SignIn" component={SignInScreen}/>
        {/* <Tab.Screen name='Hooks' component={Hooks}/> */}
      </Tab.Navigator>
    </NavigationContainer>
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