import React, {useState,useEffect} from 'react';
import { View, Tectinput, Text, TextInput, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
    //move all this to componets 
    //this doc should only have DestinationInput and DestinationHistory
    //follow HomeScreen
    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
      };
      const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
      };

    const DestinationSearch = (props) => {

    const [originPlace, setoriginPlace] = useState(null);
    const [destinationPlace, setdestinationPlace] = useState(null);
    
    const navigation = useNavigation();

    useEffect( () => {
       if(originPlace && destinationPlace){
           navigation.navigate('SearchResults', {
               originPlace,
               destinationPlace,   
           })
       } 
    }, [originPlace,destinationPlace]);  

   
    
    return (    
        <SafeAreaView>
            <View style={styles.container}>
            
            <GooglePlacesAutocomplete
                    placeholder='Where from ?'
                    onPress={(data, details = null) => {
                        setoriginPlace({data,details});
                    }}
                    enablePoweredByContainer={false}
                    currentLocation={true}
                    currentLocationLabel='current location'

                    styles={{
                        textInput:styles.textInput,
                        container: {
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            right: 10,

                        },
                        listView :{
                            position: 'absolute',
                            top: 105,

                        },
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyBOY7a8GQDmtxUnORQAqiHlhM0IEEuvFFM',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data = {data}/>}
                    renderDescription ={(data) => data.description|| data.vicinity }
                    predefinedPlaces={[homePlace, workPlace]}
                />
                
                <GooglePlacesAutocomplete
                    placeholder='where to ?'
                    onPress={(data, details = null) => {
                        setdestinationPlace({data,details});
                    }}

                    enablePoweredByContainer={false}
                    currentLocation={true}
                    currentLocationLabel='current location'

                    styles={{
                        textInput:styles.textInput,
                        container: {
                            position: 'absolute',
                            top: 65,
                            left: 10,
                            right: 10,

                        },
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyBOY7a8GQDmtxUnORQAqiHlhM0IEEuvFFM',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data = {data}/>}
                    renderDescription ={(data) => data.description|| data.vicinity }
                    predefinedPlaces={[homePlace, workPlace]}
                />

                <View style={styles.circle}/>
                <View style={styles.line}/>
                <View style={styles.square}/>


            </View>
        </SafeAreaView>

    );
};

export default DestinationSearch;
