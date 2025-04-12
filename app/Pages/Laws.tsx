import { Typography } from '@mui/material';

import Callout from '../Components/Callout';
import Dashboard from '../Components/Dashboard/Dashboard';

import menuItems from './menuItems';

export default function Laws(
    {
        children
    }: {
        children?: React.ReactNode
    }
) {
    return (
        <Dashboard title='法律法规存档' menuItems={menuItems}>
            {
                children || (
                    <>
                        <Typography variant='h2'>404</Typography>
                        <Callout type='error'>
                            <Typography>此存档尚未处理，请稍后再查看</Typography>
                        </Callout>
                    </>
                )
            }
        </Dashboard>
    );
}
