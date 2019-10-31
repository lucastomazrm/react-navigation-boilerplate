import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
} from "react-navigation";
import Home from "../views/Home";

export default () => {
    const switchNavigator = createSwitchNavigator({
        Main: Home,
    });

    const Container = createAppContainer(switchNavigator);
    return <Container />;
};