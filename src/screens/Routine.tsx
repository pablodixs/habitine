import { Box, Button, Center, Container, Text, View, VStack } from 'native-base'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Pencil,
  Play,
  Trash,
  X,
} from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { userRoutines, UserRoutinesProps } from '../utils/data'

export function Routine({ navigation, route }: any) {
  const { id } = route.params

  const routine = userRoutines.find((routine) => {
    return routine.id === id
  })

  const totalMinutes = routine?.steps.reduce((total, item) => {
    return total + item.timeAmount
  }, 0)

  const minutesAmount = Math.round((totalMinutes as number) / 60)

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
            <ArrowLeft size={20} weight="bold" />
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
            <Pencil color="black" size={20} />
          </Box>
          <Box
            flexDir={'row'}
            padding={2}
            borderWidth={2}
            borderRadius={12}
            borderColor={'red.200'}
            marginLeft={4}
          >
            <Trash color="red" size={20} />
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
        <Box width={'full'} mt={6}>
          <Text
            textAlign={'center'}
            fontSize={'md'}
            fontFamily={'medium'}
            color={'gray.500'}
          >
            {routine?.steps.length} etapas, cerca de {minutesAmount} minutos
          </Text>
          {routine?.steps.map((step, index) => {
            const minutes = Math.round(step.timeAmount / 60)
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
                  <Text ml={2} fontSize={'md'} fontFamily="medium">
                    • {step.name}
                  </Text>
                </Container>
                <Clock weight="bold" size={14} color="gray" />
                <Text ml={1} color={'gray.500'}>
                  {minutes} {minutes > 1 ? 'minutos' : 'minuto'}
                </Text>
              </Box>
            )
          })}
        </Box>
      </VStack>
      <Center safeArea position={'absolute'} bottom={0} right={0} left={0} px={4}>
        <Box
          width={'full'}
          background={'blue.500'}
          borderRadius={12}
          padding={4}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text fontSize={'lg'} color={'#fff'} fontFamily={'medium'} marginRight={2}>
            Começar rotina
          </Text>
          <Play color='#fff' weight='fill'/>
        </Box>
      </Center>
    </View>
  )
}
