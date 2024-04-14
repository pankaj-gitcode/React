import {atom, atomFamily, selectorFamily} from 'recoil'
import axios from 'axios'


export const inputSearchAtom = atom({
    key: 'inputSearchAtom',
    default: ""
})


export const gitAPIAtom = atomFamily({
    key: 'atomFamily',
    default: selectorFamily({
        key: 'gitAPISelector',
        get: async({get})=>{
            const id = get(inputSearchAtom);
            const response = await axios.get(`https://api.github.com/users/${id}`);
            return response.data;
        }
    })
})



export const debounceAtom = atomFamily({
    key: 'debounceAtom',
    default:(fn,delay)=>{
        let timeoutID;
        return function(...args){
            clearTimeout(timeoutID);
            timeoutID = setTimeout(()=>{
                fn.apply(this, args)
            }, delay)
        }
    }
})
