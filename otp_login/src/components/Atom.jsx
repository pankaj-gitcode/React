import {atom} from 'recoil'

export const maxLengthAtom = atom({ //maxlength can be used in other components,just change here
    key: 'maxLengthAtom',
    default: '1'
})

export const inputValAtom = atom({ //hold the inputBox value to use anywhere in components
    key: 'inputValAtom',
    default: ''
})

export const inputIDAtom = atom({ //all ID & function declared here to be used in inputBox.map()
    key: 'inputIDAtom',
    default : [
        {id:'inp1', func:()=>document.getElementById(this.id).value},
        {id:'inp2', func:()=>document.getElementById(this.id).value},
        {id:'inp3', func:()=>document.getElementById(this.id).value},
        {id:'inp4', func:()=>document.getElementById(this.id).value},
        {id:'inp5', func:()=>document.getElementById(this.id).value}
    ]
})