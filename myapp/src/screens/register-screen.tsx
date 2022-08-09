import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import { Button, Image, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors, IconButton, List } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore"; 

export default function RegisterScreen({navigation}: any) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // secure the password using hashing and SHA 256

    function navigateToSignInScreen() {
      navigation.navigate("SignIn");
    }

    // https://firebase.google.com/docs/auth/web/start
    // https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9_1

    function register() {
      // getAuth()      // reference of authentication
      console.log("Name: "+name+" email: "+email+" password: "+password)

      const auth = getAuth();
      const db = getFirestore();

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("User registered...")
          // ...

          const docToInsert = {
            name: name,
            email: email,
            password: password,
          };

          setDoc(doc(db, "users", user.uid), docToInsert);
          navigation.navigate("Home")
          
          console.log("Details added to firestore");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error occured..." + errorCode + " " + errorMessage);
    // ..
      });

    }

    return (
      <LinearGradient colors={["#007A9C", "#99E3EE", "#026F8C"]} style={styles.container}>
        <Text style={styles.heading}>Register</Text>
        <View style={styles.signInContainer}>
          {/* <List.Icon icon='account-circle' color="#013352" style={styles.icon}></List.Icon> */}
          <Image 
            source={require("../../assets/account.png")}
            style={styles.image}
          ></Image>
          <TextInput 
            style={styles.input} 
            placeholder="Name"
            value={name}
            onChangeText={setName}
          ></TextInput>

          <TextInput 
            style={styles.input}
            placeholder="Email Id"
            value={email}
            onChangeText={setEmail}
          ></TextInput>

          <TextInput 
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          ></TextInput>

          {/* <Button title='Sign In' onPress={signIn}></Button> */}
          <TouchableOpacity  onPress={register}>
            <View style={styles.button}>
              <Text style={styles.textStyle}>Register</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToSignInScreen}>
            <Text style={styles.text}>Existing User? Login Here</Text>
          </TouchableOpacity>
          {/* <Text>{email}</Text> */}
        </View>
      </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    signInContainer: {
      backgroundColor: "#026E8C74",
      padding: 30,
      margin: 15,
      borderRadius: 15,
      // height: "60%",
      width: Platform.OS ==='android' ? "70%" : "40%",
      alignItems: "center"
    },

    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      color: "white"
    },

    image: {
      width: 100,
      height: 100,
      marginVertical: 10,

    }, 

    input: {
      borderColor: Colors.grey700,
      width: "100%",
      borderWidth: 1,
      borderRadius: 12,
      padding: 8,
      margin: 8
    },

    text: {
      fontSize: 16,
      margin: 10,
      color: 'white',
      textDecorationLine: 'underline',
    },


    button: {
      backgroundColor: "#013352",
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 20,
      margin: 20
    },

    textStyle: {
      color: "white",
    },
  });