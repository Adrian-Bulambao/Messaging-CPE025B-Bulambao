import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Status from './components/Status';

export default function App() {
  return (
    <View style={styles.container}>
      <Status />
      <View style={styles.content}></View>
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
  content: {
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


