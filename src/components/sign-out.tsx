import { userLogoutAction } from "@/actions/authActions";
import { Button } from "./ui/button";

export default async function SignOut() {
	return (
		<form action={userLogoutAction}>
			<Button>Sign out</Button>
		</form>
	);
}
