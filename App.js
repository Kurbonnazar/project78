import * as React  from "react"
import "react-native-gesture-handler"
import {Text, View} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./Screens/Home"
import DailyPicScreen from "./Screens/DailyPic"
import SpaceCraftScreen from "./Screens/SpaceCrafts"
import StarMapScreen from "./screens/StarMap"
const Stack=createStackNavigator()
export default class App extends React.Component{
render(){
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="StarMap" component={StarMapScreen}/>
            <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
            <Stack.Screen name="SpaceCrafts" component={SpaceCraftScreen}/>

          </Stack.Navigator>
        </NavigationContainer>
    )
}
}
