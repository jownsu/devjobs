/* PLUGINS */
import { Outlet } from "react-router-dom";

/* COMPONENTS */
import Navbar from "./components/Navbar";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Layout;
