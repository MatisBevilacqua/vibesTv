import { useState } from 'react';
import Demo from "./Demo";
import Title from "./Title";

interface Props {
    rappeur: string,
    second: string,
    info?: string,
    img: string,

    statut: string
}
export default function CardTeam({rappeur, img, info, second, statut} : Props) {

    return (
        <article className="max-w-sm basis-[22%] rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-[70%]" src={img} alt="Personne"></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-black text-xl mb-2">{rappeur} <span className="text-[#E70505]">{second}</span></div>

                        <p className="text-black-700 text-base">
                            {statut}
                        </p>

                        <p className="text-black-700 text-base">
                            {info}
                        </p>
                </div>
        </article>
    );
}