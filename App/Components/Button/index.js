import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

// Components
import Base from './Base'

// Styles
import styles from '../Styles/Button/indexStyle'
import { apply } from '../../Themes/OsmiProvider'

const index = props => {
  const { buttonStyle, titleStyle, disabled, title } = props

  return (
    <Base 
      {...props} 
      style={[
        styles.container,
        buttonStyle,
        disabled && apply('bg-silver-300')
      ]}
    >
      {title ? (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      ) : props?.children}
    </Base>
  )
}

// Prop type warnings
index.propTypes = {
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

// Defaults for props
index.defaultProps = {
  title: 'Button'
}

export default memo(index)
