import {
  Alert,
  Box,
  Button,
  Center,
  Checkbox,
  HStack,
  Input,
  StatusBar,
  Switch,
  Text,
  View,
  VStack,
} from 'native-base'
import { X } from 'phosphor-react-native'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TouchableOpacity } from 'react-native'
import { userRoutines } from '../utils/data'


export function CreateRoutine({ navigation }: any) {
  const { register, handleSubmit, setValue } = useForm()
  const [days, setDays] = useState([])

  function handleSubmitForm(data: any) {
    const dataReceived = {
      id: 3,
      routineName: data.rotuineName,
      time: '9h30',
      type: 'Rotina',
      isFinished: false,
      createdAt: '2023-01-26T14:45:14.518Z',
      steps: [
        { name: 'Arrumar a cama 🛏️', timeAmount: 60 },
        { name: 'Fazer café ☕️', timeAmount: 300 },
        { name: 'Escovar os dentes 🪥', timeAmount: 180 },
      ],
    }

    userRoutines.push(dataReceived)
    navigation.goBack()

    console.log(userRoutines)
  }

  return (
    <View flex={1} bgColor={'#fff'} p={6}>
      <HStack justifyContent={'flex-end'} alignItems={'center'}>
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
      <VStack mt={4}>
        <Center>
          <Text
            color={'black.500'}
            fontSize={'3xl'}
            letterSpacing={-0.7}
            fontFamily={'bold'}
          >
            Criando nova rotina
          </Text>
          <View width={'full'} mt={6}>
            <Text color={'gray.500'} fontFamily={'medium'} mb={1}>
              Nome da rotina
            </Text>
            <Input
              focusOutlineColor={'blue.500'}
              borderWidth={2}
              px={4}
              py={3}
              borderRadius={12}
              fontSize={'md'}
              borderColor={'gray.100'}
              placeholder="Insira o nome da rotina"
              onChangeText={(text) => setValue('routineName', text)}
            />
            <Text color={'gray.500'} fontFamily={'medium'} mb={1} mt={4}>
              Dias da semana
            </Text>
            <Checkbox.Group
              flexDir={'row'}
              justifyContent={'space-between'}
              onChange={setDays}
              value={days}
            >
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="seg"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Segunda'}
                />
                <Text fontFamily={'bold'}>SEG</Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="ter"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Terça'}
                />
                <Text fontFamily={'bold'}>TER</Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="qua"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Quarta'}
                />
                <Text fontFamily={'bold'}>QUA</Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="qui"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Quinta'}
                />
                <Text fontFamily={'bold'}>QUI</Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="sex"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Sexta'}
                />
                <Text fontFamily={'bold'}>SEX</Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="sab"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Sábado'}
                />
                <Text fontFamily={'bold'}>SAB</Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="dom"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Domingo'}
                />
                <Text fontFamily={'bold'}>DOM</Text>
              </Box>
            </Checkbox.Group>
            <Button
              onPress={handleSubmit(handleSubmitForm)}
              borderRadius={12}
              p={4}
              bgColor={'blue.500'}
            >
              <Text fontFamily={'medium'} color={'#fff'} fontSize="md">
                Criar rotina
              </Text>
            </Button>
          </View>
        </Center>
      </VStack>
      <StatusBar barStyle={'light-content'} />
    </View>
  )
}
