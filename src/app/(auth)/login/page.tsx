import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/container";
import ThemeToggle from "@/components/theme/themeToggle";
import LoginForm from "../forms/loginForm";

const LoginPage = () => {
	return (
		<Container className="relative p-0 flex flex-col justify-center items-center space-y-4">
			<Image
				src="/logo.svg"
				alt="NEXTxLUCIA"
				width={100}
				height={100}
				className="size-12"
			/>

			<div className="absolute top-0 right-0 m-4">
				<ThemeToggle />
			</div>

			<h2 className="font-medium text-3xl md:text-4xl text-center">
				Login
				<span className="block font-normal text-sm md:text-base text-slate-500">
					to your account
				</span>
			</h2>

			<div className="p-4 w-full sm:max-w-xl">
				<LoginForm />
			</div>

			<p className="px-4 text-sm text-center">
				Don't have an account?{" "}
				<Link
					href="/sign-up"
					className="font-medium underline underline-offset-2"
				>
					Sign up
				</Link>
			</p>
		</Container>
	);
};

export default LoginPage;
