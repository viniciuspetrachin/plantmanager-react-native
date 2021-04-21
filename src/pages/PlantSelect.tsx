import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import colors from '../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import fonts from '../styles/fonts';

export function PlantSelect() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>
          Em qual ambiente
      </Text>
        <Text style={styles.subtitle}>
          você quer colocar sua planta?
      </Text>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: getStatusBarHeight()
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20
  },
  header:{
    paddingHorizontal: 30
  }
})