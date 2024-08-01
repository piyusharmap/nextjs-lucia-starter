"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, EyeIcon, EyeOffIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { userSignupAction } from "@/actions/authActions";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { userSignupSchema } from "@/lib/schema/auth";

const SignUpForm = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof userSignupSchema>>({
		resolver: zodResolver(userSignupSchema),
		defaultValues: {
			username: "",
			firstName: "",
			lastName: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof userSignupSchema>) => {
		if (loading) return;

		setLoading(true);

		try {
			const response = await userSignupAction(values);

			if (response.status) {
				toast({
					title: "Success",
					description: response.message,
				});

				router.push("/");
			} else {
				toast({
					variant: "destructive",
					title: "Error",
					description: response.message,
				});
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: "An error occurred while signing up.",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-cols-2 gap-4"
			>
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem className="col-span-2 sm:col-span-1">
							<FormLabel className="ml-1">First Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter first name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem className="col-span-2 sm:col-span-1">
							<FormLabel className="ml-1">Last Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter last name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel className="ml-1">Username</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter username"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel className="ml-1">Password</FormLabel>
							<FormControl>
								<div className="relative">
									<Input
										type={
											showPassword ? "text" : "password"
										}
										placeholder="Enter password"
										{...field}
									/>
									<div
										className="h-full p-2 absolute top-0 right-0 flex items-center"
										onClick={() =>
											setShowPassword(
												(prevVal) => !prevVal
											)
										}
									>
										{showPassword ? (
											<EyeOffIcon size={16} />
										) : (
											<EyeIcon size={16} />
										)}
									</div>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="pt-4 col-span-2">
					<Button
						type="submit"
						disabled={loading}
						className="group w-full"
					>
						{loading && <Loader className="mr-2" />}
						Continue
						{!loading && (
							<ArrowRight
								size={16}
								className="mx-2 group-hover:ml-3 group-hover:mr-1 transition-all"
							/>
						)}
					</Button>
				</div>
			</form>

			<p className="pt-6 text-sm sm:text-base text-slate-500 text-center">
				By creating an account on Next/Lucia, you agree to our Terms and
				Policies.
			</p>
		</Form>
	);
};

export default SignUpForm;
