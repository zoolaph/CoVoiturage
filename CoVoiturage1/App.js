import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import { Button, PermissionsAndroid, SafeAreaView, Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { withAuthenticator } from 'aws-amplify-react-native'

import Router from './src/navigation/Root';



navigator.geolocation = require('react-native-geolocation-service');

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)


console.disableYellowBox = true;

const App: () => Node = () => {
  
    const androidPermision = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the GPS");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if(Platform.OS === 'android'){
      androidPermision();
    }else{
      Geolocation.requestAuthorization();
    }
  },[])

  
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <Router />
    </>
  );
};

export default withAuthenticator(App);
