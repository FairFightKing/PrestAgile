import HttpClientImplementation from '../../../../logic/form-freelance/services/httpClient'
import { expect } from '@jest/globals'

const HttpClientImpl = new HttpClientImplementation()
let data

beforeEach(async () => {
  try {
    data = await HttpClientImpl.getForm(
      'formulaire-freelance',
    )
  } catch (e) {
    return e
  }
})

test('the form should have a minimum of steps in it', () => {
  expect(data.steps.length >= 2).toBeTruthy()
})

test('should return a minimum of inputs in each steps', () => {
  data.steps.forEach(el => {
    const { inputs } = el
    expect(inputs.length >= 1)
  })
})
