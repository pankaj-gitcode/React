import {atom} from 'recoil'

export const colorAtom = atom({
    key: 'colorAtom',
    default: ['red', 'yellow', 'black', 'purple', 'green', 'blue', 'turquoise']
})
