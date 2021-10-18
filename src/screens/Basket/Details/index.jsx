import React from 'react'
import { Image, View } from 'react-native'

import Text from '../../../components/Text'
import style from './Details.styles'

const Details = ({
  name,
  description,
  price,
  farm
}) => {
  return (
    <>
      <Text bold style={style.h1}>
        {name}
      </Text>

      <View style={style.farmDetails}>
        <Image source={farm.logo} style={style.farmLogo} />

        <Text bold style={style.h2}>
          {farm.name}
        </Text>
      </View>

      <Text style={style.p}>
        {description}
      </Text>

      <Text bold style={style.lead}>
        {price}
      </Text>
    </>
  )
}

export default Details
