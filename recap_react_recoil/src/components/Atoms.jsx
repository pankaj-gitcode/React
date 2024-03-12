import {atom, atomFamily} from 'recoil'
import { TodoList } from './TodoList'

export const todoAtom = atomFamily({
    key: 'todoAtom',
    default:(id)=>TodoList.find(e=>e.id==id)
})

