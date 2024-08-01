import { getUserInfoAction } from "@/actions/userActions";
import useSWR from "swr";

export default function useUserInfo(username: string) {
	const { data, isLoading, error } = useSWR(`/${username}`, () =>
		getUserInfoAction(username)
	);

	return {
		userData: data,
		isLoading,
		isError: error,
	};
}
