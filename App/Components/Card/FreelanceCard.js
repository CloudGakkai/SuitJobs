import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text } from 'react-native'

// Styles
import styles from '../Styles/Card/FreelanceCardStyle'
import { apply } from '../../Themes/OsmiProvider'

const FreelanceCard = props => {
  const { data } = props

  return (
    <View style={styles.card}>
      <Image source={data?.logo} style={styles.cardLogo} />

      <View style={apply('ml-4')}>
        <Text style={styles.cardCompany}>{data?.company}</Text>
        <Text style={styles.cardRole}>{data?.role}</Text>
        <Text style={styles.cardTag}>{data?.tag}</Text>
      </View>
    </View>
  )
}

// Prop type warnings
FreelanceCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default memo(FreelanceCard)
