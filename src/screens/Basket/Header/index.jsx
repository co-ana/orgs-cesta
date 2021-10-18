import React from 'react'
import { Image } from 'react-native'

import Text from '../../../components/Text'
import style from './Header.styles'

const Header = ({ title, banner }) => {
  return (
    <>
      <Image source={banner} style={style.banner} />

      <Text style={style.header} bold>
        {title}
      </Text>
    </>
  )
}

export default Header
