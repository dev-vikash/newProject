import React from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import ProfileImage from './ProfileImage';
import styles from './style';
import { Octicons, Entypo } from '@expo/vector-icons';
import InstagramPhoto from './InstagramPhoto';
import Footer from '../footer';

const Profile = () => {
  return(
    <ScrollView style={styles.container}>
      <ProfileImage />
      <View style={styles.addressContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Anna</Text>
          <Text style={styles.age}>19</Text>
        </View>
        <View style={styles.uniContainer}>
          <Entypo name="graduation-cap" style={styles.degree} />
          <Text style={styles.university}>University of San Francisco</Text>
        </View>
        <View style={styles.locationContainer}>
          <Octicons name="location" style={styles.degree} />
          <Text style={styles.university}>1 mile away</Text>
        </View>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>
          Moved from the East Coast & just want to meet some new people.
        </Text>
      </View>
      <InstagramPhoto />
      <Footer />
    </ScrollView>
  )
}
export default Profile;