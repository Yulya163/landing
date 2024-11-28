import { useState } from 'react';
import logo from './logo.svg';
import { menuLinks } from '../../data';
import { MenuLinkType } from '../../types';
import Link from './Link';
import './Header.scss';

type HeaderProps = {
    isScroll: boolean;
};

export default function Header({isScroll}: HeaderProps): JSX.Element {
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

    const onClickMenuHandle = () => {
        setIsShowMobileMenu(true);
        document.body.style.overflowY = 'hidden';
    }

    const onClickMenuWrapHandle = () => {
        setIsShowMobileMenu(false);
        document.body.style.overflowY = 'auto';
    }

    return (
        <header
            className={isScroll ? 'header header_shadow' : 'header'}
        >
            <div className="container header__wrap">
                <a href="#" className="header__logo">
                    <img src={logo} className="header__img" alt="logo" />
                </a>
                <div className="header__menu-icon" onClick={onClickMenuHandle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div
                    className={isShowMobileMenu ? "header__menu-wrap header__menu-wrap_show" : "header__menu-wrap"}
                    onClick={onClickMenuWrapHandle}
                />
                <nav className={isShowMobileMenu ? "header__menu header__menu_show" : "header__menu"} >
                    <ul className="header__list">
                    {
                        menuLinks.length !== 0 ?
                        menuLinks.map((link: MenuLinkType) => (
                                <Link
                                    key={link.id}
                                    link={link}
                                    onClickMenuWrapHandle={onClickMenuWrapHandle}
                                />
                                )
                            ) :
                            <div className='error-text'>
                                No menu links
                            </div>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
  }
