import { useCallback, useContext } from 'react';

import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import ChangeThemeButton from '../ChangeThemeButton';
import Link from '../Link';
import DashboardContext from './DashboardContext';

export default function Header() {

    const { open, setOpen, title } = useContext(DashboardContext);

    const handleToggleMenu = useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);

    return (
        <AppBar
            position='sticky'
            component='header'
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    onClick={handleToggleMenu}
                    sx={{ marginRight: 1 }}
                >
                    <MenuIcon />
                </IconButton>
                <Link href='#/' newTab={false} underline='none' noWrap>
                    {title}
                </Link>
                <Box sx={{ flexGrow: 1 }}></Box>
                <ChangeThemeButton edge='end' />
            </Toolbar>
        </AppBar>
    );
}
