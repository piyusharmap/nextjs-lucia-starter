import Link from "next/link";
import { redirect } from "next/navigation";

import LoginForm from "../forms/loginForm";
import Section from "@/components/layout/section";
import { validateRequest } from "@/lib/validate-user";

export async function generateMetadata() {
	return {
		title: "Login",
	};
}

const LoginPage = async () => {
	const { user } = await validateRequest();
	if (user) {
		redirect("/");
	}

	return (
		<Section className="h-screen pt-20 flex flex-col items-center">
			<h2 className="py-2 font-medium text-2xl sm:text-3xl md:text-4xl text-center">
				Login
			</h2>

			<p className="px-4 text-sm text-slate-500 text-center">
				Don't have an account?{" "}
				<Link
					href="/sign-up"
					className="font-medium text-primary hover:underline underline-offset-2"
				>
					Sign up
				</Link>
			</p>

			<div className="mt-8 md:mt-10 w-full max-w-md">
				<LoginForm />
			</div>
		</Section>
	);
};

export default LoginPage;
