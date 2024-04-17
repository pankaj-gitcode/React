import {atom, atomFamily, selectorFamily} from 'recoil'
import axios from 'axios'


export const inputSearchAtom = atom({
    key: 'inputSearchAtom',
    default: "raj"
})


export const gitAPIAtom = atomFamily({
    key: 'gitAPIAtom',
    default: selectorFamily({
        key: 'gitAPISelector',
        get:(id)=>({get})=>{
            var apiValue;
            const apiVal = setTimeout(async(apiValue)=>{

                const response = await axios.get(`https://api.github.com/users/${id}`)
                apiValue = response.data;
                console.log('APIVALUE:', apiValue)
                return apiValue;
            },1000)
            console.log('apiVal::' , typeof apiVal, apiValue)
            return apiValue;
        }
    })
})



export const debounce = (fn)=>{
    let timeoutID;
    return function(){
        clearTimeout(timeoutID);

        timeoutID = setTimeout(()=>{
            fn
        }, 800);
    }
}
