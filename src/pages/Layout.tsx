/* PLUGINS */
import { Outlet } from "react-router-dom";

/* COMPONENTS */
import Navbar from "./components/NavBar";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Layout;
