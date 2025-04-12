<?php
$ff = <<<EOF
import { Divider, Typography } from '@mui/material';

import Laws from '../Laws';

import Callout from '../../Components/Callout';
import IDLink from '../../Components/IDLink';

import routeTo from '../routeTo';

export default function Content() {
    return (
        <Laws>
            <Typography variant='h2'></Typography>
            <Callout type='info'>
                <Typography variant='body2'></Typography>
            </Callout>
            <Callout type='info'>
                <Typography variant='body2'></Typography>
            </Callout>
            <Divider />
            <Typography variant='h3'>目录</Typography>
            <Callout>
            </Callout>
            <Divider />
            <Typography variant='h3'>正文</Typography>
            <Callout>
            </Callout>
        </Laws>
    );
}
EOF;

exec("echo \"$ff\" | pbcopy");
