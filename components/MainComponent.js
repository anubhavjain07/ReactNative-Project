import React, { Component } from "react";
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const ContactNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();

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
                component={Menu} />
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
                component={Home} />
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
                component={Contact} />
        </ContactNavigator.Navigator>
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
                }
            }}
        >
            <AboutNavigator.Screen
                name="About Us"
                component={About} />
        </AboutNavigator.Navigator>
    );
}

const MainNavigator = createDrawerNavigator();

function MainNavigatorDrawer() {
    return (
        <MainNavigator.Navigator
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor: "#D1C4E9"
            }}
        >
            <MainNavigator.Screen
                name="Home"
                component={HomeNavigatorScreen} />
            <MainNavigator.Screen
                name="About Us"
                component={AboutNavigatorScreen} />
            <MainNavigator.Screen
                name="Menu"
                component={MenuNavigatorScreen} />
            <MainNavigator.Screen
                name="Contact"
                component={ContactNavigatorScreen} />

        </MainNavigator.Navigator>
    );

}

class Main extends Component {


    render() {
        return (
            <NavigationContainer>
                <MainNavigatorDrawer />
            </NavigationContainer>
        );
    }

}

export default Main;
