import { useState } from 'react'
import '../App.css';

interface Props {
    title: string,
    active: string
}

export default function Title({title, active}: Props) {

    return (
        <>
            <h1 className="pl-10 pt-10 pb-10  text-white text-[3rem] font-bold max-md:p-0 max-md:pb-10 pt-10">{title}<span className="text-[#E70505]">{active}</span></h1>
        </>
    )
}

