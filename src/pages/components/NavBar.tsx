/* COMPONENTS */
import ThemeSwitch from "./ThemeSwitch";

/* STYLES */
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className="container">
				<img
					className={styles.logo}
					src="./images/desktop/logo.svg"
					alt="Text logo of devjobs"
				/>
				<ThemeSwitch />
			</div>
		</nav>
	);
};

export default Navbar;
