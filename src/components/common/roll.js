import React, { useRef, useEffect, useState } from 'react';

const ScrollableDiv = ({ children, styles }) => {
    const divRef = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // lg breakpoint in Tailwind CSS

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = (e) => {
            const delta = Math.sign(e.deltaY);
            divRef.current.scrollTop += delta * 30;
        };

        const currentDiv = divRef.current;
        if (isLargeScreen) {
            currentDiv.addEventListener('wheel', handleScroll);
        } else {
            currentDiv.removeEventListener('wheel', handleScroll);
        }

        return () => {
            currentDiv.removeEventListener('wheel', handleScroll);
        };
    }, [isLargeScreen]);

    return (
        <div ref={divRef} className={styles}>
            {children}
        </div>
    );
};

export default ScrollableDiv;
