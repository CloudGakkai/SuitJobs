import React, { memo } from 'react'
import PropTypes from 'prop-types'
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
  const { rippleColor, rippleRadius, style } = props

  return Platform.OS === 'ios' ? (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {props.children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple(rippleColor, true, rippleRadius)}
    {...props}>
      <View style={style}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  )
}

Base.propTypes = {
  rippleColor: PropTypes.string
}

Base.defaultProps = {
  rippleColor: apply('white --opacity-25')
}

export default memo(Base)
