import { MouseEventHandler } from 'react';

export default function routeTo(id: string): MouseEventHandler<HTMLAnchorElement> | undefined {
    return () => {
        const element = document.getElementById(id);
        const article = document.querySelector('article');
        const toolbar = document.querySelector('header > .MuiToolbar-root');
        if (element && article && toolbar) {
            const elementTop = element.getBoundingClientRect().top + article.scrollTop;
            article.scrollTo({ top: elementTop - toolbar.clientHeight, behavior: 'smooth' });
        }
    };
};
