import { useCallback, useEffect, useState } from 'react';

import { Fab, Slide } from '@mui/material';

import UpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function BackToTop() {

    const [showBackToTop, setShowBackToTop] = useState(false);

    const backToTop = useCallback(() => {
        (document.querySelector('article') as HTMLElement)?.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if ((document.querySelector('article') as HTMLElement)?.scrollTop > 64) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };
        (document.querySelector('article') as HTMLElement)?.addEventListener('scroll', handleScroll);
        return () => {
            (document.querySelector('article') as HTMLElement)?.removeEventListener('scroll', handleScroll);
        };
    }, [setShowBackToTop]);

    return (
        <Slide
            direction='up'
            in={showBackToTop}
            mountOnEnter
            unmountOnExit
        >
            <Fab
                color='secondary'
                sx={{
                    position: 'fixed',
                    bottom: '1rem',
                    right: '1rem',
                }}
                onClick={backToTop}
            >
                <UpIcon />
            </Fab>
        </Slide>
    );
}
