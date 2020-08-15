import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';
import { Entypo } from '@expo/vector-icons'

const Footer = () => {
  return (
    <View style={styles.containerRow}>
      <Entypo name="cross" style={styles.footerCross} />
      <Entypo name="star" style={styles.footerStar} />
      <Entypo name="heart" style={styles.footerHeart} />
    </View>
  )
}

export default Footer;