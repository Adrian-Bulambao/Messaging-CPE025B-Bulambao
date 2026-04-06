import { Constants } from 'expo';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NetInfo from '@react-native-community/netinfo';

export default class Status extends React.Component {
  state = {
    info: 'none',
  };

  componentDidMount() {
    // Get initial connection status
    NetInfo.fetch().then(state => {
      this.setState({ info: state.isConnected ? 'wifi' : 'none' });
    });

    // Subscribe to network changes
    this.unsubscribe = NetInfo.addEventListener(state => {
      this.setState({ info: state.isConnected ? 'wifi' : 'none' });
    });
  }

  componentWillUnmount() {
    // Unsubscribe when the component unmounts
    this.unsubscribe && this.unsubscribe();
  }

  render() {
    const { info } = this.state;
    const isConnected = info !== 'none';
    const backgroundColor = isConnected ? 'white' : 'red';

    const statusBar = (
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={isConnected ? 'dark-content' : 'light-content'}
        animated={false}
      />
    );

    const messageContainer = !isConnected && (
      <View style={styles.messageContainer} pointerEvents={'none'}>
        <View style={styles.bubble}>
          <Text style={styles.text}>No network connection</Text>
        </View>
      </View>
    );

    return (
      <View>
        <View style={[styles.status, { backgroundColor }]}>
          {statusBar}
        </View>
        {messageContainer}
      </View>
    );
  }
}

const statusHeight = Platform.OS == 'ios' ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight + 35,
  },
  messageContainer: {
    zIndex: 1,
    position: 'absolute',
    top: statusHeight + 50,
    left: 0,
    right: 0,
    height: 80,
    alignItems: 'center',
  },
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});