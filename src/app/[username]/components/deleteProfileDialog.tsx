"use client";

import { useState } from "react";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Loader } from "@/components/loader";
import { userDeleteAction } from "@/actions/authActions";
import { useRouter } from "next/navigation";

const DeleteProfileDialog = ({ username }: { username: string }) => {
	const router = useRouter();
	const [open, setOpen] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const handleDelete = async () => {
		setLoading(true);

		try {
			const response = await userDeleteAction({ username });

			if (response.status) {
				toast({
					title: "Success",
					description: response.message,
				});

				setOpen(false);

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
				description: "An error occurred while deleting user profile.",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="sm" variant="destructive">
					Delete
				</Button>
			</DialogTrigger>

			<DialogContent className="max-h-[80vh] overflow-auto">
				<DialogHeader>
					<DialogTitle>Delete Profile</DialogTitle>
				</DialogHeader>

				<p>Are you sure you want to delete your profile?</p>

				<div className="flex justify-end">
					<Button
						variant="destructive"
						disabled={loading}
						onClick={handleDelete}
					>
						{loading && <Loader className="mr-2" />}
						Yes, Delete
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteProfileDialog;
