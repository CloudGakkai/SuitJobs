import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, Text } from 'react-native'

// Styles
import styles from '../Styles/Form/TextAreaStyle'
import { apply } from '../../Themes/OsmiProvider'

const TextArea = props => {
  const {
    inputContainerStyle,
    setFieldValue,
    inputStyle,
    value,
    error,
    name
  } = props

  return (
    <View style={inputContainerStyle}>
      <TextInput
        {...props}
        multiline={true}
        placeholderTextColor={apply('silver-300')}
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={(text) => setFieldValue(name, text)}
      />

      {error && (
        <Text style={styles.error}>{error}</Text>
      )}
    </View>
  )
}

// Prop type warnings
TextArea.propTypes = {
  value: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default memo(TextArea)
