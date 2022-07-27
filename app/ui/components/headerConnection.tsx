import { Box, Flex, Spacer, Image, Text } from '@chakra-ui/react'
import { LinkComponent } from './navigation/LinkComponent'

export default function HeaderNoConnection() {
  return (
    <Flex fontFamily="Inter" height="auto" width="100%">
      <Box textAlign="center" py={4} px={5}>
        <LinkComponent
          child={
            <Box px={5}>
              <Image alt="Logo Prestagile" src="PA-logo.png" />
              <Text fontSize="lg" fontWeight="600">
                Prestagile
              </Text>
            </Box>
          }
          target="/"
        />
      </Box>
      <Spacer />
    </Flex>
  )
}
