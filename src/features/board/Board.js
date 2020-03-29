import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import {
// addCard,
// moveCard,
// selectCards,
// selectTitle
} from './boardSlice'
import './Board.sass'
import { Tile } from '../tile/Tile'

const createTableTiles = (state) => {
  const tiles = []
  let i = 1

  while (i < 10) {
    const tileCells = state.filter(cell => cell.tilePosition === i)
    tiles.push(<Tile tileCells={tileCells} key={`tile-position-${i}`} />)
    i++
  }
  return tiles
}

export function Board ({ boardId, board }) {
  const { state } = board
  // const cards = useSelector(selectCards)(boardId)
  // const title = useSelector(selectTitle)(boardId)
  // const dispatch = useDispatch()
  return (
    <div className={'Board'} key={`board--${boardId}`}>
      <div className={'Board--header'}>
        {`Board Game ${boardId}`}
      </div>
      <div className={'Board--body'}>
        { createTableTiles(state) }
      </div>
    </div>
  )
}
