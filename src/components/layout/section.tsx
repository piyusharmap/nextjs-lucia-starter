import { twMerge } from "tailwind-merge";

const Section = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return <div className={twMerge("p-4", className)}>{children}</div>;
};

export default Section;
