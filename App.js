
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Platform,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';
import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming';
import './ReactotronConfig.js'

export default class App extends Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.streams = [
      {
        name: 'WSM Stream',
        url: 'http://stream01050.westreamradio.com/wsm2-mp3',
        image: 'https://lh3.googleusercontent.com/iIlkA7VzcK8Rv2Sp8SO6Ro4eVpodbeA-4a_niBTArMYGZuESzwH__oh0NtJ6HKLLwEw=w300'
      },
      {
        name: 'WPLN Nashville',
        url: 'https://wpln.streamguys1.com/wplnfm.mp3',
        image: 'https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-9/14055132_10153658252811150_3320364785944253387_n.jpg?oh=95f9a93f96fc14fe1ba935ae5e65e987&oe=5AA66879'
      }
    ];

    this.state = {
      streamName: 'Nothing',
      selectedSource: '',
      selectedImage: 'http://i0.kym-cdn.com/photos/images/facebook/000/697/080/2db.png'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.streamName}</Text>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: this.state.selectedImage }}
        />
        <Player url={this.state.selectedSource} />
        <Button
          onPress={() => {
            this.setState({streamName: this.streams[0].name, selectedSource: this.streams[0].url, selectedImage: this.streams[0].image})
            ReactNativeAudioStreaming.stop()
          }}
          title="WSM"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.setState({streamName: this.streams[1].name, selectedSource: this.streams[1].url, selectedImage: this.streams[1].image})
            ReactNativeAudioStreaming.stop()
          }}
          title='WPLN'
          color="#841584"
        />
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
    paddingTop: Platform.OS === 'ios' ? 30 : 0
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  column: {
    flexDirection: 'column'
  },
  icon: {
    fontSize: 26,
    width: 30,
    textAlign: 'center'
  },
  name: {
    color: '#000'
  },
  url: {
    color: '#CCC'
  }
});