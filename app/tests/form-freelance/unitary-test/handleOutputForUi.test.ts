import { StepHandlerImplementation } from '../../../logic/form-freelance/services/changeStep'
import { firstLetterUppercase } from '../../../logic/helpers/firstLetterUppercase'
import { OutputForUiEnum } from '../../../logic/form-freelance/enum/OutputForUiEnum'

const StepGenerator = new StepHandlerImplementation()

const cases = [
  'text',
  'tel',
  'search',
  'select',
  'date',
  'textarea',
  'file',
  'radio',
  'checkbox',
]

const values = Object.values(OutputForUiEnum)

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
    it.each(cases)('The enum should include the output of the method', input =>
      expect(
        values.includes(
          StepGenerator.handleOutputForUi(input) as OutputForUiEnum,
        ),
      ).toBe(true),
    )
  })
  describe('does not work', () => {
    it('Should return false when value does not return an enum instance', () =>
      expect(values.includes('Test' as OutputForUiEnum)).toBe(false))
  })
})
