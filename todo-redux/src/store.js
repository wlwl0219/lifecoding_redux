// import { createStore } from 'redux';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addToDo = text => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = id => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter(toDo => toDo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
// export const actionCreators = {
//     addToDo,
//     deleteToDo,
//   };
//   export default store;

// toolkit
// import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

// toolkit createAction
// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

// toolkit createReducer
// state를 mutate 하게 사용가능, 리턴하지 않는다 (immer)
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter(toDo => toDo.id !== action.payload),
// });

// toolkit configureStore
// 미들웨어와 함께 store을 생성
// redux developer tools
// const store = configureStore({ reducer });

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };
// export default store;

// toolkit createSlice
import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });
