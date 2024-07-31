"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { userLogoutAction } from "@/actions/authActions";
import { Button } from "../ui/button";
import { Loader } from "../loader";
import { toast } from "../ui/use-toast";

const LogoutButton = () => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (loading) return;

		setLoading(true);

		try {
			const response = await userLogoutAction();

			console.log(response);

			if (response.status) {
				toast({
					title: "Success",
					description: response.message,
				});
			} else {
				toast({
					variant: "destructive",
					title: "Error",
					description: response.message,
				});
			}
			router.push("/");
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: "An error occurred while logging out.",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<Button type="submit" disabled={loading} className="w-full">
				{loading && <Loader className="mr-2" />} Logout
			</Button>
		</form>
	);
};

export default LogoutButton;
