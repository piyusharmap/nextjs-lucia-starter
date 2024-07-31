import { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/layout/container";
import Header from "@/components/layout/header/header";
import { getUserDetails } from "@/data-access/user";

export async function generateMetadata({
	params,
}: {
	params: { username: string };
}): Promise<Metadata> {
	const username = params.username;

	return {
		title: `${username}`,
	};
}

const ProfilePage = async ({
	params,
}: {
	params: {
		username: string;
	};
}) => {
	const user = await getUserDetails({ username: params.username });

	if (!user) {
		notFound();
	}

	return (
		<Container>
			<Header />
		</Container>
	);
};

export default ProfilePage;
