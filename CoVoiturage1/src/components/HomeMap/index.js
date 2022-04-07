  
import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {API, graphqlOperation} from 'aws-amplify';
import { listCars } from '../../graphql/queries';

const HomeMap = (props) => {
    
    const [cars, setCars] = useState([]);

    useEffect(() => {
      const fetchCars = async () => {
        try {
          const response = await API.graphql(
            graphqlOperation(
              listCars
            )
          )
  
          setCars(response.data.listCars.items);
        } catch (e) {
          console.error(e);
        }
      };
  
      fetchCars();
    }, [])
    
    const getImageName = (type) => {
        if(type === 'UberX'){
            return require('../../assets/image/top-UberX.png');
        }
        if(type === 'Comfort'){
            return require('../../assets/image/top-Comfort.png');
        }
        return require('../../assets/image/top-UberXL.png');        
    }
    
    return (
            <MapView
                style={{height:'100%',width: '100%'}}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                latitude: 35.58324,
                longitude: -5.35517,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}>
                
                {cars.map((car) => (
                    <Marker
                        key={car.id}
                        coordinate={{latitude: car.latitude, longitude: car.longitude}}
                    >
                        <Image
                                style={{
                                    width: 70,
                                    height: 70, 
                                    resizeMode:'contain',
                                    transform: [{
                                        rotate: `${car.heading}deg`
                                    }]
                                }}
                                source={getImageName(car.type)} 
                        />
                    </Marker>                    
                ))}
            </MapView>
    );
};

export default HomeMap;
