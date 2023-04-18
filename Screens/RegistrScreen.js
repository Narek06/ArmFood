import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { firebase } from '../config'

const RegistrScreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(require('../assets/icons8-filled-circle-17.png'));

    const handlePress = () => {
        if (image === require('../assets/icons8-filled-circle-17.png')) {
            setImage(require('../assets/AgreeBtn.png'));
        } else {
            setImage(require('../assets/icons8-filled-circle-17.png'));
        }
    };

    createUser = async (email, password) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={{ width: "100%", height: 250 }} source={require('../Images/RegistrHeader.png')} />
            <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 64 }}>Sing Up!</Text>
            <Text>Create new account</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Name"
                    value={Text}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={{ width: "80%" }}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', marginTop: 6 }}
                    onPress={handlePress}

                >
                    <Image style={{ width: 17, height: 17 }} source={image} />
                    <Text style={{ marginLeft: 3 }}>I agree with the terms and conditions</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => createUser(email, password)}
                style={styles.button}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 18, width: "80%", textAlign: 'center', color: "white" }}>Sing up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default RegistrScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        height: 45
    },
    button: {
        marginTop: 24,
        height: 50,
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: "#FFC52A",
    },
})