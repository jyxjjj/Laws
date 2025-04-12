import { StrictMode } from 'react';

import { CssBaseline } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';

import './global.css';

import Router from './router';

export default function App() {

    console.log(theme);

    return (
        <StrictMode>
            <ThemeProvider
                theme={theme}
                defaultMode='dark'
                modeStorageKey='theme'
                colorSchemeStorageKey='colorScheme'
                noSsr
            >
                <CssBaseline enableColorScheme />
                <Router />
            </ThemeProvider>
        </StrictMode>
    );
}
