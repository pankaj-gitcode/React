import {atom, atomFamily, selectorFamily} from 'recoil'
import axios from 'axios'

export const wordAtom = atom({
    key: 'wordAtom',
    default: ''
})

export const wordNumAtom = atom({
    key: 'wordCountAtom',
    default:0
})

export const wordListAtom = atomFamily({
    key: 'wordListAtom',
    default: selectorFamily({
        key: 'wordListSelector',
        get:(id)=>async ({get})=>{
            if(id<=0){return id=1}
            const response = await axios.get(`https://random-word-api.herokuapp.com/word?number=${id}`);
            console.log(`ATOM: ${id}, ${response.data}`)
            return response.data;
        }
    })
})
