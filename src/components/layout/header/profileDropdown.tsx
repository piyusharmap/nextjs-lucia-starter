import Link from "next/link";
import { Settings2, User2 } from "lucide-react";

import LogoutButton from "@/components/button/logoutButton";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { validateRequest } from "@/lib/validate-user";

const ProfileDropdown = async () => {
	const { user } = await validateRequest();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<User2 size={20} />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="w-44 overflow-hidden">
				<div className="px-2 py-1">
					<p className="font-medium">
						<span className="block font-normal text-xs sm:text-sm text-slate-500">
							logged in as
						</span>
						{user?.username}
					</p>
				</div>

				<DropdownMenuSeparator />

				<DropdownMenuItem asChild>
					<Link
						href={`/${user?.username}`}
						className="flex overflow-hidden"
					>
						<User2 size={18} className="mr-2" />
						<p className="flex-1 truncate">Profile</p>
					</Link>
				</DropdownMenuItem>

				<DropdownMenuItem asChild>
					<Link href="/settings">
						<Settings2 size={18} className="mr-2" />
						<p>Settings</p>
					</Link>
				</DropdownMenuItem>

				<DropdownMenuSeparator />

				<LogoutButton />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ProfileDropdown;
