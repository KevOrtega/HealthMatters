import Button from "@/atoms/Button";
// import Title from "@/atoms/Title";
import RegistrationForm from "@/molecules/RegistrationForm";

export default function Home() {
	return (
		<main>
			<Button>get started</Button>
			<Button type="secondary">LogIn</Button>
			<RegistrationForm />
		</main>
	);
}
