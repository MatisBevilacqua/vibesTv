import { useState } from 'react';
import '../App.css';

interface Props {
    video: string
}
export default function Demo({video} : Props) {

    return (
        <div className="">
            <video className="h-auto w-auto md:h-screen md:w-screen" controls autoPlay>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}


