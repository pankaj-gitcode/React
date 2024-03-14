import {atom, atomFamily} from 'recoil'
import {TodoList} from './TodoList'

export const todoAtom = atomFamily({
    key: 'todoAtom',
    default: (id)=>TodoList.find(elem=>elem.id==id)
})

export const countAtom = atom({
    key: 'countAtom',
    default: 1
})