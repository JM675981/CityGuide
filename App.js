import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import data from './attraction.json';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const cityIcon = require('./assets/chicago.png');

export default class App extends React.Component {
  renderRow({ item }) {
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={cityIcon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.attraction}>{item.attraction}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <Text style={styles.website}>{item.website}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>City Guide</Text>
        <FlatList data={data} renderItem={this.renderRow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede2e0',
  },
  title: {
    backgroundColor: '#1c7da5',
    color: '#ede2e0',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#7b7983',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#1f3243',
    borderColor: '#1f3243',
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  icon: {
    height: 45,
    width: 45,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  attraction: {
    color: '#122737',
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    color: '#3c4f62',
    fontSize: 16,
  },
  website: {
    color: '#3c4f62',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
