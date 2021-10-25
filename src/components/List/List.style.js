import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  title: {
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    color: '#464646',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
  },
  image: {
    height: 46,
    width: 46,
    marginRight: 12,
  },
  text: {
    color: '#464646',
    fontSize: 16,
    lineHeight: 28,
  },
})

export default style
