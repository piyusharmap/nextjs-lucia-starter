import { twMerge } from "tailwind-merge";

const Container = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={twMerge("mx-auto max-w-7xl overflow-hidden", className)}
		>
			{children}
		</div>
	);
};

export default Container;
