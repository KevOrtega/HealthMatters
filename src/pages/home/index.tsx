import Main from "@/atoms/Main";
import Services from "@/molecules/Services";
import Header from "@/molecules/Header";
import Specialties from "@/molecules/Specialties";

export default function home() {
	return (
		<Main>
			<Header />
			<Specialties />
			<Services />
		</Main>
	);
}
