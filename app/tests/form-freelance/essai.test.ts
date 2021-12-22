import {changeStep} from "../../logic/form-freelance/changeStep";

const data = {
    Etapes: [
        {
            id: 1,
            title: "Etape 1",
            input: [
                {
                    id: 1,
                    name: "text",
                    information: "Merci de pas faire de fautes",
                    additionnalData: null,
                    type: "text",
                    multipleChoice: false
                },
                {
                    id: 2,
                    name: "Second",
                    information: "oui",
                    additionnalData: "competences",
                    type: "select",
                    multipleChoice: false
                }
            ]
        },
        {
            id: 2,
            title: "Etape 1",
            input: [
                {
                    id: 1,
                    name: "text",
                    information: "Merci de pas faire de fautes",
                    additionnalData: null,
                    type: "text",
                    multipleChoice: false
                },
                {
                    id: 2,
                    name: "Second",
                    information: "oui",
                    additionnalData: "competences",
                    type: "select",
                    multipleChoice: false
                }
            ]
        }
    ]
}

test('should return the new array with new step', () => {
    let currentCase = 1;
    expect(changeStep(currentCase, data)).toEqual(
        expect.objectContaining({id: currentCase + 1})
    )
});