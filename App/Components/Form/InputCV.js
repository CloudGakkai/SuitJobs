import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Components
import Button from '../Button/index'

// Styles
import styles from '../Styles/Form/InputCVStyle'
import { apply } from '../../Themes/OsmiProvider'

const InputCV = props => {
  const {
    setFieldValue,
    value,
    error,
    name
  } = props
  const navigation = useNavigation()

  const _renderFilled = () => {

  }

  return (
    <View style={styles.container}>
      {!value ? (
        <Button 
          title='Upload Resume' 
          onPress={() => navigation.navigate('UploadResume', { onSave: setFieldValue })}
        />
      ) : _renderFilled()}
    </View>
  )
}

// Prop type warnings
InputCV.propTypes = {
  value: PropTypes.object,
  setFieldValue: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default memo(InputCV)
