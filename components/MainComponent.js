import React, { Component } from "react";
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Reservation from './ReservationComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchComments, fetchDishes, fetchLeaders, fetchPromos } from '../redux/ActionCreators';

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
                        <View style={{ marginLeft: 10 }}>
                            <Icon
                                name="menu"
                                size={24}
                                color="white"
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </View>
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
                            <View style={{ marginLeft: 10 }}>
                                <Icon
                                    name="menu"
                                    size={24}
                                    color="white"
                                    onPress={() => navigation.toggleDrawer()}
                                />
                            </View>
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
                            <View style={{ marginLeft: 10 }}>
                                <Icon
                                    name="menu"
                                    size={24}
                                    color="white"
                                    onPress={() => navigation.toggleDrawer()}
                                />
                            </View>
                        )
                    })
                }
            />
        </ContactNavigator.Navigator>
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
                            <View style={{ marginLeft: 10 }}>
                                <Icon
                                    name="menu"
                                    size={24}
                                    color="white"
                                    onPress={() => navigation.toggleDrawer()}
                                />
                            </View>
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
                            <View style={{ marginLeft: 10 }}>
                                <Icon
                                    name="menu"
                                    size={24}
                                    color="white"
                                    onPress={() => navigation.toggleDrawer()}
                                />
                            </View>
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
