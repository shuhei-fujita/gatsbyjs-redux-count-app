import React from "react";
import { connect } from "react-redux";

function Count({ dispatch, count }) {
  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decreate = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };
  return (
  <div>
    <p>Count: {count}</p>
    <button onClick={increase}>Up</button>
    <button onClick={decreate}>Down</button>
  </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    count: state.count,
    posts: state.posts 
  };
};

export default connect(mapStateToProps)(Count);
