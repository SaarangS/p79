import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return(
      <View style = {styles.container}>
        <Text style = {styles.title}>Spacecraft Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    textAlign: 'center', 
    fontSize:30
  },
});