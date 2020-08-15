import React from 'react';
import {View, Text, Image} from 'react-native';
import { Octicons, Entypo } from '@expo/vector-icons';

import styles from './style';
import Profile from '../../assets/image/profile.jpg';

const InstagramPhoto = () => {
  return (
    <View>
      <View style={styles.instaContainer}>
        <Text style={styles.photosHeaderText}>Recent Instagram Photos</Text>
        <View style={styles.flexRowDot}>
          <Octicons name="primitive-dot" style={styles.dotFirst}/>
          <Octicons name="primitive-dot" style={styles.dotSec}/>
        </View>
      </View>
      <View>
        <View style={styles.imageRow}>
          <Image source={Profile} style={styles.image}/>
          <Image source={Profile} style={styles.image}/>
          <Image source={Profile} style={styles.image}/>
        </View>
        <View style={styles.imageRow}>
          <Image source={Profile} style={styles.image}/>
          <Image source={Profile} style={styles.image}/>
          <Image source={Profile} style={styles.image}/>
        </View>
        <View>

        </View>
      </View>
    </View>
  )
}
export default InstagramPhoto;