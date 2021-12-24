import HttpClientImplementation from "../../../../logic/form-freelance/services/httpClient";

const HttpClientImpl = new HttpClientImplementation();
let data;

beforeEach(async () => {
    data = await HttpClientImpl.getForm()
})

test('should return simple input', () => {
    expect(data).toMatchObject({
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
    expect(data.steps.length >= 1).toBeTruthy()
})

test('should return a minimum of inputs in each steps', () => {
    data.steps.forEach(el => {
        const {inputs} = el;
        expect(inputs.length >= 1)
    })
})
