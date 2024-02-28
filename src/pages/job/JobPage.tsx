/* REACT */
import { useEffect } from "react";

/* PLUGINS */
import { useParams } from "react-router-dom";

/* HOOKS */
import useJobs from "../../hooks/useJobs";

/* COMPONENTS */
import JobBanner from "./components/JobBanner";

/* STYLES */
import styles from "./JobPage.module.scss";

const JobPage = () => {
	const { id } = useParams();
	const getJobDetails = useJobs((state) => state.getJobDetails);
	const job_details = useJobs((state) => state.job_details);

	useEffect(() => {
		getJobDetails(parseInt(id!));
	}, []);

	return (
		<div className={styles.job_details_page}>
			<JobBanner job={job_details} />
		</div>
	);
};

export default JobPage;
