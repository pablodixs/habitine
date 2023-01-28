import { Box, Text, View } from 'native-base'

interface ButtonProps {
  children: React.ReactNode
}

export function MenuButton({ children }: ButtonProps) {
  return (
    <View
      flexDir={'row'}
      alignItems={'center'}
      width="full"
      borderWidth={2}
      borderRadius={12}
      borderColor={'gray.100'}
      py={3}
      px={4}
    >
      {children}
    </View>
  )
}
