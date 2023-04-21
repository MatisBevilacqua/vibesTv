import { useState } from 'react';
import './App.css';
import Demo from "./Components/Demo";
import Header from "./Components/Header";
import Direct from "./Components/Direct";
import Emission from "./Components/Emission";
import Equipe from "./Components/Equipe";
import Clip from "./Components/Clip";

export default function App() {
    const [activeComponent, setActiveComponent] = useState('Demo');

    const handleActiveComponentChange = (component: string): void => {
        setActiveComponent(component);
    }

    const renderComponent = () => {
        switch(activeComponent) {
            case 'Demo':
                return <Demo video="../../public/demo.mp4"/>
            case 'Direct':
                return <Direct />
            case 'Emission':
                return <Emission/>
            case 'Equipe':
                return <Equipe/>
            case 'Clip':
                return <Clip/>
            default:
                return null;
        }
    }

    return (
        <div className="">
            <Header setActiveComponent={handleActiveComponentChange} />
            {renderComponent()}
        </div>
    );
}