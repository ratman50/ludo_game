import './Board.css';

import React from 'react'
import Table from './Table';

const Board = () => {
  return (
        <div className='Board'>
            <div className="deco">
              <div className="green"></div>
              <div className="yellow"></div>
              <div className="blue"></div>
              <div className="red"></div>
            </div>
            <Table/>
        </div>
  )
}

export default Board