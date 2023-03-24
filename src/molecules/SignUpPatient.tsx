import Link from "@/atoms/Link";

export default function SignUpPatient() {
	const handleGoogleLogin = () => {
		window.location.href = "https://accounts.google.com/login";
	};

	return (
		<form className="w-full p-10">
			<button onClick={handleGoogleLogin}>
				<img
					src="https://th.bing.com/th/id/OIP.KEygYmezNxIdPeCrxbrQ6wHaD_?pid=ImgDet&rs=1"
					alt="Google Logo"
					width="50rem"
					height="50rem"
					className="inline-block mr-2"
				/>
				Continue with Google
			</button>
			<fieldset className="flex flex-col mb-4">
				<label htmlFor="email" className="text-lg mb-2 text-left">
					Name:
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					className="w-full border-b py-2 px-3 mb-4"
				/>
			</fieldset>
			<fieldset className="flex flex-col mb-4">
				<label htmlFor="email" className="text-lg mb-2 text-left">
					Last Name:
				</label>
				<input
					type="text"
					id="last-name"
					name="last-name"
					required
					className="w-full border-b py-2 px-3 mb-4"
				/>
			</fieldset>
			<fieldset className="flex flex-col mb-4">
				<label htmlFor="email" className="text-lg mb-2 text-left">
					Email:
				</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					className="w-full border-b py-2 px-3 mb-4"
				/>
			</fieldset>
			<fieldset className="flex flex-col mb-4">
				<label htmlFor="password" className="text-lg mb-2 text-left">
					Password:
				</label>
				<input
					type="password"
					id="password"
					name="password"
					required
					className="w-full border-b py-2 px-3 mb-4"
				/>
			</fieldset>
			<div className="flex items-center justify-between">
				<button
					type="submit"
					className="text-right mr-3 inline-block underline"
				>
					Sign up
				</button>
			</div>
		</form>
	);
}
