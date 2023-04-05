import { useRouter } from "next/router";
import Main from "@/atoms/Main";
import Services from "@/molecules/Services";
import Header from "@/molecules/Header";
import Specialties from "@/molecules/Specialties";
import ServiceDetail from "@/molecules/ServiceDetail";

export default function home() {
	const router = useRouter();
	const { id } = router.query;
	return (
		<Main>
			<Header />
			<Specialties />
			<Services />
			{id ? <ServiceDetail serviceId={id as string} /> : <p>Loading...</p>}
		</Main>
	);
}
