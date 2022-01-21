import TotalButtonHeader from './buttonHomePage/totalButtonHeader'
import { Box, Flex, Spacer, Image, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex fontFamily="Inter" height="auto" width="100%">
      <Box textAlign="center" py={4} px={5}>
        <Box px={5}>
          <Image alt="Logo Prestagile" src="PA-logo.png" />
          <Text fontSize="lg" fontWeight="600">
            Prestagile
          </Text>
        </Box>
      </Box>
      <Spacer />
      <TotalButtonHeader />
    </Flex>
  )
}
