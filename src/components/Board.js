import React, { useState } from 'react'
import Todo from './Todo'
import { useSelector, useDispatch } from 'react-redux';
import { addCard } from '../reducer/dataSlice.js';

// import { useDispatch, useSelector } from 'react-redux';

export default function Board({ title, cards }) {
  const [btn, setBtn] = useState(false);
  const [text, setText] = useState("");
  const state = useSelector((state) => (state.data));
  const dispatch = useDispatch();
  // console.log(state);

  const onClickHandler = () => {
    const content = {
      id: Date.now(),
      content: {text},
    }

    if(text) {
      dispatch(addCard({title, text}));
      setBtn(false);
      setText("");
    }
  }

  const onChangeHandler = (e) => {
    setText(e.target.value);
    // console.log(text);
  }

  return (
    <>
      <ul className="boardContainer">
        <h3>{title}</h3>
        {cards.map((el)=>(
            <Todo content={el.content} key={el.id} />
          ))}
        {!btn
        ? <div className='addCard' onClick={() => {setBtn(true)}}>
            <span>+ Add a card</span>
          </div>
        :<>
          <textarea onChange={onChangeHandler} placeholder='Enter a title for this card...'></textarea>
          <div className='textAreaBoxBtn'>
            <button onClick={onClickHandler}>Add Card</button>
            <span onClick={() => {setBtn(false)}}><img src="/cancel.svg" /></span>
          </div>
        </>}
      </ul>
    </>
  )
}


