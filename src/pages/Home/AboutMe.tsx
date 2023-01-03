import React from "react";
import { getAge } from "../../utils/age";

export function AboutMe(): React.ReactElement {
	const [age, isMyBirthdayToday] = getAge();
	return (
		<div className="section">
			<div className="has-text-centered">
				<h2 className="title is-2">About me</h2>
			</div>
			<ul>
				<li>
					I was born on {new Date("1998-01-17").toLocaleDateString()} (I am{" "}
					{age} years old.){" "}
					{isMyBirthdayToday && <small>It&apos;s my birthday today! 🍰</small>}
				</li>
				<li>
					I&apos;m a last-year student in telecommunications at top engineering
					school <a href="https://www.centralesupelec.fr/en">CentraleSupélec</a>
					.
				</li>
				<li>
					I live in France (currently at{" "}
					<a href="https://www.google.fr/maps/place/Gif-sur-Yvette/">
						Gif-sur-Yvette
					</a>
					).
				</li>
			</ul>
		</div>
	);
}
