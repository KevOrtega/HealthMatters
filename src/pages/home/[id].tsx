import { useRouter } from "next/router";
import Main from "@/atoms/Main";
import Services from "@/molecules/ServicesList";
import Header from "@/molecules/Header";
import Specialties from "@/molecules/Specialties";
import ServiceDetail from "@/molecules/ServiceDetail";

export default function home() {
	const router = useRouter();
	const { id } = router.query;
	return (
		<Main>
			<Header />
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-1/2">
					<Specialties />
					<Services />
				</div>
				<div className="w-full md:w-1/2">
					{id ? <ServiceDetail serviceId={id as string} /> : <p>Loading...</p>}
				</div>
			</div>
		</Main>
	);
}
