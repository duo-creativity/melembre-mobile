import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

import Inputs from '../../Components/Inputs'
import Button from '../../Components/Button'

import styles from './styles'
import Checkbox from '../../Components/Checkbox'

export default function Register() {
  return(
    /**
     * No RN não há tags como no html
     * Temos que importar de react-native
     */
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/background.png')} style={styles.backImage}>
        <Text style={styles.title}>Nova Conta</Text>
      </ImageBackground>

      <View style={styles.formContainer}>
        <Inputs placeholder='Usuário'/>
        <Inputs placeholder='Nome'/>
        <Inputs placeholder='E-mail'/>
        <Inputs placeholder='Senha'/>

        <Checkbox content='Li e aceito os Termos de Uso' />

        <Button title='Cadastrar'/>
      </View>
    </View>
  )
}