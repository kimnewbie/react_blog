/* eslint-disable */
import { useState, useEffect } from 'react';
import './Blog.css';

function Blog() {
    const [coat, setCoat] = useState([
        { title: '다이어트', date: '2021년 8월 29일' },
        { title: 'Project 성공', date: '2021년 8월 30일' },
        { title: 'JAX 독학', date: '2021년 8월 31일' },
        { title: 'React 독학', date: '2021년 8월 29일' }
    ]);
    const [clickedTitle, setClickedTitle] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [like, setLike] = useState(0);
    const [addInput, setAddInput] = useState({ title: '', date: '' });

    const onClickLikeButton = () => {
        setLike(like + 1)
    }

    const Ascending = () => {
        let titleAsc = [...coat];
        titleAsc.sort((a, b) => a.title.localeCompare(b.title));
        setCoat(titleAsc);
    }

    const Descending = () => {
        let titleDesc = [...coat];
        titleDesc.reverse((a, b) => a.title.localeCompare(b.title));
        // titleDesc.reverse();
        setCoat(titleDesc);
    }

    const onChangeInput = (e) => {
        setCoat({ ...coat, title: e.target.value })
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>킴뉴비의 Blog</div>
            </div>
            <div style={{ marginTop: 20 }}>
                <input placeholder="계획" id="plan" onChange={onChangeInput} />
                <button onClick={() => {
                    const list = [...coat]
                    list.unshift(addInput.title);
                    setCoat(list)
                }}>추가</button>
            </div>
            <div style={{ marginTop: 20, paddingRight: 20, textAlign: 'right' }}>
                <button onClick={Ascending}>🔺</button>
                <button onClick={Descending}>🔻</button>
            </div>
            {/* <button onClick={onClickChangeButton}>변경</button> */}
            {
                coat.map((list, index) => { // 인덱스를 안넣어서 etClickedTitle(index) 이 부분이 undefined 된 것이었음
                    return (
                        <div>
                            <h3 onClick={() => setClickedTitle(index)}>
                                {list.title}
                                <span onClick={onClickLikeButton}> 👍 </span> {like}
                                <span onClick={() => setDislike(dislike - 1)}> 👎 </span> {dislike}
                            </h3>
                            <span>{list.date}</span>
                            <hr />
                        </div>
                    );
                })
            }
            < Modal coat={coat} clickedTitle={clickedTitle} />
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
            <h2>{coat[clickedTitle].title}</h2>
            <p>{coat[clickedTitle].date}</p>
            <p>상세내용</p>
        </div >
    );
}

export default Blog;