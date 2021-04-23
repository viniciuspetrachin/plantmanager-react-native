import React, { useState } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { SvgFromUri } from 'react-native-svg';

import { useRoute } from '@react-navigation/core';

import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import waterDrop from '../assets/waterdrop.png'
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { format, isBefore } from 'date-fns';

interface ParamsProps {
   plant: {
      id: string;
      name: string;
      about: string;
      water_tips: string;
      photo: string;
      environments: [string];
      frequency: {
         times: number;
         repeat_every: string;
      }
   }
}

export function PlantSave() {
   const route = useRoute()
   const { plant } = route.params as ParamsProps

   const [selectDateTime, setSelectDateTime] = useState(new Date())
   const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

   function handleChangeTime(event: Event, dateTime: Date | undefined) {
      if (Platform.OS === 'android') {
         setShowDatePicker(oldValue => !oldValue)
      }
      if (dateTime && isBefore(dateTime, new Date())) {
         setSelectDateTime(new Date())
         return Alert.alert('Opss! 😨', 'Ainda não conseguimos voltar no tempo, né?! 🤔')
      }
      if (dateTime) {
         setSelectDateTime(dateTime)
      }
   }
   function handleOpenTimePicker() {
      setShowDatePicker(oldTime => !oldTime)
   }

   return (
      <View style={styles.container}>
         <View style={styles.plantInfo}>
            <SvgFromUri
               uri={plant.photo}
               height={150}
               width={150}
            />
            <Text style={styles.plantName}>
               {plant.name}
            </Text>
            <Text style={styles.plantAbout}>
               {plant.about}
            </Text>
         </View>
         <View style={styles.controller}>
            <View style={styles.tipContainer}>
               <Image
                  source={waterDrop}
                  style={styles.tipImage}
               />
               <Text style={styles.tipText}>
                  {plant.water_tips}
               </Text>
            </View>
            <Text style={styles.alertLabel}>
               Escolha o melhor horário para ser lembrado
            </Text>

            {showDatePicker &&
               <DateTimePicker
                  value={selectDateTime}
                  mode='time'
                  display='spinner'
                  onChange={handleChangeTime}
               />
            }
            {
               Platform.OS === 'android' &&
               <TouchableOpacity
                  onPress={handleOpenTimePicker}
                  style={styles.openTime}
               >
                  <Text style={styles.changeTime}>
                     {`Mudar ${format(selectDateTime, "HH'h'mm")}`}
                  </Text>
               </TouchableOpacity>
            }


            <Button
               title='Cadastrar planta'
               onPress={() => { }}
            />

         </View>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: colors.shape
   },
   plantInfo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.shape,
      paddingHorizontal: 30,
      paddingVertical: 50
   },
   plantName: {
      fontFamily: fonts.heading,
      fontSize: 24,
      color: colors.heading
   },
   plantAbout: {
      textAlign: 'center',
      fontFamily: fonts.text,
      fontSize: 17,
      color: colors.heading,
      marginTop: 10
   },
   controller: {
      backgroundColor: colors.white,
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingHorizontal: 20,
      paddingBottom: getBottomSpace() || 0,
      alignItems: 'center',
   },
   tipContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.blue_light,
      padding: 20,
      borderRadius: 20,
      position: 'relative',
      bottom: 60
   }
   ,
   tipImage: {
      width: 56,
      height: 56
   },
   tipText: {
      flex: 1,
      marginLeft: 20,
      fontFamily: fonts.text,
      color: colors.blue,
      fontSize: 17,
      textAlign: 'justify'
   },
   alertLabel: {
      textAlign: 'center',
      color: colors.heading,
      fontFamily: fonts.text,
      fontSize: 12,
      marginBottom: 5
   },
   changeTime: {
      color: colors.heading,
      fontFamily: fonts.text,
      fontSize: 24
   },
   openTime:{
      width: '100%',
      alignItems: 'center',
      paddingVertical: 20,
   }

})