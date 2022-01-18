import { expect } from '@jest/globals'
import { RegistrationServicesImpl } from '../../services/registrationServices'

test('expect object to be validated', () => {
  const email = 'julesgabriel.dayaux@gmail.com'
  const password = 'Pwrb5ed598@11'
  expect(
    RegistrationServicesImpl.checkInputForApi({ email, password }),
  ).toBeTruthy()
})
