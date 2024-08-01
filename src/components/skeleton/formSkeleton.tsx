import { Skeleton } from "../ui/skeleton";

export const FormSkeleton = () => {
	return (
		<div className="space-y-4">
			<div className="pt-2 space-y-2">
				<Skeleton className="h-4 w-1/4 rounded-full" />
				<Skeleton className="h-10 w-full rounded-lg" />
			</div>

			<div className="pt-2 space-y-2">
				<Skeleton className="h-4 w-1/4 rounded-full" />
				<Skeleton className="h-10 w-full rounded-lg" />
			</div>

			<div className="pt-2 space-y-2">
				<Skeleton className="h-4 w-1/4 rounded-full" />
				<Skeleton className="h-20 w-full rounded-lg" />
			</div>

			<div className="pt-4">
				<Skeleton className="w-full h-10 float-right" />
			</div>
		</div>
	);
};
