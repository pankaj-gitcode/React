import axios from 'axios';
import {atom, atomFamily, selectorFamily} from 'recoil'

export const infoAtom = atomFamily({
    key: 'infoAtom',
    default: selectorFamily({
        key: 'infoSelector',
        get: ()=>async({get})=>{
            const response = await axios.get(`https://api.github.com/users/${abc}`);
            return response.data;
        }
    })
})