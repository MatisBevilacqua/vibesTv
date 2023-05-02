import { useState, useEffect } from 'react';
import Demo from "./Demo";
import Title from "./Title";
import CardTeam from "./CardTeam";
import PocketBase from 'pocketbase';
import CardEmission from "./CardEmission";
const pb = new PocketBase('http://vibestv.fr/admin');

export default function Equipe() {

    return (
        <section className="flex items-center flex-col">
            <Title title="Notre" active=" Équipe"/>
                <div className="w-screen pl-10 pr-10 flex flex-wrap gap-10 max-md:flex-col max-md:items-center">
                    <CardTeam
                        rappeur="David"
                        second="Marveaux"
                        img="http://vibestv.fr/admin/api/files/yq4pqxqjmi2guft/xd2jai9y4zow3uu/img_20230421_wa0000_0ma6m_nf8q_s_VpxEShnKpZ.jpg?token="
                        statut="Président"
                        info="L’homme de l’ombre"
                    />

                    <CardTeam
                        rappeur="Lord"
                        second="Killer"
                        img="http://vibestv.fr/admin/api/files/yq4pqxqjmi2guft/0bx10sxko1g153j/photo_lord_killer_v_f3nv_xi7bb_m2RNIe4iOv.jpg?token="
                        statut="Le chef d’orchestre"
                        info="Fondateur et Directeur Général De la compilation Hip Hop Vibes à Vibes TV "
                    />

                    <CardTeam
                        rappeur="Queen"
                        second="Stelyna"
                        img="http://vibestv.fr/admin/api/files/yq4pqxqjmi2guft/a0liwnvdv6twuju/photos_sandra_amcu_r4a0vq_IK87tKqqwZ.jpg?token="
                        statut="Ambassadrice de la chaine"
                        info="Présentatrice et Journaliste"
                    />

                    <CardTeam
                        rappeur="Mr"
                        second="French"
                        img="http://vibestv.fr/admin/api/files/yq4pqxqjmi2guft/mhkvwats9xue72j/photo_french_z_vmkl_znew_q_mYwndTvV6D.png?token="
                        statut="Responsable des Relations Artistiques"
                        info="La touche musicale"
                    />

                    <CardTeam
                        rappeur="Mr"
                        second="Killy"
                        img="http://vibestv.fr/admin/api/files/yq4pqxqjmi2guft/zx8ng45rmfg8t6v/photo_killy_gc2_id_nqub9_7zxqRLUoO2.jpg?token="
                        statut="Chef de la régie"
                        info="Le contrôleur de la chaine"
                    />

                    <CardTeam
                        rappeur="Mme"
                        second="Sandra"
                        img="http://vibestv.fr/admin/api/files/yq4pqxqjmi2guft/cat5j7ebbqofz4w/queen_stelyna_cc8_rq0_ke_yq_IaWwmH6YmI.jpg?token="
                        statut="Gestionnaire administrative"
                        info="La force tranquille"
                    />
                </div>
        </section>
);
}