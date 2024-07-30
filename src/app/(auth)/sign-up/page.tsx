import Container from "@/components/layout/container";
import SignUpForm from "../forms/signupForm";
import Link from "next/link";

const SignUpPage = () => {
	return (
		<Container>
			<h1 className="px-4 py-5 font-medium text-xl sm:text-3xl text-center">
				Create an account
			</h1>

			<div className="px-4 py-5 mx-auto w-full sm:w-4/5 md:w-1/2">
				<SignUpForm />
			</div>

			<p className="mt-4 px-4 text-sm text-center">
				Already have an account?{" "}
				<Link href="/login" className="font-medium">
					Login
				</Link>
			</p>
		</Container>
	);
};

export default SignUpPage;
