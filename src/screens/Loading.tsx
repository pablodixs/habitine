import { Center, Spinner } from 'native-base'

export function Loading() {
  return (
    <Center height={'full'} bgColor={'blue.500'}>
      <Spinner color={'#fff'} />
    </Center>
  )
}
