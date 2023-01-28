import { Text, View } from 'native-base'

interface ButtonProps {
  children: React.ReactNode
}

export function DangerButton({ children }: ButtonProps) {
  return (
    <View
      my={2}
      flexDir={'row'}
      alignItems={'center'}
      width="full"
      borderWidth={2}
      borderRadius={12}
      borderColor={'red.100'}
      py={3}
      px={4}
    >
      {children}
    </View>
  )
}
