import React from 'react';
import { View, Image, Text, Pressable } from "react-native";

import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";

const DriverTypeRow = (props) => {
    
    const {type, onPress, isSelected} = props;
    
    
    const getImage = () => {
        if(type.type === 'UberX'){
            return require('../../assets/image/UberX.jpeg')
        }
        if(type.type === 'Comfort'){
            return require('../../assets/image/Comfort.jpeg')
        }
        return require('../../assets/image/UberXL.jpeg')        
    }

    return (
        <Pressable
        onPress={onPress}
        style={[styles.container, {
          backgroundColor: isSelected ? '#efefef' : 'white',
        }]}
      >
  
        {/*  Image */}
        <Image
          style={styles.image}
          source={getImage()}
        />
  
        <View style={styles.middleContainer}>
          <Text style={styles.type}>
            {type.type}{' '}
            <Ionicons name={'person'} size={16} />
            3
          </Text>
          <Text style={styles.time}>
            8:03PM drop off
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
          <Text style={styles.price}>est. ${type.price}</Text>
        </View>
      </Pressable>
    );
};

export default DriverTypeRow;
