import Container from "@/components/layout/container";
import SignOut from "@/components/sign-out";
import { validateRequest } from "@/lib/validate-user";
import { redirect } from "next/navigation";

export default async function Home() {
	const { user } = await validateRequest();

	if (!user) {
		return redirect("/login");
	}

	return (
		<Container>
			<h1 className="text-2xl">Hi, {user?.username}!</h1>
			<SignOut />
		</Container>
	);
}
