import { StepGeneratorImplementation } from '../../../../logic/form-freelance/services/changeStep'
import { expect } from '@jest/globals'

const data = {
  steps: [
    {
      id: 5,
      title: 'step 1',
      description: 'description',
      inputs: [
        {
          id: 11,
          name: 'text',
          information: 'information',
          additionnalData: null,
          type: 'text',
          multipleChoice: false,
        },
        {
          id: 12,
          name: 'text',
          information: 'information',
          additionnalData: null,
          type: 'text',
          multipleChoice: false,
        },
      ],
    },
    {
      id: 6,
      title: 'Etape 2',
      description: 'description',
      inputs: [],
    },
    {
      id: 7,
      title: 'Title',
      description: 'Description',
      inputs: [
        {
          id: 10,
          name: 'name',
          information: 'info',
          additionnalData: null,
          type: 'checkbox',
          multipleChoice: false,
        },
      ],
    },
  ],
}

test('should return the new array with new step and inputs content inside it', () => {
  const stepGeneratorImpl = new StepGeneratorImplementation()
  const currentContext = 1
  const stepValue = data.steps[currentContext]
  expect(stepGeneratorImpl.changeStep(currentContext, data)).toEqual(stepValue)
})

test("should return error if index of Etapes doesn't exist", () => {
  const stepGeneratorImpl = new StepGeneratorImplementation()
  const currentContext = data.steps.length + 1
  expect(() => stepGeneratorImpl.changeStep(currentContext, data)).toThrow()
})
