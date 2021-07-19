import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TextInput, View } from 'react-native'

// Icons
import Icons from 'react-native-vector-icons/Feather'

// Styles
import styles from '../Styles/Form/InputSearchStyle'
import { apply } from '../../Themes/OsmiProvider'

const InputSearch = props => {
  const {
    inputContainerStyle,
    setFieldValue,
    inputStyle,
    value,
  } = props
  
  return (
    <View style={[styles.container, inputContainerStyle]}>
      <TextInput 
        {...props} 
        value={value}
        placeholder='Search...'
        style={[styles.input, inputStyle]}
        placeholderTextColor={apply('silver-300')}
        onChangeText={text => setFieldValue(text)}
      />

      <Icons name='search' size={23} color={apply('silver-300')} />
    </View>
  )
}

// Prop type warnings
InputSearch.propTypes = {
  inputContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  setFieldValue: PropTypes.func.isRequired,
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  value: PropTypes.string.isRequired,
}

export default memo(InputSearch)
