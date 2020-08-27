import React from 'react'
import { View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

import styles from './style'

export default function Checkbox({ content }) {
  return(
   <View style={styles.container}>
    <CheckBox style={styles.check} value={ false }/>
    <Text style={ styles.checkTitle }>{ content }</Text>
   </View>
  )
}