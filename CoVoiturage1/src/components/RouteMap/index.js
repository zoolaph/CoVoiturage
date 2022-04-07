import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY ='AIzaSyBOY7a8GQDmtxUnORQAqiHlhM0IEEuvFFM';


const RouteMap = ({origin, destination}) => {
     
   
    
    const originLoc = { 
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
    };
    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng,
    };

    return (
            <MapView
                style={{height:'100%',width: '100%'}}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                latitude: origin.details.geometry.location.lat,
                longitude: origin.details.geometry.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
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
                    title={'origin'}

                />
                <Marker
                    coordinate={destinationLoc}
                    title={'Destination'}
                />
            </MapView>
    );
};

export default RouteMap;