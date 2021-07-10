import React, { memo } from 'react'
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native'

// Styles
import styles from '../Styles/Button/BaseStyle'
import { apply } from '../../Themes/OsmiProvider'

const Base = props => {
  const { style } = props

  return Platform.OS === 'ios' ? (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {props.children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple(apply('white --opacity-25'))}
    {...props}>
      <View style={style}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  )
}

export default memo(Base)
