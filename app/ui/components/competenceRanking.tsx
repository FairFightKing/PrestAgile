import { Flex } from '@chakra-ui/react'
import styled from 'styled-components'

export const CompetenceRanking = ({ ranking }) => {
  const StyledCompetenceSpan = styled.span`
    min-height: 0.5rem;
    min-width: 30%;
    background: ${props => (props.context ? 'green' : 'grey')};
  `

  return (
    <Flex justifyContent={'space-between'}>
      <StyledCompetenceSpan
        context={ranking === 1 || ranking === 2 || ranking === 3}
      />
      <StyledCompetenceSpan context={ranking === 2 || ranking === 3} />
      <StyledCompetenceSpan context={ranking === 3} />
    </Flex>
  )
}
