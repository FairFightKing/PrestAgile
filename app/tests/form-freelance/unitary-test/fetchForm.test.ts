import HttpClientImplementation from "../../../../logic/form-freelance/services/httpClient";
import {expect} from "@jest/globals";

const HttpClientImpl = new HttpClientImplementation();
let data;

beforeEach(async () => {
    try {
        //TODO need to implement env variables
        data = await HttpClientImpl.getForm("http://localhost:1337/formulaire-freelance")
    }
    catch (e) {
        return e
    }
})

test('the form should have a minimum of steps in it', () => {
    expect(data.steps.length >= 1).toBeTruthy()
})

test('should return a minimum of inputs in each steps', () => {
    data.steps.forEach(el => {
        const {inputs} = el;
        expect(inputs.length >= 1)
    })
})
