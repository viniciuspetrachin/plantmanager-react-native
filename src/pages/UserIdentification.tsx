import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';


export function UserIdentification() {

  const [isFocus, setIsFocus] = useState(false)
  const [name, setName] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>

            <Text style={styles.emoji}>
              {name.length > 1 ? '😄' : '😃'}
            </Text>

            <Text style={styles.title}>
              Como podemos {'\n'}
              chamar você?
            </Text>
            <TextInput
              style={[
                styles.input,
                (name.length > 1 || isFocus) && { borderColor: colors.green }
              ]}
              placeholder='Digite seu nome...'
              value={name}
              onChangeText={text => setName(text)}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              keyboardType='default'
            />

            <Button title='Confirmar' />

          </View>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    paddingHorizontal: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44
  },
  input: {
    borderBottomWidth: 1,
    color: colors.heading,
    borderColor: colors.gray,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20
  }
})