import { View, Container, Text, VStack, ScrollView, Box } from 'native-base'
import { Profile } from '../components/Profile'

export function Settings() {
  return (
    <View bgColor={'#fff'}>
      <Container safeArea pb={4} px={4}>
        <Text
          fontSize={'3xl'}
          letterSpacing={-0.5}
          fontFamily={'bold'}
          height={'full'}
        >
          Configurações
        </Text>
      </Container>
      <VStack>
        <Profile />
      </VStack>
    </View>
  )
}
