import { ServiceSearchProvider } from "@/context/ServiceSearchProvider";
import Services from "@/molecules/Services";
import Header from "@/molecules/Header";
import Main from "@/atoms/Main";
import Specialties from "@/molecules/Specialties";

export default function home() {
	return (
		<Main>
			<ServiceSearchProvider>
				<Header />
				<Specialties />
				<Services />
			</ServiceSearchProvider>
		</Main>
	);
}
