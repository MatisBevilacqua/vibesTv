import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import News from './Components/News';
import Contacts from './Components/Contacts';
import Movies from './Components/Movies';
import Focus from './Components/Focus';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen
          options={{
            tabBarIcon(props) {
              return <FontAwesome5 name="newspaper" size={24} color={props.color} />
            }
          }}

          name="Actualités" component={News} />

        <Tab.Screen
          options={{
            tabBarIcon(props) {
              return <MaterialIcons name="movie" size={24} color={props.color} />
            }
          }}

          name="Emissions" component={Movies} />

        <Tab.Screen
          options={{
            tabBarIcon(props) {
              return <MaterialIcons name="visibility" size={24} color={props.color} />
            }
          }}

          name="Focus" component={Focus} />


        <Tab.Screen
          options={{
            tabBarIcon(props) {
              return <AntDesign name="contacts" size={24} color={props.color} />
            }
          }}

          name="Contacts" component={Contacts} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}