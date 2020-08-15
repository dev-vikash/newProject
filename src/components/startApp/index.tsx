import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

const StartApp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {navigation.navigate("profile")}}
      >
        <Text style={styles.myProfileText}>MY PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
}
export default StartApp;