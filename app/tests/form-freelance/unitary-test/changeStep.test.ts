import { StepGeneratorImplementation } from '../../../logic/form-freelance/services/changeStep'
import { Step } from '../../../logic/form-freelance/interfaces/Step'

const data: Array<Step> = [
  {
    id: 1,
    title: 'Informations personnelles',
    inputs: [
      {
        id: 1,
        label: 'Prénom',
        sizeLabel: 'large',
        type: 'text',
      },
      {
        id: 2,
        label: 'Nom',
        sizeLabel: 'large',
        type: 'text',
      },
    ],
  },
  {
    id: 2,
    title: 'Etape 2 ',
    inputs: [
      {
        id: 3,
        label: 'Oui le deux',
        sizeLabel: 'small',
        type: 'text',
      },
    ],
  },
]

const StepGenerator = new StepGeneratorImplementation()

describe('works', () => {
  it('Should return first index of data when no index is provided as argument', () => {
    expect(StepGenerator.changeStep(data)).toEqual(data[0])
  })

  it('Should return the steps pass in index when index is provided', () => {
    expect(StepGenerator.changeStep(data, 0)).toEqual(data[0])
  })
})

describe('does not work', () => {
  it('Should throw an error when index pass in argument does not exist in the data argument', () => {
    const changeStepInstanciation = () => StepGenerator.changeStep(data, 100)
    expect(changeStepInstanciation).toThrow(Error)
    expect(changeStepInstanciation).toThrow('The step does not exist')
  })
})
