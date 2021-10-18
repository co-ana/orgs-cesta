import { StyleSheet } from 'react-native'

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

export default style
