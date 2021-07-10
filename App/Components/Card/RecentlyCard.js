import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text } from 'react-native'

// Styles
import styles from '../Styles/Card/RecentlyCardStyle'
import { apply } from '../../Themes/OsmiProvider'

export const BackgroundTypes = Object.freeze({
  GREEN: apply('bg-soft-green'),
  ORANGE: apply('bg-soft-orange'),
  RED: apply('bg-soft-red'),
  BLUE: apply('bg-soft-blue'),
})

const RecentlyCard = props => {
  const { data, backgroundType } = props

  /**
   * Render tags
   * @return {array}
   */
  const _renderTags = () => {
    return data?.tags?.map((item, index) => (
      <Text style={styles.cardInfo} key={index}>{item}</Text>
    ))
  }

  return (
    <View style={[styles.card, backgroundType]}>
      <Image source={data?.logo?.url} style={apply(`w-${data?.logo?.width} h-${data?.logo?.height}`)} />

      <View style={apply('mt-4')}>
        <Text style={styles.cardTitle}>{data?.role}</Text>
        <Text style={styles.cardDesc}>{data?.experience} Experience</Text>

        <View style={apply('row items-center')}>
          {_renderTags()}
        </View>
      </View>
    </View>
  )
}

// Prop type warnings
RecentlyCard.propTypes = {
  data: PropTypes.object.isRequired,
  backgroundType: PropTypes.oneOf(Object.values(BackgroundTypes))
}

// Defaults for props
RecentlyCard.defaultProps = {
  backgroundType: BackgroundTypes.GREEN
}

export default memo(RecentlyCard)
