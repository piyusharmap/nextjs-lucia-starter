import Image from "next/image";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import SiteHeader from "@/components/layout/header/header";
import SiteFooter from "@/components/layout/footer/footer";

const NotFoundPage = () => {
	return (
		<Container>
			<SiteHeader />

			<Section className="h-screen pt-20 flex flex-col items-center space-y-2">
				<Image
					src="/not-found.svg"
					alt="Page not found"
					width={300}
					height={300}
					className="size-40 md:size-60"
				/>

				<h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center">
					404{" "}
					<span className="block font-normal text-xl sm:text-2xl md:text-3xl text-slate-500">
						Page not found
					</span>
				</h2>
			</Section>

			<SiteFooter />
		</Container>
	);
};

export default NotFoundPage;
