import Main from "@/atoms/Main";
import Services from "@/molecules/ServicesList";
import Header from "@/molecules/Header";
import Specialties from "@/molecules/Specialties";

export default function home() {
	return (
		<Main>
			<Header />
			<div className="flex flex-col items-center">
				<div className="w-full sm:w-full md:w-3/4 lg:w-1/2">
					<Specialties />
					<Services />
				</div>
			</div>
		</Main>
	);
}
