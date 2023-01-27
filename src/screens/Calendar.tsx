import { View, Container, Text, VStack } from 'native-base'
import { Profile } from '../components/Profile'

export function Calendar() {
  return (
    <View px={4} bgColor={'#fff'}>
      <Container safeArea>
        <Text fontSize={'3xl'} color={'black.500'} letterSpacing={-0.5} fontFamily={'bold'}>
          Calendário
        </Text>
      </Container>
      <VStack height={'full'} bgColor={'#fff'}>
        <Profile />
      </VStack>
    </View>
  )
}
