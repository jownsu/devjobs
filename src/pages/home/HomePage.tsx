/* COMPONENTS */
import Button from "../components/Button";
import JobFilter from "./components/JobFilter";
import JobGrid from "./components/JobGrid";

const HomePage = () => {
	return (
		<main className="container">
			<JobFilter />
			<JobGrid />
			<Button variant="primary" style={{ display: "block", margin: "0 auto" }}>
				Load More
			</Button>
		</main>
	);
};

export default HomePage;
