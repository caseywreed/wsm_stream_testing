/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import './ReactotronConfig'
import Reactotron from 'reactotron-react-native'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import { Player } from 'react-native-audio-streaming'

export default class App extends Component<{}> {
  render() {
    Reactotron.log('hello world')
    return (
      <View style={styles.container}>
        <Player url={"http://stream01050.westreamradio.com/wsm2-mp3"} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
