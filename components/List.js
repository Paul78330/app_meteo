import React, {useEffect, useState} from "react";
import { ActivityIndicator, Text, FlatList, View } from "react-native";
import axios from "axios";
import style from "../Style";
import axiosRetry from "axios-retry";
import WeatherRow from "../weather/Row";


const List = ({route, navigation}) => {

    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const {city} = route.params;

    // console.log(city)

    const [maVille] = useState(city)

    axiosRetry(axios, {
        retries: 3, //retries: le nombre maximum de relances de la requête en cas d'échec.
        retryDelay: (retryCount) => { //retryDelay: une fonction qui renvoie le délai (en millisecondes) entre les tentatives. 
            //Le délai est basé sur le nombre de tentatives tentées jusqu'à présent.
            return retryCount * 1000;
        },
        retryCondtion: (error) => {
            /**
             * retryCondition: une fonction qui détermine si une requête doit être réessayée. 
             * Dans ce cas, la fonction vérifie si la réponse d'erreur a le statut 429 (Trop de requêtes). 
             * Si la condition est vraie, la demande sera réessayée ; si false, la requête échouera immédiatement.
             */
            return error.response && error.response.status === 429;
        }

        /**
         * Dans l'ensemble, ce code configure axios pour réessayer les requêtes qui échouent avec un code d'état 429 jusqu'à 3 fois, 
         * avec un délai croissant entre les tentatives.
         */

        
    });

    const API_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${maVille}&mode=json&units=metric&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf`

    //Mettre à jour les options de navigation
    React.useEffect(()=>{
            navigation.setOptions({
                title : `Météo / ${city}`
            })
    }, [city])


    useEffect(()=>{

        //Récupérer les données météo lorsque le composant est monté
        const fetchWeatherData  = async () => {
            try{

                const response = await axios.get(API_URL);
                setWeatherData(response.data)
                console.log(weatherData)
                setIsLoading(false)
            }catch(error){
                console.error(error)
                setIsLoading(false)
            }
        };
        fetchWeatherData()
    }, [])

    if(isLoading) {
        return <ActivityIndicator color={style.color} size="large" />;
    }
    
    if(!weatherData){
        return <Text>Pas de données valides</Text>
    }else{
        return (
            <View>
                <Text>Weather for {weatherData.city.name}</Text>
                <FlatList 
                data={[weatherData.list]}
                keyExtractor={(item) =>item.dt}
                renderItem={({item, index}) => (
                    <WeatherRow day={item} index={index} />
                )}
                />
            </View>
        )
    }



}

export default List;

