import styled from "styled-components";
import { checkTypes } from "./Chat.types";

export const ChatContainer = styled.div`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
	width: 100%;
	max-width: 700px;
	margin: 0 auto;
	padding: 20px;
	color: white;
`;
export const ChatBox = styled.div`
	position: relative;
	width: 100%;
	height: 150px;
	display: flex;
	align-items: center;
	padding: 20px;
	background-color: #0000004d;
	border: 1px solid white;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	img {
		margin-right: 20px;
		border: 2px solid white;
		border-radius: 10041004px;
	}
`;
export const ChattingBlock = styled.div`
	min-width: 160px;
	padding: 20px 0;
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
