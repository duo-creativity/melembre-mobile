import React from 'react'
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'

import styles from './style'
import { RectButton } from 'react-native-gesture-handler'

export default function Inputs({ title }) {
  return(
   <>
    <RectButton style={styles.button} value='Cadastrar'>
      <Text style={styles.buttonTitle}>{ title }</Text>
    </RectButton>
   </>
  )
}