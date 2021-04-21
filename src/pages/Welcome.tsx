import React from 'react';

import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Feather } from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'
import { useNavigation } from '@react-navigation/core';

export function Welcome() {

  const navigation = useNavigation()

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>

        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode='contain'
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleStart}
        >

          <Feather name='chevron-right' style={styles.chevronRight} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 36
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  chevronRight: {
    fontSize: 30,
    color: colors.white
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})