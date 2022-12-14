import React, { Component } from 'react';
import { Platform, Text, View,StyleSheet,SafeAreaView,StatusBar, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require("../assets/stars.gif")} style={styles.backgroundImage}>

                
            <View style={styles.titleBar} >
                <Image source={require("../assets/main-icon.png")}style={{width:150,height:150}}></Image>
                <Text style={styles.titleText}>Stellar </Text>
                <Text style={styles.titleText}> App</Text>
                </View>
            
            <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("StarMap")}>
                <Text style={styles.routeText}>Star Map</Text>
               
                <Image source={require("../assets/star_map.png")} style={styles.iconimage}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("DailyPic")}>
                <Text style={styles.routeText}>Daily Pic</Text>
                
              
                <Image source={require("../assets/daily_pictures.png")} style={styles.iconimage}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("SpaceCrafts")}>
                <Text style={styles.routeText}>SpaceCrafts</Text>
                
              
                <Image source={require("../assets/space_crafts.png")} style={styles.iconimage}></Image>
            </TouchableOpacity>
            </ImageBackground>
            
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop: Platform.OS==="android"? StatusBar.currentHeight:0
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white"
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30
    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover",

    },
    knowmore:{
        paddingLeft:30,
        color:"red",
        fontSize:15,
    },
    bgdigit:{
        position:"absolute",
        color:"rgba(183,183,183,0.5)",
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1,
        
    },
    iconimage:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80
    }
})