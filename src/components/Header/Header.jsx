import styles from './Header.module.css';

function Header() {
	return (
		<img className={styles['header__logo']} src='public\logo.svg' alt='Logo' />
	);
}

export default Header;
