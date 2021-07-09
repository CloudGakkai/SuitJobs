import React, { useState, memo } from 'react'
import { FlatList, Image, View, Text } from 'react-native'

// Images
import Images from '../../Images'

// Components
import FreelanceCard from '../Card/FreelanceCard'

// Styles
import styles from '../Styles/Section/FreelanceSectionStyle'
import { apply } from '../../Themes/OsmiProvider'

const FreelanceSection = props => {
  const [freelances] = useState([{
    logo: Images.logoGlints,
    company: 'Glints',
    role: 'HR Recruiter',
    tag: 'Fulltime'
  }, {
    logo: Images.logoLinkedin,
    company: 'Linkedin',
    role: 'Software Engineer',
    tag: 'Fulltime'
  }])

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Freelance Jobs</Text>
        <Text style={styles.sectionHeaderMore}>See All</Text>
      </View>

      <FlatList 
        data={freelances}
        extraData={freelances}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        renderItem={({ item }) => <FreelanceCard data={item} />}
        contentContainerStyle={apply('pl-4')}
      />
    </View>
  )
}

export default memo(FreelanceSection)
