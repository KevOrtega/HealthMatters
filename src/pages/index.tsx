import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import Main from "@/atoms/Main";
import Title from "@/atoms/Title";
import LandingNavbar from "@/molecules/LandingNavbar";
import Link from "@/atoms/Link";

export default function Landing() {
	return (
		<Main>
			<section className="w-screen h-screen flex from-white to-viking bg-gradient-to-t">
				<div className="mt-36 mx-24 flex flex-col">
					<Title>HealthMatters</Title>
					<div className="w-full flex justify-center mt-20">
						<Link className="m-10" href="/home">
							<Button className="cursor-pointer" type="primary">
								Get Started
							</Button>
						</Link>
						<Link className="m-10" href="/login">
							<Button className="cursor-pointer" type="secondary">
								LogIn
							</Button>
						</Link>
					</div>
				</div>
				<Image className="w-1/2" type="medicine" />
			</section>
			<section className="h-screen flex flex-col">
				<div className="w-1/3 ml-auto mr-14">
					<LandingNavbar />
				</div>
				<div className="px-10 h-1/3 w-max relative">
					<Image className="h-full" type="map" />
					<p className="w-max translate-x-full -translate-y-1/2 bg-white rounded-xl shadow-lg p-5 text-xl font-bold">
						find the best <span className="text-kaitoke-green">doctor</span> for
						you
					</p>
				</div>
				<div className="px-10 h-1/3 w-max justify-end self-end">
					<Image className="h-full" type="choose" />
					<p className="w-max -translate-y-1/2 bg-white rounded-xl shadow-lg p-5 text-xl font-bold">
						Choose the service{" "}
						<span className="text-kaitoke-green">you want</span>
					</p>
				</div>
			</section>
			<section className="h-screen flex flex-col">
				<div className="h-1/3 w-max mt-20 m-auto">
					<Image className="h-full" type="pay" />
					<p className="w-max -translate-y-1/2 bg-white rounded-xl shadow-lg p-5 text-xl font-bold">
						Pay the way <span className="text-kaitoke-green">you</span> prefer
					</p>
				</div>
				<div className="self-end p-16 w-full bg-mine-shaft">
					<Link className="text-white text-xl" href="/about">
						about us
					</Link>
				</div>
			</section>
		</Main>
	);
}
