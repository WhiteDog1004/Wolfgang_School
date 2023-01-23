import styled from "styled-components";

export const LoadingContainer = styled.div``;
export const LoadingBackgroundBlock = styled.div``;
export const AnimationImage = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	img {
		animation: rotation 1s ease infinite;

		@keyframes rotation {
			0% {
				transform: rotate(0deg);
			}
			20% {
				transform: rotate(-30deg);
			}
			80% {
				transform: rotate(360deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
`;
