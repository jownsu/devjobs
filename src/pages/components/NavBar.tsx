/* COMPONENTS */
import ThemeSwitch from "./ThemeSwitch";

/* PLUGINS */
import { Link } from "react-router-dom";

/* STYLES */
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className="container">
				<Link to="/">
					<img
						className={styles.logo}
						src="/images/desktop/logo.svg"
						alt="Text logo of devjobs"
					/>
				</Link>
				<ThemeSwitch />
			</div>
		</nav>
	);
};

export default Navbar;
