import * as React from 'react';
import { createSwitchNavigator, creatAppContainer } from 'react-navigation';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

import * as firebase from 'firebase';
import { firebaseconfig } from './config';

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen : LoadingScreen,
  LoginScreen : LoginScreen,
  DashboardScreen : DashboardScreen
})

const AppNavigator = creatAppContainer(AppSwitchNavigator)

export default function App() {
  return(
    <AppNavigator/>
  )
}