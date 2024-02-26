/* HOOKS */
import useJobs from "../../../hooks/useJobs";

/* COMPONENTS */
import JobCard from "./JobCard";

/* STYLES */
import styles from "./JobGrid.module.scss";

const JobGrid = () => {
	const jobs = useJobs((state) => state.jobs);

	return (
		<div className={styles.jobs_container}>
			{jobs.map((job) => (
				<JobCard key={job.id} job={job} />
			))}
		</div>
	);
};

export default JobGrid;
