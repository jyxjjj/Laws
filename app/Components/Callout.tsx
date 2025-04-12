import { useTheme } from '@mui/material';

import { Paper, PaperProps } from '@mui/material';

export default function Callout(
    {
        type = 'default',
        sx,
        children,
        ...props
    }: {
        type?: 'info' | 'success' | 'warning' | 'error' | 'default',
    } & PaperProps
) {

    const theme = useTheme();

    const color = type === 'default'
        ? theme.palette.grey[500]
        : theme.palette[type].main;

    return (
        <Paper
            elevation={3}
            {...props}
            sx={{
                p: 2,
                m: 1,
                borderLeft: 4,
                borderColor: color,
                ...sx,
            }}>
            {children}
        </Paper>
    );
}
