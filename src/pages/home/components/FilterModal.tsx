/* REACT */
import { FormEvent } from "react";

/* PLUGINS */
import { Modal } from "@mui/material";

/* COMPONENTS */
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";

/* HOOKS */
import useJobFilter from "../../../hooks/useJobFilter";
import useJobs from "../../../hooks/useJobs";

/* STYLES */
import styles from "./FilterModal.module.scss";

interface Props {
	open: boolean;
	onClose: () => void;
}

const FilterModal = ({ open, onClose }: Props) => {
	const job_filter = useJobFilter((state) => state.job_filter_query);
	const handleFilterChange = useJobFilter((state) => state.handleFilterChange);
	const filterJobs = useJobs((state) => state.filterJobs);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		filterJobs(job_filter);
		onClose();
	};

	return (
		<Modal open={open} onClose={onClose}>
			<form className={styles.filter_modal} onSubmit={handleSubmit}>
				<div className={styles.input_group}>
					<img
						src="/images/desktop/icon-location.svg"
						alt="Pin location icon"
					/>
					<input
						type="text"
						placeholder="Filter by location..."
						value={job_filter.location}
						onChange={(event) =>
							handleFilterChange("location", event?.target.value)
						}
					/>
				</div>
				<div className={styles.search_container}>
					<Checkbox
						checked={job_filter.is_fulltime}
						onChange={(event) =>
							handleFilterChange("is_fulltime", event?.target.checked)
						}
					>
						Full Time Only
					</Checkbox>
					<Button variant="primary" type="submit">
						Search
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default FilterModal;
