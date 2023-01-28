import {
  VStack,
  Text,
  Container,
  HStack,
  Box,
  View,
  FlatList,
  Center,
  Progress,
  Modal,
} from 'native-base'
import { PlusCircle } from 'phosphor-react-native'
import { useCallback, useState, useEffect } from 'react'
import { RefreshControl, TouchableOpacity } from 'react-native'

import { TaskCard } from '../components/TaskCard'
import { userRoutines, UserRoutinesProps } from '../utils/data'
import {
  countRoutinesDone,
  orderRoutineByFinished,
} from '../utils/geralFunctions'

export function Homepage({ navigation }: any) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [data, setData] = useState<UserRoutinesProps[]>([])

  const sortedRoutines = orderRoutineByFinished(userRoutines)
  const countRoutines = countRoutinesDone(userRoutines)
  const countAllRoutines = userRoutines.length

  const routinesDifference = countAllRoutines === countRoutines

  useEffect(() => {
    setData(sortedRoutines)
  }, [])

  const onRefresh = useCallback(() => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 500)
  }, [])

  return (
    <View bgColor={'#fff'}>
      <VStack safeArea>
        <HStack
          pb={4}
          px={4}
          py={3}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontSize={'3xl'} letterSpacing={-0.5} fontFamily={'bold'}>
            Olá, Pablo
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('NewRoutine')}>
            <Box
              borderWidth={2}
              borderColor={'gray.100'}
              borderRadius={12}
              padding={2}
              flexDirection={'row'}
              alignItems={'center'}
            >
              <PlusCircle size={20} />
              <Text marginLeft={2}>Nova rotina</Text>
            </Box>
          </TouchableOpacity>
        </HStack>
        <HStack px={4} justifyContent={'space-between'} alignItems={'center'}>
          <Text>SEG</Text>
          <Container
            backgroundColor={'blue.500'}
            padding={2}
            borderRadius={100}
          >
            <Text fontFamily={'medium'} color="white.100">
              TER
            </Text>
          </Container>
          <Text>QUA</Text>
          <Text>QUI</Text>
          <Text>SEX</Text>
          <Text>SÁB</Text>
          <Text>DOM</Text>
        </HStack>
        <View px={4} py={4}>
          <Progress
            value={countRoutines}
            max={countAllRoutines}
            bg={'gray.50'}
            _filledTrack={{
              bg: 'blue.500',
            }}
          />
          {!(countRoutines === 0) && routinesDifference && (
            <Center my={2}>
              <Text fontSize={'5xl'}>😎</Text>
              <Text fontSize={'2xl'} fontFamily={'bold'} color={'blue.500'}>
                É isso aí!
              </Text>
              <Text fontSize={'md'} fontFamily={'medium'}>
                Você concluiu todas as rotinas do dia
              </Text>
            </Center>
          )}
        </View>
        <VStack px={4} height={'full'}>
          <FlatList
            data={data}
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
            ListEmptyComponent={() => {
              return (
                <Center alignItems={'center'}>
                  <Text fontSize={'5xl'}>🏖️</Text>
                  <Text
                    fontFamily={'medium'}
                    fontSize={'lg'}
                    textAlign={'center'}
                    color={'gray.700'}
                    lineHeight={'25%'}
                  >
                    Você não tem nenhuma rotina programada
                  </Text>
                </Center>
              )
            }}
            renderItem={({ item, index }) => {
              return (
                <TaskCard
                  key={index}
                  routineName={item.routineName}
                  time={item.time}
                  timeAmount={item.steps.length}
                  isFinished={item.isFinished}
                  navigation={navigation}
                  id={item.id}
                />
              )
            }}
          ></FlatList>
        </VStack>
      </VStack>
    </View>
  )
}
