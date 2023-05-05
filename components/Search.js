import React from 'react'
import style from '../Style'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TextInput, Image, Button, View, Keyboard, ImageBackground } from 'react-native'
import List from './List'


const Stack = createNativeStackNavigator();

function SearchScreen({ navigation }) {
    const [city, setCity] = React.useState('');

    function handleSubmit() {
        Keyboard.dismiss();
        console.log('city', city)
        setCity('');
        navigation.navigate('Result', { city })
    }

    return (
        <ImageBackground source={require('../assets/meteo2.jpg')} style={style.background}>
            <View style={style.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={setCity}
                    style={style.input}
                    placeholder='Entrez votre ville'
                    value={city}
                />
                <Button color={style.color} onPress={handleSubmit} title="Rechercher" />

            </View>
        </ImageBackground>

    )
}

export default function Search() {

    return (

        <Stack.Navigator>
            <Stack.Screen
                name="ma recherche"
                component={SearchScreen}
                options={{
                    headerStyle: style.header,
                    headerTitleStyle: style.headerTitle,
                }} />
            <Stack.Screen
                name="Result"
                component={List}
                options={{
                    headerStyle: style.header,
                    headerTitleStyle: style.headerTitle,
                }} />

        </Stack.Navigator>
    )
}


