/* PLUGINS */
import { create } from "zustand";

interface JobFilterStore {
	job_filter_query: JobFilterQuery;
	handleFilterChange: (
		key: "generic" | "location" | "is_fulltime",
		value: string | boolean
	) => void;
}

interface JobFilterQuery {
	generic: string;
	location: string;
	is_fulltime: boolean;
}

const useJobFilter = create<JobFilterStore>((set) => ({
	job_filter_query: {
		generic: "",
		location: "",
		is_fulltime: false
	},
	handleFilterChange: (key, value) =>
		set((state) => ({
			job_filter_query: { ...state.job_filter_query, [key]: value }
		}))
}));

export default useJobFilter;
