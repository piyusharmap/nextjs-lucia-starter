import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import SiteFooter from "@/components/layout/footer/footer";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
	return (
		<Container>
			<Section className="h-screen pt-20 flex flex-col items-center space-y-4">
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

				<Button variant="ghost" className="group" asChild>
					<Link href="/">
						<ArrowLeft
							size={18}
							className="mx-2 group-hover:ml-1 group-hover:mr-3 transition-all"
						/>
						Go Back
					</Link>
				</Button>
			</Section>

			<SiteFooter />
		</Container>
	);
};

export default NotFoundPage;
