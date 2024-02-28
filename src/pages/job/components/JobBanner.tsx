/* HOOKS */
import useJobs from "../../../hooks/useJobs";

/* STYLES */
import styles from "./JobBanner.module.scss";

const JobBanner = () => {
	const job_details = useJobs((state) => state.job_details);

	return (
		<div className={styles.container}>
			<img
				src={job_details.logo}
				alt={`Logo of the ${job_details.company} company`}
				style={{ backgroundColor: job_details.logoBackground }}
			/>
			<div className={styles.info}>
				<h2 className={styles.company}>{job_details.company}</h2>
				<p className={styles.website}>{job_details.website}</p>
			</div>
			<a href={job_details.website} target="_blank">
				Company Site
			</a>
		</div>
	);
};

export default JobBanner;
