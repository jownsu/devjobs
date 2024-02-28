/* REACT */
import { ReactNode } from "react";

/* STYLES */
import styles from "./Checkbox.module.scss";

interface Props {
	children?: ReactNode;
}

const Checkbox = ({ children }: Props) => {
	return (
		<label htmlFor="chk_box" className={styles.checkbox}>
			<input type="checkbox" id="chk_box" />
			<span className={styles.checkmark}></span>
			{children}
		</label>
	);
};

export default Checkbox;
