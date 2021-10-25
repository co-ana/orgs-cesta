import React from 'react'
import { Text as ReactText, StyleSheet } from 'react-native'

const fontWeight = StyleSheet.create({
  regular: {
    fontFamily: 'MontserratRegular',
  },
  bold: {
    fontFamily: 'MontserratBold',
  },
})

const Text = ({ children, bold = false, style }) => {
  const weight = bold ? fontWeight.bold : fontWeight.regular

  return <ReactText style={{ ...weight, ...style }}>{children}</ReactText>
}

export default Text
