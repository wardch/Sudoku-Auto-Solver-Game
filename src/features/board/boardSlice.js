import { createSlice } from '@reduxjs/toolkit'
import initialState from './boardInitialState'
export const slice = createSlice({
  name: 'boards',
  initialState: initialState,
  reducers: {
    // addCard: (state, action) => {
    //   addNewCard(state, action.payload)
    // },
    // moveCard: (state, action) => {
    //   const { card, targetboardId } = action.payload
    //   removeCard(state, card)
    //   const cardToAdd = { ...card, boardId: targetboardId }
    //   addNewCard(state, cardToAdd)
    // }
  }
})

export const { addCard, moveCard } = slice.actions

export const selectCards = state => boardId => {
  // return state.board[`board${boardId}`].cards
}

export const selectBoard = state => boardId => {
  return state.boards[boardId - 1]
}

export default slice.reducer
