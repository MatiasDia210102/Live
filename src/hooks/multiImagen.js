import { useState, useEffect } from 'react';

const BACKGROUNDS = [
    '/Fotos/amegakure.jpg',
    '/Fotos/bienvenida.jpg',
    '/Fotos/among.jpg',
    '/Fotos/roblox.jpg',
];

const INTERVAL_TIME = 3000; 

export const useBackgroundRotator = () => {

    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBgIndex(prevIndex => {
                const newIndex = (prevIndex + 1) % BACKGROUNDS.length;
                const nextNextIndex = (newIndex + 1) % BACKGROUNDS.length;
                const nextImageUrl = BACKGROUNDS[nextNextIndex];
                const img = new Image();
                img.src = nextImageUrl;

                return newIndex;
            });
        }, INTERVAL_TIME);

        return () => clearInterval(timer);
    }, []); 

    return BACKGROUNDS[currentBgIndex];
};