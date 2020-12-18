import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

import DeckStackScreen from './navigators/StackNavigator';
import reducer from './reducers';
import middleware from './middleware';
import { setLocalNotification } from './utils/notification';

export default class App extends Component {
  componentDidMount() {
    //setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <NavigationContainer>
          <DeckStackScreen />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
