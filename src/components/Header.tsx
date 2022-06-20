import React from 'react';
import styled from 'styled-components/macro';
import { PlayerStatus } from 'types/status';

type Props = { playerStatus: PlayerStatus; lastGameTime: number };

export const Header: React.FC<Props> = ({ playerStatus, lastGameTime }) => {
  const getHeaderDescription = () => {
    let text: string;
    switch (playerStatus) {
      case 'loser':
        text = 'You never lose - you win or you learn! Try again';
        break;
      case 'none':
        text = 'Welcome to the game. Press on arrow to start.';
        break;
      case 'winner':
        text = `Congratulations! Your time is ${lastGameTime}ms.`;
        break;
    }
    return text;
  };

  return (
    <HeaderWrapper>
      <h1>Tunnel</h1>
      <p>{getHeaderDescription()}</p>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 600px;
`;
