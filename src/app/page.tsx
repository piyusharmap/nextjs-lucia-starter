import { ArrowUpRight, CheckCircle } from "lucide-react";

import Container from "@/components/layout/container";
import SiteFooter from "@/components/layout/footer/footer";
import SiteHeader from "@/components/layout/header/header";
import Section from "@/components/layout/section";
import Link from "next/link";

export default async function Home() {
	return (
		<Container>
			<SiteHeader />

			<Section className="mt-20 min-h-screen space-y-6">
				<h1 className="font-medium text-3xl sm:text-4xl md:text-5xl text-center">
					Next.js x Lucia Auth
				</h1>

				<div className="mx-auto max-w-lg p-4 rounded-lg border border-border space-y-4">
					<h3 className="text-lg sm:text-xl">
						What you&apos;ll find in this starter project:
					</h3>

					<ul className="space-y-2">
						<li>
							<CheckCircle
								size={18}
								className="inline-block mr-2 text-green-500"
							/>{" "}
							Next.js App Router
						</li>

						<li>
							<CheckCircle
								size={18}
								className="inline-block mr-2 text-green-500"
							/>{" "}
							Authentication with Lucia Auth
						</li>

						<li>
							<CheckCircle
								size={18}
								className="inline-block mr-2 text-green-500"
							/>{" "}
							Drizzle ORM Setup
						</li>

						<li>
							<CheckCircle
								size={18}
								className="inline-block mr-2 text-green-500"
							/>{" "}
							Shadcn UI Components
						</li>

						<li>
							<CheckCircle
								size={18}
								className="inline-block mr-2 text-green-500"
							/>{" "}
							React Hook Forms
						</li>

						<li>
							<CheckCircle
								size={18}
								className="inline-block mr-2 text-green-500"
							/>{" "}
							SWR Hooks for Data Fetching
						</li>
					</ul>
				</div>

				<div className="mx-auto max-w-xl p-6 flex justify-evenly flex-wrap gap-4">
					<Link
						href="https://lucia-auth.com/"
						className="text-xl sm:text-2xl hover:text-slate-500"
					>
						Lucia{" "}
						<ArrowUpRight size={18} className="inline-block" />
					</Link>

					<Link
						href="https://orm.drizzle.team/"
						className="text-xl sm:text-2xl hover:text-slate-500"
					>
						Drizzle{" "}
						<ArrowUpRight size={18} className="inline-block" />
					</Link>

					<Link
						href="https://ui.shadcn.com/"
						className="text-xl sm:text-2xl hover:text-slate-500"
					>
						Shadcn{" "}
						<ArrowUpRight size={18} className="inline-block" />
					</Link>
				</div>
			</Section>

			<SiteFooter />
		</Container>
	);
}
