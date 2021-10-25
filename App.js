import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Montserrat_400Regular as MontserratRegular,
  Montserrat_700Bold as MontserratBold,
} from '@expo-google-fonts/montserrat'

import mock from './src/mocks/basket'
import Basket from './src/screens/Basket'

export default function App() {
  const [fontIsLoaded] = useFonts({
    MontserratRegular,
    MontserratBold,
  })

  if (!fontIsLoaded) return <AppLoading />

  return (
    <SafeAreaView>
      <StatusBar />

      <Basket {...mock} />
    </SafeAreaView>
  )
}
