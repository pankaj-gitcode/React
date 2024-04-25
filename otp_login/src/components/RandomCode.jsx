import React from 'react'
import '../App.css'
import { useRecoilValue } from 'recoil'
import { OTPSelector } from './Atom'


export default function RandomCode(){

    const OTP = useRecoilValue(OTPSelector);

    return(
        <div>
            <p>Your OTP is: {OTP}</p>
        </div>
    )
}