import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

const LogInScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(require('../assets/icons8-filled-circle-24.png'));
    const [rememberMe, setRememberMe] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert("helav2")
        } catch (error) {
            alert(error.message)
        }
    }

    const handlePress = () => {
        if (image === require('../assets/icons8-filled-circle-24.png')) {
            setImage(require('../assets/RememberMeIcon.png'));
        } else {
            setImage(require('../assets/icons8-filled-circle-24.png'));
        }
        setRememberMe(!rememberMe)
    };

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <Image style={{ width: "100%", height: 250 }} source={require('../Images/LoginHeader.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 64 }}>Welcome !</Text>
                <Text>Sing in to your account</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.emailInput}
                    />
                    <View style={styles.passwordInput}>
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={!passwordVisible}
                            style={styles.input}
                        />
                        <TouchableOpacity
                            style={styles.toggleButton}
                            onPress={togglePasswordVisibility}
                        >
                            <Ionicons
                                name={passwordVisible ? 'eye-off' : 'eye'}
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: "80%", justifyContent: 'space-between', marginTop: 8 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={handlePress}
                        >
                            <Image style={{ width: 17, height: 17 }} source={image} />
                            <Text style={{ marginLeft: 3 }}>{rememberMe ? 'Remembered!' : 'Remember Me'}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        <Text style={{ color: "#317953", }}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => loginUser(email, password)

                    }
                    style={styles.button}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 18, width: "80%", textAlign: 'center', color: "white" }}>Sing In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('RegistrScreen')}
                    style={{ marginTop: 10 }}
                >
                    <Text style={{ fontStyle: 'normal', fontSize: 16 }}>
                        Dont have an account? <Text style={{ color: "#317953" }}>Create Account ?</Text>
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView >
    )
}

export default LogInScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    textInput: {
        paddingTop: 20,
        paddingBottom: 100,
        width: 400,
        fontSize: 20,
        borderBottomWidth: 1,
        marginBottom: 10,
        textAlign: 'center'
    },
    button: {
        marginTop: 24,
        height: 50,
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: "#3E9B1A",
    },
    passwordInput: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 5,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        width: "80%"
    },
    emailInput: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        height: 45
    },
    input: {
        width: "90%"
    }
})