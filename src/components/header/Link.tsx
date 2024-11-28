import { MenuLinkType } from '../../types';
import { useState } from 'react';

type LinksProps = {
    link: MenuLinkType;
    onClickMenuWrapHandle: () => void;
};

export default function Link({link, onClickMenuWrapHandle}: LinksProps): JSX.Element {

    const onClickLinkHandle = (evt: any, id?: string) => {
        evt.preventDefault();
        if (id) {
            const anchor = document.querySelector(`#${id}`);
            if(window.innerWidth > 768) {
                anchor?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            } else {
                anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            onClickMenuWrapHandle();
        }
    }

    return (
        <li className="header__item">
            <a
                href="#"
                id="await"
                className="header__link"
                onClick={(evt) => onClickLinkHandle(evt, link.ancorScreen)}
            >{link.text}</a>
        </li>
    );
}
