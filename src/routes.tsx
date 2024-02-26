/* PLUGINS */
import { createBrowserRouter } from "react-router-dom";

/* PAGES */
import Layout from "./pages/Layout";
import HomePage from "./pages/home/HomePage";
import JobPage from "./pages/job/JobPage";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />
			},
			{
				path: "/jobs/:id",
				element: <JobPage />
			}
		]
	}
]);

export default routes;
