import { useState, useEffect } from 'react';
import Title from "./Title";
import CardEmission from "./CardEmission";
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
import Confirm from "./Confirm";

interface Props {
    name: string,
    email: string,
    link: string,
    message: string,

    success: boolean
}

export default function Clip() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [success, setSuccess ] = useState<boolean>(false);

    const data = {
        "email": email,
        "name": name,
        "message": message,
        "video": link
    };

    if(success){
        return <Confirm/>
    }

    const sendClip = async () => {
        try {
            await pb.collection('contact').create(data);
            setSuccess(true)
        }catch (err){
            console.log(err)
        }
    }

    return (
        <div className="w-screen h-full flex overflow-hidden">
            <div className="w-[50%] h-screen flex flex-col items-center max-md:w-screen">
                <Title title="Envoyer mon" active=" Clip"/>
                <div className="pl-10 max-md:pl-0 flex flex-col w-[45vw] max-md:w-[80vw] gap-5">
                    <input className="h-[50px] pl-2 rounded-sm outline-none" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" />
                    <input className="h-[50px] pl-2 rounded-sm outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adresse e-mail" />
                    <input className="h-[50px] pl-2 rounded-sm outline-none" type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Lien de votre vidéo" />
                    <textarea className="h-[100px] pl-2 pt-2 rounded-sm outline-none" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
                    <button onClick={sendClip} className="h-[50px] text-black bg-white rounded-sm outline-none">Envoyer</button>
                </div>
            </div>

            <div style={{background: "url(https://wallup.net/wp-content/uploads/2019/09/08/813552-hip-hop-dance-dancing-music-rap-rapper-urban-pop-gangsta.jpg)", backgroundSize: 'cover'}} className="w-[50%] h-screen  bg-black max-md:hidden">

            </div>
        </div>
    );
}