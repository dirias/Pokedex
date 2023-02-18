import { View, Text, TabBarIOSItem } from 'react-native'
// import { createBottonTabNavigator } from "@react-navigation/bottom-tabs"
// Above just works with nav version5
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FavoriteScreen from '../screens/Favorite'
import PokedexScreen from '../screens/Pokedex'
import AccountScreen from '../screens/Account'

//const Tab = createBottonTabNavigator();
//Above just works with nav version5
const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Favorites" component={FavoriteScreen} />
        <Tab.Screen name="Pokedex" component={PokedexScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}