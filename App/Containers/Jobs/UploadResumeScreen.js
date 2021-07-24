import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Components
import Button from '../../Components/Button/index'
import Input from '../../Components/Form/Input'
import TextArea from '../../Components/Form/TextArea'

// Styles
import styles from '../Styles/Jobs/UploadResumeScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const Schema = Yup.object().shape({
  full_name: Yup.string()
    .required('Full name cannot be empty'),
  address: Yup.string()
  .required('Address cannot be empty'),
})

const UploadResumeScreen = props => {
  const _renderForm = ({ values, errors, setFieldValue, handleSubmit }) => {
    const setValue = useCallback(setFieldValue, [])

    return (
      <View style={styles.formSection}>
        <View style={apply('flex')}>
          <View style={styles.formWrapper}>
            <Input 
              name='full_name'
              placeholder='Full Name'
              value={values.full_name}
              error={errors.full_name}
              setFieldValue={setValue}
            />
          </View>

          <View style={styles.formWrapper}>
            <TextArea
              name='address'
              placeholder='Address'
              value={values.address}
              error={errors.address}
              setFieldValue={setValue}
              numberOfLines={3}
              textAlignVertical='top'
            />
          </View>
        </View>

        <Button 
          title='Upload Now' 
          buttonStyle={apply('full')} 
          onPress={handleSubmit}  
        />
      </View>
    )
  }

  const _handleSubmit = async (values, actions) => {
    actions.setSubmitting(false)

    return false
  }

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        onSubmit={_handleSubmit}
        validationSchema={Schema}
        validateOnChange={false}
        initialValues={{ full_name: '', address: '' }}
      >
        {formProps => _renderForm(formProps)}
      </Formik>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadResumeScreen)
