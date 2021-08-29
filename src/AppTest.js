/* eslint-disable */
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [coat, setCoat] = useState(['다이어트', '프로젝트 성공', 'JAX 독학']);
  const [clickedTitle, setClickedTitle] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [dislike, setDislike] = useState(0);
  const [like, setLike] = useState(0);
  const onClickLikeButton = () => {
    setLike(like + 1)
  }
  // const onClickChangeButton = () => {
  //   var newArray = [...coat];
  //   newArray[0] = '남자 코트 추천'
  //   setCoat(newArray)
  // }

  const Ascending = () => {
    let titleAsc = [...coat];
    titleAsc.sort();
    setCoat(titleAsc);
  }

  const Descending = () => {
    let titleDesc = [...coat];
    titleDesc.reverse();
    setCoat(titleDesc);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>킴뉴비의 Blog</div>
      </div>
      <div style={{ marginTop: 20, paddingRight: 20, textAlign: 'right' }}>
        <button onClick={Ascending}>🔺</button>
        <button onClick={Descending}>🔻</button>
      </div>
      {/* <button onClick={onClickChangeButton}>변경</button> */}
      {
        coat.map((list, index) =>
          <div className="list" key={index}>
            <h3 onClick={() => setClickedTitle(index)}>
              {list}
              <span onClick={onClickLikeButton}> 👍 </span> {like}
              <span onClick={() => setDislike(dislike - 1)}> 👎 </span> {dislike}
            </h3>
            <span>8월 30일 발행</span>
            <hr />
          </div>
        )
      }
      <Modal coat={coat} clickedTitle={clickedTitle} />
    </div >
  );
}

const Modal = ({ coat, clickedTitle }) => {
  return (
    <div style={{
      marginTop: '20px',
      padding: '20px',
      background: '#eee',
    }}>
      <h2>{coat[clickedTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div >
  );
}

export default App;