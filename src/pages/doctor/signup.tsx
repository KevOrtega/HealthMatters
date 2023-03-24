import Image from "@/atoms/Image";
import Link from "@/atoms/Link";
import Main from "@/atoms/Main";
import SignUpPatient from "@/molecules/SignUpPatient";

export default function SignUp() {
	return (
		<Main>
			<section className="flex w-full h-screen items-center justify-center">
				<div className="w-1/2 px-10">
					<Image type="choose" />
				</div>
				<div className="w-1/2">
					<SignUpPatient />
					<p className="text-center">Or</p>
					<div className="flex flex-col">
						<button
							type="button"
							className="ml-2 text-sm text-gray-500 hover:text-gray-700 my-4"
						>
							<Link
								className="rounded-md border-4 border-green-700 py-2 px-4 text-green-700"
								href="/login"
							>
								Login
							</Link>
						</button>
					</div>
					<p>
						Are you a patient?{" "}
						<Link
							className="ml-2 text-sm font-bold transition-opacity hover:opacity-50"
							href="/signup"
						>
							Click here
						</Link>
					</p>
				</div>
			</section>
		</Main>
	);
}
