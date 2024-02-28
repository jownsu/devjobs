/* ENTITIES */
import { JobDetails } from "../../../entities/JobDetails";

/* STYLES */
import styles from "./JobBanner.module.scss";

interface Props {
	job: JobDetails;
}

const JobBanner = ({ job }: Props) => {
	return (
		<div className={styles.container}>
			<img
				src={job.logo}
				alt={`Logo of the ${job.company} company`}
				style={{ backgroundColor: job.logoBackground }}
			/>
			<div className={styles.info}>
				<p className={styles.company}>{job.company}</p>
				<p className={styles.website}>{job.website}</p>
			</div>
			<a href={job.website} target="_blank">
				Company Site
			</a>
		</div>
	);
};

export default JobBanner;
