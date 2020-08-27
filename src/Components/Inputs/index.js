import React, { useState } from 'react'
import { View, Text, ImageBackground, TextInput } from 'react-native'

import styles from './style'

export default function Inputs({ placeholder }) {
  const [content, setContent] = useState(placeholder)  
  
  return(
   <>
    <TextInput 
      style={styles.input}
      value={content}
      onChange={ e => setContent(e.target.value) }  
    />
   </>
  )
}