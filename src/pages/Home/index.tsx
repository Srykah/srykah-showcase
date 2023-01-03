import React from "react";
import { AboutMe } from "./AboutMe";

export function Home(): React.ReactElement {
	return (
		<div className="container">
			<div className="has-text-centered">
				<h1 className="title is-1">Hi! I&apos;m Thomas Bécavin.</h1>
			</div>
			<AboutMe />
		</div>
	);
}
