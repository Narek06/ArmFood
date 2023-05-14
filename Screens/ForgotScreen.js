import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const ForgotScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={{ width: "100%", height: 250 }} source={require('../Images/ForgotScreenHeader.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 64 }}>Reset your password!</Text>
                <Text>Sing in to your account</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        onChangeText={text => setEmail(text)}
                        style={styles.emailInput}
                    />
                </View>
                <TouchableOpacity
                    onPress={(text)}
                    style={styles.button}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 18, width: "80%", textAlign: 'center', color: "white" }}>Reset</Text>
                </TouchableOpacity>
            </View >
        </ScrollView>
    )
}

export default ForgotScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    emailInput: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        height: 45
    },
    inputContainer: {
        width: "80%",
        marginTop: 16
    },
    button: {
        marginTop: 24,
        height: 50,
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: "#F69515",
    },
})