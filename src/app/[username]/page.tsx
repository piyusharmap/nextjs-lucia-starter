import { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/layout/container";
import { getUserDetails } from "@/data-access/user";
import SiteHeader from "@/components/layout/header/header";
import SiteFooter from "@/components/layout/footer/footer";
import Section from "@/components/layout/section";
import { Label } from "@/components/ui/label";
import UpdateProfileDialog from "./components/updateProfileDialog";

export const revalidate = 0;

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
				<div className="p-4 sm:w-full sm:max-w-md rounded-lg border border-border">
					<p className="w-fit text-sm sm:text-base opacity-75 hover:opacity-100">
						@{user?.username}
					</p>

					<h3 className="mb-1 w-fit font-medium text-lg sm:text-xl md:text-2xl capitalize">
						{user?.firstName} {user?.lastName}
					</h3>

					<Label className="text-slate-500">Bio</Label>
					{user?.bio ? (
						<p className="text-sm sm:text-base">{user?.bio}</p>
					) : (
						<p className="text-sm sm:text-base italic opacity-75">
							Tell us a little bit about yourself
						</p>
					)}

					<div className="mt-2 flex justify-end gap-2">
						<UpdateProfileDialog
							username={params.username}
							updatedAt={user.updatedAt}
						/>
					</div>
				</div>
			</Section>

			<SiteFooter />
		</Container>
	);
};

export default ProfilePage;
