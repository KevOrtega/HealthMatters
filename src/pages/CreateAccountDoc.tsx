import DoctorForm from "../molecules/DoctorForm";

import React from "react";

export default function CreateAccountDoc() {
	return (
		<div>
			<h1>Create Account Doctor</h1>
			<br />
			<img
				src="https://picsum.photos/id/60/1920/1200"
				alt="Random Image"
				width={400}
			/>
			<br />
			<DoctorForm />
			<br />
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
				consectetur dolorum. Consectetur libero autem beatae architecto
				voluptatum voluptatibus nostrum dolore alias nisi, saepe mollitia,
				dignissimos eaque aliquam ratione ex minima. Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Distinctio inventore voluptate similique
				sed magnam numquam exercitationem maxime ea adipisci, aliquam eaque
				quos. Ducimus possimus nesciunt mollitia! Fuga aut velit accusantium?
			</p>
		</div>
	);
}
