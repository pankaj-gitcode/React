import axios from 'axios';
import {atom, atomFamily, selectorFamily} from 'recoil'

export const infoAtom = atomFamily({
    key: 'infoAtom',
    default: selectorFamily({
        key: 'infoSelector',
        get: (userId)=>async({get})=>{
            try{
                if(userId === null){return userId='pankaj-gitcode'}
                const response = await axios.get(`https://api.github.com/users/${userId}`);
                return response.data;
            }
            catch(err){console.log(`ERROR IS: ${err}`)}
        }
    })
})

export const inputAtom = atom({
    key:'inputAtom',
    default: null
})