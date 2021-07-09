import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text } from 'react-native'

// Icons
import FeatherIcon from 'react-native-vector-icons/Feather'

// Components
import Tag, { BadgeTypes } from '../Badge/BadgeCard'

// Styles
import styles from '../Styles/Card/RecommendationCardStyle'
import { apply } from '../../Themes/OsmiProvider'

export const CardTypes = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
})

const RecommendationCard = props => {
  const { data, type } = props

  /**
   * Background card logic
   * @return {object}
   */
  const _getBackgroundCard = () => {
    switch(type) {
      case CardTypes.SECONDARY:
        return apply('bg-secondary-500')

      default:
        return apply('bg-primary-500')
    }
  }

  /**
   * Render Tags
   * @return {object}
   */
  const _renderTags = () => {
    return data?.tags?.map((item, index) => (
      <Tag 
        key={index}
        title={item?.title}
        type={type}
      />
    ))
  }

  return (
    <View style={[styles.card, _getBackgroundCard()]}>
      <View style={apply('full row')}>
        <View style={apply('mr-4')}>
          <Image source={data?.logo} style={styles.cardLogo} />
        </View>

        <View style={apply('flex')}>
          <Text style={styles.cardTitle}>{data?.role}</Text>
          <Text style={styles.cardCompany}>{data?.companyName}</Text>

          <View style={apply('flex row items-center mb-3')}>
            <View style={apply('flex row items-center')}>
              <FeatherIcon name='map-pin' size={15} color={apply('white')} />
              <Text style={[styles.cardInfo, apply('ml-1')]}>{data?.location}</Text>
            </View>

            <Text style={styles.cardInfo}>$ {data?.salary} / month</Text>
          </View>

          <View style={apply('row')}>
            {_renderTags()}
          </View>
        </View>
      </View>
    </View>
  )
}

// Prop type warnings
RecommendationCard.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.oneOf(Object.values(CardTypes))
}

RecommendationCard.defaultProps = {
  type: CardTypes.PRIMARY
}

export default memo(RecommendationCard)
