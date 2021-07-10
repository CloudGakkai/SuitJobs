import React, { useState, memo } from 'react'
import { FlatList, View, Text } from 'react-native'

// Images
import Images from '../../Images'

// Components
import RecommendCard, { CardTypes } from '../Card/RecommendationCard'

// Styles
import styles from '../Styles/Section/RecommendSectionStyle'
import { apply } from '../../Themes/OsmiProvider'

const RecommendSection = props => {
  const [recommend] = useState([{
    logo: Images.logoGoogle,
    role: 'Product Design',
    companyName: 'Google',
    location: 'California',
    salary: '1k',
    tags: [{
      title: 'Fulltime'
    }, {
      title: 'Junior'
    }],
    type: CardTypes.PRIMARY
  }, {
    logo: Images.logoDribbble,
    role: 'UI Design',
    companyName: 'Dribbble',
    location: 'Singapore',
    salary: '500',
    tags: [{
      title: 'Internship'
    }, {
      title: 'Junior'
    }],
    type: CardTypes.SECONDARY
  }])

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Jobs For You</Text>
        <Text style={styles.sectionHeaderMore}>See All</Text>
      </View>

      <FlatList 
        data={recommend}
        extraData={recommend}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        renderItem={({ item }) => <RecommendCard data={item} type={item?.type} />}
        contentContainerStyle={apply('pl-4')}
      />
    </View>
  )
}

export default memo(RecommendSection)
