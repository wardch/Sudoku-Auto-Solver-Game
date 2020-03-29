import { combineReducers } from '@reduxjs/toolkit'

import boardReducer from '../features/board/boardSlice'

export default combineReducers({
  boards: boardReducer
})
