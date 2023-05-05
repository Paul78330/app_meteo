import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import Style from '../Style'


export default class About extends React.Component {

    search(){
        this.props.navigation.navigate('Search')
    }


    render() {
        return (
            <View style={Style.container}>
                <Text style={Style.title}>A propos de l'application</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Consequuntur, est maiores nemo nulla obcaecati odio provident qui quia. 
                    Animi architecto aspernatur autem, iste laudantium libero magni nemo neque quas sequi!
                </Text>
                <Button color={Style.color} onPress={()=> this.search()} title="Rechercher une ville"/>
            </View>
        )
    }
}