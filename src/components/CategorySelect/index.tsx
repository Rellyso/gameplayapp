import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { styles } from './styles'

export function CategorySelect() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={{ paddingRight: 40 }}
    />
  )
}