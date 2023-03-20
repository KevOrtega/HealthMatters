import DoctorForm from "../molecules/DoctorForm";
import React from "react";
import Title from "@/atoms/Title";
import Link from "@/atoms/Link";

export default function CreateAccountDoc() {
	return (
		<div>
			<Link href="/">
				<Title type="big">HealthMatters</Title>
			</Link>
			<h1>Create Account Doctor</h1>
			<DoctorForm />
		</div>
	);
}
