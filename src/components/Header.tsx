import React, { useEffect, useState } from 'react';
import {
   Image,
   StyleSheet,
   Text,
   View
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import AsyncStorage from '@react-native-async-storage/async-storage'

export function Header() {

   const [userName, setUserName] = useState<string>()

   useEffect(() => {
      loadUserName()
   }, [])

   async function loadUserName(){
      const name = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(name || '')
   }

   return (
      <View style={styles.container}>
         <View>
            <Text style={styles.greeting}>Ola</Text>
            <Text style={styles.userName}>{userName}</Text>
         </View>
         <Image
            style={styles.profileImage}
            source={require('../assets/profile.jpg')}
         />
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 20
   },
   profileImage: {
      height: 70,
      width: 70,
      borderRadius: 40
   },
   greeting: {
      fontSize: 32,
      color: colors.heading,
      fontFamily: fonts.text
   },
   userName: {
      fontSize: 32,
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 40
   }
})