import {atom, atomFamily, selectorFamily} from 'recoil'
import axios from 'axios'

export const wordAtom = atom({
    key: 'wordAtom',
    default: ''
})

export const wordNumAtom = atom({
    key: 'wordCountAtom',
    default:1
})

export const wordListAtom = atomFamily({
    key: 'wordListAtom',
    default: selectorFamily({
        key: 'wordListSelector',
        get:(id)=>async ({get})=>{
            try{
                if(id<=0){id=1}

                const response = await axios.get(`https://random-word-api.herokuapp.com/word?number=${id}`);
                console.log(`ATOM: ${id}, ${response.data}`)
                return response.data;
            }
            catch(err){
                console.log(`ERROR IS: ${err}`)
            }
        }
    })
})