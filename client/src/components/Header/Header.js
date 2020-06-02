import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    const headerClasses = [styles.header];
    const headlineClass = [styles.header__h1];

    return (
        <div className={headerClasses}>
            <h1 className={headlineClass}>
                <a href={'/'}>WishList</a>
            </h1>
        </div>
    );
};

export default Header;