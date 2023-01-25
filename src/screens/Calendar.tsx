import { View, Container, Text, VStack } from 'native-base'

export function Calendar() {
  return (
    <VStack bgColor={'#fff'}>
      <Container pt={16} pb={4} px={4}>
        <Text fontSize={'3xl'} letterSpacing={-0.5} fontFamily={'bold'}>
          Calendário
        </Text>
      </Container>
      <VStack height={'full'} bgColor={'#fff'}>

      </VStack>
    </VStack>
  )
}
