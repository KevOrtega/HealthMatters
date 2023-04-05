import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import Main from "@/atoms/Main";
import Title from "@/atoms/Title";
import Link from "@/atoms/Link";

export default function Landing() {
	return (
		<Main>
			<section className="w-screen h-screen flex from-white to-viking bg-gradient-to-t">
				<div className="mt-10 md:mt-36 mx-6 md:mx-24 flex flex-col">
					<Title>HealthMatters</Title>
					<div className="w-full flex justify-center mt-10 md:mt-20">
						<Link className="m-5 md:m-10" href="/home">
							<Button className="cursor-pointer" type="primary">
								Get Started
							</Button>
						</Link>
						<Link className="m-5 md:m-10" href="/login">
							<Button className="cursor-pointer" type="secondary">
								LogIn
							</Button>
						</Link>
					</div>
				</div>
				<div className="hidden md:block md:self-center md:w-1/2 lg:w-2/3">
					<Image priority type="medicine" />
				</div>
			</section>
			<section className="h-screen flex flex-col">
				<div className="h-full flex flex-wrap md:flex-nowrap items-center justify-around">
					<div className="flex flex-col items-center justify-center w-full md:w-1/5">
						<Image type="map" />
						<p className="w-max -translate-y-1/2 bg-white rounded-xl shadow-lg p-5 text-xl font-bold">
							Find the best <span className="text-kaitoke-green">doctor</span>{" "}
							for you
						</p>
					</div>
					<div className="flex flex-col items-center justify-center w-full md:w-1/5">
						<Image type="choose" />
						<p className="w-max -translate-y-1/2 bg-white rounded-xl shadow-lg p-5 text-xl font-bold">
							Choose the service{" "}
							<span className="text-kaitoke-green">you want</span>
						</p>
					</div>
					<div className="flex flex-col items-center justify-center w-full md:w-1/5">
						<Image type="pay" />
						<p className="w-max -translate-y-1/2 bg-white rounded-xl shadow-lg p-5 text-xl font-bold">
							Pay the way <span className="text-kaitoke-green">you</span> prefer
						</p>
					</div>
				</div>
				<div className="self-end md:self-auto p-6 md:p-16 w-full bg-mine-shaft">
					<Link className="text-white text-xl" href="/about">
						about us
					</Link>
				</div>
			</section>
		</Main>
	);
}
