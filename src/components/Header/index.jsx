import React from 'react'
import { Image } from 'react-native'

import Text from '../Text'
import style from './Header.styles'

import banner from '../../../assets/topo.png'

const Header = () => {
  return (
    <>
      <Image source={banner} style={style.banner} />

      <Text style={style.header} bold>
        Detalhes da cesta
      </Text>
    </>
  )
}

export default Header
