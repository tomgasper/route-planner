import { useState, useEffect } from 'react';
import { WindowDimensions } from '../types/ui';

function getWindowDimensions() : WindowDimensions {
    const { innerWidth: width, innerHeight: height } = window;
    return {width, height};
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize',handleResize);
    }, []);

    return windowDimensions;
}