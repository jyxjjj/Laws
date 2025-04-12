import { useEffect, useState } from 'react';

import { Link as OriginalLink, LinkProps as OriginalLinkProps } from '@mui/material';

export default function Link(
    {
        newTab = true,
        ...props
    }: {
        newTab?: boolean;
        href: string;
    } & OriginalLinkProps
) {

    const {
        href,
        color = 'inherit',
        underline = 'hover',
        children,
        ...rest
    } = props;

    const [target, setTarget] = useState<string | undefined>();
    const [rel, setRel] = useState<string | undefined>();

    useEffect(() => {
        const isDESMG = (
            href => {
                try {
                    return new URL(href).hostname.endsWith('.desmg.com');
                } catch {
                    return href.startsWith('/') || href.startsWith('#');
                }
            }
        )(href);
        if (rest.target) {
            setTarget(rest.target);
        } else if (newTab) {
            setTarget('_blank');
        } else {
            setTarget(undefined);
        }
        if (rest.rel) {
            setRel(rest.rel);
        } else if (isDESMG) {
            setRel(undefined);
        } else {
            setRel('external noopener noreferrer nofollow');
        }
    }, [newTab, href, rest.rel, rest.target]);

    return (
        <OriginalLink
            href={href}
            target={target}
            rel={rel}
            color={color}
            underline={underline}
            {...rest}
        >
            {children}
        </OriginalLink>
    );
}
