import { redirect } from "next/navigation";

import Container from "@/components/layout/container";
import SiteHeader from "@/components/layout/header/header";
import SiteFooter from "@/components/layout/footer/footer";
import Section from "@/components/layout/section";
import { validateRequest } from "@/lib/validate-user";

export async function generateMetadata() {
	return {
		title: "Settings",
	};
}

const SettingsPage = async () => {
	const { user } = await validateRequest();

	if (!user) {
		redirect("/");
	}

	return (
		<Container>
			<SiteHeader />

			<Section className="min-h-screen">
				<h1 className="text-3xl sm:text-4xl md:text-5xl text-center">
					Settings
				</h1>
			</Section>

			<SiteFooter />
		</Container>
	);
};

export default SettingsPage;
