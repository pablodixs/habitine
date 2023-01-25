import { View, Container, Text, VStack, ScrollView } from 'native-base'
import { Profile } from '../../components/Profile'

export function Settings() {
  return (
    <VStack bgColor={'#fff'}>
      <Container pt={16} pb={4} px={4}>
        <Text
          fontSize={'3xl'}
          letterSpacing={-0.5}
          fontFamily={'bold'}
          height={'full'}
        >
          Configurações
        </Text>
      </Container>
      <VStack height={'full'} bgColor={'#fff'}>
        <Profile />
      </VStack>
    </VStack>
  )
}
