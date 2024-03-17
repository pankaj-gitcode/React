
import { atom, atomFamily } from 'recoil'

const randValue = Math.floor(Math.random()*100);
const randValueTillThousand = Math.floor(Math.random()*100000);

export const countAtom = atom({
    key: 'countAtom',
    default: {
        followers: randValue,
        likes: randValue,
        photos: randValueTillThousand
    }
})

// export default function countAtom1 (){
//     return countAtom;
// }

// export default countAtom;