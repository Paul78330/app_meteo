import React from "react";
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class WeatherRow extends React.Component {
    static propTypes = {
        day: PropTypes.array
    }

    render() {
        const { day } = this.props;

        if (!day || day.length === 0) {
            return null; // ou un message d'erreur approprié
        }

        const weatherData = day.map((dayData) => {
            const { temp, feels_like, weather, dt } = dayData;

            return (
                <View key={dt}>
                    <Text>Date: {new Date(dt * 1000).toLocaleDateString()}</Text>
                    <Text>Température : {temp.day}°C</Text>
                    <Text>Sensation de température : {feels_like.day}°C</Text>
                    <Text>Conditions météorologiques : {weather[0].description}</Text>
                </View>
            );
        });

        return (
            <View>
                {weatherData}
            </View>
        );
    }
}
