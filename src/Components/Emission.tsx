import { useState, useEffect } from 'react';
import Demo from "./Demo";
import Title from "./Title";
import CardEmission from "./CardEmission";
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://vibestv.fr/admin');

interface Emissions {
    rappeur: string,
    description: string,
    image: string,
    emission: string
}
export default function Emission() {

    const [sockNews, setSockNews] = useState<Emissions[]>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await pb.collection('emissions').getFullList<Emissions>({
                sort: '-created',
            });

            setSockNews(data)
            console.log(data)
            console.log(sockNews)
        };

        fetchData().catch(console.error);
    }, []);


    return (
        <section className="flex items-center flex-col">
            <Title title="Nos" active=" Émissions"/>
            <div className="w-screen pl-10 pr-10 flex flex-wrap gap-10 max-md:flex-col max-md:items-center">
                <article className="basis-[22%] h-[45vh]">
                    <CardEmission rappeur="Matis" img="http://127.0.0.1:8090/api/files/s0smk8gzypwtj42/ohy66dtu45k09n4/rory_03_2_1024x651_8x23MfW1Gg.jpg"/>
                </article>

                <article className="basis-[22%] h-[45vh]">
                    <CardEmission rappeur="Matis" img="http://127.0.0.1:8090/api/files/s0smk8gzypwtj42/ohy66dtu45k09n4/rory_03_2_1024x651_8x23MfW1Gg.jpg"/>
                </article>
            </div>
        </section>
    );
}