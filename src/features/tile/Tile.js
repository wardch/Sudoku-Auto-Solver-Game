import React from 'react'
// import { useDispatch } from 'react-redux'
import './Tile.sass'
import { Cell } from '../cell/Cell'

const displayTileCells = (tileCells) => {
  return tileCells.map((tileCell, index) => {
    return <Cell
      key={`cell-key-x-${tileCell.x}-y-${tileCell.x}-tilePosition-${tileCell.tilePosition}-index-${index}`}
      number={tileCell.number}/>
  })
}

export function Tile ({ tileCells }) {
  // const dispatch = useDispatch()

  return (
    <div className='Tile'>
      {displayTileCells(tileCells)}
    </div>
  )
}
