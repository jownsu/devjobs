/* PLUGINS */
import { Outlet } from "react-router-dom";

/* COMPONENTS */
import Navbar from "./components/Navbar";

const Layout = () => {
	return (
		<>
			<Navbar />
			<main className="container">
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
