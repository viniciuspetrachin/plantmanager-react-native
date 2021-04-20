import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonProps{
  title: string
}

export function Button(props : ButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    width: '92%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
})