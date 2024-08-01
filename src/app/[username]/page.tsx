import { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/layout/container";
import { getUserDetails } from "@/data-access/user";
import SiteHeader from "@/components/layout/header/header";
import SiteFooter from "@/components/layout/footer/footer";
import Section from "@/components/layout/section";
import Image from "next/image";
import ProfileMale from "../../../public/user-male.svg";
import ProfileFemale from "../../../public/user-female.svg";
import { Button } from "@/components/ui/button";

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
			<SiteHeader />

			<Section className="min-h-screen">
				<div className="px-6 py-4 rounded-lg border border-border">
					<p className="w-fit text-sm sm:text-base opacity-75 hover:opacity-100 cursor-pointer">
						@{user?.username}
					</p>

					<h3 className="w-fit font-medium text-lg sm:text-xl md:text-2xl capitalize">
						{user?.firstName} {user?.lastName}
					</h3>

					<div className="mt-4 flex justify-end gap-2">
						<Button variant="secondary" size="sm">
							Share
						</Button>

						<Button size="sm">Edit</Button>
					</div>
				</div>
			</Section>

			<SiteFooter />
		</Container>
	);
};

export default ProfilePage;
