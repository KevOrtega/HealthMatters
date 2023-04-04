import Button from "@/atoms/Button";
import Input from "@/atoms/Input";
import { useUserContext } from "@/context/UserProvider";
import useGoogleLogin from "@/hooks/useGoogleLogin";
import { iRegisterCredentials } from "@/interface";
import { registerFetcher } from "@/requests";
import {
	emailValidator,
	nameOrLastNameValidator,
	passwordValidator,
} from "@/validation";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";

export default function SignUpPatient() {
	const router = useRouter();
	const { google_login_url } = useGoogleLogin();
	const { setUser } = useUserContext();
	const initial_credentials = {
		name: "",
		lastname: "",
		email: "",
		password: "",
	};
	const [credentials, setCredentials] =
		useState<iRegisterCredentials>(initial_credentials);

	const valid_credentials = {
		name: {
			isValid:
				!credentials.name.length || nameOrLastNameValidator(credentials.name),
			error: "name is not valid (must have between 2 and 29 carácteres)",
		},
		lastname: {
			isValid:
				!credentials.lastname.length ||
				nameOrLastNameValidator(credentials.lastname),
			error: "lastname is not valid (must have between 2 and 29 characters)",
		},
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

			const logged = await registerFetcher(credentials);
			setUser(logged);

			setCredentials(initial_credentials);

			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "You were successfully registered",
				showConfirmButton: false,
				timer: 1500,
			});

			router.push("/home");
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error}`,
			});
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
				type="button"
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
				<label htmlFor="name" className="text-lg mb-2 text-left">
					Name:
				</label>
				<Input
					type="text"
					name="name"
					className={
						!valid_credentials["name"].isValid ? "border-b-deep-blush" : ""
					}
					value={credentials.name}
					onChange={handleChange}
					required
				/>
			</fieldset>
			<fieldset className="flex flex-col my-4">
				<label htmlFor="lastname" className="text-lg mb-2 text-left">
					Last Name:
				</label>
				<Input
					type="text"
					name="lastname"
					className={
						!valid_credentials["lastname"].isValid ? "border-b-deep-blush" : ""
					}
					value={credentials.lastname}
					onChange={handleChange}
					required
				/>
			</fieldset>
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
					required
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
					required
				/>
			</fieldset>
			<div className="flex items-center justify-between">
				<Button type="submit">Sign up</Button>
			</div>
		</form>
	);
}
