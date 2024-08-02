"use client";

import { useState } from "react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UpdateProfileForm from "./updateProfileForm";
import { formatDate } from "@/utils/formatDate";

const UpdateProfileDialog = ({
	id,
	username,
	updatedAt,
}: {
	id: string;
	username: string;
	updatedAt: Date;
}) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="sm">Edit</Button>
			</DialogTrigger>

			<DialogContent className="max-h-[80vh] overflow-auto">
				<DialogHeader>
					<DialogTitle>Edit Profile</DialogTitle>
					<DialogDescription>
						Last updated: {formatDate(updatedAt)}
					</DialogDescription>
				</DialogHeader>

				<UpdateProfileForm
					id={id}
					username={username}
					setOpen={setOpen}
				/>
			</DialogContent>
		</Dialog>
	);
};

export default UpdateProfileDialog;
