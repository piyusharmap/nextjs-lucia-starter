import Link from "next/link";

import SignUpForm from "../forms/signupForm";
import Section from "@/components/layout/section";
import { validateRequest } from "@/lib/validate-user";
import { redirect } from "next/navigation";

export async function generateMetadata() {
	return {
		title: "Sign Up",
	};
}

const SignUpPage = async () => {
	const { user } = await validateRequest();

	if (user) {
		redirect("/");
	}

	return (
		<Section className="h-screen pt-20 flex flex-col items-center">
			<h2 className="py-2 font-medium text-2xl sm:text-3xl md:text-4xl text-center">
				Create Account
			</h2>

			<p className="px-4 text-sm text-slate-500 text-center">
				Already a user?{" "}
				<Link
					href="/login"
					className="font-medium text-primary hover:underline underline-offset-2"
				>
					Login
				</Link>
			</p>

			<div className="mt-8 md:mt-10 w-full max-w-md">
				<SignUpForm />
			</div>
		</Section>
	);
};

export default SignUpPage;
