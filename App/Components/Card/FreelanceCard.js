import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'

// Styles
import styles from '../Styles/Card/FreelanceCardStyle'
import { apply } from '../../Themes/OsmiProvider'

const FreelanceCard = props => {
  const { data } = props
  const navigation = useNavigation()

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={() => navigation.navigate('DetailJob')}>
      <Image source={data?.logo} style={styles.cardLogo} />

      <View style={apply('ml-4')}>
        <Text style={styles.cardCompany}>{data?.company}</Text>
        <Text style={styles.cardRole}>{data?.role}</Text>
        <Text style={styles.cardTag}>{data?.tag}</Text>
      </View>
    </TouchableOpacity>
  )
}

// Prop type warnings
FreelanceCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default memo(FreelanceCard)
