const easyGame = [
  [0, 9, 0, 0, 0, 0, 8, 5, 3],
  [0, 0, 0, 8, 0, 0, 0, 0, 4],
  [0, 0, 8, 2, 0, 3, 0, 6, 9],
  [5, 7, 4, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 9, 0, 0, 6, 3, 7],
  [9, 4, 0, 1, 0, 8, 5, 0, 0],
  [7, 0, 0, 0, 0, 6, 0, 0, 0],
  [6, 8, 2, 0, 0, 0, 0, 9, 0]
]

// find the rest of this logic later
const findTilePosition = (rowIndex, columnIndex) => {
  if ((rowIndex <= 2 && rowIndex >= 0) && (columnIndex >= 0 && columnIndex <= 2)) {
    return 1
  } else if ((rowIndex <= 2 && rowIndex >= 0) && (columnIndex >= 3 && columnIndex <= 5)) {
    return 2
  } else if ((rowIndex <= 2 && rowIndex >= 0) && (columnIndex >= 6 && columnIndex <= 8)) {
    return 3
  } else if ((rowIndex <= 5 && rowIndex >= 3) && (columnIndex >= 0 && columnIndex <= 2)) {
    return 4
  } else if ((rowIndex <= 5 && rowIndex >= 3) && (columnIndex >= 3 && columnIndex <= 5)) {
    return 5
  } else if ((rowIndex <= 5 && rowIndex >= 3) && (columnIndex >= 6 && columnIndex <= 8)) {
    return 6
  } else if ((rowIndex <= 8 && rowIndex >= 6) && (columnIndex >= 0 && columnIndex <= 2)) {
    return 7
  } else if ((rowIndex <= 8 && rowIndex >= 6) && (columnIndex >= 3 && columnIndex <= 5)) {
    return 8
  } else if ((rowIndex <= 8 && rowIndex >= 6) && (columnIndex >= 6 && columnIndex <= 8)) {
    return 9
  }
}

const formatSudokuBoard = (rawSudokuBoard) => {
  const formattedBoard = []
  rawSudokuBoard.forEach((row, rowIndex) => {
    row.forEach((cellNumber, columnIndex) => {
      const cellObject = {
        x: columnIndex,
        y: rowIndex,
        tilePosition: findTilePosition(rowIndex, columnIndex),
        number: cellNumber,
        impossibleValues: []
      }
      formattedBoard.push(cellObject)
    })
  })
  return formattedBoard
}

const initialState = [
  {
    state: formatSudokuBoard(easyGame)
  }
]

export default initialState
