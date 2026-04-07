import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Status from './components/Status';
import MessageList from './components/MessageList';
import { createTextMessage, createImageMessage, createLocationMessage } from './utils/MessageUtils';

export default function App() {
  // Dummy messages for preview
  const [messages, setMessages] = useState([
    createTextMessage("1"),
    createTextMessage("2"),
    createTextMessage("3"),
    createTextMessage("4"),
    createTextMessage("1"),
    createTextMessage("2"),
    createTextMessage("3"),
    createTextMessage("4"),
    createTextMessage("1"),
    createTextMessage("2"),
    createTextMessage("3"),
    createTextMessage("4"),
    createTextMessage("1"),
    createTextMessage("2"),
    createTextMessage("3"),
    createTextMessage("4"),

  ]);

  return (
    <View style={styles.container}>
      <Status />
      <MessageList messages={messages} />
      <View style={styles.inputMethodEditor}></View>
      <View style={styles.toolbar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: '#fff',
  },
});