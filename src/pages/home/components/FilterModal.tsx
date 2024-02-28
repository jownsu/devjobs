/* PLUGINS */
import { Modal } from "@mui/material";

/* COMPONENTS */
import Button from "../../components/Button";

/* STYLES */
import styles from "./FilterModal.module.scss";

interface Props {
	open: boolean;
	onClose: () => void;
}

const FilterModal = ({ open, onClose }: Props) => {
	return (
		<Modal open={open} onClose={onClose}>
			<div className={styles.filter_modal}>
				<div className={styles.input_group}>
					<img
						src="./images/desktop/icon-location.svg"
						alt="Pin location icon"
					/>
					<input type="text" placeholder="Filter by location..." />
				</div>
				<div className={styles.search_container}>
					<label htmlFor="full_time_m" className={styles.full_time_checkbox}>
						<input type="checkbox" id="full_time_m" />
						<span className={styles.checkmark}></span>
						Full Time Only
					</label>
					<Button variant="primary">Search</Button>
				</div>
			</div>
		</Modal>
	);
};

export default FilterModal;
