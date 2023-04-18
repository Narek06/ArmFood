import { ImageBackground, Image,Text } from 'react-native'
import React from 'react'

const SplashScreen = ({ navigation }) => {
    setTimeout(() => {
        navigation.navigate("LogInScreen");
    }, 3000)
    return (
        <ImageBackground style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} source={require('../Images/SplashScreenImage.jpg')} >
            <Image style={{marginBottom: -16}} source={require('../Images/splashicon2.png')} />
            <Image source={require('../Images/splashicon1.png')} />
            <Text style={{color:'white',fontSize: 30}}>ArmFood</Text>
            <Text style={{color:'white'}}>Food Cooking Recipes</Text>
        </ImageBackground>
    )
}

export default SplashScreen