import {atom} from 'recoil'

export const userInputAtom = atom({
    key: 'userInputAtom',
    default: ''
})

export const APIDataAtom = atom({

    key: 'APIDataAtom',
    default: {}
}
)