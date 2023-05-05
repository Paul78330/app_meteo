import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar hidden={true} />
        <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if(route.name === 'Search'){
              iconName= focused
              ? 'ios-search-circle'
              : 'ios-search-circle-outline'
            } else if(route.name === 'About')
            {
              iconName = focused ? 'ios-information' : 'ios-information-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#6BB1CF',
          tabBarInactiveTintColor: '#9CA8AD',
          tabBarActiveBackgroundColor: '#D1ECF7'
        })}>
          <Tab.Screen name="Search" component={Search}
        options={
          {
            tabBarLabelStyle:{
              fontSize: 18,
              fontWeight: "bold"
            }
          }
        }/>
        <Tab.Screen name="About" component={About} 
        options={
          {
            tabBarLabelStyle:{
              fontSize: 18,
              fontWeight: "bold"
            }
          }
        }/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

