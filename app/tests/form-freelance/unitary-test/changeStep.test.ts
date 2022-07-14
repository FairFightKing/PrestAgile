import { StepHandlerImplementation } from '../../../logic/form-freelance/services/changeStep'
import { Step } from '../../../logic/form-freelance/interfaces/Step'
import formFreelanceFetchedFake from '../utils/data/formFreelanceFetched.json'
const data: Array<Step> = formFreelanceFetchedFake
const StepGenerator = new StepHandlerImplementation()

describe('changeStep', () => {
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
})
