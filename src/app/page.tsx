import FeaturesGrid from "@/components/featuresGrid";
import Container from "@/components/layout/container";
import Header from "@/components/layout/header/header";

export default async function Home() {
	return (
		<Container>
			<Header />

			<FeaturesGrid />
		</Container>
	);
}
