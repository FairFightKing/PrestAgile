import TotalButtonHeader from './buttonHomePage/totalButtonHeader'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import PaLogo from '../../public/PA-logo.png'
import Image from 'next/image'

export default function Header() {
  return (
    <Flex fontFamily="Inter" height="auto" width="100%">
      <Box textAlign="center" py={4} px={5}>
        <Box px={5}>
          <Image alt="Logo Prestagile" src={PaLogo} />
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
