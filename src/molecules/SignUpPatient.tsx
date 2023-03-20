import { useState } from "react";
import Link from "@/atoms/Link";
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
				<Link href="/">
					<Title type="big">HealthMatters</Title>
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
								<div className="flex flex-col mb-4">
									<label
										htmlFor="email"
										className="text-lg mb-2 text-left"
										style={{ fontSize: "14px" }}
									>
										Name:
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										className="w-full border-b py-2 px-3 mb-4"
									/>
								</div>
								<div className="flex flex-col mb-4">
									<label
										htmlFor="email"
										className="text-lg mb-2 text-left"
										style={{ fontSize: "14px" }}
									>
										Last Name:
									</label>
									<input
										type="text"
										id="last-name"
										name="last-name"
										required
										className="w-full border-b py-2 px-3 mb-4"
									/>
								</div>
								<div className="flex flex-col mb-4">
									<label
										htmlFor="email"
										className="text-lg mb-2 text-left"
										style={{ fontSize: "14px" }}
									>
										Email:
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										className="w-full border-b py-2 px-3 mb-4"
									/>
								</div>
								<div className="flex flex-col mb-4">
									<label
										htmlFor="password"
										className="text-lg mb-2 text-left"
										style={{ fontSize: "14px" }}
									>
										Password:
									</label>
									<input
										type="password"
										id="password"
										name="password"
										required
										className="w-full border-b py-2 px-3 mb-4"
									/>
								</div>
								<div className="flex items-center justify-between">
									<button
										type="submit"
										className="text-right mr-3 inline-block underline"
									>
										Sign up
									</button>
								</div>
								<p className="text-center ">Or</p>

								<div className="flex items-center justify-center my-4">
									<div className="flex flex-col text-center">
										<button
											type="button"
											onClick={handleToggleForm}
											className="ml-2 text-sm text-gray-500 hover:text-gray-700 my-4 border-2 border-green-500 rounded-md py-2 px-4 text-green-700"
										>
											Login
										</button>
									</div>
								</div>

								<div>
									<button
										type="button"
										onClick={handleToggleForm}
										className="ml-2 text-sm text-gray-500 hover:text-gray-700 my-4"
									>
										<strong className="rounded-md border-4 border-green-700 py-2 px-4 text-green-700">
											Login
										</strong>
									</button>
								</div>
								<div>
									<button
										type="button"
										onClick={handleToggleForm}
										className="ml-2 text-sm text-gray-500 hover:text-gray-700"
									>
										Are you a doctor?<strong> Click here</strong>
									</button>
								</div>
							</form>
						) : (
							<LoginForm />
						)}
					</div>
				</div>
			</div>
		</Main>
	);
}

export default LoginPage;
