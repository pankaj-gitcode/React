import {atom} from 'recoil'

export const maxLengthAtom = atom({
    key: 'maxLengthAtom',
    default: '1'
})

export const inputValAtom = atom({
    key: 'inputValAtom',
    default: ''
})

export const inputIDAtom = atom({
    key: 'inputIDAtom',
    default : [
        {id:'inp1', func:()=>document.getElementById(this.id).value},
        {id:'inp2', func:()=>document.getElementById(this.id).value},
        {id:'inp3', func:()=>document.getElementById(this.id).value},
        {id:'inp4', func:()=>document.getElementById(this.id).value},
        {id:'inp5', func:()=>document.getElementById(this.id).value}
    ]
})