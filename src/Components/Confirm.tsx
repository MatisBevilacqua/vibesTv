import { useState } from 'react';
import Demo from "./Demo";
import Title from "./Title";


export default function Confirm () {

    return (
        <div className="w-screen h-[90vh] bg-black flex items-center justify-center">
            <h1 className="text-white font-bold text-xl">Votre message à bien été envoyer !</h1>
        </div>
    );
}