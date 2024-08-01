import Container from "@/components/layout/container";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme/themeToggle";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container>
			<div className="p-4 flex justify-between">
				<Link href="/" className="group flex items-center space-x-2">
					<Image
						src={Logo}
						alt="Next/Lucia"
						title="Next/Lucia"
						width={100}
						height={100}
						className="size-8 sm:size-10"
					/>

					<p className="hidden sm:block font-medium text-xl group-hover:opacity-75">
						Next/Lucia
					</p>
				</Link>

				<ThemeToggle />
			</div>

			{children}
		</Container>
	);
}
