import { getUserInfoAction } from "@/actions/userActions";
import useSWR from "swr";

export default function useUserInfo({
	id,
	username,
}: {
	id: string;
	username: string;
}) {
	const { data, isLoading, error } = useSWR(`/${id}`, () =>
		getUserInfoAction(username)
	);

	return {
		userData: data,
		isLoading,
		isError: error,
	};
}
