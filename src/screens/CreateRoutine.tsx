import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  HStack,
  Input,
  StatusBar,
  Text,
  View,
  VStack,
} from 'native-base'
import { CaretRight, X } from 'phosphor-react-native'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TouchableOpacity, Platform, YellowBox } from 'react-native'
import uuid from 'react-native-uuid'
import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { userRoutines } from '../utils/data'
import moment from 'moment'

export function CreateRoutine({ navigation }: any) {
  const { register, handleSubmit, setValue } = useForm()
  const [days, setDays] = useState()
  const [time, setTime] = useState()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const horario = moment(time).format('HH:mm')

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: any) => {
    setTime(date)
    hideDatePicker()
  }

  function handleSubmitForm(data: any) {
    const routineName = data.routineName
    const id = uuid.v4()
    const timeString = time!

    const dataReceived = {
      id,
      routineName,
      time: timeString,
      type: 'Rotina',
      isFinished: false,
      createdAt: new Date().toISOString(),
      steps: [
        { name: 'Arrumar a cama 🛏️', timeAmount: 60 },
        { name: 'Escovar os dentes 🪥', timeAmount: 180 },
        { name: 'Fazer café ☕️', timeAmount: 300 },
        { name: 'Fazer café ☕️', timeAmount: 300 },
        { name: 'Fazer café ☕️', timeAmount: 300 },
      ],
      daysOfWeek: days,
    }

    console.log(days)

    userRoutines.push(dataReceived)
    navigation.goBack()
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
            <Text fontSize="md" fontFamily={'medium'} color={'gray.500'} mb={1}>
              Vamos dar um nome para sua nova rotina
            </Text>
            <Input
              focusOutlineColor={'blue.500'}
              borderWidth={2}
              px={4}
              py={3}
              borderRadius={12}
              fontSize={'md'}
              fontFamily={'medium'}
              borderColor={'gray.100'}
              placeholder="Insira o nome da rotina"
              onChangeText={(text) => setValue('routineName', text)}
            />
            <Text
              fontSize="md"
              fontFamily={'medium'}
              color={'gray.500'}
              mb={2}
              mt={4}
            >
              Agora selecione os dias das semanas
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
                  value="0"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Segunda'}
                />
                <Text fontFamily={'bold'} textAlign={'center'}>
                  SEG
                </Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="1"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Terça'}
                />
                <Text fontFamily={'bold'} textAlign={'center'}>
                  TER
                </Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="2"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Quarta'}
                />
                <Text fontFamily={'bold'} textAlign={'center'}>
                  QUA
                </Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="3"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Quinta'}
                />
                <Text fontFamily={'bold'} textAlign={'center'}>
                  QUI
                </Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="4"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Sexta'}
                />
                <Text fontFamily={'bold'} textAlign={'center'}>
                  SEX
                </Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value={'5'}
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Sábado'}
                />
                <Text fontFamily={'bold'} textAlign={'center'}>
                  SÁB
                </Text>
              </Box>
              <Box justifyContent={'center'}>
                <Checkbox
                  size={'lg'}
                  value="6"
                  borderRadius={8}
                  borderColor={'gray.100'}
                  p={1}
                  accessibilityLabel={'Domingo'}
                />
                <Text fontFamily={'bold'} textAlign={'center'}>
                  DOM
                </Text>
              </Box>
            </Checkbox.Group>
            <TouchableOpacity onPress={showDatePicker}>
              <Box mt={4}>
                <Text fontSize="md" fontFamily={'medium'} color={'gray.500'}>
                  Agora um horário para começar
                </Text>
                <Box flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Text fontFamily={'bold'} fontSize={'xl'} color={'blue.500'}>
                    {horario}
                  </Text>
                  <CaretRight weight='bold' color='#064bb4'/>
                </Box>
              </Box>
            </TouchableOpacity>
            <DateTimePickerModal
              buttonTextColorIOS={'#99bbff'}
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              cancelTextIOS={'Cancelar'}
              confirmTextIOS={'Confirmar'}
              pickerContainerStyleIOS={{ backgroundColor: '#064bb4' }}
            />
          </View>
        </Center>
      </VStack>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        safeArea
        px={4}
        justifyContent="center"
        alignItems={'center'}
      >
        <Button
          onPress={handleSubmit(handleSubmitForm)}
          borderRadius={12}
          p={4}
          bgColor={'blue.500'}
          width={'full'}
        >
          <Text fontFamily={'medium'} color={'#fff'} fontSize="md">
            Criar rotina
          </Text>
        </Button>
      </Box>
      <StatusBar barStyle={'light-content'} />
    </View>
  )
}
