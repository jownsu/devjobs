/* PLUGINS */
import { create } from "zustand";

/* ENTITIES */
import { Job } from "../entities/Job";

/* DATA */
import jobs_data from "../data/data.json";
import { JobDetails } from "../entities/JobDetails";

export interface JobFilterType {
	generic: string;
	location: string;
	is_fulltime: boolean;
}

interface JobStore {
	jobs: Job[];
	job_details: JobDetails;
	filterJobs: (filter: JobFilterType) => void;
	getJobDetails: (job_id: number) => void;
	loadMore: () => void;
	is_show_load_more: boolean;
}

const useJobs = create<JobStore>((set) => ({
	jobs: jobs_data,
	job_details: {} as JobDetails,
	is_show_load_more: true,
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
				),
				is_show_load_more: !(
					filter.generic ||
					filter.location ||
					filter.is_fulltime
				)
			};
		});
	},
	getJobDetails: (job_id) =>
		set(() => ({
			job_details: jobs_data.find((job) => job.id === job_id)
		})),
	loadMore: () => {
		set((state) => ({
			jobs: [...state.jobs, ...jobs_data]
		}));
	}
}));

export default useJobs;
