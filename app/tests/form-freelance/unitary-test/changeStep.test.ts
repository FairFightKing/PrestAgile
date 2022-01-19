import {StepGeneratorImplementation} from '../../../logic/form-freelance/services/changeStep'
import {expect} from '@jest/globals'

const data = {
    steps: {
        data: [
            {
                id: 1,
                attributes: {
                    title: "Etape 1",
                    description: "Description 1",
                    createdAt: "2022-01-19T12:53:36.805Z",
                    updatedAt: "2022-01-19T12:53:39.294Z",
                    publishedAt: "2022-01-19T12:53:39.291Z",
                    inputs: [
                        {
                            id: 4,
                            type: "checkbox",
                            information: "Votre métier actuel",
                            label: "Votre métier",
                            repeatable: false
                        },
                        {
                            id: 5,
                            type: "selectOnTyping",
                            information: "Choisissez toutes vos compétences",
                            label: "Vos compétences",
                            repeatable: false
                        }
                    ]
                }
            },
            {
                id: 2,
                attributes: {
                    title: "Etape 2",
                    description: "Description 2",
                    createdAt: "2022-01-19T12:54:54.669Z",
                    updatedAt: "2022-01-19T12:54:56.817Z",
                    publishedAt: "2022-01-19T12:54:56.816Z",
                    inputs: [
                        {
                            id: 6,
                            type: "experiences",
                            information: "Vos expériences à mettre en avant",
                            label: "Vos expériences",
                            repeatable: true
                        }
                    ]
                }
            }
        ]
    }
}

test('should return the new array with new step and inputs content inside it', () => {
    const stepGeneratorImpl = new StepGeneratorImplementation()
    const currentContext = 0
    const stepValue = {
        id: data.steps.data[currentContext].id,
        title: data.steps.data[currentContext].attributes.title,
        description: data.steps.data[currentContext].attributes.description,
        inputs: [...data.steps.data[currentContext].attributes.inputs]
    }
    expect(stepGeneratorImpl.changeStep(currentContext, data)).toEqual(stepValue)
})

test("should return error if index of Etapes doesn't exist", () => {
    const stepGeneratorImpl = new StepGeneratorImplementation()
    const currentContext = data.steps.data.length + 1
    expect(() => stepGeneratorImpl.changeStep(currentContext, data)).toThrow()
})
