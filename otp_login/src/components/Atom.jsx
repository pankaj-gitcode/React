import {atom, selector}  from "recoil";

export const inputBoxAtom1 = atom({
    key: 'inputBoxAtom1',
    default: ['inp1','inp2','inp3','inp4','inp5']
})

export const inputBoxAtom = atom({
    key: 'inputBoxAtom',
    default:[
        {id: 'inp1'},
        {id: 'inp2'},
        {id: 'inp3'},
        {id: 'inp4'},
        {id: 'inp5'}
    ]
})

export const maxLengthAtom = atom({
    key: 'maxLengthAtom',
    default: '1'
})

export const inputValAtom =  atom({
    key: 'inputValAtom',
    default: ''
})

export const OTPSelector = selector({
    key: 'randomCodeSelector',
    get:({get})=>{

        const randWords = [];
        const alphaNum = [];

        for(let i=0; i<=90; i++){

            if(i>=65 && i<=90){
                const ltrUCase = String.fromCharCode(i);
                const ltrLCase = String.fromCharCode(i).toLowerCase();

                alphaNum.push(ltrUCase);
                alphaNum.push(ltrLCase);

            }
            else if(i>=0 && i<=10)alphaNum.push(i)
        }
        console.log(`alphaNum: ${alphaNum}`)
        //iterate 5 times to get 5 random digits from alphaNum[]
        for(let i=0; i<=4; i++){
            const alphaNumIndex = Math.floor(Math.random()*alphaNum.length)
            randWords.push(alphaNum[alphaNumIndex])
        }
        const OTP = randWords.join('') //create string
        console.log(`OTP|randWords: ${OTP}`)
        return OTP;
    } 
})