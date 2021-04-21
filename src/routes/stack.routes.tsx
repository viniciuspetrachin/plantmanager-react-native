import React from 'react';
import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import colors from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';

const Stack = createStackNavigator()

const AppRoutes: React.FC = () => (
  <Stack.Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >

    <Stack.Screen name='Welcome' component={Welcome} />
    <Stack.Screen name='UserIdentification' component={UserIdentification} />
    <Stack.Screen name='Confirmation' component={Confirmation} />

  </Stack.Navigator>
)
export default AppRoutes