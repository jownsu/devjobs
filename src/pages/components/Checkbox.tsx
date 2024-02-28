/* REACT */
import { InputHTMLAttributes, ReactNode } from "react";

/* STYLES */
import styles from "./Checkbox.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode;
}

const Checkbox = ({ children, ...props }: Props) => {
	return (
		<label htmlFor="chk_box" className={styles.checkbox}>
			<input type="checkbox" id="chk_box" {...props} />
			<span className={styles.checkmark}></span>
			{children}
		</label>
	);
};

export default Checkbox;
