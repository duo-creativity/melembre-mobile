import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useFonts, GochiHand_400Regular } from '@expo-google-fonts/gochi-hand'
import { AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import Register from './src/Pages/Register';

export default function App() {
  /**
   * No RN precisamos carregar as fonts antes de exibir o app
   * Para isso usamos a função useFonts importada acima
   * Nela será dito quais fonts nosso projeto usará
   */
  let [fontsLoaded] = useFonts({
    GochiHand_400Regular,
  })

  /**
   * Temos que verificar se as fonts foram carregadas
   * Para então liberar o inicio do app
   */
  if(!fontsLoaded) {
    // Para o retorno de um unico componente, podemos colocar sua tag logo após o return
    // Neste caso estaremos retornando uma tela de carregamento

    return <AppLoading/>
  }

  /**
   * Depois de ter carregado as fonts ele permite o retorno do conteudo do app
   */
  return (
    /**
     * No react e RN temos sempre que retornar um elemento pai
     * Neste caso estamos usando o <></> como pai, a unica função dele
     * é ser usada desta maneira, sendo o pai da pagina/componente
     */
    
    <>
      <Register/>
      <StatusBar style="auto" />
    </>
  );
}
