import { ReactNode } from 'react';

type MenuItem = {
    text: string | null,
    icon: ReactNode | null,
    path: string | null,
    link: string | null,
    element: ReactNode | null,
};

export default MenuItem;
