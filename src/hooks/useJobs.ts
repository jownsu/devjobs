/* PLUGINS */
import { create } from "zustand";

/* ENTITIES */
import { Job } from "../entities/Job";

/* DATA */
import jobs_data from "../data/data.json";

export interface JobFilterType {
	generic: string;
	location: string;
	is_fulltime: boolean;
}

interface JobStore {
	jobs: Job[];
	filterJobs: (filter: JobFilterType) => void;
}

const useJobs = create<JobStore>((set) => ({
	jobs: jobs_data,
	filterJobs: (filter) => {
		set(() => {
			return {
				jobs: jobs_data.filter(
					(job) =>
						[job.position, job.company, job.contract].some((field) =>
							field.toLowerCase().includes(filter.generic.toLowerCase())
						) &&
						(!filter.is_fulltime || job.contract === "Full Time") &&
						job.location.toLowerCase().includes(filter.location.toLowerCase())
				)
			};
		});
	}
}));

export default useJobs;
