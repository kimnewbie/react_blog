/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {
  let [coat, setCoat] = useState([
    '여자 코트 추천',
    '강남 우동 맛집',
    'JAX 독학'
  ]);
  const [count, setCount] = useState(0);
  const onClickLikeButton = (e) => {
    console.log(e.target)
    setCount(count + 1)
  }

  // const onClickChangeButton = () => {
  //   var newArray = [...coat];
  //   newArray[0] = '남자 코트 추천'
  //   setCoat(newArray)
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>킴뉴비의 Blog</div>
      </div>
      {/* <button onClick={onClickChangeButton}>변경</button> */}
      <div className="list">
        <h3>{coat[0]}<span onClick={onClickLikeButton}>👍</span>{count}</h3>
        <span>8월 30일 발행</span>
        <hr />
      </div>
      <div className="list">
        <h3>{coat[1]}</h3>
        <span>8월 31일 발행</span>
        <hr />
      </div>
      <div className="list">
        <h3>{coat[2]}</h3>
        <span>9월 1일 발행</span>
        <hr />
      </div>
      <Modal coat={coat} />
    </div>
  );
}

const Modal = ({ coat }) => {
  return (
    <div style={{
      marginTop: '20px',
      padding: '20px',
      background: '#eee'
    }}>
      <h2>{coat[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;