"use client";

import * as React from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeToggle = () => {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun
						size={20}
						className="block dark:hidden transition-all"
					/>

					<Moon
						size={20}
						className="hidden dark:block transition-all"
					/>

					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					<Sun size={20} className="mr-2" />
					Light
				</DropdownMenuItem>

				<DropdownMenuItem onClick={() => setTheme("dark")}>
					<Moon size={20} className="mr-2" />
					Dark
				</DropdownMenuItem>

				<DropdownMenuItem onClick={() => setTheme("system")}>
					<Laptop size={20} className="mr-2" />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ThemeToggle;
