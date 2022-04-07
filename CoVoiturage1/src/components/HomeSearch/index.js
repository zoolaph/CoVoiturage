import React from 'react';
import { View, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from '../HomeSearch/styles';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo"


const HomeSearch = (props) => {
    const navigation = useNavigation();

    const goToSearch = () => {
       navigation.navigate('DestinationSearch')
    }

    

    return (

        <View>

            <Pressable onPress={goToSearch} style={styles.inputBox}>
                <Text styles={styles.inputText}>Where to?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'}></AntDesign>
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16}></MaterialIcons>
                </View>
            </Pressable>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                     <AntDesign name={'clockcircle'} size={15} color={'#ffffff'}/>
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>        

            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#21Bcff'}]}>
                     <Entypo name={'home'} size={16} color={'#ffffff'}/>
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>   
        </View>
    );
};

export default HomeSearch;
