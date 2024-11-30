import { MenuLinkType } from '../../types';
import { useState } from 'react';

type LinksProps = {
    link: MenuLinkType;
    onClickMenuWrapHandle: () => void;
};

export default function Link({link, onClickMenuWrapHandle}: LinksProps): JSX.Element {

    const onClickLinkHandle = () => {
        onClickMenuWrapHandle();
    }

    return (
        <li className="header__item">
            <a
                href={`#${link.ancorScreen}`}
                id={`${link.id}`}
                className="header__link"
                onClick={onClickLinkHandle}
            >{link.text}</a>
        </li>
    );
}
