import type { NextPage } from 'next'
import {
  Box,
  Flex,
  Image,
  Progress,
  Container,
  Text,
  Heading,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { TextApp } from '../ui/components/form/input/input'

const FormFreelance: NextPage = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const mulitplicator = 100 / data.data.attributes.steps.data.length
    const stepsLengthTranslatedForProgressBar = value => mulitplicator * value
    const interval = setInterval(
      () =>
        progress < stepsLengthTranslatedForProgressBar(3) &&
        setProgress(progress => progress + 1),
      10,
    )
    return () => clearInterval(interval)
  }, [progress])

  return (
    //TODO: remove the id
    <Box backgroundColor="blue.50" id="oui">
      <Container maxW="container.lg">
        <Progress value={progress} colorScheme="teal" />
        <Heading m={'2rem 0 1rem 0'} size="xl">
          {data.data.attributes.title}
        </Heading>
        <Text fontSize="xl">{data.data.attributes.description}</Text>
        <Box m={'2rem 0'}></Box>
      </Container>
    </Box>
  )
}

export default FormFreelance

const data = {
  data: {
    id: 1,
    attributes: {
      title: 'Formulaire Freelance',
      description:
        'Ceci est le formulaire pour les freelances, remplissez le consciencieusement.',
      createdAt: '2022-01-19T12:22:04.327Z',
      updatedAt: '2022-01-19T12:55:23.497Z',
      publishedAt: '2022-01-19T12:33:58.483Z',
      steps: {
        data: [
          {
            id: 1,
            attributes: {
              title: 'Etape 1',
              description: 'Description 1',
              createdAt: '2022-01-19T12:53:36.805Z',
              updatedAt: '2022-01-19T12:53:39.294Z',
              publishedAt: '2022-01-19T12:53:39.291Z',
              inputs: [
                {
                  id: 4,
                  type: 'checkbox',
                  information: 'Votre métier actuel',
                  label: 'Votre métier',
                  repeatable: false,
                },
                {
                  id: 5,
                  type: 'selectOnTyping',
                  information: 'Choisissez toutes vos compétences',
                  label: 'Vos compétences',
                  repeatable: false,
                },
              ],
            },
          },
          {
            id: 2,
            attributes: {
              title: 'Etape 2',
              description: 'Description 2',
              createdAt: '2022-01-19T12:54:54.669Z',
              updatedAt: '2022-01-19T12:54:56.817Z',
              publishedAt: '2022-01-19T12:54:56.816Z',
              inputs: [
                {
                  id: 6,
                  type: 'experiences',
                  information: 'Vos expériences à mettre en avant',
                  label: 'Vos expériences',
                  repeatable: true,
                },
              ],
            },
          },
          {
            id: 1,
            attributes: {
              title: 'Etape 1',
              description: 'Description 1',
              createdAt: '2022-01-19T12:53:36.805Z',
              updatedAt: '2022-01-19T12:53:39.294Z',
              publishedAt: '2022-01-19T12:53:39.291Z',
              inputs: [
                {
                  id: 4,
                  type: 'checkbox',
                  information: 'Votre métier actuel',
                  label: 'Votre métier',
                  repeatable: false,
                },
                {
                  id: 5,
                  type: 'selectOnTyping',
                  information: 'Choisissez toutes vos compétences',
                  label: 'Vos compétences',
                  repeatable: false,
                },
              ],
            },
          },
        ],
      },
    },
  },
  meta: {},
}
