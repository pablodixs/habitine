import {
  Box,
  Center,
  Container,
  FlatList,
  Text,
  View,
  VStack,
} from 'native-base'
import { CaretLeft, Clock, PencilSimple, Trash } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

import { userRoutines } from '../utils/data'
import {
  getFullTime,
  getMinutesAmount,
  getWeekDay,
} from '../utils/timeFunctions'

export function Routine({ navigation, route }: any) {
  const { id } = route.params

  const routine = userRoutines.find((routine) => {
    return routine.id === id
  })

  const minutesAmount = getMinutesAmount(routine!)
  const fullTime = getFullTime(minutesAmount)

  return (
    <View height={'full'} px={4} backgroundColor={'#fff'}>
      <Box
        width={'full'}
        flexDir={'row'}
        alignItems={'center'}
        justifyContent="space-between"
        safeArea
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Box
            flexDir={'row'}
            alignItems={'center'}
            borderWidth={2}
            borderRadius={12}
            borderColor={'gray.100'}
            color={'black'}
            fontFamily={'bold'}
            padding={2}
          >
            <CaretLeft size={20} weight="bold" />
            <Text fontSize={'md'} fontFamily={'medium'} marginLeft={1}>
              Voltar
            </Text>
          </Box>
        </TouchableOpacity>
        <Container flexDir={'row'}>
          <Box
            flexDir={'row'}
            padding={2}
            borderWidth={2}
            borderRadius={12}
            borderColor={'gray.100'}
          >
            <PencilSimple color="black" size={20} weight="duotone" />
          </Box>
          <Box
            flexDir={'row'}
            padding={2}
            borderWidth={2}
            borderRadius={12}
            borderColor={'red.200'}
            marginLeft={4}
          >
            <Trash color="red" size={20} weight="duotone" />
          </Box>
        </Container>
      </Box>
      <VStack>
        <Center>
          <Text color={'gray.500'}>Rotina</Text>
          <Text
            fontSize={'3xl'}
            fontFamily="bold"
            color={'black.500'}
            letterSpacing={-0.5}
          >
            {routine?.routineName}
          </Text>
        </Center>
        <Box width={'full'} mt={4}>
          <Text
            textAlign={'center'}
            fontSize={'md'}
            fontFamily={'medium'}
            color={'gray.500'}
          >
            {routine?.steps.length} etapas • Cerca de {minutesAmount} minutos
          </Text>
          <FlatList
            height={'full'}
            data={routine?.steps}
            renderItem={({ item, index }) => {
              const minutes = Math.round(item.timeAmount / 60)
              return (
                <Box
                  key={index}
                  my={2}
                  flexDir={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  width="full"
                  borderWidth={2}
                  borderRadius={12}
                  borderColor={'gray.100'}
                  py={3}
                  px={2}
                >
                  <Container flexDir={'row'} alignItems={'center'} flex={1}>
                    <Text
                      ml={2}
                      fontSize={'md'}
                      fontFamily="medium"
                      color={'gray.600'}
                    >
                      • {item.name}
                    </Text>
                  </Container>
                  <Clock weight="bold" size={14} color="gray" />
                  <Text ml={1} color={'gray.500'}>
                    {minutes} {minutes > 1 ? 'minutos' : 'minuto'}
                  </Text>
                </Box>
              )
            }}
          />
        </Box>
      </VStack>
      <Center
        borderTopWidth={1}
        borderTopColor={'gray.50'}
        safeArea
        position={'absolute'}
        bottom={0}
        right={0}
        left={0}
        px={4}
        bgColor={'#fff'}
      >
        <Text fontSize={'md'}>Se começar agora, você terminará às</Text>
        <Text fontSize={'3xl'} fontFamily={'bold'} mb={4} color={'blue.500'}>
          {String(fullTime)}
        </Text>
        <Box
          width={'full'}
          background={'blue.500'}
          borderRadius={20}
          padding={4}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text
            fontSize={'lg'}
            color={'#fff'}
            fontFamily={'medium'}
            marginRight={2}
          >
            Começar rotina
          </Text>
        </Box>
      </Center>
    </View>
  )
}
