//fastly.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8
import PatientForm from "../molecules/PatientForm";
import React from "react";

export default function CreateAccountPatient() {
	return (
		<div>
			<h1>LA PAGINA DEL DOC</h1>
			<br />
			<img
				src="https://fastly.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8"
				alt="Random Image"
				width={400}
			/>
			<br />
			<PatientForm />
			<br />
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, consectetur dolorum. Consectetur libero autem beatae
				architecto voluptatum voluptatibus nostrum dolore alias nisi, saepe mollitia, dignissimos eaque aliquam ratione ex minima.
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio inventore voluptate similique sed magnam numquam
				exercitationem maxime ea adipisci, aliquam eaque quos. Ducimus possimus nesciunt mollitia! Fuga aut velit accusantium?
			</p>
		</div>
	);
}
