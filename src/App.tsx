import { Header } from 'components/Header';
import React, { useState } from 'react';

import { getBestResult, setBestResult } from 'service/localStorage/storeBestResult';
import styled from 'styled-components/macro';
import { PlayerStatus } from 'types/status';

import './App.css';
import { Maze } from './components/Maze';
import { useToggle } from './service/hooks/useToggle';
import { getDatesDiffInMiliSec } from 'service/date/getDatesDiffInMiliSec';

function App() {
  const [isPlaying, setIsPlaying] = useToggle(false);
  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>('none');
  const [startDate, setStartDate] = useState<Date | null>();
  const [lastGameTime, setLastGameTime] = useState(0);

  const handleStartGame = () => {
    setIsPlaying();
    const startDate = new Date();
    setStartDate(startDate);
  };

  const handleEndGame = (isSuccessful: boolean) => {
    setIsPlaying(false);
    if (isSuccessful && startDate && isPlaying) {
      setPlayerStatus('winner');

      const miliseconds = getDatesDiffInMiliSec(startDate);
      setLastGameTime(miliseconds);

      const prevBestResult = getBestResult();
      if ((prevBestResult && parseInt(prevBestResult) > miliseconds) || !prevBestResult) {
        setBestResult(`${miliseconds}`);
      }

      throw `The one - superhero! Speed ${miliseconds}ms`;
    } else {
      setPlayerStatus('loser');
    }
    setStartDate(null);
  };

  return (
    <GameBoard>
      <Header playerStatus={playerStatus} lastGameTime={lastGameTime} />

      <GameBox>
        <Maze
          handleEndGame={handleEndGame}
          handleStartGame={handleStartGame}
          isPlaying={isPlaying}
        />
      </GameBox>
    </GameBoard>
  );
}

export default App;

const GameBoard = styled.div`
  max-width: 1200px;
  width: 90vw;
  height: 90vh;
  max-height: 1000px;
  position: relative;
  margin: auto;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameBox = styled.div`
  width: 600px;
  height: 700px;
  position: relative;
  margin: auto;
`;
