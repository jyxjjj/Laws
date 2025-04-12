import { Link as OriginalLink, LinkProps as OriginalLinkProps } from '@mui/material';

export default function IDLink(
    {
        ...props
    }: OriginalLinkProps
) {
    const {
        color = 'inherit',
        underline = 'hover',
        children,
        ...rest
    } = props;

    return (
        <OriginalLink
            color={color}
            underline={underline}
            sx={{
                cursor: 'pointer',
            }}
            {...rest}
        >
            {children}
        </OriginalLink>
    );
}
