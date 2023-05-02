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

    const [stockNews, setStockNews] = useState<Emissions[]>([]);
    const [selectMovie, setSelectMovie] = useState(false);
    const [linkMovie, setLinkMovie] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const data = await pb.collection('emissions').getFullList({
                sort: '-created',
            });

            console.log(data)
            for(const d of data){
                setStockNews(emissions => [...emissions, {
                    rappeur: d.rappeur,
                    description: d.description,
                    image: `http://vibestv.fr/admin/api/files/${d.collectionId}/${d.id}/${d.image}`,
                    emission: `http://vibestv.fr/admin/api/files/${d.collectionId}/${d.id}/${d.emission}`
                }]);
            }
        };

        fetchData().catch(console.error);
    }, []);

    if(selectMovie){
        return <Demo video={linkMovie}/>
    }


    return (
        <section className="flex items-center flex-col">
            <Title title="Nos" active=" Émissions"/>
            <div className="w-screen pl-10 pr-10 flex flex-wrap gap-10 max-md:flex-col max-md:items-center">

                {stockNews.map(o => (
                    <article onClick={() => {
                        setSelectMovie(true);
                        console.log()
                        setLinkMovie(o.emission);
                    }
                    } className="basis-[22%] min-w-[350px] h-[45vh]">
                        <CardEmission rappeur={o.rappeur} img={o.image}/>
                    </article>
                ))}
            </div>
        </section>
    );
}