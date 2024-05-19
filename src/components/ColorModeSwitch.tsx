import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode(); //returns an object
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch