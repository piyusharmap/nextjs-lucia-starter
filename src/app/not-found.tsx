import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
	return (
		<Container className="flex flex-col justify-center items-center space-y-4">
			<Image
				src="/logo.svg"
				alt="NEXTxLUCIA"
				width={100}
				height={100}
				className="size-20"
			/>

			<h2 className="text-3xl sm:text-4xl md:text-5xl text-center">
				Page not found
			</h2>

			<Button variant="link" className="group" asChild>
				<Link href="/">
					<ArrowLeft
						size={16}
						className="mx-2 inline-block group-hover:ml-1 group-hover:mr-3 transition-all"
					/>
					Go back
				</Link>
			</Button>
		</Container>
	);
};

export default NotFoundPage;
