import React, { Component } from "react";
import Login from './LoginComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Reservation from './ReservationComponent';
import Favorites from './FavoriteComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";
import { ScrollView, Text, View, Image, StyleSheet, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { fetchComments, fetchDishes, fetchLeaders, fetchPromos } from '../redux/ActionCreators';
import * as NetInfo from '@react-native-community/netinfo';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    fetchPromos: () => dispatch(fetchPromos())
})


const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const ContactNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();
const ReservationNavigator = createStackNavigator();
const FavoritesNavigator = createStackNavigator();
const LoginNavigator = createStackNavigator();

function LoginNavigatorScreen() {
    return (
        <LoginNavigator.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <MenuNavigator.Screen
                name="Login"
                component={Login}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={24}
                            color='white'
                            onPress={() => navigation.toggleDrawer()}
                            iconStyle={{ margin: 10 }}
                        />
                    )
                })}
            />
        </LoginNavigator.Navigator>
    );
}

function MenuNavigatorScreen() {
    return (
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
                options={({ navigation }) => ({
                    headerLeft: () => (

                        <Icon
                            name="menu"
                            size={24}
                            color="white"
                            onPress={() => navigation.toggleDrawer()}
                            iconStyle={{ margin: 10 }}
                        />

                    )
                })

                } />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail" }}
            />
        </MenuNavigator.Navigator>
    );
}

function HomeNavigatorScreen() {
    return (
        <HomeNavigator.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <HomeNavigator.Screen
                name="Home"
                component={Home}
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (

                            <Icon
                                name="menu"
                                size={24}
                                color="white"
                                onPress={() => navigation.toggleDrawer()}
                                iconStyle={{ margin: 10 }}
                            />

                        )
                    })
                }
            />
        </HomeNavigator.Navigator>
    );
}

function ContactNavigatorScreen() {
    return (
        <ContactNavigator.Navigator
            initialRouteName='Contact'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <ContactNavigator.Screen
                name="Contact Us"
                component={Contact}
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (

                            <Icon
                                name="menu"
                                size={24}
                                color="white"
                                onPress={() => navigation.toggleDrawer()}
                                iconStyle={{ margin: 10 }}
                            />

                        )
                    })
                }
            />
        </ContactNavigator.Navigator>
    );
}

function FavoritesNavigatorScreen() {
    return (
        <FavoritesNavigator.Navigator
            initialRouteName='Favorites'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <FavoritesNavigator.Screen
                name="My Favorites"
                component={Favorites}
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (

                            <Icon
                                name="menu"
                                size={24}
                                color="white"
                                onPress={() => navigation.toggleDrawer()}
                                iconStyle={{ margin: 10 }}
                            />

                        )
                    })
                }
            />
        </FavoritesNavigator.Navigator>
    );
}



function ReservationNavigatorScreen() {
    return (
        <ReservationNavigator.Navigator
            initialRouteName='Reservation'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <ReservationNavigator.Screen
                name="Reserve Table"
                component={Reservation}
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (

                            <Icon
                                name="menu"
                                size={24}
                                color="white"
                                onPress={() => navigation.toggleDrawer()}
                                iconStyle={{ margin: 10 }}
                            />

                        )
                    })
                }
            />
        </ReservationNavigator.Navigator>
    );
}


function AboutNavigatorScreen() {
    return (
        <AboutNavigator.Navigator
            initialRouteName='About'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: '#fff'
                },
            }}
        >
            <AboutNavigator.Screen
                name="About Us"
                component={About}
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (

                            <Icon
                                name="menu"
                                size={24}
                                color="white"
                                onPress={() => navigation.toggleDrawer()}
                                iconStyle={{ margin: 10 }}
                            />

                        )
                    })
                }
            />
        </AboutNavigator.Navigator>
    );
}

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('./images/logo.png')}
                    style={styles.drawerImage}
                />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>
                    Ristorante Con Fusion
                </Text>
            </View>
        </View>
        <DrawerItemList {...props} />
    </ScrollView>
);

const MainNavigator = createDrawerNavigator();

function MainNavigatorDrawer() {
    return (
        <MainNavigator.Navigator
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor: "#D1C4E9"
            }}
            drawerContent={
                (props) => <CustomDrawerContentComponent {...props} />
            }
        >
            <MainNavigator.Screen
                name="Login"
                component={LoginNavigatorScreen}
                options={{
                    drawerIcon: ({ tintcolor }) => (
                        <Icon
                            name="sign-in"
                            type="font-awesome"
                            size={24}
                            color={tintcolor}
                        />
                    )
                }}
            />

            <MainNavigator.Screen
                name="Home"
                component={HomeNavigatorScreen}
                options={{
                    drawerIcon: ({ tintcolor }) => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            size={24}
                            color={tintcolor}
                        />
                    )
                }}
            />
            <MainNavigator.Screen
                name="About Us"
                component={AboutNavigatorScreen}
                options={{
                    drawerIcon: ({ tintcolor }) => (
                        <Icon
                            name='info-circle'
                            size={24}
                            color={tintcolor}
                            type='font-awesome'
                        />
                    )
                }}
            />
            <MainNavigator.Screen
                name="Menu"
                component={MenuNavigatorScreen}
                options={{
                    drawerIcon: ({ tintcolor }) => (
                        <Icon
                            name='list'
                            size={24}
                            color={tintcolor}
                            type='font-awesome'
                        />
                    )
                }}
            />
            <MainNavigator.Screen
                name="Contact"
                component={ContactNavigatorScreen}
                options={{
                    drawerIcon: ({ tintcolor }) => (
                        <Icon
                            name='address-card'
                            size={24}
                            color={tintcolor}
                            type='font-awesome'
                        />
                    )
                }}
            />

            <MainNavigator.Screen
                name="My Favorites"
                component={FavoritesNavigatorScreen}
                options={{
                    drawerIcon: ({ tintcolor }) => (
                        <Icon
                            name='heart'
                            size={24}
                            color={tintcolor}
                            type='font-awesome'
                        />
                    )
                }}
            />

            <MainNavigator.Screen
                name="Reserve Table"
                component={ReservationNavigatorScreen}
                options={{
                    drawerIcon: ({ tintcolor }) => (
                        <Icon
                            name='cutlery'
                            size={24}
                            color={tintcolor}
                            type='font-awesome'
                        />
                    )
                }}
            />

        </MainNavigator.Navigator>
    );

}

class Main extends Component {

    componentDidMount() {
        this.props.fetchComments();
        this.props.fetchDishes();
        this.props.fetchLeaders();
        this.props.fetchPromos();

        NetInfo.fetch()
            .then((connectionInfo) => {
                ToastAndroid.show('Initial Network Connectivity Type : ' + connectionInfo.type, ToastAndroid.LONG)
            });

        NetInfo.addEventListener(connectionChange => this.handelConnectivityChange(connectionChange))
    }

    handelConnectivityChange = (connectionInfo) => {
        switch (connectionInfo.type) {
            case 'none':
                ToastAndroid.show('You are now offline!', ToastAndroid.LONG)
                break;

            case 'wifi':
                ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG)
                break;

            case 'cellular':
                ToastAndroid.show('You are now connected to Cellular!', ToastAndroid.LONG)
                break;

            case 'unknown':
                ToastAndroid.show('You now have unknown connection!', ToastAndroid.LONG);
                break;

            default:
                break
        }
    }

    render() {
        return (
            <NavigationContainer>
                <MainNavigatorDrawer />
            </NavigationContainer>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        marginTop: 40,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
