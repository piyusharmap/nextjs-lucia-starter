import Link from "next/link";
import Image from "next/image";

import { validateRequest } from "@/lib/validate-user";
import ProfileDropdown from "./profileDropdown";
import ThemeToggle from "@/components/theme/themeToggle";
import { Button } from "@/components/ui/button";

const Header = async () => {
	const { user } = await validateRequest();

	return (
		<div className="px-5 py-4 flex justify-between items-center border-slate-200 dark:border-slate-800">
			<Link href="/" className="group flex items-center space-x-2">
				<Image
					src="/logo.svg"
					alt="NEXTxLUCIA"
					width={100}
					height={100}
					className="size-8 sm:size-10"
				/>

				<p className="font-medium text-xl">
					NEXT<span className="text-slate-500">x</span>LUCIA
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

export default Header;
