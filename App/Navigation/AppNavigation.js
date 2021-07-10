import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Components
import ArrowBack from '../Components/Button/ArrowBack'
import HeaderBookmark from '../Components/Button/HeaderBookmark'

// styles
import styles from './NavigationStyle'

// Import Screen
import HomeScreen from '../Containers/HomeScreen'
import DetailJobScreen from '../Containers/Jobs/DetailJobScreen'

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LaunchScreen'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name='DetailJob'
          component={DetailJobScreen}
          options={{
            title: 'Jobs for You',
            headerTitleStyle: styles.headerTitleDetail,
            headerLeft: () => <ArrowBack />,
            headerRight: () => <HeaderBookmark />,
            headerLeftContainerStyle: styles.headerLeftContainer,
            headerRightContainerStyle: styles.headerRightContainer,
            headerTitleContainerStyle: styles.headerTitleContainerStyle
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
