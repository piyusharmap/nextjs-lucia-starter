import Logo from "@/components/logo";
import Image from "next/image";

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
				2024, Next/Lucia Starter Project, All rights reserved
			</p>
		</div>
	);
};

export default SiteFooter;
