import Container from "@/components/layout/container";
import Link from "next/link";
import LoginForm from "../forms/loginForm";

const LoginPage = () => {
	return (
		<Container>
			<h1 className="px-4 py-5 font-medium text-xl sm:text-3xl text-center">
				Login
			</h1>

			<div className="px-4 py-5 mx-auto w-full sm:w-4/5 md:w-1/2">
				<LoginForm />
			</div>

			<p className="mt-4 px-4 text-sm text-center">
				Don't have an account?{" "}
				<Link href="/sign-up" className="font-medium">
					Sign up
				</Link>
			</p>
		</Container>
	);
};

export default LoginPage;
