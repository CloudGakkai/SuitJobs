import React from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../../Redux/YourRedux'
import { ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Styles
import styles from '../Styles/Jobs/DetailJobScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const DetailJobScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DetailJobScreen Container</Text>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailJobScreen)
