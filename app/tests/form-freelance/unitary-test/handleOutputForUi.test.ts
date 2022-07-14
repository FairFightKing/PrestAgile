import { StepHandlerImplementation } from '../../../logic/form-freelance/services/changeStep'
import { firstLetterUppercase } from '../../../logic/helpers/firstLetterUppercase'

const StepGenerator = new StepHandlerImplementation()

const cases = [
  'text',
  'select',
  'search',
  'search',
  'searchAndDisplay',
  'date',
  'textarea',
  'file',
  'radio',
  'checkbox',
]

describe('handle output based on entering type', () => {
  describe('works', () => {
    it.each(cases)(
      'Should return a string which name is based on input type with prest prefix',
      input => {
        expect(StepGenerator.handleOutputForUi(input)).toEqual(
          'Prest' + firstLetterUppercase(input),
        )
      },
    )
  })
})
