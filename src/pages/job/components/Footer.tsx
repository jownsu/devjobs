/* HOOKS */
import useJobs from "../../../hooks/useJobs";

/* STYLES */
import styles from "./Footer.module.scss";

const Footer = () => {
	const job_details = useJobs((state) => state.job_details);

	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div>
					<p className={styles.position}>{job_details.position}</p>
					<p className={styles.company}>{job_details.company}</p>
				</div>

				<a href={job_details.apply} target="_blank">
					Apply Now
				</a>
			</div>
		</div>
	);
};

export default Footer;
