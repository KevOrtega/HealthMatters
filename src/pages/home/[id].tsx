import { useRouter } from "next/router";
import Main from "@/atoms/Main";
import ServicesList from "@/molecules/ServicesList";
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
			<ServicesList />
			{id ? <ServiceDetail serviceId={id as string} /> : <p>Loading...</p>}
		</Main>
	);
}
