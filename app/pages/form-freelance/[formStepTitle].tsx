import { PopulationEnum } from '../../logic/common/enum/Population'
import React, { useContext, useEffect } from 'react'
import { StepHandlerImplementation } from '../../logic/form-freelance/services/changeStep'
import { HttpRequests } from '../../logic/common/methods/httpRequests/HttpRequests'
import { Box, Button, Heading } from '@chakra-ui/react'
import renderInputs from '../../ui/scripts/renderInputs'
import { LinkComponent } from '../../ui/components/navigation/LinkComponent'
import { HandleUrlImplementation } from '../../logic/form-freelance/services/handleUrl'
import { FormContext } from '../../logic/context/Context'
const { handleStep } = new StepHandlerImplementation()
const { handleHyphen, reversedHandleHyphen } = new HandleUrlImplementation()

export default function StepPageFormFreelance({
  step,
  data,
  currentStepIndex,
}) {
  const form = useContext(FormContext)
  const method = (key, value) => {
    // @ts-ignore
    // @ts-ignore
    form.setState({
      // @ts-ignore
      ...form.state,
      [key]: Array.isArray(value)
        ? // @ts-ignore
          [...(new Set(value.map(el => el)) as Array)]
        : value,
    })
  }

  return (
    <Box margin={10}>
      <Heading>{step.title}</Heading>
      {step.inputs.map((el, index) => {
        return (
          <Box key={index} margin={5} alignItems={'center'} width={'40%'}>
            {renderInputs(el, method)}
          </Box>
        )
      })}
      {data.attributes.steps.length > currentStepIndex + 1 ? (
        <Box margin={5} alignItems={'center'} width={'40%'}>
          <LinkComponent
            child={<Button colorScheme="blue">Prochaine étape</Button>}
            target={handleHyphen(
              data.attributes.steps[currentStepIndex + 1].title,
            )}
          />
        </Box>
      ) : (
        <Box margin={5} alignItems={'center'} width={'40%'}>
          <Button colorScheme="blue" onClick={form.sendForm}>
            Finaliser l'inscription
          </Button>
        </Box>
      )}
    </Box>
  )
}

export async function loadFormFreelance() {
  const res = await HttpRequests.getHttpRequest(
    'strapi',
    'form-freelance',
    PopulationEnum.deep,
  )
  return res.data
}

export async function getServerSideProps(req) {
  const { data } = await loadFormFreelance()
  const searchingValue = reversedHandleHyphen(req.query.formStepTitle)
  const currentStepIndex = data.attributes.steps.findIndex(
    el => el.title === searchingValue,
  )
  const step = handleStep(data.attributes.steps, currentStepIndex)
  return { props: { step, data, currentStepIndex, searchingValue } }
}
