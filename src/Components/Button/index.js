import React from 'react'
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'

import styles from './style'

export default function Inputs({ title }) {
  return(
   <>
    <TouchableOpacity style={styles.button} value='Cadastrar'>
      <Text style={styles.buttonTitle}>{ title }</Text>
    </TouchableOpacity>
   </>
  )
}