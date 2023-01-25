import { Text, Box, Center } from 'native-base'

export function TaskCard() {
  return (
    <Box
      width="100%"
      display={'block'}
      backgroundColor={'blue.100'}
      padding={4}
      borderRadius={12}
      mb={4}
    >
      <Text fontFamily={'heading'} fontSize={'lg'} letterSpacing={-0.5}>
        morning routine
      </Text>
      <Text>30 minutos</Text>
    </Box>
  )
}
