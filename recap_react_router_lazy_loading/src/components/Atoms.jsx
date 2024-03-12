import {atom, selector} from 'recoil'

export const num1Atom = atom({
    key: 'num1Atom',
    default: 0
})

export const num2Atom = atom(
    {
        key:'num2Atom',
        default: 0
    }
)

export const sumSelector = selector({
    key: 'sumSelector',
    get: ({get})=>{
        const num1 = parseInt(get(num1Atom));
        const num2 = parseInt(get(num2Atom));
        return num1+num2;
    }
})

export const subSelector = selector({
    key: 'subSelector',
    get: ({get})=>{
        const num1 = get(num1Atom);
        const num2 = get(num2Atom);
        return num2 - num1;
    }
})

export const mulSelector = selector({
    key: 'mulSelector',
    get: ({get})=>{
        const num1 = get(num1Atom);
        const num2 = get(num2Atom);
        return num1 * num2;
    }
})

export const divSelector = selector({
    key: 'divSelector',
    get: ({get})=>{
        const num1 = get(num1Atom);
        const num2 = get(num2Atom);
        return num1 / num2;
    }
})