import { useState } from 'react';
import Demo from "./Demo";
import Title from "./Title";

interface Props {
    rappeur: string,
    info?: string,
    img: string
}
export default function CardEmission({rappeur, img, info} : Props) {

    return (
        <div className="hover:scale-110 transition duration-200 ease-in-out">
            <img className=" rounded-md w-[100%] h-[90%]" src={img}></img>
            <p className="text-center pt-2 text-white text-[1.2rem]">{rappeur}</p>
            <p className="text-center pt-2 text-white text-[1.2rem]">{info}</p>
        </div>
    );
}