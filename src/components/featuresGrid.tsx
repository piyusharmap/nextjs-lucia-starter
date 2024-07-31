import { CheckCircle } from "lucide-react";
import Link from "next/link";

const FeaturesGrid = () => {
	return (
		<div className="mx-auto w-full lg:w-4/5 p-4 grid grid-cols-4 gap-2">
			<div className="p-4 row-span-2 col-span-4 md:col-span-2 flex flex-col items-center justify-center border border-slate-500/25 rounded-3xl space-y-4">
				<ul>
					<li className="pl-2 pt-2 text-base md:text-lg text-left md:text-center">
						<CheckCircle
							size={18}
							className="mr-2 inline-block text-green-500"
						/>
						Next.js with App Router
					</li>

					<li className="pl-2 pt-2 text-base md:text-lg text-left md:text-center">
						<CheckCircle
							size={18}
							className="mr-2 inline-block text-green-500"
						/>
						Authentication with Lucia Auth
					</li>

					<li className="pl-2 pt-2 text-base md:text-lg text-left md:text-center">
						<CheckCircle
							size={18}
							className="mr-2 inline-block text-green-500"
						/>
						Drizzle ORM Setup
					</li>

					<li className="pl-2 pt-2 text-base md:text-lg text-left md:text-center">
						<CheckCircle
							size={18}
							className="mr-2 inline-block text-green-500"
						/>
						Shadcn UI Components
					</li>
				</ul>
			</div>

			<div className="group h-32 sm:h-48 p-4 row-span-1 col-span-2 md:col-span-1 flex items-center justify-center rounded-3xl bg-slate-500/10">
				<Link
					href="https://nextjs.org/"
					className="font-medium text-xl md:text-2xl text-center group-hover:underline underline-offset-2"
				>
					Next.js
				</Link>
			</div>

			<div className="group h-32 sm:h-48 p-4 row-span-1 col-span-2 md:col-span-1 flex items-center justify-center rounded-3xl bg-slate-500/10">
				<Link
					href="https://lucia-auth.com/"
					className="font-medium text-xl md:text-2xl text-center group-hover:underline underline-offset-2"
				>
					Lucia Auth
				</Link>
			</div>

			<div className="group h-32 sm:h-48 p-4 row-span-1 col-span-2 md:col-span-1 flex items-center justify-center rounded-3xl bg-slate-500/10">
				<Link
					href="https://orm.drizzle.team/"
					className="font-medium text-xl md:text-2xl text-center group-hover:underline underline-offset-2"
				>
					Drizzle
				</Link>
			</div>

			<div className="group h-32 sm:h-48 p-4 row-span-1 col-span-2 md:col-span-1 flex items-center justify-center rounded-3xl bg-slate-500/10">
				<Link
					href="https://ui.shadcn.com/"
					className="font-medium text-xl md:text-2xl text-center group-hover:underline underline-offset-2"
				>
					Shadcn UI
				</Link>
			</div>
		</div>
	);
};

export default FeaturesGrid;
