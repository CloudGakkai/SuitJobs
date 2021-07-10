import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'

// Icons
import { IconArrowBack } from '../../Images/Icons'

// Components
import Base from './Base'

// Styles
import styles from '../Styles/Button/ArrowBackStyle'
import { apply } from '../../Themes/OsmiProvider'

const ArrowBack = props => {
  const navigation = useNavigation()

  return (
    <Base 
      onPress={() => navigation.goBack()} 
      style={apply('p-2 rounded-full')}
      rippleColor={apply('black --opacity-25')}
      rippleRadius={15}
    >
      <IconArrowBack width={24} height={24} />
    </Base>
  )
}

export default memo(ArrowBack)
