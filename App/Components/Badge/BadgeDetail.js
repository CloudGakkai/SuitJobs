import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

// Styles
import styles from '../Styles/Badge/BadgeDetailStyle'
import { apply } from '../../Themes/OsmiProvider'

const BadgeDetail = props => {
  const { data } = props

  return (
    <View style={styles.tag}>
      <Text style={styles.tagLabel}>{data?.title}</Text>
    </View>
  )
}

// Prop type warnings
BadgeDetail.propTypes = {
  data: PropTypes.object.isRequired
}

export default memo(BadgeDetail)
