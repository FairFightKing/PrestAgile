import { PopulationEnum } from '../../logic/common/enum/Population'
import React, { ComponentProps, useEffect } from 'react'
import { StepHandlerImplementation } from '../../logic/form-freelance/services/changeStep'
import PrestText from '../../ui/components/PrestInputs/PrestText'
import PrestSearch from '../../ui/components/PrestInputs/PrestSearch'
import { HttpRequests } from '../../logic/common/methods/httpRequests/HttpRequests'
import { Heading } from '@chakra-ui/react'
import renderInputs from '../../ui/scripts/renderInputs'

const { handleStep } = new StepHandlerImplementation()

export default function StepPageFormFreelance({ currentStep }) {
  return (
    <div>
      <Heading>{currentStep.title}</Heading>
      {currentStep.inputs.map((el, key) => {
        return renderInputs(el, key)
      })}
    </div>
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

export async function getServerSideProps() {
  const { data } = await loadFormFreelance()
  const currentStep = handleStep(data.attributes.steps)
  return { props: { currentStep } }
}
