import Services from "@/molecules/Services";
import Header from "@/molecules/Header";
import Main from "@/atoms/Main";
import Specialities from "@/molecules/Specialities";

export default function home() {
	return (
		<Main>
			<Header />
			<Specialities />
			<Services />
		</Main>
	);
}
