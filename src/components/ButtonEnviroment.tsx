import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonEnviromentProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function ButtonEnviroment({
  title,
  active = false,
  ...rest
}: ButtonEnviromentProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.title,
        active && styles.titleActive
        ]}>
        {title}
      </Text>
    </RectButton>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginRight: 5
  },
  containerActive:{
    backgroundColor: colors.green_light,
  },
  title:{
    color: colors.heading,
    fontFamily: fonts.text
  },
  titleActive:{
    color: colors.green_dark,
    fontFamily: fonts.heading
  }
})