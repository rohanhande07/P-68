import React from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header'

export default class FacebookScreen extends React.Component {
    render() {
      return (
        <View>
        <View>  <Header/> </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{textAlign: 'center', fontSize: 40}}> Facebook </Text>
        </View></View>
      );
    }
  }