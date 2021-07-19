import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import StaticDataActions from '../../Redux/StaticDataRedux'
import { 
  KeyboardAvoidingView, 
  ScrollView, 
  Pressable,
  FlatList,
  Platform,
  Image,
  View,
  Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BoxShadow } from 'react-native-shadow'
import SlidingUpPanel from 'rn-sliding-up-panel'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Images
import Images from '../../Images'

// Components
import InputCV from '../../Components/Form/InputCV'
import Input from '../../Components/Form/Input'
import InputSearch from '../../Components/Form/InputSearch'
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
  const { staticData } = props
  const bottomSheetRef = useRef(null)
  const [keyword, setKeyword] = useState('')
  const [countryCode, setCountryCode] = useState({
    "code": "+62",
    "name": "Indonesia"
  })
  const shadowOpt = useMemo(() => ({
    ...apply('w/100'),
    height: 80,
    color: "#000",
    border: 5,
    radius: 10,
    opacity: 0.08,
    x: 0,
    y: -3,
    style: { }
  }), [])

  const listCountryCode = useMemo(() => {
    return keyword ? staticData?.data?.countries_phone?.filter(country => (country.code + country.name).toLowerCase().includes(keyword.toLowerCase())) : 
    staticData?.data?.countries_phone
  }, [keyword, countryCode, staticData?.data?.countries_phone])

  const _showBottomSheet = useCallback(() => {
    bottomSheetRef.current?.show({
      toValue: 400,
      velocity: 500
    })
  }, [])

  useEffect(() => {
    props.getStaticData()
  }, [])

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
                countryCode={countryCode}
                onCountryCodeChange={_showBottomSheet}
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

  const _onKeywordChange = useCallback((value) => setKeyword(value), [keyword])

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

      <SlidingUpPanel 
        ref={bottomSheetRef} 
        containerStyle={apply("z-30")}
        backdropStyle={apply("z-30")}
        snappingPoints={[400, 0]}
        draggableRange={{
          top: apply("h/100").height - 50,
          bottom: 0
        }}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={apply("full items-center mb-5")}>
            <View style={apply("h-3 w-100 bg-gray-800 bg-opacity-30 rounded-full")} />
          </View>

          <View style={[styles.inputWrapper, apply("px-5 mt-2")]}>
            <InputSearch 
              value={keyword}
              setFieldValue={_onKeywordChange}
            />
          </View>

          <FlatList 
            data={listCountryCode}
            extraData={listCountryCode}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable onPress={() => {
                setCountryCode(item)
                bottomSheetRef.current?.show({
                  toValue: 0,
                  velocity: 500
                })
              }} style={styles.countryItem}>
                <Text style={styles.countryItemLabel}>({ item?.code }) {item?.name}</Text>
              </Pressable>
            )}
            initialNumToRender={15}
            contentContainerStyle={apply('px-5 pb-3')}
          />
        </View>
      </SlidingUpPanel>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  staticData: state.staticData.root
})

const mapDispatchToProps = dispatch => ({
  getStaticData: () => dispatch(StaticDataActions.getStaticDataRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplyJobScreen)
