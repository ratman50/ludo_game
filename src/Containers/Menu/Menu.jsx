import React ,{useContext}from 'react';
import { GameContext } from '../../Context/GameContext';
import Board from './Board';
import './Menu.css';

const Menu = () => {
    const {setGameOver, gameOver}=useContext(GameContext);
    const handleGame=()=>{
        setGameOver(false)
    }
  return (
    <div>
        {
            gameOver ?
                <div className='Menu'>
                    <div className="Menu__description">
                        <button 
                                className="Menu__button_play"
                                onClick={handleGame}>
                        Play Game</button>
                    </div>
                </div>
            :
            <Board/>
        }
    </div>
  )
}

export default Menu