import Container from "@/components/layout/container";
import SiteFooter from "@/components/layout/footer/footer";
import SiteHeader from "@/components/layout/header/header";
import Section from "@/components/layout/section";

export default async function Home() {
	return (
		<Container>
			<SiteHeader />

			<Section className="min-h-screen">Features</Section>

			<SiteFooter />
		</Container>
	);
}
