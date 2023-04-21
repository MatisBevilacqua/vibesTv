import { useState } from 'react';
import Demo from "./Demo";
import Title from "./Title";

export default function Direct() {

    return (
        <section className="flex items-center flex-col">
            <Title title="Le" active=" Direct"/>
            <Demo video="../../../public/demo.mp4"/>
        </section>
    );
}