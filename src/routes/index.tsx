import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
} from "react-navigation";
import Home from "../views/Home";
import { createStackNavigator } from "react-navigation-stack";

export default () => {

    const switchNavigator = createSwitchNavigator({
        Main: Home
    });

    const Container = createAppContainer(switchNavigator);
    return <Container />;
};