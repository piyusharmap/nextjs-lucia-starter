import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { userUpdateAction } from "@/actions/authActions";
import { Loader } from "@/components/loader";
import { FormSkeleton } from "@/components/skeleton/formSkeleton";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import useUserInfo from "@/hooks/useUserInfo";
import { updateUserSchema } from "@/lib/schema/auth";

const UpdateProfileForm = ({
	username,
	setOpen,
}: {
	username: string;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	const { userData, isLoading, isError } = useUserInfo(username);

	const form = useForm<z.infer<typeof updateUserSchema>>({
		resolver: zodResolver(updateUserSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			bio: "",
		},
	});

	useEffect(() => {
		if (userData) {
			form.reset({
				firstName: userData.firstName || "",
				lastName: userData.lastName || "",
				bio: userData.bio || "",
			});
		}
	}, [userData, form]);

	const onSubmit = async (values: z.infer<typeof updateUserSchema>) => {
		if (loading) return;

		setLoading(true);

		try {
			const response = await userUpdateAction({ username, ...values });

			if (response.status) {
				toast({
					title: "Success",
					description: response.message,
				});

				router.refresh();
				setOpen(false);
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
				description: "An error occurred while updating profile.",
			});
		} finally {
			setLoading(false);
		}
	};

	if (isLoading) return <FormSkeleton />;

	if (isError) return null;

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
					name="bio"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel className="ml-1">Bio</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell us a bit about yourself"
									className="resize-none"
									rows={3}
									{...field}
								/>
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
						Update Profile
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default UpdateProfileForm;
