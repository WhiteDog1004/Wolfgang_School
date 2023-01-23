import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { umbra } from "./Loading.const";
import {
	AnimationImage,
	LoadingBackgroundBlock,
	LoadingContainer,
} from "./Loading.styled";

export const Loading = () => {
	const [ranNumber, setRanNumber] = useState<number>(0);

	const timer = useCallback(() => {
		setInterval(() => {
			setRanNumber(Math.floor(Math.random() * (umbra.length - 1)));
		}, 1000);
	}, []);

	useEffect(() => {
		timer();
	}, [timer]);

	useEffect(() => {
		console.log(ranNumber);
	}, [ranNumber]);

	return (
		<LoadingContainer>
			<AnimationImage>
				<Image
					src={umbra[ranNumber]}
					width={50}
					height={50}
					alt=""
					priority
				/>
			</AnimationImage>
			<LoadingBackgroundBlock />
		</LoadingContainer>
	);
};
