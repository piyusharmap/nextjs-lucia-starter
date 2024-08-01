import Link from "next/link";
import Image from "next/image";

import { validateRequest } from "@/lib/validate-user";
import ProfileDropdown from "./profileDropdown";
import ThemeToggle from "@/components/theme/themeToggle";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

const SiteHeader = async () => {
	const { user } = await validateRequest();

	return (
		<div className="p-4 flex justify-between items-center border-slate-200 dark:border-slate-800">
			<Link href="/" className="flex items-center space-x-2">
				<Image
					src={Logo}
					alt="Next/Lucia"
					title="Next/Lucia"
					width={100}
					height={100}
					className="size-8 sm:size-10"
				/>

				<p className="hidden sm:block font-medium text-xl">
					Next/Lucia
				</p>
			</Link>

			<div className="flex items-center gap-2">
				<ThemeToggle />

				{user ? (
					<ProfileDropdown />
				) : (
					<Button asChild>
						<Link href="/login">Log In</Link>
					</Button>
				)}
			</div>
		</div>
	);
};

export default SiteHeader;
