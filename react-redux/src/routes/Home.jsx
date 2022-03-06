import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../conponents/ToDo';
import { add, addToDo } from '../store';

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  function onChange(e) {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText('');
    addToDo(text);
  };

  const onDelete = (e) => {
    const id = parseInt(e.target.id);
    const newList = list.filter((el, index) => index !== id);

    setList(newList);
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((el) => (
          <ToDo {...el} key={el.id} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
