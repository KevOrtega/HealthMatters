import Image from "@/atoms/Image";
import Main from "@/atoms/Main";
import SignUpPatient from "@/molecules/SignUpPatient";

export default function SignUp() {
	return (
		<Main>
			<section className="flex w-full h-screen items-center justify-center">
				<div className="w-1/2">
					<Image type="choose" />
				</div>
				<SignUpPatient />
			</section>
		</Main>
	);
}
