import React from 'react'
import { StyleSheet, View } from 'react-native'

import Details from './Details'
import Header from './Header'

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})

const Basket = ({ header, details }) => (
  <>
    <Header {...header} />

    <View style={style.container}>
      <Details {...details} />
    </View>
  </>
)

export default Basket
