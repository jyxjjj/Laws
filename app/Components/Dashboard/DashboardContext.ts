import { createContext, Dispatch, SetStateAction } from 'react';

import MenuItem from './MenuItem';

const DashboardContext = createContext<{
    matches: boolean;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title: string;
    menuItems: MenuItem[];
}>({
    matches: false,
    open: false,
    setOpen: () => { },
    title: '',
    menuItems: [],
});

export default DashboardContext;
