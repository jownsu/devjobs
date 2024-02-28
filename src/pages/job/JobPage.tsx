/* REACT */
import { useEffect } from "react";

/* PLUGINS */
import { useParams } from "react-router-dom";

/* HOOKS */
import useJobs from "../../hooks/useJobs";

/* COMPONENTS */
import JobBanner from "./components/JobBanner";
import JobInformation from "./components/JobInformation";

/* STYLES */
import styles from "./JobPage.module.scss";

const JobPage = () => {
	const { id } = useParams();
	const getJobDetails = useJobs((state) => state.getJobDetails);

	useEffect(() => {
		getJobDetails(parseInt(id!));
	}, []);

	return (
		<div className={styles.job_details_page}>
			<JobBanner />
			<JobInformation />
		</div>
	);
};

export default JobPage;
