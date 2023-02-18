import { View, Text, TabBarIOSItem } from 'react-native'
// import { createBottonTabNavigator } from "@react-navigation/bottom-tabs"
// Above just works with nav version5
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'
import FavoriteScreen from '../screens/Favorite'
import PokedexScreen from '../screens/Pokedex'
import AccountScreen from '../screens/Account'

//const Tab = createBottonTabNavigator();
//Above just works with nav version5
const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Favorites" component={FavoriteScreen} options={
          {
            tabBarLabel:'Favoritos',
            tabBarIcon: ({color, size}) => <Icon name="heart" color={color} size={size}/>,
      }}
      />
        <Tab.Screen name="Pokedex" component={PokedexScreen} options={
          {
            tabBarLabel:'',
            tabBarIcon: () => renderPokeball()
          }
        }/>
        <Tab.Screen name="Account" component={AccountScreen} options={
          {
            tabBarLabel: 'Cuenta',
            tabBarIcon: ({color, size}) => <Icon name='user' color={color} size={size}/>}
        }
        />
    </Tab.Navigator>
  )
}

function renderPokeball() {
  return <Image
    source={require("../assets/pokeball.png")}
    style={{width:75, height: 75, top: -15}}
    />
}