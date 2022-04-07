import React from 'react'
import { View, Text } from 'react-native'

import styles from "./styles";

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if nacessary</Text>
            <Text style={styles.text}>This is Dummy text This is Dummy text This is Dummy text This is Dummy text This is Dummy text This is Dummy text</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    )
}

export default CovidMessage
