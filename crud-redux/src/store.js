import { createStore } from 'redux';

var initState = {
  mode: 'WELCOME',
  welcome_content: {
    title: 'WEB',
    desc: 'Hello, WEB!',
  },
  selected_content_id: 1,
  max_content_id: 3,
  contents: [
    { id: 1, title: 'HTML', desc: 'HTML is...' },
    { id: 2, title: 'CSS', desc: 'CSS is...' },
    { id: 3, title: 'JavaScript', desc: 'JavaScript is...' },
  ],
};

function reducer(state = initState, action) {
  if (action.type === 'WELCOME') {
    return { ...state, mode: 'WELCOME' };
  }
  if (action.type === 'READ') {
    return { ...state, mode: 'READ', selected_content_id: action.id };
  }
  if (action.type === 'CREATE') {
    return { ...state, mode: 'CREATE' };
  }
  if (action.type === 'UPDATE') {
    return { ...state, mode: 'UPDATE' };
  }
  if (action.type === 'CREATE_PROCESS') {
    var newId = state.max_content_id + 1;
    var newContent = [
      ...state.contents,
      { id: newId, title: action.title, desc: action.desc },
    ];
    return {
      ...state,
      contents: newContent,
      max_content_id: newId,
      mode: 'READ',
      selected_content_id: newId,
    };
  }
  if (action.type === 'UPDATE_PROCESS') {
    var newContent = [...state.contents];
    for (var i = 0; i < newContent.length; i++) {
      if (newContent[i].id === action.id) {
        newContent[i].title = action.title;
        newContent[i].desc = action.desc;
      }
    }
    return {
      ...state,
      contents: newContent,
      mode: 'READ',
      selected_content_id: action.id,
    };
  }
  if (action.type === 'DELETE_PROCESS') {
    var newContent = state.contents.filter(function (ele) {
      if (ele.id === state.selected_content_id) {
        return false;
      }
      return true;
    });
    return { ...state, contents: newContent, mode: 'WELCOME' };
  }
  return state;
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
