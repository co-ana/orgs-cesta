import React from 'react'

import Text from '../Text'
import Item from './Item'
import style from './List.style'

const List = ({ items }) => (
  <>
    <Text bold style={style.title}>
      {items.title}
    </Text>

    {items.list.map(({ name, image }) => (
      <Item key={`listItem${name}`} label={name} image={image} />
    ))}
  </>
)

export default List
