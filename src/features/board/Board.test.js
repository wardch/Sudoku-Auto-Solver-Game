import React from 'react'
import { mount } from 'enzyme'
import { Board } from './Board'
import initialBoardsState from '../../features/Board/BoardsInitialState'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const mockStore = configureMockStore([thunk])

const store = mockStore(
  {
    boards: {
      ...initialBoardsState
    }
  }
)

describe('Board', () => {
  it('Renders a Board', () => {
    const Board = mount(
      <Provider store={store}>
        <Board BoardId={'1'}/>
      </Provider>
    )
    expect(Board.html()).toContain('freeworld')
  })
})
