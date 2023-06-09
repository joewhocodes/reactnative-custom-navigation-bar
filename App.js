import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as Icons from 'react-native-heroicons/solid';

const iconHeight = 26;
const iconWidth = 26;

export default class App extends React.Component {
    state = {
        screenText: 'Press a button!',
    };

    changeText = text => {
        console.log(`${text} has been pressed`);
        this.setState({
            screenText: text,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 30, color: 'white' }}>
                        {this.state.screenText}
                    </Text>

                    <StatusBar style='light' />
                </View>

                <View style={styles.NavContainer}>
                    <View style={styles.NavBar}>
                        <Pressable
                            onPress={() => this.changeText('Home')}
                            style={styles.IconBehave}
                            android_ripple={{ borderless: true, radius: 50 }}>
                            <Text>Home</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => this.changeText('Favourites')}
                            style={styles.IconBehave}
                            android_ripple={{ borderless: true, radius: 50 }}>
                            <Text>Favourites</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => this.changeText('Profile')}
                            style={styles.IconBehave}
                            android_ripple={{ borderless: true, radius: 50 }}>
                            <Text>Profile</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => this.changeText('Settings')}
                            style={styles.IconBehave}
                            android_ripple={{ borderless: true, radius: 50 }}>
                            <Text>Settings</Text>
                        </Pressable>
                    </View>
                </View>
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

    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
    },

    NavBar: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 40,
    },

    IconBehave: {
        padding: 14,
    },
});
