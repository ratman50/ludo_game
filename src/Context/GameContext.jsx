import React from 'react';
import { createContext, useState } from 'react';

export const GameContext=createContext({});
const GameProvider = ({children}) => {

    const [gameOver, setGameOver]=useState(true);
  return (
    <GameContext.Provider value={{gameOver, setGameOver}}>
        {children}
    </GameContext.Provider>
  )
}

export default GameProvider