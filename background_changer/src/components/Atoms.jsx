import {atom, atomFamily, selector} from 'recoil'

export const colorsAtom = atom({
    key: 'colorsAtom',
    default: ['red', 'yellow', 'black', 'purple', 'green', 'blue', 'default']
})


// ['red', 'yellow', 'black', 'purple', 'green', 'blue', 'default']