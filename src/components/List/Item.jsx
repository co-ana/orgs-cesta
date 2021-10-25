import React from 'react'
import { Image, View } from 'react-native'

import Text from '../Text'
import style from './List.style'

const Item = ({ image, label }) => (
  <View style={style.itemContainer}>
    <Image source={image} style={style.image} />

    <Text style={style.text}>{label}</Text>
  </View>
)

export default Item
