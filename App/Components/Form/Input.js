import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TextInput, Pressable, View, Text } from 'react-native'

// Styles
import styles from '../Styles/Form/InputStyle'
import { apply } from '../../Themes/OsmiProvider'

const Input = props => {
  const {
    inputContainerStyle,
    onCountryCodeChange,
    setFieldValue,
    countryCode,
    inputStyle,
    value,
    error,
    name
  } = props

  return (
    <>
      <View style={[styles.container, inputContainerStyle]}>
        <Pressable style={styles.btnCountryCode} onPress={() => onCountryCodeChange()}>
          <Text style={styles.btnCountryCodeLabel}>{countryCode?.code}</Text>
        </Pressable>

        <TextInput 
          {...props}
          placeholderTextColor={apply('silver-300')}
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={(text) => setFieldValue(name, text)}
        />
      </View>

      {error && (
        <Text style={styles.error}>{error}</Text>
      )}
    </>
  )
}

// Prop type warnings
Input.propTypes = {
  value: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  countryCode: PropTypes.object.isRequired,
  onCountryCodeChange: PropTypes.func.isRequired,
}

export default memo(Input)
