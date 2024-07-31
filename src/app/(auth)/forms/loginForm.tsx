"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, EyeIcon, EyeOffIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { userLoginAction } from "@/actions/authActions";
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
import { userLoginSchema } from "@/lib/schema/auth";

const LoginForm = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof userLoginSchema>>({
		resolver: zodResolver(userLoginSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof userLoginSchema>) => {
		if (loading) return;

		setLoading(true);

		try {
			const response = await userLoginAction(values);

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
				description: "An error occurred while logging in.",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
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
						<FormItem>
							<FormLabel className="ml-1">Password</FormLabel>
							<FormControl>
								<div className="relative">
									<Input
										type={
											showPassword ? "text" : "password"
										}
										placeholder="Enter password"
										{...field}
										onChange={field.onChange}
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

				<div className="pt-4">
					<Button
						type="submit"
						disabled={loading}
						className="group w-full"
					>
						{loading && <Loader className="mr-2" />}
						Login
						{!loading && (
							<ArrowRight
								size={16}
								className="mx-2 group-hover:ml-3 group-hover:mr-1 transition-all"
							/>
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default LoginForm;
