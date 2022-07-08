import { Box, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      p={4}
      mt={4}
      textAlign="center"
      bg="#E1DCFF"
      letterSpacing="-1px"
      fontWeight="700"
      fontFamily="Inter"
    >
      <Text fontSize="lg">© 2022 - PrestAgile. Tous droits réservés.</Text>
    </Box>
  )
}
