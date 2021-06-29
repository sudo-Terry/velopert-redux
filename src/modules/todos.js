/* 액션 타입 만들기 */
//Ducks 패턴으로 파일을 분할할 경우에는 액션의 이름에 접두사를 넣어
//다른 모듈과 액션 이름이 중복되는 것을 방지한다.
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 액션 생성함수 만들기 */
let nextId = 2;
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

/* 초기 상태 선언 */
const initialState = [
  {
    id: 1,
    text: '예시',
    done: false
  }
];

/* 리듀서 선언 */
export default function todos(state = initialState, action){
  switch(action.type){
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        todo =>
        todo.id === action.id
        ? {...todo, done: !todo.done}
        : todo
      );
    default:
      return state;
  }
}