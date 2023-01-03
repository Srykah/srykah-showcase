import React from "react";
import { NavLink } from "react-router-dom";

interface TabNavLinkProps {
	to: string;
	label: string;
	exact?: boolean;
}

export function TabNavLink({
	to,
	label,
	exact,
}: TabNavLinkProps): React.ReactElement {
	return (
		<li>
			<NavLink
				to={to}
				className={({ isActive }) => (isActive ? "is-active" : undefined)}
			>
				{label}
			</NavLink>
		</li>
	);
}
