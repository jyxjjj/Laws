<?php
$construct = <<<EOF
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
EOF;

exec("echo \"$construct\" | pbcopy");
