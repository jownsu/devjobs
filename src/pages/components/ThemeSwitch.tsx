/* PLUGINS */
import { Switch } from "@mui/material";

/* STYLES */
import styles from "./ThemeSwitch.module.scss";

const ThemeSwitch = () => {
	return (
		<div className={styles.switch_container}>
			<img
				className={styles.sun_icon}
				src="./images/desktop/icon-sun.svg"
				alt="Logo of the sun"
			/>
			<Switch className={styles.switch} />
			<img
				className={styles.moon_icon}
				src="./images/desktop/icon-moon.svg"
				alt="Logo of the sun"
			/>
		</div>
	);
};

export default ThemeSwitch;
