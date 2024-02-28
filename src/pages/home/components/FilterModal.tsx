/* PLUGINS */
import { Modal } from "@mui/material";

/* COMPONENTS */
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";

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
					<Checkbox>Full Time Only</Checkbox>
					<Button variant="primary">Search</Button>
				</div>
			</div>
		</Modal>
	);
};

export default FilterModal;
