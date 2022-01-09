import {expect} from "@jest/globals";
import {RegistrationServicesImpl} from "../../services/registrationServices";

test('expect object to be validated', () => {
    const email = "julesgabriel.dayaux@gmail.com";
    const password = "Pkui567@flkiu";
    expect(RegistrationServicesImpl.checkInputForApi({email, password})).toBeTruthy()
})
