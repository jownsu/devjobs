/* ENTITIES */
import { Link } from "react-router-dom";
import { Job } from "../../../entities/Job";

/* STYLES */
import styles from "./JobCard.module.scss";

interface Props {
	job: Job;
}

const JobCard = ({ job }: Props) => {
	return (
		<Link className={styles.job_card} to={`/jobs/${job.id}`}>
			<div
				className={styles.logo}
				style={{
					backgroundColor: job.logoBackground
				}}
			>
				<img src={job.logo} alt={`Logo of ${job.company} company`} />
			</div>
			<p className={styles.info}>
				{job.postedAt} <span className={styles.dot}></span> {job.contract}
			</p>
			<p className={styles.position}>{job.position}</p>
			<p className={styles.company}>{job.company}</p>
			<p className={styles.location}>{job.location}</p>
		</Link>
	);
};

export default JobCard;
