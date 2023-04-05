import Main from "@/atoms/Main";
import ServicesList from "@/molecules/ServicesList";
import Header from "@/molecules/Header";
import Specialties from "@/molecules/Specialties";

export default function home() {
	return (
		<Main>
			<Header />
			<Specialties />
			<ServicesList />
		</Main>
	);
}
