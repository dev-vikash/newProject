import React from 'react';
import { View, Image } from 'react-native';
import Profile from '../../assets/image/profile.jpg';
import styles from './style';

const ProfileImage = () => {
  return (
    <View style={styles.imageView}>
       <Image
        source={Profile}
        style={styles.stretch}
      />
    </View>
  )
}
export default ProfileImage;