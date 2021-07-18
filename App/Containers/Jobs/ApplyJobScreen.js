import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform,
  Image,
  View,
  Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Images
import Images from '../../Images'

// Components
import InputCV from '../../Components/Form/InputCV'

// Styles
import styles from '../Styles/Jobs/ApplyJobScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const Schema = Yup.object().shape({
  cv: Yup.object()
    .required('Resume cannot be empty'),
  phone: Yup.string()
    .required('Phone number cannot be empty'),
})

const ApplyJobScreen = props => {
  const _renderForm = ({ values, setFieldValue, errors, handleSubmit }) => {
    const setValue = useCallback(setFieldValue, [])

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={60}
      >
        <View style={styles.inputWrapper}>
          <Text style={styles.resumeTitleSection}>Resume</Text>
        </View>

        <View style={styles.inputWrapper}>
          <InputCV 
            name='cv'
            value={values.cv}
            error={errors.cv}
            setFieldValue={setValue}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }

  const _handleSubmit = async (values, actions) => {
    actions.setSubmitting(false)

    return false
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator contentContainerStyle={apply('px-4')}>
        <View style={styles.topSection}>
          <Image source={Images.logoGoogleDetail} style={styles.topLogo} resizeMode='stretch' />
          <Text style={styles.topTitle}>You Will Applying to <Text style={apply('font-bold')}>Google</Text> as <Text style={apply('font-bold')}>UI UX Designer</Text></Text>
        </View>

        <Formik
          onSubmit={_handleSubmit}
          validationSchema={Schema}
          validateOnChange={false}
          initialValues={{ cv: null, phone: '' }}
        >
          {formProps => _renderForm(formProps)}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplyJobScreen)
