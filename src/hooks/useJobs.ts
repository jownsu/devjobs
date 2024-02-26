/* PLUGINS */
import { create } from "zustand";

/* ENTITIES */
import { Job } from "../entities/Job";

/* DATA */
import jobs_data from "../data/data.json";

interface JobStore {
	jobs: Job[];
}

const useJobs = create<JobStore>(() => ({
	jobs: jobs_data
}));

export default useJobs;
