import Link from "next/link";
import { Settings2, User, User2 } from "lucide-react";

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
					<User size={18} />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="w-44 overflow-hidden">
				<DropdownMenuItem asChild>
					<Link href={`/${user?.username}`}>
						<User2 size={18} className="mr-2" /> {user?.username}
					</Link>
				</DropdownMenuItem>

				<DropdownMenuItem asChild>
					<Link href="/settings">
						<Settings2 size={18} className="mr-2" /> Settings
					</Link>
				</DropdownMenuItem>

				<DropdownMenuSeparator />

				<LogoutButton />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ProfileDropdown;
