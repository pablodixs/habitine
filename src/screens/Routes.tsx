import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CalendarBlank, ChartLineUp, House, User } from 'phosphor-react-native'
import { Calendar } from './Calendar'
import { Homepage } from './Homepage'
import { Settings } from './Settings'

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#353CD9', height: 100 },
        tabBarLabelStyle: {
          color: '#99bbff',
          fontSize: 12,
          fontFamily: 'Lexend_400Regular',
          marginTop: -10,
        },
        tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',
        tabBarInactiveTintColor: '#99bbff',
        // tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarIcon: ({ color }) => <House color={color} weight="bold" />,
        }}
      />
      <Tab.Screen
        name="Calendário"
        component={Calendar}
        options={{
          tabBarIcon: ({ color }) => (
            <CalendarBlank color={color} weight="bold" />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Calendar}
        options={{
          tabBarIcon: ({ color }) => (
            <ChartLineUp color={color} weight="bold" />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <User color={color} weight="bold" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
