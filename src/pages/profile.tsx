import React from "react";
import DoctorProfile from "@/molecules/DoctorProfileForm";
import useCheckIsDoctor from "@/hooks/useCheckIsDoctor";
import Main from "@/atoms/Main";

export default function DoctorRegisterPage() {
	const { isDoctor } = useCheckIsDoctor();
	return (
		<Main>
			{isDoctor ? (
				<DoctorProfile />
			) : (
				<div>You should be a doctor to see this page</div>
			)}
		</Main>
	);
}
