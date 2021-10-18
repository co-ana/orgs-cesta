import React from 'react'
import { Text, Image, StyleSheet, Dimensions } from 'react-native'

import banner from '../../../assets/topo.png'

const screenWidth = Dimensions.get('screen').width

const Header = () => {
  return (
    <>
      <Image source={banner} style={style.banner} />
      <Text style={style.header}>Detalhes da cesta</Text>
    </>
  )
}

const style = StyleSheet.create({
  banner: {
    height: (578 / 768) * screenWidth,
    width: '100%',
  },
  header: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    fontFamily: 'MontserratBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
})


export default Header
