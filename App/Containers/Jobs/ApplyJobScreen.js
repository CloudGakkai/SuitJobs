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
import { BoxShadow } from 'react-native-shadow'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Images
import Images from '../../Images'

// Components
import InputCV from '../../Components/Form/InputCV'
import Input from '../../Components/Form/Input'
import Button from '../../Components/Button/index'
import TextArea from '../../Components/Form/TextArea'

// Styles
import styles from '../Styles/Jobs/ApplyJobScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const Schema = Yup.object().shape({
  cv: Yup.object()
    .required('Resume cannot be empty'),
  phone: Yup.string()
    .required('Phone number cannot be empty'),
  cover: Yup.string()
})

const ApplyJobScreen = props => {
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

  const _renderForm = ({ values, setFieldValue, errors, handleSubmit }) => {
    const setValue = useCallback(setFieldValue, [])

    return (
      <>
        <ScrollView showsVerticalScrollIndicator contentContainerStyle={apply('px-4 pb-20')}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={60}
          >
          
            <View style={styles.topSection}>
              <Image source={Images.logoGoogleDetail} style={styles.topLogo} resizeMode='stretch' />
              <Text style={styles.topTitle}>You Will Applying to <Text style={apply('font-bold')}>Google</Text> as <Text style={apply('font-bold')}>UI UX Designer</Text></Text>
            </View>

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

            <View style={styles.inputWrapper}>
              <Input
                name='phone'
                value={values.phone}
                error={errors.phone}
                placeholder='8123213148'
                setFieldValue={setValue}
                keyboardType='phone-pad'
              />
            </View>

            <View style={styles.inputWrapper}>
              <TextArea
                name='cover'
                value={values.cover}
                error={errors.cover}
                placeholder='Application Letter'
                setFieldValue={setValue}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        
        <View style={styles.footer}>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.innerFooter}>
              <Button 
                title='Apply Now' 
                disabled={
                  values.phone.length === 0 ||
                  values.cv === null
                }
                buttonStyle={apply('full')} 
                onPress={handleSubmit}  
              />
            </View>
          </BoxShadow>
        </View>
      </>
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
        initialValues={{
          cv: null,
          phone: '',
          cover: ''
        }}
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplyJobScreen)
