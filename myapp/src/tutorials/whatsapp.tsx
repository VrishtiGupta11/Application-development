import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function Whatsapp() {

  let conversation1 = {
    contact1: '+91 99999 11111',
    contact2: '+91 99999 22222',
    messages: [
      {
          text: 'hello',
          sender: '+91 99999 11111',
          timeStamp: '19 July 2022, 16:00',
          status: 1 // 1 -> sent, 2 -> delivered, 3 -> seen
      },
      {
          text: 'Hi, How are you ?',
          sender: '+91 99999 22222',
          timeStamp: '19 July 2022, 16:10',
          status: 3 // 1 -> sent, 2 -> delivered, 3 -> seen
      },
    ]
  };

  let conversation2 = {
    contact1: '+91 99999 11111',
    contact2: '+91 99999 33333',
    messages: [
      {
          text: 'Aur Bhai. Kya haal ?',
          sender: '+91 99999 11111',
          timeStamp: '19 July 2022, 12:00',
          status: 3 // 1 -> sent, 2 -> recieved, 3 -> seen
      },
      {
          text: 'Badhiya. Tum sunao ?',
          sender: '+91 99999 33333',
          timeStamp: '20 July 2022, 10:00',
          status: 1 // 1 -> sent, 2 -> recieved, 3 -> seen
      }
    ]
  };

  let conversation3 = {
      contact1: '+91 99999 11111',
      contact2: '+91 99999 44444',
      messages: [
          {
              text: 'Javascript shuru ho gyi ?',
              sender: '+91 99999 11111',
              timeStamp: '20 July 2022, 13:00',
              status: 2 // 1 -> sent, 2 -> recieved, 3 -> seen
          },
          {
              text: 'Haan Bhai, Recursion thoda takleef de raha hai',
              sender: '+91 99999 44444',
              timeStamp: '20 July 2022, 13:00',
              status: 3 // 1 -> sent, 2 -> recieved, 3 -> seen
          }
      ]
  };

  let conversation4 = {
      contact1: '+91 99999 11111',
      contact2: '+91 99999 55555',
      messages: [
          {
              text: 'Infosys test de rhi hai ?',
              sender: '+91 99999 11111',
              timeStamp: '16 July 2022, 16:00',
              status: 3 // 1 -> sent, 2 -> recieved, 3 -> seen
          },
          {
              text: 'Haan, par itni tyari nhi hai.',
              sender: '+91 99999 55555',
              timeStamp: '16 July 2022, 16:00',
              status: 2 // 1 -> sent, 2 -> recieved, 3 -> seen
          }
      ]
  };

  let conversation5 = {
      contact1: '+91 99999 11111',
      contact2: '+91 99999 66666',
      messages: [
          {
              text: 'Competitive Programming and soft skills course join kiya ?',
              sender: '+91 99999 11111',
              timeStamp: '16 July 2022, 16:00',
              status: 2 // 1 -> sent, 2 -> recieved, 3 -> seen
          },
          {
              text: 'Haan, Tune kra ?',
              sender: '+91 99999 66666',
              timeStamp: '16 July 2022, 16:00',
              status: 3 // 1 -> sent, 2 -> recieved, 3 -> seen
          },
          {
              text: 'Haan, Hopefully it will be fruitful',
              sender: '+91 99999 11111',
              timeStamp: '16 July 2022, 16:00',
              status: 1 // 1 -> sent, 2 -> recieved, 3 -> seen
          }
      ]
  };
  let myWhatsApp = [conversation1, conversation5, conversation2, conversation3, conversation4];
  
  let [i, setIIndex] = useState(0);
  i = i%myWhatsApp.length;

  function sortConversationsBasedOnMessages(myWhatsApp: any) {
    console.table(myWhatsApp);
    let N = myWhatsApp.length;
    for(let i=0; i<N; i++) {
        for(let j=0; j<N-i-1; j++) {
            if(myWhatsApp[j]["messages"].length > myWhatsApp[j+1]["messages"].length) {
                let temp = myWhatsApp[j];
                myWhatsApp[j] = myWhatsApp[j+1];
                myWhatsApp[j+1] = temp;
            }
        }
    }
    console.table(myWhatsApp)
    return myWhatsApp;
  }

  function sortMessagesBasedOnText() {
    let textAdd = []
    let N = myWhatsApp.length;
    for(let j=0; j<N; j++) {
        let addedText = "";
        for(let k=0; k<myWhatsApp[j]["messages"].length; k++) {
            addedText += myWhatsApp[j]["messages"][k]["text"];
        }
        textAdd.push(addedText);
    }
    console.log(textAdd);

    for(let i=0; i<N; i++) {
        for(let j=0; j<N-i-1; j++) {
            if(textAdd[j] > textAdd[j+1]) {
                let temp1: any = textAdd[j];
                textAdd[j] = textAdd[j+1];
                textAdd[j+1] = temp1;

                let temp = myWhatsApp[j];
                myWhatsApp[j] = myWhatsApp[j+1];
                myWhatsApp[j+1] = temp;
            }
        }
    }
  }

  function sortMessagesBasedOnlength() {
    console.log("Sorting messages based on Length");
    let messages = [];
    for(let conversation of myWhatsApp) {
        for(let data of conversation['messages']) {
            messages.push(data['text']);
        }
    }
    console.table(messages);
    for(let i=0; i<messages.length; i++) {
        for(let j=0; j<messages.length - i -1; j++) {
            if(messages[j].length > messages[j+1].length) {
                let temp: any = messages[j];
                messages[j] = messages[j+1];
                messages[j+1] = temp;
            }
        }
    }
    console.table(messages);
  }
  
  function chat(conversation: any) {
    return conversation["messages"].map((object: any, index: any) => {
      return <View key={index} style= {{width: 170}}>
        <Text style = {styles.chatStyle}>{object["text"]}</Text>
        <Text style = {[styles.timsStampStyle]}>{object["timeStamp"]+'\n\n'}</Text>
      </View>

    })
  }

  function buttons() {
    return myWhatsApp.map((object, index) => {
      return <TouchableHighlight key={index} onPress={(event) => setIIndex(myWhatsApp.indexOf(object))}>
        <View style={styles.button}>
          <View style={styles.circle}></View>
          {/* <image></image> */}
          <Text style={styles.textStyle}>{object["contact2"]}</Text>
        </View>
      </TouchableHighlight>
    })
  }

  let [sortedConversation, setMyWhatsapp] = useState(myWhatsApp);
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* {chat(myWhatsApp[i])} */}
      {/* <Button title='Next' onPress={(event) => setIIndex(++i)}></Button>  */}
      <Button title='Sort' onPress={(event) => setMyWhatsapp(sortConversationsBasedOnMessages(myWhatsApp))}></Button>
      <Text style={styles.buttonsContainer}>{buttons()}</Text>
      <Text style={styles.chatScreen}>{chat(sortedConversation[i])}</Text>
    </View>
  );

  // Display messages of whatsapp 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  button: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 20,
    margin: 10,
    flex: 1,
    flexDirection: "row",
  },
  textStyle: {
    color: "white",
  },
  buttonsContainer: {
    width: 300,
  },
  chatScreen: {
    // flex: 1,
    height: 400,
    width: 200,
    backgroundColor: "#6495ed",
    // flexDirection: "row",
    borderRadius: 20,
    padding: 20,
  },
  chatStyle: {
    fontWeight: 'bold',
  },
  timsStampStyle: {
    // justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    fontSize: 10,
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "white",
    margin: 5,
  }
});