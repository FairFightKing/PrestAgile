import type { NextPage } from 'next'
import { Box, Flex, Image, Progress, Container, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { TextApp } from '../ui/components/form/input/input'

const FormFreelance: NextPage = () => {
  const [progress, setProgress] = useState(10)

  useEffect(() => {
    const interval = setInterval(
      () => progress < 80 && setProgress(progress => progress + 1),
      10,
    )
    return () => clearInterval(interval)
  }, [progress])

  return (
    //TODO: remove the id
    <Box backgroundColor="blue.50" id="oui">
      <Box w={'40%'} m={'auto'}>
        <Progress value={progress} colorScheme="teal" />
        <Box
          backgroundColor="white"
          p={'0.5rem'}
          w={'90%'}
          m={'2rem auto'}
          borderRadius={'0.5rem'}
          boxShadow="0 0.2rem 0.2rem rgba(0,0,0,0.1)"
        >
          <Flex alignItems="center">
            <Text as="h1" fontSize="2rem" fontWeight="bold" textAlign="center">
              Remplissez notre formulaire de pré-selection
            </Text>
          </Flex>
        </Box>
        <Flex
          backgroundColor="white"
          p="1rem"
          borderRadius={'0.5rem'}
          flexDirection="column"
          w="90%"
          m={'auto'}
        >
          <Box mb="1rem">
            <Text as="h3" fontSize="1.4rem" fontWeight={'semibold'} mb="0.5rem">
              Sélectionnez un métier puis une séniorité
            </Text>
            <TextApp placeholder={'Okay'} />
          </Box>
          <Box mb="1rem">
            <Text as="h3" fontSize="1.4rem" fontWeight={'semibold'} mb="0.5rem">
              Sélectionnez un métier puis une séniorité
            </Text>
            <TextApp placeholder={'Okay'} />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default FormFreelance
