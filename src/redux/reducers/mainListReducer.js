const initialState = [
  {
    id: 0,
    title: 'mainList 1',
    listItems: [
      {
        id: 0,
        text: 'Some item text 0'
      },
      {
        id: 1,
        text: 'Some item text 1'
      }
    ]
  },
  {
    id: 1,
    title: 'mainList 2',
    listItems: [
      {
        id: 0,
        text: 'Some item text 0'
      },
      {
        id: 1,
        text: 'Some item text 1'
      },
      {
        id: 2,
        text: 'Some item text 2'
      }
    ]
  }
]

const mainListsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default mainListsReducer