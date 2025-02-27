import Logo from '../../assets/logo.svg?react';
import styles from './Header.module.css';

function Header() {
	return <Logo className={styles['header__logo']} />;
}

export default Header;
