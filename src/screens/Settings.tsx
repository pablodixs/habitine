import { View, Container, Text, VStack, ScrollView, Box } from 'native-base'
import { CaretRight } from 'phosphor-react-native'
import { Profile } from '../components/Profile'

export function Settings() {
  return (
    <View flex={1} bgColor={'#fff'} px={4}>
      <Box safeArea width={'full'}>
        <Text fontSize={'3xl'} letterSpacing={-0.5} fontFamily={'bold'}>
          Configurações
        </Text>
      </Box>
      <VStack>
        <Profile />
        <Text fontFamily={'medium'} fontSize={'md'} color={'gray.500'} my={2}>
          Geral
        </Text>
        <Box
          flexDir={'row'}
          justifyContent={'space-between'}
          px={4}
          py={3}
          alignItems='center'
          borderWidth={1}
          borderColor={'gray.100'}
          borderRadius={12}
          marginBottom={2}
          bgColor={'gray.50'}
        >
          <Text fontSize={'md'} fontFamily={'medium'} color='black.500'>Idioma de preferência</Text>
          <CaretRight />
        </Box>
        <Box
          flexDir={'row'}
          justifyContent={'space-between'}
          px={4}
          py={3}
          alignItems='center'
          borderWidth={1}
          borderColor={'gray.100'}
          borderRadius={12}
          marginBottom={2}
          bgColor={'gray.50'}
        >
          <Text fontSize={'md'} fontFamily={'medium'} color='black.500'>Dê um feedback</Text>
          <CaretRight />
        </Box>
      </VStack>
    </View>
  )
}
