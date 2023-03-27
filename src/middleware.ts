import { useUserContext } from "@/context/UserProvider";
import { validateDoctorFetcher } from "@/requests";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	try {
		const { token } = useUserContext();
		await validateDoctorFetcher(token || "");
		return NextResponse.next();
	} catch (error) {
		return NextResponse.redirect("/home");
	}
}

export const config = {
	matcher: "/profile",
};
