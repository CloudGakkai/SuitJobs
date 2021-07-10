import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/core'

// Icons
import { IconBookmarkOutline } from '../../Images/Icons'

// Components
import Base from './Base'

// Styles
import styles from '../Styles/Button/HeaderBookmarkStyle'
import { apply } from '../../Themes/OsmiProvider'

const HeaderBookmark = props => {
  return (
    <Base 
      onPress={() => navigation.goBack()} 
      style={apply('p-2 rounded-full')}
      rippleColor={apply('black --opacity-25')}
      rippleRadius={15}
    >
      <IconBookmarkOutline width={24} height={24} />
    </Base>
  )
}

export default memo(HeaderBookmark)
