import React from 'react'
import { Text as ReactText, StyleSheet } from 'react-native'

const Text = ({
  children,
  bold = false,
  style
}) => {
  const weight = bold ? fontWeight.bold : fontWeight.regular

  return (
    <ReactText style={{ ...style, ...weight }}>
      {children}
    </ReactText>
  )
}

const fontWeight = StyleSheet.create({
  regular: {
    fontFamily: 'MontserratRegular'
  },
  bold: {
    fontFamily: 'MontserratBold'
  }
})

export default Text
