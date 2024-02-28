export interface JobDetails {
	id: number;
	logo: string;
	logoBackground: string;
	postedAt: string;
	contract: string;
	position: string;
	company: string;
	location: string;
	website: string;
	description: string;
	apply: string;
	requirements: {
		content: string;
		items: string[];
	};
	role: {
		content: string;
		items: string[];
	};
}
