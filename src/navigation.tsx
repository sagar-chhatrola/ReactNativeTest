import React from 'react';

import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";

import PeopleSearchScreen from './screens/PrimaryBottomTab/PeopleSearchScreen';
import ShowSearchScreen from './screens/PrimaryBottomTab/ShowSearchScreen';
import ShowsListScreen from './screens/PrimaryBottomTab/ShowsListScreen';
import WebPageScreen from './screens/PrimaryBottomTab/WebPageScreen';

const TabBarComponent = (props:any) => <BottomTabBar {...props} />;

const TabScreens = createBottomTabNavigator(
  {
    ShowList: {
      screen: ShowsListScreen,
      navigationOptions:{
        tabBarLabel:'List'
      }
    },
    ShowSearch: {
      screen: ShowSearchScreen,
      navigationOptions:{
        tabBarLabel:'Search'
      }
    },
    PeopleSearch: {
      screen: PeopleSearchScreen,
      navigationOptions:{
        tabBarLabel:'People'
      }
    },
    WebPage: {
      screen: WebPageScreen,
      navigationOptions:{
        tabBarLabel:'Web Page'
      }
    },
  },
  {
    tabBarComponent: (props) => (
      <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
    ),
  }
);

const MainStack = createStackNavigator({
  Home: {
    screen: TabScreens,
    navigationOptions:{
      header : false
    }
  }
});

export const RootContainer = createAppContainer(MainStack)
