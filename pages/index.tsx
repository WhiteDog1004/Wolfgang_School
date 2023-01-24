import { Chat } from "@/components/Chat";
import { SchoolMain } from "@/components/SchoolMain";
import { useState } from "react";

export default function Home() {
	const [nextPageCheck, setNextPageCheck] = useState<boolean>(false);
	return (
		<>
			<SchoolMain nextPageCheck={nextPageCheck} />
			<Chat setNextPageCheck={setNextPageCheck} />
		</>
	);
}
