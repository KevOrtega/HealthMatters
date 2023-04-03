export interface Date {
	id: number;
	date: string;
	customer: string;
	amount: number;
}

export type iPatient = {
	name: string;
	surname: string;
	email: string;
};

export * from "./props";
export * from "./service";
export * from "./credentials";
export * from "./user";
export * from "./specialty";
export * from "./doctor";
