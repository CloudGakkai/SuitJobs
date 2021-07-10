import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BoxShadow } from 'react-native-shadow'

// Images
import Images from '../../Images'

// Components
import Badge from '../../Components/Badge/BadgeDetail'
import Button from '../../Components/Button/index'

// Styles
import styles from '../Styles/Jobs/DetailJobScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const DetailJobScreen = props => {
  const [tags] = useState([{
    id: 1,
    title: 'Fulltime'
  }, {
    id: 2,
    title: 'Senior'
  }])
  const [skills] = useState([{
    id: 1,
    title: 'UI / UX Design'
  }, {
    id: 2,
    title: 'Figma'
  }, {
    id: 3,
    title: 'UI Design'
  }, {
    id: 4,
    title: 'Mobil Development'
  }])

  const shadowOpt = {
    ...apply('w/100'),
    height: 80,
    color: "#000",
    border: 5,
    radius: 10,
    opacity: 0.08,
    x: 0,
    y: -3,
    style: { }
}

  /**
   * Render tags logic
   * @returns {array}
   */
  const _renderTags = (data) => {
    return data?.map((item, index) => (
      <Badge key={index} data={item} />
    ))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={apply('py-10 pb-20')}>
        <View style={apply('full items-center mb-6')}>
          <Image source={Images.logoGoogleDetail} style={styles.logo} />

          <Text style={styles.role}>Product Design</Text>
          <Text style={styles.info}>Google - California</Text>

          <View style={apply('full row items-center justify-center mb-4')}>
            {_renderTags(tags)}
          </View>

          <Text style={styles.salary}><Text style={apply('font-semibold')}>$ 1.000</Text> / month</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.titleSection}>Description</Text>
          <Text style={styles.contentSection}>One of the pioneers of Indonesia online marketplace in the tech realm which has sold many hi-tech gadgets and innovative products since 2016.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.titleSection}>Requirements</Text>
          <View style={apply('row')}>
            <Text style={styles.contentSection}>1. </Text>
            <Text style={styles.contentSection}>You have excellent knowledge of UX and web design</Text>
          </View>
          <View style={apply('row')}>
            <Text style={styles.contentSection}>2. </Text>
            <Text style={styles.contentSection}>Demonstrate your prototype / design results to user and stakeholder</Text>
          </View>
          <View style={apply('row')}>
            <Text style={styles.contentSection}>3. </Text>
            <Text style={styles.contentSection}>Formulate good design ideas and propose solutions to increased product usefulness and</Text>
          </View>
        </View>

        <View style={[styles.section, apply('px-0')]}>
          <Text style={[styles.titleSection, apply('ml-4')]}>Skill Needed</Text>
          <ScrollView
            style={apply('row')} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={apply('pl-4')}
            horizontal
          >
            {_renderTags(skills)}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <BoxShadow setting={shadowOpt}>
          <View style={styles.innerFooter}>
            <Button title='Apply' buttonStyle={apply('full')} />
          </View>
        </BoxShadow>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailJobScreen)
