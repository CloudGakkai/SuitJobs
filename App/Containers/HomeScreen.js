import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ScrollView, FlatList, Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Icons
import { IconSearch } from '../Images/Icons'

// Images
import Images from '../Images'

// Components
import RecommendSection from '../Components/Section/RecommendSection'
import RecentlySection from '../Components/Section/RecentlySection'
import FreelanceSection from '../Components/Section/FreelanceSection'

// Styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={apply('pb-5')}>
        <View style={styles.topContainer}>
          <Text style={styles.helloLabel}>{`Let’s Find\nYour Dream Jobs`}</Text>

          <View style={styles.searchContainer}>
            <IconSearch width={16} height={16} />
            <Text style={styles.searchPlaceholder}>Search a job or position</Text>
          </View>
        </View>

        <RecommendSection />

        <RecentlySection />

        <FreelanceSection />
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
