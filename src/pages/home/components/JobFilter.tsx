/* PLUGINS */
import { useMediaQuery } from "@mui/material";

/* STYLES */
import Button from "../../components/Button";
import styles from "./JobFilter.module.scss";

const JobFilter = () => {
	const medium_screen = useMediaQuery("(max-width:900px)");
	const small_screen = useMediaQuery("(max-width:600px)");

	return (
		<div className={styles.job_filter}>
			<div className={`${styles.input_group} ${styles.search}`}>
				<img src="./images/desktop/icon-search.svg" alt="Magnifying glass icon" />
				<input
					type="text"
					placeholder={
						medium_screen
							? "Filter by title..."
							: "Filter by title, companies, experties..."
					}
				/>
			</div>

			{small_screen ? (
				<button type="button" className={styles.filter_btn}>
					<span className={styles.filter_icon}></span>
				</button>
			) : (
				<div className={`${styles.input_group} ${styles.location}`}>
					<img
						src="./images/desktop/icon-location.svg"
						alt="Pin location icon"
					/>
					<input type="text" placeholder="Filter by location..." />
				</div>
			)}

			<div className={styles.search_container}>
				<label htmlFor="full_time" className={styles.full_time_checkbox}>
					<input type="checkbox" id="full_time" />
					<span className={styles.checkmark}></span>
					{medium_screen ? "Full Time" : "Full Time Only"}
				</label>
				<Button variant="primary">
					<img src="./images/mobile/icon-search.svg" alt="Magniyfying icon" />{" "}
					<span>Search</span>
				</Button>
			</div>
		</div>
	);
};

export default JobFilter;
