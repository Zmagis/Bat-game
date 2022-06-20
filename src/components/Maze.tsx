import React from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as FinishIcon } from 'assets/finish.svg';
import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';
import batSvg from 'assets/bat.svg';

type Props = {
  isPlaying: boolean;
  handleEndGame: (isSuccessful: boolean) => void;
  handleStartGame: () => void;
};

export const Maze: React.FC<Props> = ({ isPlaying, handleStartGame, handleEndGame }) => {
  const handleMouseLeave = () => {
    isPlaying && handleEndGame(false);
  };

  const handleFinish = () => {
    handleEndGame(true);
  };

  return (
    <MazeWalls>
      <MazeTunnel isActive={isPlaying} batSvg={batSvg} onPointerLeave={handleMouseLeave}>
        {!isPlaying && (
          <StartButton onClick={handleStartGame}>
            <ArrowIcon />
          </StartButton>
        )}
        <Finish onPointerEnter={handleFinish}>
          <FinishIcon />
        </Finish>
      </MazeTunnel>
    </MazeWalls>
  );
};

const MazeTunnel = styled.div<{ isActive: boolean; batSvg: string }>`
  background: rgb(0, 35, 100);
  height: 100%;
  width: 100%;

  clip-path: polygon(
    2% 2%,
    2% 100%,
    25% 100%,
    25% 10%,
    84% 10%,
    84% 40%,
    86% 40%,
    86% 50%,
    84% 50%,
    84% 100%,
    95% 100%,
    95% 50%,
    92% 50%,
    92% 40%,
    95% 40%,
    95% 2%
  );

  ${({ isActive }) =>
    isActive ? `cursor: url('${window.location.origin + batSvg}') 15 15, auto;` : 'cursor: auto;'}
`;

const MazeWalls = styled.div`
  background: rgb(0, 20, 58);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  clip-path: polygon(
    0 0,
    0% 100%,
    30% 100%,
    30% 13%,
    82% 13%,
    82% 40%,
    84% 40%,
    84% 50%,
    82% 50%,
    82% 100%,
    100% 100%,
    100% 50%,
    96% 50%,
    96% 40%,
    100% 40%,
    100% 0
  );
`;

const StartButton = styled.button`
  position: absolute;
  bottom: 5%;
  left: 7%;
  padding: 5px 10px;
  width: 12%;
  background: transparent;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  -webkit-animation: MoveUpDown 2s ease-in-out infinite;

  svg {
    fill: #fff;
  }

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 1%;
    }
    50% {
      bottom: 2%;
    }
  }
`;

const Finish = styled.div`
  position: absolute;
  bottom: 1%;
  left: 86%;

  svg {
    height: 40px;

    path {
      fill: #fff;
      stroke: #fff;
    }
  }
`;
