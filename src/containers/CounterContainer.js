import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter'
import { increase, decrease, setDiff } from '../modules/counter';

//컨테이너 컴포넌트
//Redux의 state를 조회하거나 action을 dispatch할 수 있는 컴포넌트
//HTML태그를 활용하지 않고 다른 프레젠테이셔널 컴포넌트를 불러와 사용함

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const { number, diff } = useSelector((state) => state.counter);

// useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 이다
const dispatch = useDispatch();
// 각 액션들을 디스패치하는 함수들
const onIncrease = () => dispatch(increase());
const onDecrease = () => dispatch(decrease());
const onSetDiff = (diff) => dispatch(setDiff(diff));

return (
  //리덕스 스토어의 값을 사용하되, 프레젠테이셔널 컴포넌트를 재활용
  <Counter 
    number={number}
    diff={diff}
    onIncrease={onIncrease}
    onDecrease={onDecrease}
    onSetDiff={onSetDiff}
  />
)

}

export default CounterContainer;