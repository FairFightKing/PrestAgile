import HttpClientImplementation from "../../../../logic/form-freelance/services/httpClient";
import exp from "constants";

test('should return simple input', () => {
    const HttpClientImpl = new HttpClientImplementation();
    expect(HttpClientImpl.getForm()).toMatchObject({
            id: expect.any(Number),
            title: expect.any(String),
            description: expect.any(String || null),
            published_at: expect.any(String),
            created_at: expect.any(String),
            updated_at: expect.any(String),
        }
    )
})

test('the form should have a minimum of steps in it', () => {
    const HttpClientImpl = new HttpClientImplementation();
    expect(HttpClientImpl.getForm().steps.length >= 1).toBeTruthy()
})

test('should return a minimum of inputs in each steps', () => {
    const HttpClientImpl = new HttpClientImplementation();
    HttpClientImpl.getForm().steps.forEach(el => {
        const {inputs} = el;
        expect(inputs.length >= 1)
    })
})

