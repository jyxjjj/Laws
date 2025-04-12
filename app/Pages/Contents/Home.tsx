
import { Divider, IconButton, Paper, Typography } from '@mui/material';

import TelegramIcon from '@mui/icons-material/Telegram';

import Laws from '../Laws';

import Callout from '../../Components/Callout';
import Link from '../../Components/Link';

export default function Content() {
    const copyYear = new Date().getFullYear();
    return (
        <Laws>
            <Typography variant="h2">个人收藏法律法规存档数据库</Typography>
            <Callout type='success'>
                <Typography variant="body1">最后更新时间: {LAST_UPDATE}</Typography>
            </Callout>
            <Callout type='error'>
                <Typography variant="body2">未处理完成的法律法规，菜单栏将模糊处理</Typography>
                <Typography variant="body2">未学习完成的法律法规，或本人暂时无需学习的法律法规，不予存档</Typography>
            </Callout>
            <Divider />
            <Callout>
                This is a collection of legal documents from the People's Republic of China.
            </Callout>
            <Callout type='warning'>
                <Typography>This website is non-profit and intended solely for personal study and reference,</Typography>
                <Typography>in compliance with applicable laws and regulations.</Typography>
            </Callout>
            <Callout type='error'>
                <Typography>Please note that the content may be subject to updates and changes.</Typography>
                <Typography>Due to limitations in manual processing and technical resources,</Typography>
                <Typography>the accuracy or timeliness of the laws provided here cannot be fully guaranteed.</Typography>
            </Callout>
            <Callout type='success'>
                <Typography>For the most accurate and up-to-date legal information,</Typography>
                <Typography>
                    please refer to the&nbsp;<Link href='https://flk.npc.gov.cn/' newTab underline='always'>National Laws and Regulations Database of PRC</Link>.
                </Typography>
            </Callout>
            <Divider />
            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    m: 1,
                }}
            >
                <Typography>
                    Request an update:
                    <IconButton
                        size='small'
                        href='https://t.me/jyxjjj'
                    >
                        <TelegramIcon />
                    </IconButton>
                </Typography>
            </Paper>
            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    m: 1,
                    textAlign: 'center',
                }}
            >
                <Typography
                    sx={{
                        display: 'inline-flex',
                    }}
                >
                    <Link href='https://www.desmg.com/#/policies/privacy' rel='privacy-policy' newTab={false}>Privacy</Link>
                    &nbsp;|&nbsp;
                    <Link href='https://www.desmg.com/#/policies/terms' rel='terms-of-service' newTab={false}>Terms</Link>
                </Typography>
                <Typography>Copyright &copy; {copyYear}</Typography>
                <Typography>
                    <Link href='https://www.desmg.com/#/' newTab={false} fontWeight={800} >DESMG</Link>&nbsp;All rights reserved.
                </Typography>
                <Typography><Link href={MIIT_URL}>{MIIT_RID}</Link></Typography>
                <Typography><Link href={CPS_URL}>{CPS_RID_STR}</Link></Typography>
            </Paper>
        </Laws>
    );
}
