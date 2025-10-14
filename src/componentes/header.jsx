import React, { useState } from 'react';
import { navbarLinks } from "./data/data.js";
import { FaGamepad, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../hooks/hookNavbar.js';
import { motion, AnimatePresence } from 'framer-motion'; 
import MenuMovil from './MenuMovil.jsx'; 

export default function NavBar() {
    const isScrolled = useScrollPosition(50);
    const [menuAbierto, setIsMenuOpen] = useState(false);

    const claseNav = `w-full transition-all duration-300 ease-in-out bg-black/95 drop-shadow-[0_4px_6px_cyan] 
    ${isScrolled ? 'max-w-4xl mx-auto py-2 rounded-xl' : 'max-w-5xl mx-auto py-8 rounded-2xl' }`;

    const claseLogo = `text-2xl flex items-center font-bold uppercase transition-all duration-300 ${isScrolled ? 'text-xl gap-3' : 'text-2xl gap-4'} `;

    const tamañoLogo = isScrolled ? 24 : 40; 
    
    const handleLinkClick = () => {
        if (menuAbierto) {
            setIsMenuOpen(false); 
        }
    };

    return (
        <div className="fixed top-0 inset-x-0 z-50 px-4">

            <nav className={claseNav}>

                <div className="flex justify-between items-center px-6"> 
    
                    <div className={claseLogo}>
                        <FaGamepad className="text-purple-500 animate-bounce mr-2" size={tamañoLogo} /> 
                        <p className="text-white">Matias</p>
                        <p className="text-purple-500 drop-shadow-[0_4px_6px_purple]">Diaz</p>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!menuAbierto)} className="text-white focus:outline-none" aria-label="Toggle menu">
                            {menuAbierto ? <FaTimes size={30} className="text-cyan-400" /> : <FaBars size={30} className="text-cyan-400" />}
                        </button>
                    </div>

                    <ul className={`hidden md:flex items-center gap-4 text-white text-xl font-orbitron drop-shadow-lg`}>
                        {navbarLinks.map((item) => (
                            <li key={item.id}>
                                <Link to={item.link} onClick={handleLinkClick}
                                    className="inline-block py-1 px-2 font-semibold drop-shadow-[0_2px_4px_cyan] hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <AnimatePresence>
                        {menuAbierto && (<MenuMovil navbarLinks={navbarLinks} handleLinkClick={handleLinkClick}/>)}
                    </AnimatePresence>
                </div> 
            </nav>
        </div>
    );
}
