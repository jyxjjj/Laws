import { useCallback, useContext, useMemo } from 'react';

import { useLocation } from 'react-router-dom';

import { colors } from '@mui/material';

import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Tooltip } from '@mui/material';

import DashboardContext from './DashboardContext';

export default function Menu() {

    const { open, setOpen, menuItems } = useContext(DashboardContext);
    const { pathname } = useLocation();

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const filteredState = useMemo(() => {
        return menuItems.reduce<Record<string, string>>((acc, { text }) => {
            if (text) {
                acc[text] =
                    text === '主页'
                        || text === '中华人民共和国宪法'
                        || text === '中华人民共和国立法法'
                        || text === '中华人民共和国民法典'
                        || text === '中华人民共和国民事诉讼法'
                        || text === '中华人民共和国消费者权益保护法'
                        || text === '中华人民共和国消费者权益保护法实施条例'
                        || text === '中华人民共和国食品安全法'
                        || text === '销售服务、无形资产、不动产注释'
                        ? 'inherit' : 'opacity(75%) blur(1px)';
            }
            return acc;
        }, {});
    }, [menuItems]);

    return (
        <Drawer
            component='aside'
            variant='persistent'
            open={open}
            onClose={handleClose}
            sx={{
                flexShrink: 0,
                width: '20rem',
            }}
            slotProps={{
                paper: {
                    component: 'nav',
                    sx: {
                        width: '20rem',
                        scrollbarWidth: 'none',
                    }
                }
            }}
        >
            <Toolbar />
            <List disablePadding>
                {menuItems.map(({ text, icon, link }, index) =>
                    link ?
                        <Tooltip
                            key={index}
                            title={text}
                            placement='top'
                            arrow
                            slotProps={{
                                popper: {
                                    onMouseEnter: (e) => {
                                        (e.target as HTMLElement).style.display = 'none';
                                    },
                                },
                                tooltip: {
                                    sx: {
                                        fontSize: '1rem',
                                        maxWidth: 'unset',
                                    }
                                }
                            }}
                        >
                            <ListItem
                                disablePadding
                                sx={{
                                    padding: '.2rem 0 .25rem 0',
                                }}
                            >
                                <ListItemButton
                                    component='a'
                                    href={link}
                                    selected={`#${pathname}` === link}
                                    sx={[
                                        {
                                            maxWidth: '100%',
                                            height: '2rem',
                                            padding: '0 1rem',
                                        },
                                        (theme) => (
                                            theme.applyStyles('light', {
                                                '&.Mui-selected': {
                                                    backgroundColor: colors.blue[500],
                                                },
                                                '&.Mui-selected:hover': {
                                                    backgroundColor: colors.blue[700],
                                                },
                                                '&:hover': {
                                                    backgroundColor: colors.blue[700],
                                                },
                                            })
                                        ),
                                        (theme) => (
                                            theme.applyStyles('dark', {
                                                '&.Mui-selected': {
                                                    backgroundColor: colors.grey[700],
                                                },
                                                '&.Mui-selected:hover': {
                                                    backgroundColor: colors.grey[500],
                                                },
                                                '&:hover': {
                                                    backgroundColor: colors.grey[500],
                                                },
                                            })
                                        )
                                    ]}
                                >
                                    <ListItemIcon sx={{ minWidth: '2rem', }}>
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        slotProps={{
                                            primary: {
                                                sx: {
                                                    whiteSpace: 'nowrap',
                                                    wordBreak: 'break-word',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    filter: filteredState[text || ''] || 'inherit',
                                                }
                                            }
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Tooltip>
                        : text ? <Divider key={index} sx={{ margin: '.5rem 0', }} >{text}</Divider>
                            : <Divider key={index} sx={{ margin: '.5rem 0', }} />
                )}
            </List>
        </Drawer>
    );
}
