import React, { Component } from 'react';
import Reactotron from 'reactotron-react-native'
import {
    StyleSheet,
    View,
    Button
} from 'react-native';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';

const streamUrl = 'http://stream01050.westreamradio.com/wsm2-mp3';


export default class StreamPlayer extends Component<{}> {
    render() {
        Reactotron.log('StreamPlayer loaderd')
        return (
            <View style={styles.container}>
                <Button onPress={this.playStream} />
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
});
