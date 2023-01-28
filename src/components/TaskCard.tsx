import moment from 'moment'
import { Text, Box, Center, Container, View, ZStack, Modal } from 'native-base'
import {
  CaretDown,
  Check,
  CheckCircle,
  Trash,
  X,
  XCircle,
} from 'phosphor-react-native'
import { useState } from 'react'
import { RefreshControl, TouchableOpacity } from 'react-native'
import { userRoutines, UserRoutinesProps } from '../utils/data'
import {
  handleDeleteRoutine,
  handleMarkAsFinished,
} from '../utils/geralFunctions'
import { DangerButton } from './DangerButton'
import { MenuButton } from './MenuButton'

interface TaskCardProps {
  navigation?: any
  routineName: string
  time: string
  timeAmount: number
  isFinished: boolean
  id: string | number[]
}

export function TaskCard({
  routineName,
  time,
  timeAmount,
  isFinished,
  id,
  navigation,
}: TaskCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const horario = moment(time).format('HH:mm')

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Routine', { id })}
      onLongPress={() => {
        setIsModalOpen(true)
      }}
    >
      <View
        width="100%"
        display={'block'}
        padding={4}
        borderRadius={12}
        mb={2}
        borderWidth={2}
        borderColor={'gray.100'}
        flexDir={'row'}
        alignItems="center"
        justifyContent="space-between"
        opacity={isFinished ? 0.5 : 1}
      >
        <Container>
          {isFinished && (
            <View flexDir={'row'} alignItems="center">
              <CheckCircle size={18} weight="bold" color="#064bb4" />
              <Text color={'blue.500'} fontFamily={'medium'} ml={1}>
                Concluída
              </Text>
            </View>
          )}
          <Text fontFamily={'heading'} fontSize={'lg'} letterSpacing={-0.5}>
            {routineName}
          </Text>
          <Box flexDir={'row'} alignItems="center">
            <Text marginLeft={1} color={'gray.500'}>
              {timeAmount} etapas
            </Text>
          </Box>
        </Container>
        <Box>
          <Text fontSize={'xs'} color={'gray.400'}>
            Agendado para
          </Text>
          <Text
            textAlign={'right'}
            fontSize="lg"
            fontFamily={'bold'}
            color={'gray.700'}
          >
            {horario}
          </Text>
        </Box>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          animationPreset="slide"
          justifyContent={'flex-end'}
          width={'full'}
        >
          <Modal.Content width={'full'} p={4} borderRadius={24}>
            <Modal.CloseButton
              borderWidth={2}
              borderRadius={12}
              borderColor={'gray.100'}
              color={'black'}
              fontFamily={'bold'}
              padding={2}
              m={2}
              backgroundColor={'#fff'}
            />
            <Modal.Body safeArea>
              <Text color="gray.500">Rotina selecionada</Text>
              <Text
                fontFamily={'medium'}
                fontSize={'2xl'}
                mb={4}
                color="black.500"
                letterSpacing={-0.75}
              >
                {routineName}
              </Text>
              <Text color="gray.500" mb={1}>
                Opções
              </Text>
              <TouchableOpacity
                onPress={() => {
                  handleMarkAsFinished(id, userRoutines)
                  setIsModalOpen(false)
                }}
              >
                {isFinished ? (
                  <>
                    <DangerButton>
                      <XCircle color="red" weight="duotone" />
                      <Text
                        ml={2}
                        fontSize={'md'}
                        fontFamily={'medium'}
                        color={'red.500'}
                      >
                        Desmarcar como concluída
                      </Text>
                    </DangerButton>
                  </>
                ) : (
                  <>
                    <MenuButton>
                      <CheckCircle weight="duotone" />
                      <Text
                        ml={2}
                        fontSize={'md'}
                        fontFamily={'medium'}
                        color={'black.500'}
                      >
                        Marcar como concluída
                      </Text>
                    </MenuButton>
                  </>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleDeleteRoutine(id, userRoutines)
                  setIsModalOpen(false)
                }}
              >
                <DangerButton>
                  <Trash color="red" weight="duotone" />
                  <Text
                    ml={2}
                    fontSize={'md'}
                    fontFamily={'medium'}
                    color="red.500"
                  >
                    Excluir
                  </Text>
                </DangerButton>
              </TouchableOpacity>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </View>
    </TouchableOpacity>
  )
}
