import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
import { Input, Icon, CheckBox, Button, Image } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";
import { baseUrl } from '../shared/baseUrl';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


const tabNavigator = createBottomTabNavigator();

function Login() {
    return (
        <NavigationContainer independent={true}>
            <tabNavigator.Navigator
                initialRouteName='Login'
                tabBarOptions={{
                    activeBackgroundColor: '#9575CD',
                    inactiveBackgroundColor: '#D1C4E9',
                    activeTintColor: 'white',
                    inactiveTintColor: 'gray',

                }}
            >
                <tabNavigator.Screen
                    name='Login'
                    component={LoginTab}
                    options={{

                        title: 'Login',
                        tabBarIcon: ({ tintColor }) => (
                            <Icon
                                name='sign-in'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ color: tintColor }}
                            />
                        )
                    }}
                />
                
                <tabNavigator.Screen
                    name='Register'
                    component={RegisterTab}
                    options={{
                        title: 'Register',
                        tabBarIcon: ({ tintColor }) => (
                            <Icon
                                name='user-plus'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ color: tintColor }}
                            />
                        )
                    }}
                />
            </tabNavigator.Navigator>
        </NavigationContainer>
    );

}
class LoginTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            remember: false
        }
    }

    componentDidMount() {
        SecureStore.getItemAsync('userinfo')
            .then((userdata) => {
                let userinfo = JSON.parse(userdata);
                if (userinfo) {
                    this.setState({ username: userinfo.username })
                    this.setState({ password: userinfo.password })
                    this.setState({ remember: true })
                }
            })
    }

    handelLogin() {
        console.log(JSON.stringify(this.state));
        if (this.state.remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({ username: this.state.username, password: this.state.password })
            )
                .catch((error) => console.log('Could not save user info ', error));
        }
        else {
            SecureStore.deleteItemAsync('userinfo')
                .catch((error) => console.log('Could not delete user info ', error));

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder="Username"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                    inputContainerStyle={styles.formInput}
                />
                <Input
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    inputContainerStyle={styles.formInput}
                />

                <CheckBox
                    title="Remember Me"
                    checked={this.state.remember}
                    center
                    onPress={() => this.setState({ remember: !this.state.remember })}
                    containerStyle={styles.formCheckbox}
                />

                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handelLogin()}
                        title=" Login"
                        icon={<Icon
                            name='sign-in'
                            type='font-awesome'
                            size={24}
                            color='white'
                        />}
                        buttonStyle={{ backgroundColor: "#512DA8" }}
                    />
                </View>
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Register')}
                        title=" Register"
                        type="clear"
                        icon={<Icon
                            name='user-plus'
                            type='font-awesome'
                            size={24}
                            color='blue'
                        />}
                        titleStyle={{ color: 'blue' }}
                    />
                </View>
            </View>
        );
    }
}

class RegisterTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            remember: false,
            firstname: '',
            lastname: '',
            email: '',
            imageUrl: baseUrl + 'images/logo.png'
        }
    }

    getImageFromCamera = async () => {
        const cameraPermission = await Permissions.askAsync(Permissions.CAMERA)
        const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL)

        if ((cameraPermission.status === 'granted') || (cameraRollPermission === 'granted')) {
            let capturedImage = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3]
            });

            if (!capturedImage.cancelled) {
                this.setState({ imageUrl: capturedImage.uri })
            }
        }
    }

    handelRegister() {
        console.log(JSON.stringify(this.state));
        if (this.state.remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({ username: this.state.username, password: this.state.password })
            )
                .catch((error) => console.log('Could not save user info ', error));
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.imageContainer} >
                    <Image
                        source={{ uri: this.state.imageUrl }}
                        loadingIndicatorSource={require('./images/logo.png')}
                        style={styles.image}
                    />
                    <Button
                        title='Camera'
                        onPress={this.getImageFromCamera}
                    />
                </View>
                <View style={styles.container}>
                    <Input
                        placeholder="Username"
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username}
                        inputContainerStyle={styles.formInput}
                    />
                    <Input
                        placeholder="Password"
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        inputContainerStyle={styles.formInput}
                    />
                    <Input
                        placeholder="First Name"
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={(firstname) => this.setState({ firstname })}
                        value={this.state.firstname}
                        inputContainerStyle={styles.formInput}
                    />
                    <Input
                        placeholder="Last Name"
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={(lastname) => this.setState({ lastname })}
                        value={this.state.lastname}
                        inputContainerStyle={styles.formInput}
                    />
                    <Input
                        placeholder="Email"
                        leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        inputContainerStyle={styles.formInput}
                    />
                    <CheckBox
                        title="Remember Me"
                        checked={this.state.remember}
                        center
                        onPress={() => this.setState({ remember: !this.state.remember })}
                        containerStyle={styles.formCheckbox}
                    />

                    <View style={styles.formButton}>
                        <Button
                            onPress={() => this.handelRegister()}
                            title=" Register"
                            icon={<Icon
                                name='user-plus'
                                type='font-awesome'
                                size={24}
                                color='white'
                            />}
                            buttonStyle={{ backgroundColor: "#512DA8" }}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    image: {
        margin: 10,
        width: 80,
        height: 60
    },
    formInput: {
        margin: 0
    },
    formCheckbox: {
        margin: 20,
        backgroundColor: null
    },
    formButton: {
        margin: 60
    }
});

export default Login;