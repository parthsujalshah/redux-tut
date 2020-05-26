import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import OneScreen from './One';
import TwoScreen from './Two';

const Nav = createBottomTabNavigator({
  One: {
    screen: OneScreen
  },
  Two: {
    screen: TwoScreen
  }
});

export default createAppContainer(Nav);