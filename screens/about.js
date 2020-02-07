import React from 'react'
import { StyleSheet, View, Text} from 'react-native';
import { globalStyles } from '../styles/global_stylesheet'


export default function About() {
    return (
        <View style={globalStyles.container}> 
            <Text style={globalStyles.titleText}> About screen </Text>
        </View>
    )
}
