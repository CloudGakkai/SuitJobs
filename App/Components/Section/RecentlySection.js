import React, { useState, memo } from 'react'
import { FlatList, View, Text } from 'react-native'

// Images
import Images from '../../Images'

// Components
import RecentlyCard, { BackgroundTypes } from '../Card/RecentlyCard'

// Styles
import styles from '../Styles/Section/RecentlySectionStyle'
import { apply } from '../../Themes/OsmiProvider'

const RecentlySection = props => {
  const [recently] = useState([{
    logo: {
      url: Images.logoGojek,
      width: 40,
      height: 40
    },
    role: 'Digital Marketing',
    experience: '1-3 year',
    tags: ['Fulltime', 'Senior'],
    background: BackgroundTypes.GREEN
  }, {
    logo: {
      url: Images.logoShopee,
      width: 28,
      height: 40
    },
    role: 'Content Creator',
    experience: '1 year',
    tags: ['Internship'],
    background: BackgroundTypes.ORANGE
  }, {
    logo: {
      url: Images.logoBukalapak,
      width: 40,
      height: 40
    },
    role: 'FrontEnd Dev',
    experience: '1-2 year',
    tags: ['Fulltime', 'Junior'],
    background: BackgroundTypes.RED
  }, {
    logo: {
      url: Images.logoBlibli,
      width: 111,
      height: 40
    },
    role: 'UX Designer',
    experience: '1 year',
    tags: ['Fulltime', 'Junior'],
    background: BackgroundTypes.BLUE
  }])

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Recently Posted</Text>
        <Text style={styles.sectionHeaderMore}>See All</Text>
      </View>

      <FlatList 
        data={recently}
        extraData={recently}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => <RecentlyCard data={item} backgroundType={item?.background} />}
        contentContainerStyle={apply('pl-4')}
      />
    </View>
  )
}

export default memo(RecentlySection)
