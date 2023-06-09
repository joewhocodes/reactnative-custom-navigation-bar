import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';

const iconHeight = 26;
const iconWidth = 26;

export default class App extends React.Component {
  state = {
    screenText: 'Press a button!'
  }

    changeText = (text) => {
      console.log(`${text} has been pressed`)
      this.setState({
        screenText: text
      })
    }

    render() {
        return (
            <View style={styles.container}>
              <View>
                <Text style={{fontSize: 30, color: 'white'}}>{this.state.screenText}</Text>
              </View>
                <StatusBar style='light' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3962FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
