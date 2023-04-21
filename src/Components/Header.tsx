import { useState } from 'react';
import '../App.css';
import logo from '../../public/logo.png';

type HeaderProps = {
    setActiveComponent: (component: string) => void;
};

export default function Header({ setActiveComponent }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-screen h-[10vh] bg-[#000] fixed top-0 flex items-center p-10 z-2">
            <nav className="flex justify-between w-screen">
                <img className="w-20" src={logo}></img>
                <div
                    className={`max-md:flex absolute flex right-0 w-10 h-10 mr-10 gap-1 flex-col justify-center flex items-center ${
                        window.innerWidth >= 768 ? 'hidden' : ''
                    }`}
                    onClick={() => setIsMenuOpen(true)}
                >
                    <div className="w-full h-1 bg-[#E70505]"></div>
                    <div className="w-full h-1 bg-[#E70505]"></div>
                    <div className="w-full h-1 bg-[#E70505]"></div>
                </div>

                <ul className="flex gap-5 max-md:hidden">
                    <li
                        className="text-white text-[18px] transition duration-200 ease-in-out cursor-pointer"
                        onClick={() => {
                            setActiveComponent('Direct');
                        }}
                    >
                        Direct
                    </li>

                    <li
                        className="text-white text-[18px] transition duration-200 ease-in-out cursor-pointer"
                        onClick={() => {
                            setActiveComponent('Emission');
                        }}
                    >
                        Émissions
                    </li>

                    <li
                        className="text-white text-[18px] transition duration-200 ease-in-out cursor-pointer"
                        onClick={() => {
                            setActiveComponent('Equipe');
                        }}
                    >
                        L'équipes
                    </li>

                    <li
                        className="text-white text-[18px] transition duration-200 ease-in-out cursor-pointer"
                        onClick={() => {
                            setActiveComponent('Clip');
                        }}
                    >
                        Envoyer mon clip
                    </li>
                </ul>

                {isMenuOpen && (
                    <div
                        className="fixed top-0 right-0 w-[50%] h-screen bg-black z-10 p-10"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <ul className="flex flex-col gap-5">
                            <li
                                className="text-white text-[18px] cursor-pointer"
                                onClick={() => {
                                    setActiveComponent('Direct');
                                    setIsMenuOpen(false);
                                }}
                            >
                                Direct
                            </li>

                            <li
                                className="text-white text-[18px] cursor-pointer"
                                onClick={() => {
                                    setActiveComponent('Emission');
                                    setIsMenuOpen(false);
                                }}
                            >
                                Émissions
                            </li>

                            <li
                                className="text-white text-[18px] cursor-pointer"
                                onClick={() => {
                                    setActiveComponent('Equipe');
                                    setIsMenuOpen(false);
                                }}
                            >
                                L'équipes
                            </li>

                            <li
                                className="text-white text-[18px] cursor-pointer"
                                onClick={() => {
                                    setActiveComponent('Clip');
                                    setIsMenuOpen(false);
                                }}
                            >
                                Envoyer mon clip
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}