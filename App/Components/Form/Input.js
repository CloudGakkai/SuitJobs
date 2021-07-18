import React, { useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'
import { TextInput, Pressable, View, Text } from 'react-native'

// Styles
import styles from '../Styles/Form/InputStyle'
import { apply } from '../../Themes/OsmiProvider'

const Input = props => {
  const {
    inputContainerStyle,
    setFieldValue,
    inputStyle,
    value,
    error,
    name
  } = props
  const [countryCode, setCountryCode] = useState('+62')
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setFieldValue(name, inputValue)
  }, [inputValue, countryCode])

  return (
    <>
      <View style={[styles.container, inputContainerStyle]}>
        <Pressable style={styles.btnCountryCode}>
          <Text style={styles.btnCountryCodeLabel}>{countryCode}</Text>
        </Pressable>

        <TextInput 
          {...props}
          placeholderTextColor={apply('silver-300')}
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={(text) => setInputValue(text)}
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
}

export default memo(Input)
