import { ReactElement } from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

function MainFrame(): ReactElement {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
}

export default MainFrame;
