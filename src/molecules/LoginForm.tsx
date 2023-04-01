import { useState } from "react";
import { useRouter } from "next/router";
import { loginFetcher } from "@/requests";
import { emailValidator, passwordValidator } from "@/validation";
import Input from "@/atoms/Input";
import { iLoginCredentials } from "@/interface";
import Button from "@/atoms/Button";
import { useUserContext } from "@/context/UserProvider";

export default function LoginForm() {
	const { setUser } = useUserContext();
	const router = useRouter();
	const initial_credentials = {
		email: "",
		password: "",
	};
	const [credentials, setCredentials] =
		useState<iLoginCredentials>(initial_credentials);

	const valid_credentials = {
		email: {
			isValid: !credentials.email.length || emailValidator(credentials.email),
			error: "email is not valid",
		},
		password: {
			isValid:
				!credentials.password.length || passwordValidator(credentials.password),
			error:
				"password is not valid (must have 8 characters, 1 capital letter, 1 lowercase and 1 number)",
		},
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { name, value },
	}) => setCredentials({ ...credentials, [name]: value });

	const handleGoogleLogin = () => {
		window.location.href = "https://accounts.google.com/login";
	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event
	) => {
		event.preventDefault();

		try {
			if (Object.values(credentials).includes(""))
				throw new Error("Fill every input");

			for (const [_credential, { isValid, error }] of Object.entries(
				valid_credentials
			)) {
				if (!isValid) throw new Error(error);
			}

			const logged = await loginFetcher(credentials);
			setUser(logged);

			setCredentials(initial_credentials);
			router.push("/home");
		} catch (error) {
			alert(error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-full p-10">
			<p
				className={`border-deep-blush border-2 transition-opacity opacity-0 ${
					!!Object.values(valid_credentials).find(({ isValid }) => !isValid) &&
					"opacity-100"
				} text-deep-blush capitalize flex items-center justify-center w-full px-5 text-center h-16 mb-2`}
			>
				{
					Object.values(valid_credentials).find(({ isValid }) => !isValid)
						?.error
				}
			</p>

			<button
				className="my-3 p-5 w-full text-left shadow-lg rounded-lg"
				onClick={handleGoogleLogin}
			>
				<img
					src="https://th.bing.com/th/id/OIP.KEygYmezNxIdPeCrxbrQ6wHaD_?pid=ImgDet&rs=1"
					alt="Google Logo"
					width="50rem"
					height="50rem"
					className="inline-block mr-2"
				/>
				Continue with Google
			</button>

			<fieldset className="flex flex-col my-4">
				<label htmlFor="email" className="text-lg mb-2 text-left">
					Email:
				</label>
				<Input
					type="email"
					name="email"
					className={
						!valid_credentials["email"].isValid ? "border-b-deep-blush" : ""
					}
					value={credentials.email}
					onChange={handleChange}
				/>
			</fieldset>

			<fieldset className="flex flex-col my-4">
				<label htmlFor="password" className="text-lg mb-2 text-left">
					Password:
				</label>
				<Input
					type="password"
					name="password"
					className={
						!valid_credentials["password"].isValid ? "border-b-deep-blush" : ""
					}
					value={credentials.password}
					onChange={handleChange}
				/>
			</fieldset>
			<Button type="submit">Login</Button>
		</form>
	);
}
