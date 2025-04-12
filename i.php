<?php
$construct = <<<EOF
import { Divider, Typography } from '@mui/material';

import Laws from '../Laws';

import Callout from '../../Components/Callout';
import IDLink from '../../Components/IDLink';

import routeTo from '../routeTo';
EOF;

exec("echo \"$construct\" | pbcopy");
