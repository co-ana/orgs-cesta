import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width

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
    top: 60,
    padding: 16,
    fontSize: 16,
    color: '#FFFFFF',
  },
})

export default style
