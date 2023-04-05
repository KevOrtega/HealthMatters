/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		services_url: "https://healthmattersapi-production.up.railway.app/services",
		specialties_url:
			"https://healthmattersapi-production.up.railway.app/specialties",
		doctors_url: "https://healthmattersapi-production.up.railway.app/doctors",
		login_url: "https://healthmattersapi-production.up.railway.app/auth/login",
		logout_url:
			"https://healthmattersapi-production.up.railway.app/auth/logout",
		register_url:
			"https://healthmattersapi-production.up.railway.app/auth/register",
		user_url: "https://healthmattersapi-production.up.railway.app/profile",
		checkout_url: "https://healthmattersapi-production.up.railway.app/checkout",
		validate_doctor_url:
			"https://healthmattersapi-production.up.railway.app/profile/doctor",
		validate_admin_url:
			"https://healthmattersapi-production.up.railway.app/profile/admin",
		dates_url: "https://healthmattersapi-production.up.railway.app/dates",
		users_url: "https://healthmattersapi-production.up.railway.app/users",
		google_login_url:
			"https://healthmattersapi-production.up.railway.app/auth/google",
		// services_url: "http://localhost:3001/services",
		// specialties_url: "http://localhost:3001/specialties",
		// doctors_url: "http://localhost:3001/doctors",
		// login_url: "http://localhost:3001/auth/login",
		// logout_url: "http://localhost:3001/auth/logout",
		// register_url: "http://localhost:3001/auth/register",
		// checkout_url: "http://localhost:3001/checkout",
		// validate_doctor_url: "https://healthmattersapi-production.up.railway.app/profile/doctor",
		// dates_url: "http://localhost:3001/dates",
		// users_url: "http://localhost:3001/users",
		// google_login_url: "http://localhost:3001/auth/google",
	},
};

module.exports = nextConfig;
