import axios from 'axios'
import {atom, atomFamily, selectorFamily} from 'recoil'
// import { PassThrough } from 'stream';

export const gitInfoAtom = atomFamily({
    key: 'gitInfoAtom',
    default: selectorFamily({
        key: 'gitInfoSelector',
        get:(id)=>async({get})=>{
            try{
                // if(id == ""){return id ='pankaj-gitcode'}
                const res = await axios.get(`https://api.github.com/users/${id}`);
                return res.data;
            }
            catch(err){console.log(`ERROR is: ${err}`);}
        }
    })
})

export const inputAtom = atom({
    key: 'inputAtom',
    default: "raj"
})