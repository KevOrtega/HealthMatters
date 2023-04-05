import { useState } from "react";
import { useRouter } from "next/router";
import { loginFetcher } from "@/requests";
import { emailValidator, passwordValidator } from "@/validation";
import Input from "@/atoms/Input";
import { iLoginCredentials } from "@/interface";
import Button from "@/atoms/Button";
import { useUserContext } from "@/context/UserProvider";
import Swal from "sweetalert2";
import useGoogleLogin from "@/hooks/useGoogleLogin";

export default function LoginForm() {
	const { setUser } = useUserContext();
	const { google_login_url } = useGoogleLogin();
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
		if (google_login_url) return (window.location.href = google_login_url);
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: `An error occurred. Try again later`,
		});
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

			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "You were successfully logged",
				showConfirmButton: false,
				timer: 1500,
			});

			router.push("/home");
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `Email or password incorrect`,
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} className="mx-auto max-w-md px-6 py-10">
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
				type="button"
				className="my-3 p-5 w-full text-left shadow-lg rounded-lg bg-white hover:bg-gray-100"
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
					className={`border-gray-300 rounded-md shadow-sm focus:border-deep-blush focus:ring focus:ring-deep-blush focus:ring-opacity-50 ${
						!valid_credentials["email"].isValid && "border-b-deep-blush"
					}`}
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
					className={`border-gray-300 rounded-md shadow-sm focus:border-deep-blush focus:ring focus:ring-deep-blush focus:ring-opacity-50 ${
						!valid_credentials["password"].isValid && "border-b-deep-blush"
					}`}
					value={credentials.password}
					onChange={handleChange}
				/>
			</fieldset>

			<Button
				type="submit"
				className="w-full py-3 mt-4 font-medium text-white bg-deep-blush rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-blush"
			>
				Login
			</Button>
		</form>
	);
}
