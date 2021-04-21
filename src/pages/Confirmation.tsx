import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {

  const navigation = useNavigation()

  function handleMoveOn(){
    navigation.navigate('PlantSelect')
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Text style={styles.emoji}>
          😄
        </Text>

        <Text style={styles.title}>Prontinho!</Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar da suas plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button title='Começar' onPress={handleMoveOn}/>
        </View>
      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 50
  },
  footer: {
    width: Dimensions.get('window').width * 0.6,
    alignItems: 'center'
  },
  emoji: {
    fontSize: 78
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 20
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    paddingTop: 10,
    color: colors.heading,
    textAlign: 'center'
  }
})