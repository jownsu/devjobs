/* COMPONENTS */
import Button from "../components/Button";
import JobFilter from "./components/JobFilter";
import JobGrid from "./components/JobGrid";

const HomePage = () => {
	return (
		<>
			<JobFilter />
			<JobGrid />
			<Button variant="primary" style={{ display: "block", margin: "0 auto" }}>
				Load More
			</Button>
		</>
	);
};

export default HomePage;
