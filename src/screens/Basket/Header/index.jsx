import React from 'react'
import { Image } from 'react-native'

import Text from '../../../components/Text'
import style from './Header.styles'

const Header = ({ title, banner }) => (
  <>
    <Image source={banner} style={style.banner} />

    <Text bold style={style.header}>
      {title}
    </Text>
  </>
)

export default Header
