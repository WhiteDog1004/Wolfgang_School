import { Chat } from "@/components/Chat";
import { Loading } from "@/components/Loading";
import { SchoolMain } from "@/components/SchoolMain";

export default function Home() {
	return (
		<>
			<SchoolMain />
			<Loading />
			<Chat />
		</>
	);
}
