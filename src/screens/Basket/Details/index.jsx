import React from 'react'
import { Image, View } from 'react-native'

import Button from '../../../components/Button'
import Text from '../../../components/Text'
import List from '../../../components/List'
import style from './Details.styles'

const Details = ({ name, description, price, farm }) => (
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

    <Text style={style.p}>{description}</Text>

    <Text bold style={style.lead}>
      {price}
    </Text>

    <Button onPress={() => console.log("clicou em comprar")}>Comprar</Button>
  </>
)

export default Details
