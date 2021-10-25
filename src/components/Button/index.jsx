import React from 'react'
import { TouchableOpacity } from 'react-native'

import Text from '../Text'
import style from './Button.style'

const Button = ({ children, ...props }) => (
  <TouchableOpacity style={style.buttonBox} {...props}>
    <Text bold style={style.buttonText}>
      {children}
    </Text>
  </TouchableOpacity>
)

export default Button
