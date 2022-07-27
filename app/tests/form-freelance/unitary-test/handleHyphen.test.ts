import {HandleUrlImplementation} from "../../../logic/form-freelance/services/handleUrl";

const {handleHyphen} = new HandleUrlImplementation()

describe('handleHyphen', () => {
    describe('works', () => {
        it('Should return element to lowerCase', () => {
            expect(handleHyphen('Test')).toBe('test')
        })
        it('Should return element with hyphen instead of space if input is provided with space', () => {
            expect(handleHyphen('Test Space')).toBe('test-space')
        })
        it('Should return element with hyphen instades of scape is input input is provided with multiple spaces', () => {
            expect(handleHyphen('Test With Spaces')).toBe('test-with-spaces');
        })
    })
})