import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
// addCard,
// moveCard,
  selectBoard
} from './features/board/boardSlice'

import { Board } from './features/board/Board'
import './App.sass'

// feed the Boards in through here, array
const handleOnClick = (dispatch) => {
}

function App () {
  const board = useSelector(selectBoard)(1)
  const dispatch = useDispatch()

  return (
    <>
      <div className={'App--background-grey'}/>
      <div className="App">
        <h1>Sudoku Auto Solver</h1>
        <Board boardId={'1'} board={board}/>
        <button onClick={handleOnClick(dispatch)}>
          Solve Game
        </button>
      </div>
    </>
  )
}

export default App
