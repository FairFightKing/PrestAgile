import {describe, expect} from '@jest/globals'
import {RegistrationServicesImpl} from '../../services/registrationServicesImpl'

const registrationService = new RegistrationServicesImpl();

describe('works', () => {
    it('should Email and password be ok when email and password are in the good format', () => {
        const email = 'julesgabriel.dayaux@gmail.com'
        const password = 'Pwrb5ed598@11'
        expect(
            registrationService.checkInputForApi({email, password}),
        ).toBeTruthy()
    })
})

describe('does not work', function () {
    it('should email not to be in the good format', () => {
        const email = 'jules'
        const password = 'Pwrb5ed598@11'
        const checkInput = () => registrationService.checkInputForApi({email, password})
        expect(checkInput).toThrow(Error)
        expect(checkInput).toThrow('The email format is not valid')
    })
    it('should password throw an error if does not have at least one special char', () => {
        const email = 'julesgabriel.dayaux@gmail.com'
        const password = 'Pwrb5ed598111'
        const checkInput = () => registrationService.checkInputForApi({email, password})
        expect(checkInput).toThrow(Error)
        expect(checkInput).toThrow('The password should have at least one special character')
    })
    it('should password throw an error if does not have at least one uppercase char', () => {
        const email = 'julesgabriel.dayaux@gmail.com'
        const password = 'pwrb5ed598@11'
        const checkInput = () => registrationService.checkInputForApi({email, password})
        expect(checkInput).toThrow(Error)
        expect(checkInput).toThrow('The password should have at least one uppercase')
    })
});
