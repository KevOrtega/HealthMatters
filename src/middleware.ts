import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	try {
		// const { token } = useUserContext();
		// console.log(await validateDoctorFetcher(token || ""));
		return NextResponse.next();
	} catch (error) {
		return NextResponse.redirect(new URL("/home", request.url));
	}
}

export const config = {
	matcher: ["/profile"],
};
