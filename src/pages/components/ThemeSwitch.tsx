/* REACT */
import { useEffect, useState } from "react";

/* PLUGINS */
import { Switch } from "@mui/material";

/* STYLES */
import styles from "./ThemeSwitch.module.scss";

const ThemeSwitch = () => {
	const [is_dark, setIsDark] = useState(false);

	useEffect(() => {
		const dark_mode = localStorage.getItem("dark_mode");
		if (dark_mode === "true") {
			document.body.className = "dark";
			setIsDark(true);
		}
	}, []);

	const toggleDarkMode = () => {
		let dark_mode = localStorage.getItem("dark_mode");

		if (dark_mode === "true") {
			document.body.className = "";
			localStorage.setItem("dark_mode", "false");
			setIsDark(false);
		} else {
			document.body.className = "dark";
			localStorage.setItem("dark_mode", "true");
			setIsDark(true);
		}
	};

	return (
		<div className={styles.switch_container}>
			<img
				className={styles.sun_icon}
				src="./images/desktop/icon-sun.svg"
				alt="Logo of the sun"
			/>
			<Switch
				className={styles.switch}
				checked={is_dark}
				onChange={toggleDarkMode}
			/>
			<img
				className={styles.moon_icon}
				src="./images/desktop/icon-moon.svg"
				alt="Logo of the sun"
			/>
		</div>
	);
};

export default ThemeSwitch;
