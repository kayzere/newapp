import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global_stylesheet'

export default function Home( { navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'Music', rating: 5, body: 'The Jackson 5', key: '1' },
        { title: 'Jeux', rating: 2, body: 'Jax and dexter', key: '2' },
        { title: 'Video', rating: 9, body: 'One piece', key: '3' } 
    ]);


    return (
        <View style={globalStyles.container}> 
            <FlatList 
                data={reviews}
                renderItem={({ item })=> (
                    <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}> {item.title} </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
