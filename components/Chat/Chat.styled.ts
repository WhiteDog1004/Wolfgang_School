import styled from "styled-components";
import { checkTypes } from "./Chat.types";

export const ChatContainer = styled.div`
	max-width: 700px;
	margin: 0 auto;
	padding: 20px;
	color: white;
`;
export const ChatBox = styled.div`
	position: relative;
	width: 100%;
	border: 1px solid white;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	display: flex;
	align-items: center;
	img {
		margin: 20px;
		border: 2px solid white;
		border-radius: 10041004px;
	}
`;
export const ChattingBlock = styled.div`
	padding: 20px;
`;
export const ButtonBox = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 100px;
	height: 35px;
`;
export const PrevButton = styled.button<checkTypes>`
	position: absolute;
	top: 0;
	left: 0;
	padding: 10px;
	border: 0;
	color: white;
	background-color: transparent;
	cursor: pointer;
	opacity: ${({ prevCheck }) => (prevCheck ? "0.5" : "1")};

	&:hover {
		color: ${({ prevCheck }) => (prevCheck ? "#ffffff" : "red")};
		background-color: ${({ prevCheck }) =>
			prevCheck ? "transparent" : "#111111"};
		transition: background-color 0.25s;
		cursor: ${({ prevCheck }) => (prevCheck ? "default" : "pointer")};
	}
`;
export const NextButton = styled.button<checkTypes>`
	position: absolute;
	top: 0;
	right: 0;
	padding: 10px;
	border: 0;
	color: white;
	background-color: transparent;
	cursor: pointer;
	opacity: ${({ nextCheck }) => (nextCheck ? "0.5" : "1")};

	&:hover {
		color: ${({ nextCheck }) => (nextCheck ? "#ffffff" : "red")};
		background-color: ${({ nextCheck }) =>
			nextCheck ? "transparent" : "#111111"};
		transition: background-color 0.25s;
		cursor: ${({ nextCheck }) => (nextCheck ? "default" : "pointer")};
	}
`;
