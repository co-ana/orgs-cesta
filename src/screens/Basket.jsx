import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import Header from '../components/Header'
import Text from '../components/Text'
import farmLogo from '../../assets/logo.png'

export default function Basket() {
  return (
    <>
      <Header />

      <View style={style.container}>
        <Text bold style={style.h1}>
          Cesta de verduras
        </Text>

        <View style={style.farmDetails}>
          <Image source={farmLogo} style={style.farmLogo} />

          <Text bold style={style.h2}>
            Nome da fazenda
          </Text>
        </View>

        <Text style={style.p}>
          Descrição
        </Text>

        <Text bold style={style.lead}>
          R$ 50,00
        </Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  farmDetails: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  farmLogo: {
    height: 32,
    width: 32,
    marginRight: 12,
  },
  h1: {
    fontFamily: 'MontserratBold',
    fontSize: 24,
    lineHeight: 42,
  },
  h2: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    lineHeight: 24,
    color: '#464646',
  },
  p: {
    color: '#A3A3A3',
    fontSize: 16,
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  lead: {
    color: '#2A9F85',
    fontFamily: 'MontserratBold',
    fontSize: 28,
    marginTop: 8,
  },
});
