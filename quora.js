import React, {Component} from 'react';


import {Platform, StyleSheet,Button, Text, TextInput,Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OneSignal from 'react-native-onesignal'; // Import package from node modules


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class  Appss extends Component {
  constructor(properties) {
  super(properties);
  OneSignal.init("ce5fa3b1-0396-4555-9177-93ee40845e54");

  OneSignal.addEventListener('received', this.onReceived);
  OneSignal.addEventListener('opened', this.onOpened);
  OneSignal.addEventListener('ids', this.onIds);
  OneSignal.configure(); 	// triggers the ids event
}

componentWillUnmount() {
  OneSignal.removeEventListener('received', this.onReceived);
  OneSignal.removeEventListener('opened', this.onOpened);
  OneSignal.removeEventListener('ids', this.onIds);
}

onReceived(notification) {
  console.log("Notification received: ", notification);
}

onOpened(openResult) {
  console.log('Message: ', openResult.notification.payload.body);
  console.log('Data: ', openResult.notification.payload.additionalData);
  console.log('isActive: ', openResult.notification.isAppInFocus);
  console.log('openResult: ', openResult);
}

onIds(device) {
  console.log('Device info: ', device);
}

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.topbar}>
          <View style ={{flex:1,backgroundColor:'white',height: 50,
     elevation:10,marginTop:10,fontSize:25,alignItems:"center",
    flexDirection:'row',}}>
           <View style ={{flex:1,backgroundColor:'white',height: 50,
     elevation:10,marginTop:10,fontSize:25,alignItems:"center",
    flexDirection:'row',}}>
      <Icon name='person' size={25} color='red' />
             <Text>profile</Text>
             </View>
             <View style ={{backgroundColor:'white',height: 50,marginTop:10,
     elevation:10,fontSize:25,alignItems:"center",flexDirection:'row',
    }}>
            <Icon name='search' size={25} color='red' />
              <Text>search</Text>
              <Icon name='add-circle-outline' size={25} color='red'/>
              <Text>add</Text>
              </View>
           </View>
          </View>
          
          <View style = {styles.body}>

     
<View>
<View style ={{backgroundColor:'white',height: 55,
     fontSize:80,alignItems:"center",flexDirection:'row',
    }}>
      <Text>

  <Text style={{fontWeight: "bold"}}> How different is your JEEAdvanced 2019 result than your JEE Mains 2019  result?</Text>
  </Text>
</View>
<View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:55,alignItems:"center",flexDirection:'row',
    }}>
  
  <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2019/06/15/03/13/sunset-4274662__340.jpg'}}
          style={{width: 50, height: 40,borderRadius:16}}
        />
  
  <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>Tanmay Hiremath, studied at Allen Career Institute
  </Text>
  </Text>
  </View>
</View>
<View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:25,alignItems:"center",flexDirection:'row',
    }}>
<Text>My JEE Mains rank was 1413. I scored 297 in january attempt and 294 in april attempt.
  But unfortunately i got a 4 digit rank Read more</Text>
</View>

  </View>
  <View>
<View style ={{backgroundColor:'white',height: 55,
     fontSize:80,alignItems:"center",flexDirection:'row',
    }}>
      <Text>

  <Text style={{fontWeight: "bold"}}> How different is your JEEAdvanced 2019 result than your JEE Mains 2019  result?</Text>
  </Text>
</View>
<View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:55,alignItems:"center",flexDirection:'row',
    }}>
  
  <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2019/06/15/03/13/sunset-4274662__340.jpg'}}
          style={{width: 50, height: 40,borderRadius:16}}
        />
  
  <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>Tanmay Hiremath, studied at Allen Career Institute
  </Text>
  </Text>
  </View>
</View>
<View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:25,alignItems:"center",flexDirection:'row',
    }}>
<Text>My JEE Mains rank was 1413. I scored 297 in january attempt and 294 in april attempt.
  But unfortunately i got a 4 digit rank Read more</Text>
</View>

  </View>
  <View>
<View style ={{backgroundColor:'white',height: 55,
     fontSize:80,alignItems:"center",flexDirection:'row',
    }}>
      <Text>

  <Text style={{fontWeight: "bold"}}> How different is your JEEAdvanced 2019 result than your JEE Mains 2019  result?</Text>
  </Text>
</View>
<View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:55,alignItems:"center",flexDirection:'row',
    }}>
  
  <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2019/06/15/03/13/sunset-4274662__340.jpg'}}
          style={{width: 50, height: 40,borderRadius:16}}
        />
  
  <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>Tanmay Hiremath, studied at Allen Career Institute
  </Text>
  </Text>
  </View>
</View>
<View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:25,alignItems:"center",flexDirection:'row',
    }}>
<Text>My JEE Mains rank was 1413. I scored 297 in january attempt and 294 in april attempt.
  But unfortunately i got a 4 digit rank Read more</Text>
</View>

  </View>
   </View>
  
          
          <View style = {styles.bottombar}>
          <View style ={{flex:1,backgroundColor:'white',height: 50,
    justifyContent:'space-around',elevation:10,alignItems:"center", 
    flexDirection:'row',}}>
           <Icon name='home' size={25} color='blue'/>
           <Text>home</Text>
             
           
            <Icon name='mode-edit' size={25} color='blue'/>
              <Text>answer</Text>
              <Icon name='group' size={25} color='blue'/>
              <Text>spaces</Text>
              <Icon name='notifications' size={25} color='blue'/>
              <Text>notifs</Text>
           </View>
          </View>
          </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
backgroundColor:"#fff"
},
topbar: {
  height: 50,
},

body: {
  flex:1, 
}, 
bottombar:{
  height:50,
  fontSize:25,
},
});
