import { IconButton, IconButtonProps, useColorScheme } from '@mui/material';

import ContrastIcon from '@mui/icons-material/Contrast';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ChangeThemeButton(
    {
        ...props
    }: {
    } & IconButtonProps
) {

    const { mode, setMode } = useColorScheme();

    const changeTheme = () => {
        switch (mode) {
            case 'dark':
                setMode('light');
                break;
            case 'light':
                setMode('system');
                break;
            case 'system':
                setMode('dark');
                break;
        }
    };

    return (
        <IconButton
            size='large'
            {...props}
            onClick={changeTheme}
        >
            {mode === 'light' && <LightModeIcon />}
            {mode === 'dark' && <DarkModeIcon />}
            {mode === 'system' && <ContrastIcon />}
        </IconButton>
    );
}
