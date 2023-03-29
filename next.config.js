/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		services_url: "https://healthmattersapi-production.up.railway.app/services",
		specialties_url:
			"https://healthmattersapi-production.up.railway.app/specialties",
		doctors_url: "https://healthmattersapi-production.up.railway.app/doctors",
		login_url: "https://healthmattersapi-production.up.railway.app/auth/login",
		register_url:
			"https://healthmattersapi-production.up.railway.app/auth/register",
		checkout_url: "https://healthmattersapi-production.up.railway.app/checkout",
		NEXT_PUBLIC_MP_PUBLIC_KEY: "TEST-ff31ab94-73af-43dd-94db-cf6f60d7fcc5",
		MERCADO_PAGO_ACCESS_TOKEN:
			"TEST-5930443878939097-032316-10969431732ab08f256002effa02f9d6-659227063",
	},
};

module.exports = nextConfig;
