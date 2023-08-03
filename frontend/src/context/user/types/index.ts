export type TUser = {
	id: string;
	username: string;
	email: string;
	emailStatus: boolean;
	firstName: string | null;
	lastName: string | null;
	bio: string | null;
	createdAt: Date;
	alteredAt: Date;
};
