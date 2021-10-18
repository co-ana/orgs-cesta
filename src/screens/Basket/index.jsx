import React from 'react'
import { StyleSheet, View } from 'react-native'

import Details from './Details'
import Header from './Header'

export default function Basket({ header, details }) {
  return (
    <>
      <Header {...header} />

      <View style={style.container}>
        <Details {...details} />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
