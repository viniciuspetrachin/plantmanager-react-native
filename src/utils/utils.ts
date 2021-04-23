import { Alert } from 'react-native';

export function AlertError(text: string){
   return Alert.alert('Opss! 😨', text)
}