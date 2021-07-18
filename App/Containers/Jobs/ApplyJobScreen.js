import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Images
import Images from '../../Images'

// Styles
import styles from '../Styles/Jobs/ApplyJobScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const ApplyJobScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator contentContainerStyle={apply('px-4')}>
        <View style={styles.topSection}>
          <Image source={Images.logoGoogleDetail} style={styles.topLogo} resizeMode='stretch' />
          <Text style={styles.topTitle}>You Will Applying to <Text style={apply('font-bold')}>Google</Text> as <Text style={apply('font-bold')}>UI UX Designer</Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplyJobScreen)
