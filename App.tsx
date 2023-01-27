import {
  useFonts,
  Lexend_700Bold,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_800ExtraBold,
} from '@expo-google-fonts/lexend'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NativeBaseProvider, StatusBar, Text, View } from 'native-base'
import { CalendarBlank, ChartLineUp, House, User } from 'phosphor-react-native'

import { Homepage } from './src/screens/Homepage'
import { THEME } from './src/styles/theme'
import { Loading } from './src/screens/Loading'
import { Calendar } from './src/screens/Calendar'
import { Settings } from './src/screens/Settings'
import { createStackNavigator } from '@react-navigation/stack'
import { NewRoutine } from './src/screens/NewRoutine'
import { Routes } from './src/screens/Routes'
import { Routine } from './src/screens/Routine'
import { CreateRoutine } from './src/screens/CreateRoutine'

const Tab = createBottomTabNavigator()
const RootStack = createStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    Lexend_700Bold,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_800ExtraBold,
  })

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider theme={THEME}>
        <Loading />
        <StatusBar barStyle={'light-content'} />
      </NativeBaseProvider>
    )
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Group>
            <RootStack.Screen name="Routes" component={Routes} />
            <RootStack.Screen name="Routine" component={Routine} />
          </RootStack.Group>
          <RootStack.Group screenOptions={{ presentation: 'modal' }}>
            <RootStack.Screen name="NewRoutine" component={NewRoutine} />
            <RootStack.Screen name="CreateRoutine" component={CreateRoutine} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
    </NativeBaseProvider>
  )
}
