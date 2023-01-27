import { Box, Text, Image, Container, VStack } from 'native-base'

export function Profile() {
  return (
    <VStack>
      <Text fontFamily={'medium'} fontSize={'md'} color={'gray.500'}>
        Perfil
      </Text>
      <Box bgColor={'black.100'} flexDir={'row'} my={2} alignItems={'center'}>
        <Image
          src="https://github.com/pablodixs.png"
          alt="Avatar"
          size={14}
          borderRadius={100}
          marginRight={4}
        />
        <Box>
          <Text fontSize={'lg'} fontFamily={'medium'} letterSpacing={-0.5}>
            Pablo Dias
          </Text>
          <Text color={'blue.500'}>Conta premium</Text>
        </Box>
      </Box>
    </VStack>
  )
}
