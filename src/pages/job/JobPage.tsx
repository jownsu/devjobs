/* REACT */
import { useEffect } from "react";

/* PLUGINS */
import { useParams } from "react-router-dom";

/* HOOKS */
import useJobs from "../../hooks/useJobs";

/* COMPONENTS */
import JobBanner from "./components/JobBanner";
import JobInformation from "./components/JobInformation";
import Footer from "./components/Footer";

/* STYLES */
import styles from "./JobPage.module.scss";

const JobPage = () => {
	const { id } = useParams();
	const getJobDetails = useJobs((state) => state.getJobDetails);

	useEffect(() => {
		getJobDetails(parseInt(id!));
	}, []);

	return (
		<>
			<main className="container">
				<div className={styles.job_details_page}>
					<JobBanner />
					<JobInformation />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default JobPage;
