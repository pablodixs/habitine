import { View, Container, Text, VStack } from 'native-base'

export function Calendar() {
  return (
    <View flex={1} px={4} bgColor={'#fff'}>
      <Container safeArea>
        <Text fontSize={'3xl'} color={'black.500'} letterSpacing={-0.5} fontFamily={'bold'}>
          Timeline
        </Text>
      </Container>
      <VStack height={'full'} bgColor={'#fff'}>
      </VStack>
    </View>
  )
}
