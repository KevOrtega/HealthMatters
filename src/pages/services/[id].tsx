// pages/service/[id].tsx

import { useRouter } from "next/router";
import ServiceDetail from "@/molecules/ServiceDetail";

const ServicePage = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div>
			<h1>Service Details</h1>
			{id ? <ServiceDetail serviceId={id as string} /> : <p>Loading...</p>}
		</div>
	);
};

export default ServicePage;
