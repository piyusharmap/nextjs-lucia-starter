import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

const SiteFooter = () => {
	return (
		<div className="p-4 border-t border-border space-y-1">
			<div className="flex items-center space-x-2">
				<Image
					src={Logo}
					alt="Next/Lucia"
					title="Next/Lucia"
					width={100}
					height={100}
					className="size-6 sm:size-8"
				/>

				<p className="font-medium text-lg sm:text-xl">Next/Lucia</p>
			</div>

			<p className="text-xs sm:text-sm text-slate-500">
				Next/Lucia Starter Project, 2024, All rights reserved
			</p>

			<div className="pt-6 px-4 flex justify-center flex-wrap gap-4">
				<Link
					href="#"
					className="text-sm sm:text-base text-slate-500 hover:underline"
				>
					Terms of Use
				</Link>

				<Link
					href="#"
					className="text-sm sm:text-base text-slate-500 hover:underline"
				>
					Privacy Policy
				</Link>
			</div>
		</div>
	);
};

export default SiteFooter;
