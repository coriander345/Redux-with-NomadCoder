import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

const Detail = ({ toDos }) => {
  const myId = useParams().id;
  const toDo = toDos.find((todo) => todo.id === parseInt(myId));
  console.log(toDo);

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h3>Create at:{toDo?.id}</h3>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
