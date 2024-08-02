import Section from "@/components/layout/section";
import { Loader } from "@/components/loader";

const Loading = () => {
	return (
		<Section className="min-h-screen">
			<div className="p-4 flex items-center justify-center">
				<Loader className="mx-auto" />
			</div>
		</Section>
	);
};

export default Loading;
