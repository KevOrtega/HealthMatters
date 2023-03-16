import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import Main from "@/atoms/Main";
import Title from "@/atoms/Title";
import Navbar from "@/molecules/Navbar";

export default function () {
	return (
		<Main>
			<section className="min-h-screen flex from-white to-viking bg-gradient-to-t">
				<div className="mt-28 mx-28">
					<Title>HealthMatters</Title>
					<div className="w-full flex justify-center mt-20">
						<Button className="m-10" type="primary">
							Get Started
						</Button>
						<Button className="m-10" type="secondary">
							LogIn
						</Button>
					</div>
				</div>
				<Image type="medicine" />
			</section>
			<Navbar />
		</Main>
	);
}
