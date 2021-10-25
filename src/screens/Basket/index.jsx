import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import Details from './Details'
import Header from './Header'
import List from '../../components/List'
import basket from '../../mocks/basket'

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})

const Basket = ({ header, details }) => (
  <ScrollView>
    <Header {...header} />

    <View style={style.container}>
      <Details {...details} />

      <List items={basket.items} />
    </View>
  </ScrollView>
)

export default Basket
