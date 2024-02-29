/* HOOKS */
import useJobs from "../../hooks/useJobs";

/* COMPONENTS */
import Button from "../components/Button";
import JobFilter from "./components/JobFilter";
import JobGrid from "./components/JobGrid";

const HomePage = () => {
	const loadMore = useJobs((state) => state.loadMore);
	const is_show_load_more = useJobs((state) => state.is_show_load_more);

	return (
		<main className="container">
			<JobFilter />
			<JobGrid />

			{is_show_load_more && (
				<Button
					onClick={loadMore}
					variant="primary"
					style={{ display: "block", margin: "0 auto" }}
				>
					Load More
				</Button>
			)}
		</main>
	);
};

export default HomePage;
