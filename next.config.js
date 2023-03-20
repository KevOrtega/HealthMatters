/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		services_url: "https://healthmattersapi-production.up.railway.app/services",
		specialties_url:
			"https://healthmattersapi-production.up.railway.app/specialties",
	},
};

module.exports = nextConfig;
