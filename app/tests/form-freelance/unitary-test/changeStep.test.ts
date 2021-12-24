import {StepGeneratorImplementation} from '../../../../logic/form-freelance/services/changeStep'
import {expect} from '@jest/globals'

const data = {
    Etapes: [
        {
            id: 1,
            title: 'Etape 1',
            description: "Description 1",
            input: [
                {
                    id: 1,
                    name: 'text',
                    information: 'Merci de pas faire de fautes',
                    additionnalData: null,
                    type: 'text',
                    multipleChoice: false,
                },
                {
                    id: 2,
                    name: 'Second',
                    information: 'oui',
                    additionnalData: 'competences',
                    type: 'select',
                    multipleChoice: false,
                },
            ],
        },
        {
            id: 2,
            title: 'Etape 2',
            description: "Description 2",
            input: [
                {
                    id: 1,
                    name: 'text',
                    information: 'Merci de pas faire de fautes',
                    additionnalData: null,
                    type: 'text',
                    multipleChoice: false,
                },
                {
                    id: 2,
                    name: 'Second',
                    information: 'oui',
                    additionnalData: 'competences',
                    type: 'select',
                    multipleChoice: false,
                },
            ],
        },
    ],
}

test('should return the new array with new step and inputs content inside it', () => {
    const stepGeneratorImpl = new StepGeneratorImplementation()
    const stepValue = {
        _id: 2,
        _title: 'Etape 2',
        _description: undefined,
        _inputs: [
            {
                id: 1,
                name: 'text',
                information: 'Merci de pas faire de fautes',
                additionnalData: null,
                type: 'text',
                multipleChoice: false,
            },
            {
                id: 2,
                name: 'Second',
                information: 'oui',
                additionnalData: 'competences',
                type: 'select',
                multipleChoice: false,
            },
        ],
    }
    const currentContext = data.Etapes.length - 1 > 0 ? data.Etapes.length - 1 : 0
    expect(stepGeneratorImpl.changeStep(currentContext, data)).toEqual(
        stepValue
    )
})

test("should return error if index of Etapes doesn't exist", () => {
    const stepGeneratorImpl = new StepGeneratorImplementation()
    const currentContext = data.Etapes.length + 1
    expect(() => stepGeneratorImpl.changeStep(currentContext, data)).toThrow()
})
