/* REACT */
import { ButtonHTMLAttributes, ReactNode } from "react";

/* STYLES */
import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant: "primary" | "secondary";
}

const Button = ({ children, variant, ...props }: Props) => {
	return (
		<button className={`${styles.btn} ${styles["btn_" + variant]}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
