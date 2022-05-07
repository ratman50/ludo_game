import React from 'react'
import Team from '../../Components/Team';

const Table = () => {
  return (
    <div className="table">
        <Team Team={"Team_green"}/>
        <Team Team={"Team_yellow"}/>
        <Team Team={"Team_red"}/>
        <Team Team={"Team_blue"}/>
    </div>
  )
}

export default Table