import { ServiceSearchProvider } from "@/context/ServiceSearchProvider";
import Main from "@/atoms/Main";
import Services from "@/molecules/Services";
import Header from "@/molecules/Header";
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
