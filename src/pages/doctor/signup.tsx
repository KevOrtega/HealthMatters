import Image from "@/atoms/Image";
import Link from "@/atoms/Link";
import Main from "@/atoms/Main";
import { ServiceSearchProvider } from "@/context/ServiceSearchProvider";
import SignUpDoctor from "@/molecules/SignUpDoctor";

export default function SignUp() {
	return (
		<Main>
			<ServiceSearchProvider>
				<section className="flex w-full h-screen items-center justify-center">
					<div className="w-1/2 flex items-center justify-center">
						<Image priority type="doctor" />
					</div>
					<div className="w-1/2">
						<SignUpDoctor />
						<div className="flex justify-center items-center my-4 bg-white px-2 uppercase font-medium tracking-wide">
							<hr className="border-t-1 mx-3 border-egg w-full" />
							<p className="text-center ">Or</p>
							<hr className="border-b-1 mx-3 border-egg w-full" />
						</div>
						<div className="flex flex-col">
							<button type="button" className="ml-2 text-sm my-4">
								<Link
									className="rounded-md border-4 border-deep-sea text-deep-sea py-2 px-4"
									href="/login"
								>
									Login
								</Link>
							</button>
						</div>
						<p className="text-egg my-5">
							Are you a patient?{" "}
							<Link
								className="m-2 text-sm text-mine-shaft font-bold transition-opacity hover:opacity-50"
								href="/signup"
							>
								Click here
							</Link>
						</p>
					</div>
				</section>
			</ServiceSearchProvider>
		</Main>
	);
}
