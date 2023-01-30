import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ChartLineUp, House, List, User } from 'phosphor-react-native'

import { Calendar } from './Calendar'
import { Homepage } from './Homepage'
import { Settings } from './Settings'

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#064bb4', borderTopWidth: 0},
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
          tabBarIcon: ({ color }) => <House color={color} weight="duotone" />,
        }}
      />
      <Tab.Screen
        name="Timeline"
        component={Calendar}
        options={{
          tabBarIcon: ({ color }) => (
            <List color={color} weight="duotone"  />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Calendar}
        options={{
          tabBarIcon: ({ color }) => (
            <ChartLineUp color={color} weight="duotone"  />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <User color={color} weight="duotone"  size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
