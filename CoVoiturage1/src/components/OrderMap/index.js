import React from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY ='AIzaSyBOY7a8GQDmtxUnORQAqiHlhM0IEEuvFFM';
const originLoc = { 
  latitude: 35.57664,
  longitude: -5.35488,
};
const destinationLoc = {
  latitude: 35.58111,
  longitude: -5.34820,
};


const OrderMap = ({ car }) => {

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 35.57664,
        longitude: -5.35488,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor='blue'
      />
      <Marker
        coordinate={originLoc}
        title={'You'}
      />
      <Marker
        coordinate={destinationLoc}
        title={'Driver'}
      />
    </MapView>
  );
};

export default OrderMap;