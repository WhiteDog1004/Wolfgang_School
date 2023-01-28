import styled from 'styled-components';
import { LobbyCheckTypes } from './SchoolLobby.types';

export const LobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 700px;
  height: 100vh;
  padding: 20px;
  margin: 0 auto;
  color: white;
`;

export const LobbyChatContainer = styled.div`
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
export const LobbyChatBox = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #0000004d;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  img {
    min-width: 100px;
    margin-right: 20px;
    border: 2px solid white;
    border-radius: 10041004px;
  }
`;
export const LobbyChattingBlock = styled.div`
  min-width: 160px;
  padding: 20px 0;
  white-space: pre-line;
`;

export const LobbyPrevButton = styled.button<LobbyCheckTypes>`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  border: 0;
  color: white;
  background-color: transparent;
  cursor: pointer;
  opacity: ${({ prevCheck }) => (prevCheck ? '0.5' : '1')};

  &:hover {
    color: ${({ prevCheck }) => (prevCheck ? '#ffffff' : 'red')};
    background-color: ${({ prevCheck }) => (prevCheck ? 'transparent' : '#1111114d')};
    transition: background-color 0.25s;
    cursor: ${({ prevCheck }) => (prevCheck ? 'default' : 'pointer')};
  }
`;
export const LobbyNextButton = styled.button<LobbyCheckTypes>`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  border: 0;
  color: white;
  background-color: transparent;
  cursor: pointer;
  opacity: ${({ nextCheck }) => (nextCheck ? '0.5' : '1')};

  &:hover {
    color: ${({ nextCheck }) => (nextCheck ? '#ffffff' : 'red')};
    background-color: ${({ nextCheck }) => (nextCheck ? 'transparent' : '#1111114d')};
    transition: background-color 0.25s;
    cursor: ${({ nextCheck }) => (nextCheck ? 'default' : 'pointer')};
  }
`;
