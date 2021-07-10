import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

// Styles
import styles from '../Styles/Badge/BadgeCardStyle'
import { apply } from '../../Themes/OsmiProvider'

export const BadgeTypes = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
})

const BadgeCard = props => {
  const { title, type } = props

  /**
   * Get background tag base on type
   * @return {object}
   */
  const _getBackgroundTag = () => {
    switch(type) {
      case BadgeTypes.SECONDARY:
        return apply('bg-secondary-100')

      default:
        return apply('bg-primary-100')
    }
  }

  /**
   * Get title color base on type
   * @return {object}
   */
  const _getTitleColor = () => {
    switch(type) {
      case BadgeTypes.SECONDARY:
        return apply('text-secondary-500')

      default:
        return apply('text-white')
    }
  }

  return (
    <View style={[styles.tag, _getBackgroundTag()]}>
      <Text style={[styles.tagLabel, _getTitleColor()]}>{title}</Text>
    </View>
  )
}

// Prop type warnings
BadgeCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(BadgeTypes))
}

// Defaults for props
BadgeCard.defaultProps = {
  type: BadgeTypes.PRIMARY
}

export default memo(BadgeCard)
