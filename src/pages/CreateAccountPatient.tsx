import PatientForm from "../molecules/PatientForm";
import React from "react";
import Title from "@/atoms/Title";
import Link from "@/atoms/Link";

export default function CreateAccountPatient() {
	return (
		<div>
			<Link href="/">
				<Title type="big">HealthMatters</Title>
			</Link>
			<h1>Create Account Patient</h1>
			<PatientForm />
		</div>
	);
}
