/* REACT */
import { FormEvent, useState } from "react";

/* PLUGINS */
import { useMediaQuery } from "@mui/material";

/* COMPONENTS */
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import FilterModal from "./FilterModal";

/* HOOKS */
import useJobFilter from "../../../hooks/useJobFilter";
import useJobs from "../../../hooks/useJobs";

/* STYLES */
import styles from "./JobFilter.module.scss";

const JobFilter = () => {
	const medium_screen = useMediaQuery("(max-width:900px)");
	const small_screen = useMediaQuery("(max-width:600px)");

	const [openFilterModal, setOpenFilterModal] = useState(false);

	const filterJobs = useJobs((state) => state.filterJobs);
	const job_filter = useJobFilter((state) => state.job_filter_query);
	const handleFilterChange = useJobFilter((state) => state.handleFilterChange);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		filterJobs(job_filter);
	};

	return (
		<>
			<form className={styles.job_filter} onSubmit={onSubmit}>
				<div className={`${styles.input_group} ${styles.search}`}>
					<img
						src="/images/desktop/icon-search.svg"
						alt="Magnifying glass icon"
					/>
					<input
						type="text"
						placeholder={
							medium_screen
								? "Filter by title..."
								: "Filter by title, companies, experties..."
						}
						value={job_filter.generic}
						onChange={(event) =>
							handleFilterChange("generic", event?.target.value)
						}
					/>
				</div>

				{small_screen ? (
					<button
						type="button"
						className={styles.filter_btn}
						onClick={() => setOpenFilterModal(true)}
					>
						<span className={styles.filter_icon}></span>
					</button>
				) : (
					<div className={`${styles.input_group} ${styles.location}`}>
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
				)}

				<div className={styles.search_container}>
					{!small_screen && (
						<Checkbox
							checked={job_filter.is_fulltime}
							onChange={(event) =>
								handleFilterChange("is_fulltime", event?.target.checked)
							}
						>
							{medium_screen ? "Full Time" : "Full Time Only"}
						</Checkbox>
					)}
					<Button variant="primary" type="submit">
						<img
							src="/images/mobile/icon-search.svg"
							alt="Magniyfying icon"
						/>{" "}
						<span>Search</span>
					</Button>
				</div>
			</form>
			<FilterModal
				open={small_screen && openFilterModal}
				onClose={() => setOpenFilterModal(false)}
			/>
		</>
	);
};

export default JobFilter;
