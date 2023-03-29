import { useUserContext } from "@/context/UserProvider";
import { buyService } from "@/requests";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function BuyService() {
	const router = useRouter();
	const { id } = router.query;
	const { user } = useUserContext();
	const script = useRef<HTMLScriptElement>(null);
	const [preferenceId, setPreferenceId] = useState<string>("");

	useEffect(() => {
		// luego de montarse el componente, le pedimos al backend el preferenceId
		if (id && user)
			buyService(id.toString(), {
				name: user.name,
				surname: user.lastname,
				email: user.email,
			}).then((preferenceId) => setPreferenceId(preferenceId));
	}, [id, user]);

	useEffect(() => {
		if (preferenceId && script.current) {
			script.current.setAttribute("type", "text/javascript");
			script.current.setAttribute(
				"src",
				"https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js"
			);
			script.current.setAttribute("data-preference-id", preferenceId);
		}
	}, [preferenceId, script]);

	return (
		<form method="GET">
			<script ref={script} />
		</form>
	);
}
