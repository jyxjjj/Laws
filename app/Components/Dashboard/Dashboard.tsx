import { useEffect, useState } from 'react';

import { useMediaQuery, useTheme } from '@mui/material';

import { Box, Stack } from '@mui/material';

import BackToTop from './BackToTop';
import DashboardContext from './DashboardContext';
import HeaderBar from './HeaderBar';
import MenuBar from './MenuBar';
import MenuItem from './MenuItem';

export default function Dashboard({ children, title, menuItems }: { children: React.ReactNode, title: string, menuItems: MenuItem[] }) {

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const [open, setOpen] = useState(matches);

    useEffect(() => {
        setOpen(matches);
    }, [matches]);

    return (
        <DashboardContext.Provider value={{ matches, open, setOpen, title, menuItems }}>
            <Stack>
                <HeaderBar />
                <MenuBar />
                <Box
                    component='main'
                    onClick={() => { if (!matches) setOpen(false); }}
                    sx={{
                        [theme.breakpoints.up('md')]: {
                            transition: `margin-left ${open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen}ms ease-in-out`,
                            marginLeft: `${open ? 20 : 0}rem`,
                        },
                    }}
                >
                    <Stack
                        component='article'
                        sx={{
                            padding: '0 1rem 2rem 1rem',
                            maxHeight: 'calc(100dvh - 4rem)',
                            overflowY: 'auto',
                        }}
                    >
                        {children}
                    </Stack>
                    <BackToTop />
                </Box>
            </Stack>
        </DashboardContext.Provider>
    );
}
