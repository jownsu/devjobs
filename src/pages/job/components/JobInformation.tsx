/* HOOKS */
import useJobs from "../../../hooks/useJobs";

/* STYLES */
import styles from "./JobInformation.module.scss";

const JobInformation = () => {
	const job_details = useJobs((state) => state.job_details);

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div className={styles.main_info}>
					<p className={styles.info}>
						{job_details.postedAt} <span className={styles.dot}></span>{" "}
						{job_details.contract}
					</p>
					<h1 className={styles.position}>{job_details.position}</h1>
					<p className={styles.location}>{job_details.location}</p>
				</div>
				<a href={job_details.apply} target="_blank">
					Apply Now
				</a>
			</div>
			<p className={styles.description}>{job_details.description}</p>
			<h3 className={styles.label_title}>Requirements</h3>
			<p className={styles.req_description}>{job_details?.requirements?.content}</p>
			<ul className={styles.requirement_list}>
				{job_details.requirements?.items.map((item, key) => (
					<li key={key}>
						<span></span>
						{item}
					</li>
				))}
			</ul>
			<h3 className={styles.label_title}>What You Will Do</h3>
			<p className={styles.role_description}>{job_details?.role?.content}</p>
			<ul className={styles.role_list}>
				{job_details.role?.items.map((item, key) => (
					<li key={key}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default JobInformation;
