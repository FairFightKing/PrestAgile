import {HandleUrlImplementation} from "../../../logic/form-freelance/services/handleUrl";

const {reversedHandleHyphen} = new HandleUrlImplementation()

describe('handleHyphen', () => {
    describe('works', () => {
        it('Should return element with first letter to uppercase', () => {
            expect(reversedHandleHyphen('test')).toBe('Test')
        })
        it('Should return element with spaces instead of uppercase', () => {
            expect(reversedHandleHyphen('test-space')).toBe('Test space')
        })
        it('Should return element with spaces instead of uppercase', () => {
            expect(reversedHandleHyphen('test-with-spaces')).toBe('Test with spaces')
        })
    })
})