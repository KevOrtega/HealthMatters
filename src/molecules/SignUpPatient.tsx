import { useState } from "react";
import Link from "next/link";
import Title from "@/atoms/Title";
import Main from "@/atoms/Main";
import LoginForm from "@/molecules/LoginForm";

function LoginPage() {
	const [isLoginForm, setIsLoginForm] = useState(true);

	const handleToggleForm = () => {
		setIsLoginForm((prevValue) => !prevValue);
	};

	const handleGoogleLogin = () => {
		window.location.href = "https://accounts.google.com/login";
	};

	return (
		<Main>
			<div className="container mx-auto py-4">
				<Link href="/" passHref>
					<button className="text-blue-500 hover:text-blue-700 focus:outline-none">
						<Title type="big">HealthMatters</Title>
					</button>
				</Link>
				<div className="mt-8 flex justify-end">
					<div className="w-1/2 text-center">
						<h2 className="text-2xl font-bold mb-4">
							Welcome to HealthMatters
						</h2>
						<div className="my-4" />
						<button onClick={handleGoogleLogin}>
							<img
								src="https://th.bing.com/th/id/OIP.KEygYmezNxIdPeCrxbrQ6wHaD_?pid=ImgDet&rs=1"
								alt="Google Logo"
								width="50"
								height="50"
								className="inline-block mr-2 my-6"
							/>
							Continue with Google
						</button>
						{isLoginForm ? (
							<form>
								{/* Aquí va el contenido de tu formulario de registro */}
							</form>
						) : (
							<LoginForm />
						)}
						<div>
							<Link href="/doctor-register" passHref>
								<button className="ml-2 text-sm text-gray-500 hover:text-gray-700 focus:outline-none">
									Are you a doctor?<strong> Click here</strong>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Main>
	);
}

export default LoginPage;
