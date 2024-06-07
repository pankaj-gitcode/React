// 1. https://sum-server.100xdevs.com/todo?id=1
// 2. https://sum-server.100xdevs.com/notifications

import axios from "axios";
import { atom, atomFamily, selectorFamily } from "recoil";

//fetch the properties from backend sever
export const todoAtom = atomFamily({
    key: 'todoAtom',
    default: selectorFamily({
        key: 'todoSelector',
        get:(id)=> async ()=>{
            const response = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return response.data.todo;
        }
    })
})

export const countAtom = atom({
    key: 'countAtom',
    default: 1
})