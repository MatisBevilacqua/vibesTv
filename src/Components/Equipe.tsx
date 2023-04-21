import { useState, useEffect } from 'react';
import Demo from "./Demo";
import Title from "./Title";
import CardTeam from "./CardTeam";
import PocketBase from 'pocketbase';
import CardEmission from "./CardEmission";
const pb = new PocketBase('http://127.0.0.1:8090');

export default function Equipe() {

    return (
        <section className="flex items-center flex-col">
            <Title title="Notre" active=" Équipe"/>
                <div className="w-screen pl-10 pr-10 flex flex-wrap gap-10 max-md:flex-col max-md:items-center">
                    <CardTeam
                        rappeur="David"
                        second="Marveaux"
                        img="http://127.0.0.1:8090/api/files/yq4pqxqjmi2guft/2xnsrz7gk06a8dq/img_20230421_wa0000_0ma6mNF8qS.jpg"
                        statut="Président"
                        info="L’homme de l’ombre"
                    />

                    <CardTeam
                        rappeur="Lord"
                        second="Killer"
                        img="http://127.0.0.1:8090/api/files/yq4pqxqjmi2guft/svq0tb8xbgpubhc/photo_lord_killer_vF3nvXI7bb.jpg"
                        statut="Le chef d’orchestre"
                        info="Fondateur et Directeur Général De la compilation Hip Hop Vibes à Vibes TV "
                    />

                    <CardTeam
                        rappeur="Queen"
                        second="Stelyna"
                        img="http://127.0.0.1:8090/api/files/yq4pqxqjmi2guft/m82zv2noynyruao/queen_stelyna_CC8Rq0KeYq.jpg"
                        statut="Ambassadrice de la chaine"
                        info="Présentatrice et Journaliste"
                    />

                    <CardTeam
                        rappeur="Mr"
                        second="French"
                        img="http://127.0.0.1:8090/api/files/yq4pqxqjmi2guft/8j421853t0s8pfq/photo_french_zVMklZNewQ.png"
                        statut="Responsable des Relations Artistiques"
                        info="La touche musicale"
                    />

                    <CardTeam
                        rappeur="Mr"
                        second="Killy"
                        img="http://127.0.0.1:8090/api/files/yq4pqxqjmi2guft/pndmj3kuh1hxmlh/photo_killy_GC2IdNqub9.jpg"
                        statut="Chef de la régie"
                        info="vLe contrôleur de la chaine"
                    />

                    <CardTeam
                        rappeur="Mme"
                        second="Sandra"
                        img="http://127.0.0.1:8090/api/files/yq4pqxqjmi2guft/0ukp7npb2kt2g80/photos_sandra_AMCuR4a0vq.jpg"
                        statut="Gestionnaire administrative"
                        info="La force tranquille"
                    />
                </div>
        </section>
);
}