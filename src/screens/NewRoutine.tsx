import {
  Box,
  Button,
  Center,
  HStack,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base'
import { X } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { RoutineOption } from '../components/RoutineOption'

const routines = [
  { name: 'Rotina Matinal 🌅' },
  { name: 'Rotina Noturna 🌙' },
  { name: 'Rotina de Skincare 🫧' },
  { name: 'Rotina de Estudos 📚' },
  { name: 'Rotina de Treino 🏋️' },
]

export function NewRoutine({ navigation }: any) {
  return (
    <View flex={1} padding={6} bgColor={'#fff'}>
      <HStack justifyContent={'flex-end'}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Box
            borderWidth={2}
            borderRadius={12}
            borderColor={'gray.100'}
            color={'black'}
            fontFamily={'bold'}
            padding={2}
          >
            <X weight="bold" color="gray" />
          </Box>
        </TouchableOpacity>
      </HStack>
      <VStack>
        <Center mt={4}>
          <Text fontSize={64}>📝</Text>
          <Text
            color={'black.500'}
            fontSize={'4xl'}
            letterSpacing={-0.7}
            fontFamily={'bold'}
          >
            Nova rotina
          </Text>
          <Text
            fontSize={'md'}
            color={'gray.500'}
            textAlign={'center'}
            lineHeight={20}
          >
            Crie sua rotina personalizada ou use alguma de nossas rotinas
            pré-definidas
          </Text>
        </Center>
        <Center mt={8}>
          <Button
            width={'full'}
            background={'blue.500'}
            borderRadius={12}
            padding={3}
            onPress={() => navigation.navigate('CreateRoutine')}
          >
            <Text fontSize={'md'} color={'#fff'} fontFamily={'medium'}>
              Rotina personalizada 📝
            </Text>
          </Button>
        </Center>
      </VStack>
      <Text
        textAlign={'center'}
        mb={2}
        mt={4}
        fontFamily={'medium'}
        color={'gray.500'}
      >
        Ou rotinas pré-definidas
      </Text>
      <ScrollView height={'50%'}>
        <Center alignItems={'stretch'}>
          {routines.map((item, index) => {
            return <RoutineOption key={index} title={item.name} />
          })}
        </Center>
      </ScrollView>
    </View>
  )
}
