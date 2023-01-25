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

import { Homepage } from './src/screens/Homepage'
import { THEME } from './src/styles/theme'
import { Loading } from './src/screens/Loading'
import { Calendar } from './src/screens/Calendar'
import { Settings } from './src/screens/Settings'

const Tab = createBottomTabNavigator()

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
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#2200F2', height: 100 },
            tabBarLabelStyle: {
              color: 'white',
              fontSize: 14,
              fontFamily: 'Lexend_400Regular',
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Homepage}
            options={{ tabBarIcon: ({ color }) => '' }}
          />
          <Tab.Screen name="Calendário" component={Calendar} />
          <Tab.Screen name="Stats" component={Calendar} />
          <Tab.Screen name="Perfil" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
    </NativeBaseProvider>
  )
}
