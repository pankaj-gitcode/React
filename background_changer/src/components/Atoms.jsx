import {atom, atomFamily, selector} from 'recoil'

export const colorsAtom = atom({
    key: 'colorsAtom',
    default: 0
})


// ['red', 'yellow', 'black', 'purple', 'green', 'blue', 'default']